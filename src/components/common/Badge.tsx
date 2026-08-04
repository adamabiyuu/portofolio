import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-slate-200
        bg-white
        px-4
        py-2
        text-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-sky-400
        hover:shadow-lg
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {children}
    </div>
  );
};

export default Badge;
