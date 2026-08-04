import { FaExternalLinkAlt } from "react-icons/fa";

import type { Certificate } from "@/types/portfolio";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Preview */}
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-semibold">{certificate.title}</h3>

          <p className="mt-2 text-sm text-slate-500">{certificate.issuer}</p>
        </div>

        <a
          href={certificate.credential}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-sky-500
            transition-colors
            hover:text-sky-600
          "
        >
          View Credential
          <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </article>
  );
};

export default CertificateCard;
