import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ children, className, container = true, ...props }, ref) => {
        return (
            <section ref={ref} className={cn("py-16 md:py-24", className)} {...props}>
                {container ? (
                    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = "Section";
