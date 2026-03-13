"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
    const container = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgGridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Background Grid subtle movement
        gsap.to(bgGridRef.current, {
            y: 50,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        // Content fade up
        gsap.fromTo(
            contentRef.current!.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
            }
        );
    }, { scope: container });

    return (
        <Section ref={container} className="relative overflow-hidden bg-slate-900 border-t border-slate-800 py-32 md:py-48 min-h-[60vh] flex items-center justify-center">

            {/* Moving blueprint grid background */}
            <div
                ref={bgGridRef}
                className="absolute -inset-[50%] opacity-20 pointer-events-none z-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.4) 1px, transparent 1px)
          `,
                    backgroundSize: '100px 100px',
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/80 z-0 pointer-events-none" />

            <div ref={contentRef} className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading text-white tracking-tight leading-tight shadow-sm">
                    Start Your Civil Engineering Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 block sm:inline">Today.</span>
                </h2>

                <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                    Whether you want to design 100-story high rises or just crack your first structural interview, we've got you covered.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" className="h-16 px-10 text-xl font-bold bg-sky-500 hover:bg-sky-600 text-white rounded-full group w-full sm:w-auto shadow-xl shadow-sky-500/20">
                        Join Next Batch
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-8 text-xl font-bold bg-slate-800/50 backdrop-blur-md border-slate-700 hover:bg-slate-800 text-white rounded-full w-full sm:w-auto transition-all">
                        <MessageCircle className="mr-3 w-6 h-6 text-green-500" />
                        Contact on WhatsApp
                    </Button>
                </div>
            </div>
        </Section>
    );
}
