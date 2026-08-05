interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-16 text-center">
      <span
        className="
          inline-block
          rounded-full
          border
          border-sky-500/20
          bg-sky-500/10
          px-4
          py-1
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-sky-500
        "
      >
        {title}
      </span>


      {subtitle && (
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-slate-400
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
