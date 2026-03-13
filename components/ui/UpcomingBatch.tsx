"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./Button";
import { CountdownTimer } from "./CountdownTimer";


gsap.registerPlugin(ScrollTrigger);

export function UpcomingBatch() {
    const container = useRef<HTMLElement>(null);
    const seatsRef = useRef<HTMLSpanElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const seatsData = { val: 0 };

    useGSAP(() => {
        // Card slide up
        gsap.fromTo(
            cardRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
            }
        );

        // Number counter animation
        gsap.to(seatsData, {
            val: 7,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
            },
            onUpdate: function () {
                if (seatsRef.current) {
                    seatsRef.current.innerHTML = Math.round(seatsData.val).toString();
                }
            },
        });
    }, { scope: container });

    return (
        <Section ref={container} className="bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto">
                <div
                    ref={cardRef}
                    className="relative bg-slate-900 rounded-[2rem] border border-slate-800 p-8 md:p-12 shadow-2xl overflow-hidden"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                        <div className="text-center md:text-left flex-1">
                            <div className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm font-bold text-sky-400 mb-6 tracking-wide uppercase">
                                <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2 animate-pulse"></span>
                                Enrollment Open
                            </div>
                            <p className="text-slate-400 text-lg mb-8 font-medium">
                                Complete Structural Engineering & Software Training Program
                            </p>

                            <div className="mb-10 flex justify-center md:justify-start">
                                <CountdownTimer targetDate="2026-04-10T09:00:00" />
                            </div>


                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-left max-w-lg mx-auto md:mx-0">
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-sky-500 mt-1" />
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Date</p>
                                        <p className="text-white font-medium">April 10, 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-sky-500 mt-1" />
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Mode</p>
                                        <p className="text-white font-medium">Online/Offline</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 col-span-2 lg:col-span-1">
                                    <Users className="w-5 h-5 text-sky-500 mt-1" />
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Availability</p>
                                        <p className="text-white font-medium text-lg flex items-center gap-1">
                                            <span ref={seatsRef} className="text-sky-500 font-bold font-heading text-2xl">0</span>
                                            <span className="text-slate-400">/ 20 Seats</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-auto flex flex-col items-center flex-shrink-0">
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 w-full md:w-80 text-center shadow-2xl">
                                <p className="text-slate-300 mb-4 font-medium">Reserve your seat for ₹4,999</p>
                                <Button size="lg" className="w-full h-14 text-lg font-bold bg-sky-500 hover:bg-sky-600 text-white mb-4 rounded-xl group border-0 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all">
                                    Reserve Seat Now
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-xs text-slate-400 font-medium">
                                    100% money-back guarantee for first 2 classes
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    );
}
