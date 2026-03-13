"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { StudentSuccess } from "@/components/ui/StudentSuccess";
import { ProjectShowcase } from "@/components/ui/ProjectShowcase";
import { UpcomingBatch } from "@/components/ui/UpcomingBatch";
import { LogosBar } from "@/components/ui/LogosBar";

export default function SuccessPage() {
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
                    Engineers <span className="text-sky-500">Built</span> Here
                </h1>
                <p className="text-xl text-slate-600 font-medium">
                    See the results of our students who are now working at some of the biggest names in infrastructure.
                </p>
            </div>

            <StudentSuccess />
            <LogosBar />
            <div className="bg-slate-900 py-12">
                <ProjectShowcase />
            </div>
            <UpcomingBatch />
        </main>
    );
}
