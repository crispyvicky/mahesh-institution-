"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

export function Instructor() {
    const container = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Image slides from right
        gsap.fromTo(
            imageRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
            }
        );

        // Text slides from left
        gsap.fromTo(
            textRef.current!.children,
            { x: 50, opacity: 0 },
            {
                x: 0,
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
        <Section ref={container} className="bg-slate-50 overflow-hidden relative border-y border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">

                {/* Instructor Image */}
                <div ref={imageRef} className="relative">
                    <div className="aspect-[4/5] md:aspect-square relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl">
                        <img
                            src="/image.png"
                            alt="Mahesh - Lead Instructor"
                            className="object-cover w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Soft gradient overlay for light theme text legibility if needed, but keeping it clean */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h3 className="text-3xl font-bold font-heading text-white mb-1 tracking-tight">MAHESH</h3>
                            <p className="text-sky-400 font-semibold tracking-wide uppercase text-sm">Senior Structural Engineer</p>
                        </div>
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -right-6 md:-right-8 top-12 bg-white border border-slate-200 p-6 rounded-2xl shadow-xl shadow-slate-200/50">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-500">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold font-heading text-slate-900 tracking-tight">5+ Years</p>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Industry Exp</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instructor Content */}
                <div ref={textRef} className="space-y-6 md:space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-slate-900 tracking-tight leading-tight">
                            Meet Your <span className="text-sky-500">Instructor</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Students trust real engineers more than institutes. Get trained directly by an active Structural Engineer involved in multi-crore infrastructure projects.
                        </p>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                        Alongside his professional career designing large-scale commercial and residential structures, MAHESH has a passion for mentoring the next generation of civil engineers. He bridges the gap between college theory and actual industry requirements.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 text-slate-900 font-bold font-heading">
                                <Users className="w-5 h-5 text-sky-500" />
                                <span className="text-2xl">100+</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Students Successfully Trained</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 text-slate-900 font-bold font-heading">
                                <Award className="w-5 h-5 text-sky-500" />
                                <span className="text-2xl">50+</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Projects Completed</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 text-slate-900 font-bold font-heading">
                                <GraduationCap className="w-5 h-5 text-sky-500" />
                                <span className="text-2xl">100%</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Placement Guidance</p>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 text-slate-900 font-bold font-heading">
                                <Briefcase className="w-5 h-5 text-sky-500" />
                                <span className="text-2xl">Top MNC</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium">Working Experience</p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-[#0A66C2]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            <span>Connect on LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
