import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
}

const Button = ({ children, onClick, href, variant = "primary" }: ButtonProps) => {
  const baseStyle = "rounded-lg px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary: "bg-sky-500 text-white hover:bg-sky-600",
    secondary: "border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
  };

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant]}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
