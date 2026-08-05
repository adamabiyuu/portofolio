import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

const FormField = ({ label, error, children, className }: FormFieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium">{label}</label>

      {children}

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default FormField;
