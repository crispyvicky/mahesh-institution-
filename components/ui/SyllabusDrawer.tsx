"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { X, CheckCircle2, Download, FileText } from "lucide-react";
import { Button } from "./Button";

interface Module {
    title: string;
    topics: string[];
}

const modules: Module[] = [
    {
        title: "Module 1: Structural Fundamentals",
        topics: ["Introduction to Structural Engineering", "Types of Loads & Load Combinations", "IS Code Interpretations (IS 456, IS 875)"],
    },
    {
        title: "Module 2: STAAD Pro Mastery",
        topics: ["Modeling Geometry & Property Assignment", "Analysis of RCC Structures", "Foundation Design in STAAD"],
    },
    {
        title: "Module 3: AutoCAD Proficiency",
        topics: ["2D Planning & Sectional Details", "Structural Detailing Standards", "Dynamic Blocks & Layout Plotting"],
    },
    {
        title: "Module 4: Real-World Case Studies",
        topics: ["G+5 Apartment Complex Design", "Commercial Steel Warehouse Project", "Structural Audit & Retrofitting Basics"],
    },
];

export function SyllabusDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const drawerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            const tl = gsap.timeline();
            tl.to(overlayRef.current, { opacity: 1, duration: 0.3, pointerEvents: "auto" });
            tl.to(drawerRef.current, { x: 0, duration: 0.5, ease: "power3.out" }, "-=0.2");
            tl.fromTo(
                contentRef.current!.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
                "-=0.3"
            );
        } else {
            document.body.style.overflow = "auto";
            const tl = gsap.timeline();
            tl.to(drawerRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });
            tl.to(overlayRef.current, { opacity: 0, duration: 0.3, pointerEvents: "none" }, "-=0.2");
        }
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                ref={overlayRef}
                onClick={onClose}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200] opacity-0 pointer-events-none transition-opacity"
            />

            {/* Drawer */}
            <div
                ref={drawerRef}
                className="fixed top-0 right-0 h-full w-full max-w-xl bg-white z-[201] shadow-2xl translate-x-full overflow-y-auto"
            >
                <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-black font-heading text-slate-900 tracking-tight mb-2">
                                Course <span className="text-sky-500">Syllabus</span>
                            </h2>
                            <p className="text-slate-500 font-medium">Detailed Module Breakdown</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-3 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div ref={contentRef} className="space-y-10">
                        {modules.map((mod, i) => (
                            <div key={i} className="relative pl-8 border-l-2 border-slate-100">
                                <div className="absolute -left-3 top-0 w-6 h-6 bg-white border-2 border-sky-500 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-sky-500 rounded-full" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900 mb-4">{mod.title}</h3>
                                <ul className="space-y-3">
                                    {mod.topics.map((topic, j) => (
                                        <li key={j} className="flex items-start gap-3 text-slate-600 font-medium">
                                            <CheckCircle2 size={18} className="text-sky-500 mt-1 flex-shrink-0" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="pt-8">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Program Brochure</h4>
                                        <p className="text-sm text-slate-500">PDF, 4.2 MB</p>
                                    </div>
                                </div>
                                <Button className="w-full h-14 bg-slate-900 text-white font-bold rounded-2xl">
                                    <Download className="mr-2 w-5 h-5" />
                                    Download Complete Syllabus
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
