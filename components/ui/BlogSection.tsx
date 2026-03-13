"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Clock } from "lucide-react";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

const articles = [
    {
        title: "How to learn STAAD Pro effectively in 2026",
        category: "Software Training",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1541888081622-101188c032ef?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Civil Engineer Career Roadmap: From Fresher to Senior",
        category: "Career Guide",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Structural Design Basics Every Student Forgets",
        category: "Technical Concepts",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800",
    },
];

export function BlogSection() {
    const container = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!headerRef.current || !gridRef.current) return;

        gsap.fromTo(
            headerRef.current.children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
            }
        );

        gsap.fromTo(
            gridRef.current.children,
            { opacity: 0, scale: 0.95, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
            }
        );
    }, { scope: container });

    return (
        <Section ref={container} className="bg-slate-50">
            <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-slate-900 tracking-tight">
                        Free <span className="text-sky-500">Learning Resources</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium">
                        Read our latest articles on civil engineering and structural design.
                    </p>
                </div>
                <button className="hidden md:flex items-center text-sky-500 hover:text-sky-600 font-bold transition-colors group tracking-wide">
                    View all articles
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-500 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 flex flex-col"
                    >
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-sky-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                                {article.category}
                            </div>
                        </div>
                        <div className="p-6 md:p-8 flex-1 flex flex-col">
                            <div className="flex items-center text-slate-500 text-sm mb-4 font-bold tracking-wide">
                                <Clock className="w-4 h-4 mr-2" />
                                {article.readTime}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight text-slate-900 group-hover:text-sky-500 transition-colors mb-6 line-clamp-2 leading-snug">
                                {article.title}
                            </h3>
                            <div className="mt-auto flex items-center text-sm font-bold text-slate-600 group-hover:text-sky-500 transition-colors uppercase tracking-wider">
                                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 md:hidden text-center">
                <button className="inline-flex items-center text-sky-500 hover:text-sky-600 font-bold transition-colors group tracking-wide">
                    View all articles
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </Section>
    );
}
