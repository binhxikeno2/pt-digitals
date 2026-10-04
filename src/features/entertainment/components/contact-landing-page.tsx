import { PageContainer } from "@/components/layout/page-container";
import { SiteFooter } from "@/features/entertainment/components/site-footer";
import { SiteHeader } from "@/features/entertainment/components/site-header";

type ContactTextFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "email" | "tel" | "text";
};

export function ContactLandingPage() {
  return (
    <div className="bg-vibe-bg mx-auto w-full max-w-[1440px] overflow-hidden">
      <main id="top">
        <SiteHeader navigationVariant="contact" />
        <ContactIntroSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function ContactIntroSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="bg-vibe-bg xl:h-[700px]"
    >
      <PageContainer className="relative h-full py-12 xl:py-0">
        <div className="xl:absolute xl:top-[62px] xl:left-16">
          <p className="text-vibe-lime text-[11px] leading-[22px] font-semibold">
            PT Digitals&nbsp; / &nbsp;CONTACT
          </p>
          <h1
            id="contact-title"
            className="font-display mt-[30px] text-[48px] leading-[1.05] font-bold text-[#f8f6ff] sm:text-[62px] xl:w-[620px] xl:text-[62px] xl:leading-[normal]"
          >
            LET&apos;S TALK.
          </h1>
          <p className="font-display text-vibe-purple mt-[31px] text-[20px] leading-[30px] font-semibold xl:w-[620px]">
            Have a project in mind?
          </p>
          <p className="text-vibe-muted mt-[18px] max-w-[540px] text-[16px] leading-[normal]">
            Tell us what you&apos;re building. Share a project or partnership
            idea, and our team will connect you with the right people.
          </p>
          <a
            href="mailto:hello@ptdigitals.vn"
            className="focus-visible:outline-vibe-lime mt-[55px] inline-flex rounded-sm text-[11px] leading-6 font-semibold text-[#f8f6ff] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            hello@ptdigitals.vn
          </a>
        </div>

        <ContactInquiryForm />
      </PageContainer>
    </section>
  );
}

function ContactInquiryForm() {
  return (
    <form
      className="mt-12 rounded-[22px] bg-[#131018] px-6 py-6 sm:px-7 xl:absolute xl:top-[42px] xl:right-16 xl:mt-0 xl:h-[610px] xl:w-[656px] xl:py-0"
      action="#"
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
          placeholder="name@company.com"
        />
        <ContactTextField
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
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
            placeholder={`Tell us what you'd like to discuss.\nInclude any useful details...`}
            className="h-36 w-full resize-none rounded-[14px] border border-[#3d3352] bg-[#0b0911] px-[15px] py-[13px] text-[14px] leading-[normal] text-[#f8f6ff] outline-none placeholder:text-[#b0abc2] focus-visible:border-vibe-lime"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-vibe-lime text-vibe-bg mt-9 flex h-[52px] w-full items-center rounded-[26px] px-5 text-left text-[11px] leading-[22px] font-semibold xl:absolute xl:top-[500px] xl:left-7 xl:mt-0 xl:w-[600px]"
      >
        SEND MESSAGE&nbsp; →
      </button>
      <p className="text-vibe-muted mt-[9px] text-[12px] leading-[normal] xl:absolute xl:top-[564px] xl:left-7 xl:mt-0 xl:w-[600px]">
        We usually reply within two business days.
      </p>
    </form>
  );
}

function ContactTextField({
  label,
  name,
  placeholder,
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
        className="h-[52px] w-full rounded-[14px] border border-[#3d3352] bg-[#0b0911] px-4 text-[14px] leading-[normal] text-[#f8f6ff] outline-none placeholder:text-[#b0abc2] focus-visible:border-vibe-lime"
      />
    </div>
  );
}
