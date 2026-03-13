import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Clock, Laptop } from "lucide-react";
import { Section } from "./Section";
import { SyllabusDrawer } from "./SyllabusDrawer";

gsap.registerPlugin(ScrollTrigger);

const courses = [
    {
        title: "STAAD Pro Training",
        duration: "6 Weeks",
        topics: ["Structural modelling", "Load analysis", "Design calculations", "Real project case studies"],
        tools: ["STAAD Pro", "Excel integration"],
    },
    {
        title: "AutoCAD for Civil Engineers",
        duration: "4 Weeks",
        topics: ["2D Drafting", "Construction drawings", "Floor plans", "Section elevations"],
        tools: ["AutoCAD 2D"],
    },
    {
        title: "ETABS Structural Design",
        duration: "5 Weeks",
        topics: ["High-rise modeling", "Wind & Seismic analysis", "Slab design", "Concrete design"],
        tools: ["ETABS", "SAFE"],
    },
    {
        title: "Quantity Surveying",
        duration: "4 Weeks",
        topics: ["Material takeoff", "Cost estimation", "BBS (Bar Bending Schedule)", "Tender preparation"],
        tools: ["Excel", "PlanSwift"],
    },
];

export function Courses() {
    const container = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useGSAP(() => {
        // Header fade in
        gsap.fromTo(
            headerRef.current!.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
            }
        );

        // Cards stagger slide up
        gsap.fromTo(
            cardsRef.current!.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 85%",
                },
            }
        );
    }, { scope: container });

    return (
        <Section ref={container} id="courses" className="bg-slate-50">
            <SyllabusDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

            <div ref={headerRef} className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-slate-900 tracking-tight">
                    Industry-Focused <span className="text-sky-500">Courses</span>
                </h2>
                <p className="text-slate-600 text-lg">
                    Master the exact software skills needed to crack engineering interviews and build a career in structural design.
                </p>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="group relative bg-white border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-500 transition-colors font-heading tracking-tight">
                                {course.title}
                            </h3>
                            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 border border-slate-200">
                                <Clock className="w-3 h-3 mr-1" />
                                {course.duration}
                            </span>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h4 className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                    <BookOpen className="w-3 h-3 mr-2 text-slate-400" /> Key Topics
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {course.topics.map((topic, i) => (
                                        <li key={i} className="text-slate-600 flex items-start text-sm font-medium before:content-['✓'] before:text-green-500 before:mr-2">
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <h4 className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                    <Laptop className="w-3 h-3 mr-2 text-slate-400" /> Tools
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {course.tools.map((tool, i) => (
                                        <span key={i} className="bg-slate-50 text-slate-600 font-semibold border border-slate-200 text-xs px-3 py-1.5 rounded-full">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setDrawerOpen(true)}
                            className="w-full py-4 px-4 rounded-xl bg-slate-950 text-white font-bold group-hover:bg-sky-500 transition-all flex items-center justify-center shadow-lg shadow-slate-200 group-hover:shadow-sky-500/20"
                        >
                            View Syllabus
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ))}
            </div>
        </Section>
    );
}

