import { certificates } from "@/data/certificates";

import CertificateCard from "./CertificateCard";

const CertificateGrid = () => {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
      "
    >
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </div>
  );
};

export default CertificateGrid;
