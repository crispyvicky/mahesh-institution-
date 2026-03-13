"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
    const container = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            leftRef.current,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
            }
        );

        gsap.fromTo(
            rightRef.current,
            { opacity: 0, x: 30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
            }
        );
    }, { scope: container });

    return (
        <Section ref={container} id="contact" className="bg-white border-t border-slate-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto relative z-10">
                <div ref={leftRef}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-slate-900">
                        Ready to Build Your <span className="text-sky-500">Career?</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 font-medium">
                        Have questions about the syllabus, timings, or payment? Drop us a message or visit our office in Hyderabad.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-sky-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Call or WhatsApp</h4>
                                <p className="text-slate-600 font-medium">+91 98765 43210</p>
                                <p className="text-slate-500 text-sm">Mon-Sat from 9am to 6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-sky-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                                <p className="text-slate-600 font-medium">hello@civiledgeacademy.com</p>
                                <p className="text-slate-500 text-sm">We'll respond within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-sky-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Visit Institute</h4>
                                <p className="text-slate-600 font-medium">123, Tech Park, Madhapur</p>
                                <p className="text-slate-500 text-sm">Hyderabad, Telangana 500081</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={rightRef}
                    className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl"
                >
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-6 tracking-tight">Request a Callback</h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+91"
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="course" className="text-sm font-bold text-slate-700">Course Interested In</label>
                            <select
                                id="course"
                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors appearance-none shadow-sm"
                            >
                                <option value="">Select a course</option>
                                <option value="staad">STAAD Pro Training</option>
                                <option value="autocad">AutoCAD 2D/3D</option>
                                <option value="etabs">ETABS Design</option>
                                <option value="combo">Complete Master Program</option>
                            </select>
                        </div>
                        <Button size="lg" className="w-full h-14 text-lg font-bold bg-slate-900 text-white hover:bg-slate-800 rounded-xl shadow-md">
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
