import { ThemeProvider } from "@/context/theme-context";
import { SantalHeader } from "@/components/santal-header";
import { SantalHero } from "@/components/santal-hero";
import { PhilosophySection } from "@/components/philosophy-section";
import { SantalWorks } from "@/components/santal-works";
import { SantalSpec } from "@/components/santal-spec";
import { SantalJourney } from "@/components/santal-journey";
import { SantalFooter } from "@/components/santal-footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#faf9f6] dark:bg-[#0c0d0f] text-[#121316] dark:text-[#f4f4f6] flex flex-col selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
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

        {/* 05: Enquiries Ledger */}
        <SantalFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
