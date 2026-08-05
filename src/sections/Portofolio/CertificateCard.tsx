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

        flex
        h-full
        flex-col

        overflow-hidden

        rounded-2xl

        border
        border-slate-800

        bg-slate-900/50
        backdrop-blur-sm

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-sky-500/40
        hover:shadow-sky-500/10
      "
    >
      {/* Preview */}
      <div
        className="
          aspect-video
          overflow-hidden
          bg-slate-800
        "
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          loading="lazy"
          decoding="async"
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
      <div
        className="
          flex
          flex-1
          flex-col

          p-5

          sm:p-6
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-semibold

              text-white
            "
          >
            {certificate.title}
          </h3>

          <p
            className="
              mt-3

              text-sm
              leading-7

              text-slate-300
            "
          >
            {certificate.issuer}
          </p>
        </div>

        <div className="mt-auto pt-6">
          <a
            href={certificate.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-full

              items-center
              justify-center
              gap-2

              rounded-xl

              border
              border-slate-700

              px-4
              py-3

              text-sm
              font-medium

              transition-all
              duration-300

              hover:border-sky-500/40
              hover:bg-slate-800
            "
          >
            View Credential
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default CertificateCard;
