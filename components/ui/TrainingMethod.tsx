"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Building2, Laptop, TrendingUp } from "lucide-react";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        icon: BookOpen,
        title: "Foundation Concepts",
        description: "Clear your basics in structural theories and mechanics before touching software.",
    },
    {
        icon: Laptop,
        title: "Software Mastery",
        description: "Learn STAAD Pro, AutoCAD, and ETABS practically from absolute scratch.",
    },
    {
        icon: Building2,
        title: "Real Industry Projects",
        description: "Apply your skills by designing an actual G+5 residential building and steel structures.",
    },
    {
        icon: TrendingUp,
        title: "Career & Placements",
        description: "Resume building, interview preparation, and real job references from our network.",
    },
];

export function TrainingMethod() {
    const container = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
            },
        });

        // Animate connector line drawing
        tl.fromTo(
            lineRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1.5, ease: "power2.inOut" }
        );

        // Sequence steps lighting up alongside the line drawing
        tl.fromTo(
            stepsRef.current!.children,
            { y: 30, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.3,
                ease: "back.out(1.5)",
            },
            "-=1.2" // Overlap with line drawing
        );
    }, { scope: container });

    return (
        <Section ref={container} className="bg-slate-50 border-y border-slate-200 relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-slate-900">
                    Our <span className="text-sky-500">Training Approach</span>
                </h2>
                <p className="text-xl text-slate-600 font-medium">
                    We don't just teach software, we teach you how to think like a structural engineer.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Connecting line for desktop timeline */}
                <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-200 rounded-full" />
                <div
                    ref={lineRef}
                    className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                />

                <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-[2rem] bg-white border-2 border-slate-200 flex items-center justify-center mb-6 z-10 shadow-xl group-hover:border-sky-500 group-hover:-translate-y-2 transition-all duration-300">
                                    <Icon className="w-10 h-10 text-sky-500 group-hover:scale-110 transition-transform duration-300" />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-lg border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold font-heading text-slate-900 tracking-tight mb-3">{step.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed px-2 font-medium">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
