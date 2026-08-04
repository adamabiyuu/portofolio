import { forwardRef, type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, children, className = "", ...props }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`
          px-6
          py-24
          transition-colors
          duration-300
          ${className}
        `}
      {...props}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
