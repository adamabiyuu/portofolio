import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import FormField from "./FormField";

// import FormField from "./FormField";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputField = ({ label, error, className, ...props }: InputFieldProps) => {
  return (
    <FormField label={label} error={error}>
      <input {...props} className={cn("w-full rounded-xl border bg-slate-900 px-4 py-3 outline-none transition focus:border-sky-400", error ? "border-red-500" : "border-slate-800", className)} />
    </FormField>
  );
};

export default InputField;
