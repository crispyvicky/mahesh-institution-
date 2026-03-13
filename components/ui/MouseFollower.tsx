"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function MouseFollower() {
    const followerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const follower = followerRef.current;
        const inner = innerRef.current;
        if (!follower || !inner || window.innerWidth < 1024) return;

        const onMouseMove = (e: MouseEvent) => {
            // Main follower with slight lag
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out",
            });

            // Shorter Duration for the inner dot
            gsap.to(inner, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "none",
            });
        };

        const onMouseDown = () => {
            gsap.to(follower, { scale: 0.8, duration: 0.2 });
        };

        const onMouseUp = () => {
            gsap.to(follower, { scale: 1, duration: 0.2 });
        };

        // React to interactive elements
        const onMouseEnterInteractive = () => {
            gsap.to(follower, {
                scale: 2.5,
                backgroundColor: "rgba(14, 165, 233, 0.1)", // sky-500/10
                borderColor: "rgba(14, 165, 233, 0.4)",
                duration: 0.3,
            });
        };

        const onMouseLeaveInteractive = () => {
            gsap.to(follower, {
                scale: 1,
                backgroundColor: "transparent",
                borderColor: "rgba(14, 165, 233, 0.5)",
                duration: 0.3,
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);

        const interactiveElements = document.querySelectorAll('button, a, .interactive-card');
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnterInteractive);
            el.addEventListener("mouseleave", onMouseLeaveInteractive);
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnterInteractive);
                el.removeEventListener("mouseleave", onMouseLeaveInteractive);
            });
        };
    }, []);

    return (
        <>
            {/* Outer Follower */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-sky-500/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
            />
            {/* Inner Dot */}
            <div
                ref={innerRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-sky-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
            />
        </>
    );
}
