"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Instructor } from "@/components/ui/Instructor";
import { TrainingMethod } from "@/components/ui/TrainingMethod";
import { LogosBar } from "@/components/ui/LogosBar";

export default function AboutPage() {
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            headerRef.current!.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    return (
        <main className="pt-24 min-h-screen bg-slate-50">
            <div ref={headerRef} className="container mx-auto px-6 py-16 md:py-24 text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-slate-900 mb-6">
                    The <span className="text-sky-500">Academy</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium">
                    Bridging the gap between engineering textbooks and actual construction sites. Lead by industry veterans.
                </p>
            </div>

            <Instructor />
            <TrainingMethod />
            <div className="py-12">
                <LogosBar />
            </div>
        </main>
    );
}
