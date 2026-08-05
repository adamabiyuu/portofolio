import { useState } from "react";

import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/animations/Reveal";
import useSectionObserver from "@/hooks/useSectionObserver";

import PortfolioTabs from "./PortfolioTabs";
import ProjectGrid from "./ProjectGrid";
import CertificateGrid from "./CertificateGrid";

type Tab = "projects" | "certificates";

const Portofolio = () => {
  const ref = useSectionObserver("portfolio");

  const [activeTab, setActiveTab] = useState<Tab>("projects");

  return (
    <Section ref={ref} id="portfolio" className="py-24 sm:py-28">
      <SectionTitle title="Portfolio" subtitle="Some of the projects and certifications I've worked on." />

      <Reveal delay={0.1}>
        <div className="mt-12 flex justify-center">
          <PortfolioTabs activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12">{activeTab === "projects" ? <ProjectGrid /> : <CertificateGrid />}</div>
      </Reveal>
    </Section>
  );
};

export default Portofolio;
