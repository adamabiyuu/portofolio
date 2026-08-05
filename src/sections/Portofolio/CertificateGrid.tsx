import Reveal from "@/components/animations/Reveal";

import { certificates } from "@/data/certificates";

import CertificateCard from "./CertificateCard";

const CertificateGrid = () => {
  return (
    <div
      className="
        grid

        grid-cols-1

        gap-6

        sm:gap-8

        lg:grid-cols-2
      "
    >
      {certificates.map((certificate, index) => (
        <Reveal key={certificate.id} delay={index * 0.08}>
          <CertificateCard certificate={certificate} />
        </Reveal>
      ))}
    </div>
  );
};

export default CertificateGrid;
