"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const companies = [
    "L&T Construction",
    "Tata Projects",
    "AECOM",
    "Shapoorji Pallonji",
    "Afcons Infrastructure",
    "Local Structural Firms",
];

export function LogosBar() {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Infinite linear scroll using GSAP
        if (trackRef.current) {
            gsap.to(trackRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: "linear",
            });
        }
    }, []);

    return (
        <section className="py-12 border-y border-slate-200 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 mb-8">
                <p className="text-center text-sm font-bold tracking-wider text-slate-400 uppercase">
                    Our students are successfully placed in
                </p>
            </div>

            <div className="flex overflow-hidden relative max-w-7xl mx-auto">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrolling Track */}
                <div ref={trackRef} className="flex whitespace-nowrap gap-16 md:gap-24 items-center">
                    {/* Double the array for seamless looping */}
                    {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className="text-xl md:text-2xl font-bold font-heading text-slate-400 hover:text-slate-900 transition-colors whitespace-nowrap"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
