import { Hero } from "@/components/ui/Hero";
import { BlueprintTransition } from "@/components/ui/BlueprintTransition";
import { LogosBar } from "@/components/ui/LogosBar";
import { TrainingMethod } from "@/components/ui/TrainingMethod";
import { ProjectShowcase } from "@/components/ui/ProjectShowcase";
import { UpcomingBatch } from "@/components/ui/UpcomingBatch";
import { FinalCTA } from "@/components/ui/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden relative">
      <Hero />
      <BlueprintTransition />
      <LogosBar />
      <TrainingMethod />
      <ProjectShowcase />
      <UpcomingBatch />
      <FinalCTA />
    </main>
  );
}
