"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const container = useRef<HTMLElement>(null);
    const textContainer = useRef<HTMLDivElement>(null);
    const modelRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial load animation
        const tl = gsap.timeline();

        tl.fromTo(
            textContainer.current!.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );

        tl.fromTo(
            modelRef.current,
            { scale: 0.8, opacity: 0, rotateY: -30 },
            { scale: 1, opacity: 1, rotateY: 0, duration: 1.5, ease: "power3.out" },
            "-=1"
        );

        // Mouse movement tilt effect
        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate rotation based on mouse position
            const xRotation = (clientY / innerHeight - 0.5) * 20; // -10 to 10 degrees
            const yRotation = (clientX / innerWidth - 0.5) * -20; // 10 to -10 degrees

            gsap.to(modelRef.current, {
                rotateX: xRotation,
                rotateY: yRotation,
                duration: 1,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        window.addEventListener("mousemove", onMouseMove);

        // Scroll animation for the 3D model
        gsap.to(modelRef.current, {
            z: -200,
            y: 100,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        });

        return () => window.removeEventListener("mousemove", onMouseMove);
    }, { scope: container });


    return (
        <section ref={container} className="relative min-h-[95vh] flex items-center overflow-hidden bg-slate-50 pt-20">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div ref={textContainer} className="space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-heading text-slate-900">
                            Become a <br /><span className="text-sky-500">Job-Ready</span> Civil Engineer.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                            Master STAAD Pro, AutoCAD, ETABS & Structural Design with real industry projects.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="text-lg h-14 bg-slate-900 text-white hover:bg-slate-800 rounded-full group">
                                Explore Courses
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg h-14 border-slate-300 text-slate-900 hover:bg-slate-100 rounded-full">
                                Join Next Batch
                            </Button>
                        </div>
                    </div>

                    {/* Image/Visual Section */}
                    <div ref={modelRef} className="relative w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
                        {/* For Apple style, we use a clean container holding the 3D model render image */}
                        <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl shadow-slate-200/50">
                            <img
                                src="/hero.png"
                                alt="3D Building Model"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent mix-blend-multiply" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
