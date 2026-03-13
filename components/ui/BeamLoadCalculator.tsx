"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Info, HelpCircle } from "lucide-react";

export function BeamLoadCalculator() {
    const [span, setSpan] = useState(5); // meters
    const [load, setLoad] = useState(10); // kN/m
    const [maxBendingMoment, setMaxBendingMoment] = useState(0);
    const [maxShearForce, setMaxShearForce] = useState(0);

    const beamRef = useRef<HTMLDivElement>(null);
    const graphRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        // WL^2 / 8 for simply supported beam UDL
        const moment = (load * Math.pow(span, 2)) / 8;
        // WL / 2 for shear force at ends
        const shear = (load * span) / 2;

        setMaxBendingMoment(Number(moment.toFixed(2)));
        setMaxShearForce(Number(shear.toFixed(2)));

        // Animate the beam bending slightly based on load
        if (beamRef.current) {
            gsap.to(beamRef.current, {
                borderRadius: `0 0 ${load * 2}px ${load * 2}px`,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    }, [span, load]);

    return (
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-w-4xl mx-auto overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 text-slate-100 pointer-events-none opacity-20 transform translate-x-1/4 -translate-y-1/4">
                <span className="text-[10rem] font-black font-heading">S.E.</span>
            </div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl font-black font-heading text-slate-900 tracking-tight mb-2">
                            Beam <span className="text-sky-500">Load Estimator</span>
                        </h2>
                        <p className="text-slate-500 font-medium">Quick tool for Simply Supported Beams with UDL</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-sky-50 px-4 py-2 rounded-xl border border-sky-100">
                            <span className="text-[10px] font-bold text-sky-600 block uppercase tracking-wider mb-0.5">Max Moment</span>
                            <span className="text-xl font-bold font-heading text-slate-900">{maxBendingMoment} <small className="text-xs">kNm</small></span>
                        </div>
                        <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                            <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider mb-0.5">Max Shear</span>
                            <span className="text-xl font-bold font-heading text-slate-900">{maxShearForce} <small className="text-xs">kN</small></span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Inputs */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Beam Span (L)</label>
                                <span className="text-sky-500 font-bold">{span} Meters</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                step="0.5"
                                value={span}
                                onChange={(e) => setSpan(parseFloat(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Applied Load (w)</label>
                                <span className="text-sky-500 font-bold">{load} kN/m</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                step="1"
                                value={load}
                                onChange={(e) => setLoad(parseFloat(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                            />
                        </div>

                        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                            <Info className="text-amber-500 shrink-0 mt-0.5" size={18} />
                            <p className="text-xs text-amber-800 font-medium leading-relaxed">
                                Formula used: M = (w*L²)/8. This is a training tool. For site construction, always follow certified structural drawings.
                            </p>
                        </div>
                    </div>

                    {/* Visual Representation */}
                    <div className="relative flex flex-col justify-center items-center h-64 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                        {/* The Beam */}
                        <div className="relative w-4/5">
                            {/* UDL Arrows */}
                            <div className="absolute -top-12 left-0 right-0 flex justify-between px-2 opacity-40">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-0.5 h-8 bg-sky-500 rounded-full" />
                                        <div className="w-2 h-2 border-r-2 border-b-2 border-sky-500 transform rotate-45 -mt-1" />
                                    </div>
                                ))}
                            </div>

                            {/* Beam Body */}
                            <div
                                ref={beamRef}
                                className="h-6 w-full bg-slate-900 rounded-md shadow-xl relative z-10"
                            />

                            {/* Supports */}
                            <div className="absolute -bottom-6 left-0 w-8 h-8 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-slate-300" />
                            <div className="absolute -bottom-6 right-0 w-8 h-8 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-slate-300" />
                        </div>

                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Simply Supported Beam</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
