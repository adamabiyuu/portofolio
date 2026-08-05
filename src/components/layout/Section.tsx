import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, children, className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        `
            w-full
            scroll-mt-24
            px-5
            py-16

            sm:px-6
            sm:py-20

            lg:px-8
            lg:py-24
          `,
        className,
      )}
      {...props}
    >
      <div
        className="
            mx-auto
            w-full
            max-w-7xl
          "
      >
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export default Section;
