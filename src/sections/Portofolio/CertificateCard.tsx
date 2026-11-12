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
        min-h-[560px]
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-950
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-500/50
        hover:shadow-xl
        hover:shadow-sky-500/5
      "
    >
      {/* Card Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-800
          px-5
          py-4
          sm:px-6
        "
      >
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.16em]
            text-slate-400
          "
        >
          Certificate
        </p>

        <a
          href={certificate.credential}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${certificate.title} credential`}
          className="
            rounded-full
            border
            border-slate-700
            p-2
            text-slate-400
            transition-all
            duration-300
            hover:border-sky-500
            hover:text-sky-400
          "
        >
          <FaExternalLinkAlt size={15} />
        </a>
      </div>

      {/* Card Visual */}
      <div
        className="
          relative
          aspect-video
          shrink-0
          overflow-hidden
          bg-slate-900
        "
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10" />

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

        <span
          className="
            absolute
            bottom-4
            left-4
            z-20
            rounded-full
            border
            border-slate-700
            bg-slate-950/90
            px-3
            py-1
            text-xs
            font-medium
            text-slate-300
            backdrop-blur
          "
        >
          Achievement
        </span>
      </div>

      {/* Card Information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <h3
            className="
              line-clamp-2
              min-h-[3.5rem]
              text-xl
              font-bold
              text-white
              transition-colors
              duration-300
              group-hover:text-sky-400
            "
          >
            {certificate.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-3
              min-h-[5.25rem]
              text-sm
              leading-7
              text-slate-400
            "
          >
            {certificate.issuer}
          </p>
        </div>

        {/* Card Action */}
        <div className="mt-auto pt-6">
          <a
            href={certificate.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-11
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
              font-semibold
              text-slate-200
              transition-all
              duration-300
              hover:border-sky-500
              hover:bg-slate-900
              hover:text-sky-400
            "
          >
            View Credential
            <FaExternalLinkAlt size={13} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default CertificateCard;
