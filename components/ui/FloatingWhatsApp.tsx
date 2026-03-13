"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white p-3 rounded-full shadow-2xl hover:bg-green-600 hover:scale-[1.05] transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
            style={{ animation: 'bounce-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
        >
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold pl-2 pb-0.5 tracking-wide">
                Chat to Join Batch
            </span>
            <div className="bg-white/20 p-2 rounded-full">
                <MessageCircle className="w-6 h-6 fill-current" />
            </div>

            {/* Pulse Effect */}
            <span className="absolute -inset-1 rounded-full border-2 border-green-500 opacity-50 animate-ping group-hover:hidden" style={{ animationDuration: '3s' }} />

            <style jsx>{`
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </a>
    );
}
