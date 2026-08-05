import type { IconType } from "react-icons";

interface ContactItemProps {
  icon: IconType;
  title: string;
  value: string;
}

const ContactItem = ({ icon: Icon, title, value }: ContactItemProps) => {
  return (
    <div
      className="
        flex
        items-start
        gap-4

        rounded-2xl
        border
        border-slate-800

        bg-slate-900/40

        p-5

        transition-all
        duration-300

        hover:border-sky-500/30
        hover:bg-slate-900/70

        sm:p-6
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center

          rounded-xl

          bg-slate-800

          text-sky-400
        "
      >
        <Icon size={20} className="sm:text-[22px]" />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            text-base
            font-semibold

            text-white

            sm:text-lg
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2

            break-words

            text-sm
            leading-7

            text-slate-400

            sm:text-base
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
