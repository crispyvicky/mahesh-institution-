"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BeamLoadCalculator } from "@/components/ui/BeamLoadCalculator";
import { BlogSection } from "@/components/ui/BlogSection";
import { Section } from "@/components/ui/Section";
import { HelpCircle } from "lucide-react";


export default function ResourcesPage() {
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
                    Technical <span className="text-sky-500">Toolkit</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium">
                    Free tools and resources to help you master structural concepts on the go. Built for engineers, by engineers.
                </p>
            </div>

            <Section className="py-0 overflow-visible">
                <BeamLoadCalculator />
            </Section>

            <div className="py-20">
                <BlogSection />
            </div>
        </main>
    );
}
