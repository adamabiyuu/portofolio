import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import FormField from "./FormField";

// import FormField from "./FormField";

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const TextAreaField = ({ label, error, className, ...props }: TextAreaFieldProps) => {
  return (
    <FormField label={label} error={error}>
      <textarea {...props} className={cn("w-full rounded-xl border bg-slate-900 px-4 py-3 outline-none transition focus:border-sky-400", error ? "border-red-500" : "border-slate-800", className)} />
    </FormField>
  );
};

export default TextAreaField;
