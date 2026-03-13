"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

const tools = [
    { name: "STAAD Pro", color: "from-red-100 to-red-200 text-red-700", border: "border-red-200", icon: "S" },
    { name: "AutoCAD", color: "from-red-100 to-red-300 text-red-800", border: "border-red-200", icon: "A" },
    { name: "ETABS", color: "from-blue-100 to-blue-200 text-blue-700", border: "border-blue-200", icon: "E" },
    { name: "SAFE", color: "from-indigo-100 to-indigo-200 text-indigo-700", border: "border-indigo-200", icon: "SF" },
    { name: "Revit", color: "from-sky-100 to-sky-200 text-sky-700", border: "border-sky-200", icon: "R" },
    { name: "Excel", color: "from-green-100 to-green-200 text-green-700", border: "border-green-200", icon: "X" },
];

export function ToolsCovered() {
    const container = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const toolsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Header fade in
        gsap.fromTo(
            headerRef.current!.children,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
            }
        );

        // Tools sequential fade in
        gsap.fromTo(
            toolsRef.current!.children,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: toolsRef.current,
                    start: "top 85%",
                },
            }
        );
    }, { scope: container });

    return (
        <Section ref={container} className="bg-white border-t border-slate-200 overflow-hidden">
            <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-slate-900 tracking-tight">
                    Industry <span className="text-sky-500">Tools</span> Covered
                </h2>
                <p className="text-lg text-slate-600">
                    Learn the exact software stack used by top structural engineering firms globally.
                </p>
            </div>

            <div ref={toolsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10 max-w-6xl mx-auto">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className={`group relative flex flex-col items-center justify-center p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300`}
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black bg-gradient-to-br ${tool.color} shadow-sm border ${tool.border} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            {tool.icon}
                        </div>
                        <h3 className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors uppercase tracking-wide text-sm">{tool.name}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
}
