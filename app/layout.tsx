import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/ui/SmoothScrolling";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MouseFollower } from "@/components/ui/MouseFollower";
import { PageTransition } from "@/components/ui/PageTransition";



const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "CivilEdge Academy | Job-Ready Civil Engineering",
  description: "Master STAAD Pro, AutoCAD, ETABS & Structural Design with real industry projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-slate-50 text-slate-800 min-h-screen selection:bg-sky-500/30`}
      >
        <SmoothScrolling>
          <MouseFollower />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScrolling>
      </body>
    </html>
  );
}


