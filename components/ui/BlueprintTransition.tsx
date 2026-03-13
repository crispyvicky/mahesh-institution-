"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

export function BlueprintTransition() {
    const sectionRef = useRef<HTMLElement>(null);
    const pathRefs = useRef<SVGPathElement[]>([]);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1, // Tie animation to scroll
            },
        });

        // Animate SVG stroke-dashoffset to draw the lines
        tl.fromTo(
            pathRefs.current,
            { strokeDasharray: 1000, strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 2, ease: "power1.inOut", stagger: 0.1 }
        );

        // Fade in text slightly delayed
        tl.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "-=1.5"
        );
    }, { scope: sectionRef });

    return (
        <Section ref={sectionRef} container={false} className="relative min-h-[70vh] flex items-center justify-center bg-[#0F172A] text-white overflow-hidden py-0">

            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

            {/* SVG Container for Drawing Animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <svg
                    viewBox="0 0 1000 500"
                    className="w-full h-full max-w-5xl"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Abstract structural building lines */}
                    <path ref={(el) => { if (el) pathRefs.current[0] = el; }} d="M 200 450 L 200 100 L 400 100 L 400 450" />
                    <path ref={(el) => { if (el) pathRefs.current[1] = el; }} d="M 250 450 L 250 150 L 350 150 L 350 450" />
                    <path ref={(el) => { if (el) pathRefs.current[2] = el; }} d="M 200 200 L 400 200" />
                    <path ref={(el) => { if (el) pathRefs.current[3] = el; }} d="M 200 300 L 400 300" />
                    <path ref={(el) => { if (el) pathRefs.current[4] = el; }} d="M 200 400 L 400 400" />

                    <path ref={(el) => { if (el) pathRefs.current[5] = el; }} d="M 500 450 L 500 50 L 800 50 L 800 450" />
                    <path ref={(el) => { if (el) pathRefs.current[6] = el; }} d="M 500 150 L 800 150" />
                    <path ref={(el) => { if (el) pathRefs.current[7] = el; }} d="M 500 250 L 800 250" />
                    <path ref={(el) => { if (el) pathRefs.current[8] = el; }} d="M 500 350 L 800 350" />
                    <path ref={(el) => { if (el) pathRefs.current[9] = el; }} d="M 650 50 L 650 450" />
                </svg>
            </div>

            <div className="relative z-10 text-center px-6">
                <h2 ref={textRef} className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight max-w-4xl mx-auto leading-tight">
                    Industry-Level Training<br />
                    <span className="text-sky-500 font-bold">Designed by Working Engineers</span>
                </h2>
            </div>

            <style jsx global>{`
        .blueprint-grid {
          background-image: 
            linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
          background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
          background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
        }
      `}</style>
        </Section>
    );
}
