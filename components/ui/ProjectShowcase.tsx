"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "G+10 Residential Complex",
        description: "Complete structural analysis and design using ETABS",
        image: "https://images.unsplash.com/photo-1541888081622-101188c032ef?auto=format&fit=crop&q=80&w=1200",
    },
    {
        title: "Commercial Steel Structure",
        description: "Connection design and load calculations via STAAD Pro",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    },
];

export function ProjectShowcase() {
    const container = useRef<HTMLElement>(null);
    const imageRefs = useRef<HTMLImageElement[]>([]);

    useGSAP(() => {
        // Parallax effect on images
        imageRefs.current.forEach((img, i) => {
            gsap.fromTo(img,
                { yPercent: -15 },
                {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement, // The wrapper div
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        });
    }, { scope: container });

    return (
        <Section ref={container} className="bg-slate-900 border-y border-slate-800 py-24" container={false}>
            <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white tracking-tight">
                    Real <span className="text-sky-500">Project Showcase</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    You don't just learn commands. You design complete buildings from foundations to slabs during the training.
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {projects.map((project, index) => (
                    <div key={index} className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden group">
                        {/* Parallax Image */}
                        <img
                            ref={(el) => { if (el) imageRefs.current[index] = el; }}
                            src={project.image}
                            alt={project.title}
                            className="absolute top-[-15%] left-0 w-full h-[130%] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                        {/* Content pinned to bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto px-6 md:px-12 max-w-7xl">
                            <div className="max-w-2xl transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                                <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-2">{project.title}</h3>
                                <p className="text-sky-400 font-medium text-lg lg:text-xl">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
