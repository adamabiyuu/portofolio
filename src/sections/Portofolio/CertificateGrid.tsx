import { useState } from "react";

import Reveal from "@/components/animations/Reveal";
import { certificates } from "@/data/certificates";

import CertificateCard from "./CertificateCard";

const CertificateGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const hasMoreCertificates = certificates.length > 2;

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-3
          sm:gap-8
        "
      >
        {certificates.map((certificate, index) => (
          <div key={certificate.id} className={!showAll ? "hidden [&:nth-child(-n+2)]:block sm:[&:nth-child(-n+3)]:block" : "block"}>
            <Reveal delay={index * 0.08}>
              <CertificateCard certificate={certificate} />
            </Reveal>
          </div>
        ))}
      </div>

      {hasMoreCertificates && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="
              rounded-xl
              bg-sky-500
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-sky-600
              hover:shadow-lg
              hover:shadow-sky-500/20
            "
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </>
  );
};

export default CertificateGrid;
