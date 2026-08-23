import { useState } from "react";
import Reveal from "@/components/animations/Reveal";
import { certificates } from "@/data/certificates";
import CertificateCard from "./CertificateCard";

const CERTIFICATE_LIMIT = 4;

const CertificateGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const hasMoreCertificates = certificates.length > CERTIFICATE_LIMIT;

  const displayedCertificates = showAll ? certificates : certificates.slice(0, CERTIFICATE_LIMIT);

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:gap-8
          lg:grid-cols-2
        "
      >
        {displayedCertificates.map((certificate, index) => (
          <Reveal key={certificate.id} delay={index * 0.08}>
            <CertificateCard certificate={certificate} />
          </Reveal>
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
// import Reveal from "@/components/animations/Reveal";

// import { certificates } from "@/data/certificates";

// import CertificateCard from "./CertificateCard";

// const CertificateGrid = () => {
//   return (
//     <div
//       className="
//         grid

//         grid-cols-1

//         gap-6

//         sm:gap-8

//         lg:grid-cols-2
//       "
//     >
//       {certificates.map((certificate, index) => (
//         <Reveal key={certificate.id} delay={index * 0.08}>
//           <CertificateCard certificate={certificate} />
//         </Reveal>
//       ))}
//     </div>
//   );
// };

// export default CertificateGrid;
