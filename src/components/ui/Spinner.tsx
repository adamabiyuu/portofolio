import { cn } from "@/lib/cn";

interface SpinnerProps {
  size?: number;
  className?: string;
}

const Spinner = ({ size = 18, className }: SpinnerProps) => {
  return (
    <span
      style={{
        width: size,
        height: size,
      }}
      className={cn("inline-block animate-spin rounded-full border-2 border-current border-r-transparent", className)}
    />
  );
};

export default Spinner;
