"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const transitionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Entrance animation
        const tl = gsap.timeline();

        // Reset position and opacity of the content
        gsap.set(containerRef.current, { opacity: 0, y: 20 });

        // Animate the curtain up
        tl.to(transitionRef.current, {
            scaleY: 0,
            duration: 0.8,
            ease: "expo.inOut",
            transformOrigin: "top",
        });

        // Fade in the actual content
        tl.to(containerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.4");

        return () => {
            // Prepare for next exit
            gsap.set(transitionRef.current, { scaleY: 1, transformOrigin: "bottom" });
        };
    }, [pathname]);

    return (
        <>
            {/* Cinematic Curtain */}
            <div
                ref={transitionRef}
                className="fixed inset-0 bg-slate-900 z-[9999] pointer-events-none scale-y-100"
            />

            {/* Page Content Wrapper */}
            <div ref={containerRef} className="will-change-transform">
                {children}
            </div>
        </>
    );
}
