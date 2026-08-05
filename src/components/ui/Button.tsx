import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  loading?: boolean;
}

const Button = ({ children, variant = "primary", loading = false, className, disabled, ...props }: ButtonProps) => {
  const baseStyle = `
    inline-flex
    h-12
    items-center
    justify-center
    gap-2

    rounded-xl

    px-6

    text-sm
    font-medium

    transition-all
    duration-300

    active:scale-95

    disabled:pointer-events-none
    disabled:opacity-60

    focus:outline-none
    focus:ring-2
    focus:ring-sky-500/40
  `;

  const variants = {
    primary: `
      bg-sky-500
      text-white

      shadow-lg
      shadow-sky-500/20

      hover:-translate-y-0.5
      hover:bg-sky-600
      hover:shadow-sky-500/40
    `,

    secondary: `
      border
      border-slate-700

      bg-transparent

      text-slate-200

      hover:-translate-y-0.5
      hover:border-slate-600
      hover:bg-slate-800
    `,
  };

  return (
    <button {...props} disabled={disabled || loading} className={cn(baseStyle, variants[variant], className)}>
      {loading && <Spinner size={16} />}

      <span>{children}</span>
    </button>
  );
};

export default Button;
