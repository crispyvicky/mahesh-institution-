"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Rahul Kumar",
        company: "Now working at AECOM",
        course: "STAAD Pro & ETABS Training",
        image: "https://i.pravatar.cc/150?img=11",
        quote: "This course helped me get my first structural design job. MAHESH sir teaches exactly what companies ask in interviews.",
    },
    {
        name: "Priya Sharma",
        company: "Placed at L&T Construction",
        course: "AutoCAD & Structural Detailing",
        image: "https://i.pravatar.cc/150?img=5",
        quote: "The practical approach with real blueprints gave me so much confidence. I was completely ready for my technical round.",
    },
    {
        name: "Mohammed Ali",
        company: "Structural Engineer at Afcons",
        course: "Advanced Structural Design",
        image: "https://i.pravatar.cc/150?img=12",
        quote: "Best investment for my career. The doubt-clearing sessions where we solved actual on-site structural issues were incredible.",
    },
];

export function StudentSuccess() {
    const container = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            cardsRef.current!.children,
            { scale: 0.9, opacity: 0, y: 30 },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
            }
        );
    }, { scope: container });

    return (
        <Section ref={container} className="bg-white border-y border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-slate-900 tracking-tight">
                        Student <span className="text-sky-500">Success Stories</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Don't just take our word for it. Hear from engineers who successfully transformed their careers.
                    </p>
                </div>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 relative group"
                    >
                        <div className="absolute -top-4 right-8 bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold flex gap-1 shadow-lg">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                        </div>

                        <p className="text-slate-600 italic mb-8 relative z-10 before:content-['\201C'] before:text-6xl before:absolute before:-top-6 before:-left-4 before:text-sky-200 before:-z-10 group-hover:before:text-sky-300 transition-colors font-medium leading-relaxed">
                            "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                            />
                            <div>
                                <h4 className="font-bold font-heading text-slate-900 tracking-tight">{testimonial.name}</h4>
                                <p className="text-xs text-sky-600 font-bold uppercase tracking-wider">{testimonial.company}</p>
                                <p className="text-xs text-slate-500 font-medium">{testimonial.course}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust Signal Strip */}
            <div className="mt-16 bg-gradient-to-r from-sky-50 to-white border border-sky-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-1">Want to see more placements?</h3>
                    <p className="text-slate-600 text-sm font-medium">Join our WhatsApp community of 500+ active civil engineers.</p>
                </div>
                <button className="whitespace-nowrap bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-colors hover:shadow-lg">
                    View LinkedIn Proofs
                </button>
            </div>
        </Section>
    );
}
