"use client";

import { useEffect, useState, type FormEvent } from "react";

type ContactTextFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: "email" | "tel" | "text";
};

type SubmitStatus = {
  message: string;
  type: "success" | "error";
} | null;

export function ContactInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  useEffect(() => {
    if (!submitStatus) return;

    const timeout = window.setTimeout(() => {
      setSubmitStatus(null);
    }, 4200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [submitStatus]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setSubmitStatus({
          message: payload?.error ?? "Unable to send message right now.",
          type: "error",
        });
        return;
      }

      form.reset();
      setSubmitStatus({
        message:
          "Thank you for reaching out. A member of our team will get back to you as soon as possible.",
        type: "success",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="mt-12 rounded-[22px] bg-[#131018] px-6 py-6 sm:px-7 xl:absolute xl:top-[42px] xl:right-16 xl:mt-0 xl:h-[610px] xl:w-[656px] xl:py-0"
      onSubmit={handleSubmit}
    >
      <h2 className="font-display text-[22px] leading-[normal] font-semibold text-[#f8f6ff] xl:absolute xl:top-6 xl:left-7 xl:w-[600px]">
        Send us a message
      </h2>
      <p className="text-vibe-muted mt-2 text-[14px] leading-[normal] xl:absolute xl:top-[58px] xl:left-7 xl:mt-0 xl:w-[600px]">
        Share a few details and we&apos;ll get back to you.
      </p>

      <div className="mt-6 flex flex-col gap-[18px] xl:absolute xl:top-[100px] xl:left-7 xl:mt-0 xl:w-[600px]">
        <ContactTextField
          label="Email"
          name="email"
          type="email"
          placeholder=""
          required
        />
        <ContactTextField
          label="Phone"
          name="phone"
          type="tel"
          placeholder=""
        />
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="text-vibe-lime text-[12px] leading-[normal] font-semibold"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder=""
            required
            className="focus-visible:border-vibe-lime h-36 w-full resize-none rounded-[14px] border border-[#3d3352] bg-[#0b0911] px-[15px] py-[13px] text-[14px] leading-[normal] text-[#f8f6ff] outline-none placeholder:text-[#b0abc2]"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="contact-send-button bg-vibe-lime text-vibe-bg focus-visible:outline-vibe-lime mt-9 flex h-[52px] w-full items-center overflow-hidden rounded-[26px] px-5 text-left text-[11px] leading-[22px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-70 xl:absolute xl:top-[500px] xl:left-7 xl:mt-0 xl:w-[600px]"
      >
        <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE\u00a0 →"}</span>
      </button>
      <p className="text-vibe-muted mt-[9px] text-[12px] leading-[normal] xl:absolute xl:top-[564px] xl:left-7 xl:mt-0 xl:w-[600px]">
        We usually reply within two business days.
      </p>

      <div
        role={submitStatus?.type === "error" ? "alert" : "status"}
        aria-live="polite"
        className={`fixed top-5 right-5 z-50 w-[min(calc(100vw-40px),360px)] rounded-[18px] border px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-md transition-all duration-300 ${
          submitStatus
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        } ${
          submitStatus?.type === "error"
            ? "border-[rgba(239,68,68,0.35)] bg-[rgba(33,13,20,0.92)] text-[#ffb4b4]"
            : "text-vibe-lime border-[rgba(207,255,58,0.28)] bg-[rgba(16,22,12,0.92)]"
        }`}
      >
        <p className="text-[10px] leading-3 font-semibold tracking-[0.08em]">
          {submitStatus?.type === "error" ? "MESSAGE FAILED" : "MESSAGE SENT"}
        </p>
        <p className="mt-2 text-[13px] leading-5 font-medium text-[#f8f6ff]">
          {submitStatus?.message}
        </p>
      </div>
    </form>
  );
}

function ContactTextField({
  label,
  name,
  placeholder,
  required = false,
  type = "text",
}: ContactTextFieldProps) {
  const id = `contact-${name}`;

  return (
    <div className="flex h-[76px] flex-col items-start gap-2">
      <label
        htmlFor={id}
        className="text-vibe-lime w-full text-[12px] leading-[normal] font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="focus-visible:border-vibe-lime h-[52px] w-full rounded-[14px] border border-[#3d3352] bg-[#0b0911] px-4 text-[14px] leading-[normal] text-[#f8f6ff] outline-none placeholder:text-[#b0abc2]"
      />
    </div>
  );
}
