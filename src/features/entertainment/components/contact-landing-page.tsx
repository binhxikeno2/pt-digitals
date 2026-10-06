import { PageContainer } from "@/components/layout/page-container";
import { ContactInquiryForm } from "@/features/entertainment/components/contact-inquiry-form";
import { SiteFooter } from "@/features/entertainment/components/site-footer";
import { SiteHeader } from "@/features/entertainment/components/site-header";

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
        </div>

        <ContactInquiryForm />
      </PageContainer>
    </section>
  );
}
