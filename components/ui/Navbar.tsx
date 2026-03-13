"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
                isScrolled
                    ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-xl group-hover:bg-sky-500 transition-colors">
                        C
                    </div>
                    <span className="text-xl md:text-2xl font-bold font-heading tracking-tight text-slate-900">
                        CivilEdge <span className="text-sky-500">Academy</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-colors hover:text-sky-500",
                                    isActive ? "text-sky-500" : "text-slate-600"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Button className="rounded-full px-6 bg-slate-900 hover:bg-sky-500 text-white font-bold transition-all shadow-lg shadow-slate-200">
                        Join Batch
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-slate-900 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={cn(
                    "fixed inset-0 top-[72px] bg-white z-[90] lg:hidden transition-transform duration-500 ease-in-out p-8 border-t border-slate-100",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-8 items-center pt-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-2xl font-bold font-heading tracking-tight",
                                    isActive ? "text-sky-500" : "text-slate-900"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Button size="lg" className="w-full mt-4 rounded-2xl bg-slate-900 text-white font-bold h-16 text-lg">
                        Join Next Batch
                    </Button>
                </div>
            </div>
        </nav>
    );
}
