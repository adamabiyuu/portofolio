import { useState } from "react";

import Section from "@/components/layout/Section";
import SectionTitle from "@/components/ui/SectionTitle";

// import ProjectGrid from "./ProjectGrid";
// import CertificateGrid from "./CertificateGrid";
import PortfolioTabs from "./PortfolioTabs";
import ProjectGrid from "./ProjectGrid";
import CertificateGrid from "./CertificateGrid";
// import CertificateGrid from "./CertificateGrid";

type Tab = "projects" | "certificates";

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  return (
    <Section id="portfolio">
      <SectionTitle title="Portfolio" />

      <PortfolioTabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="mt-12">{activeTab === "projects" ? <ProjectGrid /> : <CertificateGrid  />}</div>
    </Section>
  );
};

export default Portofolio;
