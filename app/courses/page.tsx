"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Courses } from "@/components/ui/Courses";
import { ToolsCovered } from "@/components/ui/ToolsCovered";
import { UpcomingBatch } from "@/components/ui/UpcomingBatch";

export default function CoursesPage() {
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
            {/* Page Header */}
            <div ref={headerRef} className="container mx-auto px-6 py-16 md:py-24 text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-slate-900 mb-6">
                    Our <span className="text-sky-500">Expert</span> Programs
                </h1>
                <p className="text-xl text-slate-600 font-medium">
                    Whether you are a student or a working professional, we have a specialized program to help you master structural engineering.
                </p>
            </div>

            <Courses />
            <ToolsCovered />
            <UpcomingBatch />
        </main>
    );
}
