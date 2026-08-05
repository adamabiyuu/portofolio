import Reveal from "@/components/animations/Reveal";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import useSectionObserver from "@/hooks/useSectionObserver";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const ref = useSectionObserver("contact");

  return (
    <Section
      ref={ref}
      id="contact"
      className="
        py-20

        sm:py-24

        lg:py-28
      "
    >
      <SectionTitle title="Contact" subtitle="Let's build something together." />

      <div
        className="
          mt-12

          grid

          gap-8

          sm:mt-16
          sm:gap-10

          lg:grid-cols-2
          lg:gap-14
        "
      >
        <Reveal>
          <ContactInfo />
        </Reveal>

        <Reveal delay={0.2}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
