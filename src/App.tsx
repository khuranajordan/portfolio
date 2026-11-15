import { SantalHeader } from "@/components/santal-header";
import { SantalHero } from "@/components/santal-hero";
import { PhilosophySection } from "@/components/philosophy-section";
import { SantalWorks } from "@/components/santal-works";
import { SantalSpec } from "@/components/santal-spec";
import { SantalJourney } from "@/components/santal-journey";
import { SantalFooter } from "@/components/santal-footer";

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#121316] flex flex-col selection:bg-black selection:text-white">
      {/* Top Architectural Sticky Header */}
      <SantalHeader />

      {/* Main Single-Page Content */}
      <main className="flex-1">
        {/* 00: Architectural Hero */}
        <SantalHero />

        {/* 01: The 3D Philosophy Monoliths (Three.js WebGL Engine) */}
        <PhilosophySection />

        {/* 02: Architectural Works & Systems Case Studies */}
        <SantalWorks />

        {/* 03: Technical Specification Sheet */}
        <SantalSpec />

        {/* 04: Chronological Journey & Leadership Milestones */}
        <SantalJourney />
      </main>

      {/* 05: Enquiries Ledger & Digital Infrastructure */}
      <SantalFooter />
    </div>
  );
}

export default App;
