import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  company: string;
  overview: string;
  challenges: string[];
  architectureWins: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function SantalWorks() {
  const [activeCaseId, setActiveCaseId] = useState<string>("knky");

  const caseStudies: CaseStudy[] = [
    {
      id: "knky",
      index: "01",
      title: "KNKY Platform",
      subtitle: "Full-Featured Social Web Platform & Edge Media Architecture",
      role: "Lead Frontend Developer",
      period: "Mar 2024 - Present",
      company: "Ink In Caps",
      overview:
        "Architected the frontend for KNKY, a high-traffic social web application serving 10,000+ daily active users. Engineered virtualized feeds, edge media distribution, real-time matchmaking, and resilient state synchronization.",
      challenges: [
        "Rendering long, media-heavy social feeds on budget mobile devices without running out of memory.",
        "Keeping UI state synchronized across active chat rooms, matchmaking queues, and profile updates.",
        "Ensuring zero dropped messages and instant recovery when mobile users switch network connections.",
      ],
      architectureWins: [
        "Created virtualized feed and chat lists that cut client memory usage by 45% on low-end Android devices.",
        "Hooked up Cloudflare R2 and AWS EC2 to serve uploaded photos and videos over global edge caches.",
        "Wrote custom heartbeat checks and backoff retries, cutting reconnection times by 60%.",
        "Implemented optimistic UI updates with Zustand and Socket.IO for instant user feedback.",
      ],
      metrics: [
        { label: "Active Scale", value: "10,000+ DAU" },
        { label: "Delivery Latency", value: "< 100ms" },
        { label: "Memory Savings", value: "45% Lower" },
        { label: "Uptime Reliability", value: "99.9%" },
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Socket.IO",
        "WebSockets",
        "AWS EC2",
        "Cloudflare R2",
        "Zustand",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/khuranajordan/portfolio",
    },
    {
      id: "ink-in-caps",
      index: "02",
      title: "Engineering Team & Process Leadership",
      subtitle: "Frontend Architecture & CI/CD Performance Budgets",
      role: "Team Lead – Frontend",
      period: "Jul 2025 – Present",
      company: "Ink In Caps, Mumbai",
      overview:
        "Led a team of 6 frontend developers at Ink In Caps. Standardized our component libraries, introduced automated CI/CD checks, and cut technical debt by 30% through regular code reviews.",
      challenges: [
        "Legacy code and irregular releases delayed new feature rollouts.",
        "No central error monitoring to spot bugs before users reported them.",
      ],
      architectureWins: [
        "Cut technical debt by 30% by refactoring shared UI modules and holding weekly peer reviews.",
        "Added CI/CD performance budgets that blocked merges if First Contentful Paint exceeded 3 seconds.",
        "Set up Sentry alerting and CloudWatch dashboards, cutting incident resolution times in half.",
        "Coached junior and mid-level developers weekly to help them take ownership of entire features.",
      ],
      metrics: [
        { label: "Team Size", value: "6 Engineers" },
        { label: "Tech Debt Reduction", value: "-30%" },
        { label: "Test Coverage", value: "90%+" },
        { label: "Budget Target", value: "< 3.0s FCP" },
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "CI/CD Pipelines",
        "Sentry Monitoring",
        "AWS CloudWatch",
        "Jest / RTL",
        "Performance Budgets",
      ],
    },
    {
      id: "tracxn",
      index: "03",
      title: "Enterprise Web Performance & Optimization",
      subtitle: "Route Splitting & Bundle Optimization",
      role: "Software Developer",
      period: "Jan 2023 – Apr 2023",
      company: "Tracxn Technologies, Bangalore",
      overview:
        "Optimized frontend load times for Tracxn's market intelligence platform, reducing initial bundle size and cutting First Contentful Paint by 20%.",
      challenges: [
        "Monolithic JavaScript bundles slowed down initial page loads on slower enterprise networks.",
        "Repeated, uncoordinated component implementations made maintenance difficult.",
      ],
      architectureWins: [
        "Implemented route-level dynamic imports with React.lazy and Suspense, cutting initial load times by 20%.",
        "Replaced ad-hoc components with shared design system elements, reducing UI-related support tickets by 10%.",
        "Cleaned up table and filter state to eliminate unnecessary re-renders across search result lists.",
      ],
      metrics: [
        { label: "Performance Boost", value: "+20%" },
        { label: "Ticket Reduction", value: "-10%" },
        { label: "Bundle Savings", value: "35% Chunks" },
        { label: "SEO Score", value: "98/100" },
      ],
      stack: ["React", "JavaScript (ES6+)", "Code Splitting", "React.lazy", "HTML5/CSS3", "Git", "REST APIs"],
    },
    {
      id: "blodin",
      index: "04",
      title: "Blodin Commerce & Asset Tracking",
      subtitle: "0-to-1 Frontend Specification & Launch",
      role: "Software Developer",
      period: "Jul 2023 – Feb 2024",
      company: "Blodin Pvt. Ltd., Remote",
      overview:
        "Built and shipped the complete web application for Blodin from the ground up, delivering live listing feeds, Redux state management, and user checkout on schedule.",
      challenges: [
        "A tight launch timeline required building features quickly while keeping code clean.",
        "Updating live prices across user screens without requiring full page reloads.",
      ],
      architectureWins: [
        "Delivered a fully responsive user interface using React and Tailwind CSS.",
        "Connected Node.js backend endpoints and Firebase authentication with zero production downtime.",
        "Organized Redux and Zustand state slices so interface clicks and filters responded instantly.",
      ],
      metrics: [
        { label: "Time to Market", value: "100% on Schedule" },
        { label: "Mobile Responsiveness", value: "100/100" },
        { label: "User Satisfaction", value: "4.8 / 5.0" },
        { label: "Code Coverage", value: "85%+" },
      ],
      stack: ["React", "TypeScript", "Node.js", "Express.js", "Firebase", "Redux", "Zustand", "Tailwind CSS"],
    },
  ];

  const activeCase = caseStudies.find((c) => c.id === activeCaseId) || caseStudies[0];

  return (
    <section
      id="works"
      className="py-24 md:py-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-[#faf9f6] dark:bg-[#0c0d0f] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-black/[0.08] dark:border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>SECTION 02 // SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-neutral-900 dark:text-white uppercase tracking-tight">
              Production Work.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-sm uppercase leading-relaxed">
            Real-world systems highlighting frontend architecture, engineering leadership, performance optimization, and product delivery.
          </p>
        </div>

        {/* Case Studies Master-Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#15171e] shadow-xs">
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 divide-y divide-black/[0.08] dark:divide-white/[0.08] border-b lg:border-b-0 lg:border-r border-black/[0.08] dark:border-white/[0.08] bg-neutral-50/50 dark:bg-[#111318]">
            {caseStudies.map((item) => {
              const isSelected = item.id === activeCaseId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCaseId(item.id)}
                  className={`w-full text-left p-6 sm:p-8 transition-all flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-white dark:bg-[#181a24] text-neutral-900 dark:text-white border-l-2 border-l-black dark:border-l-sky-400 shadow-xs"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-4">
                    <span>CASE // {item.index}</span>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
                      {item.company}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight uppercase mb-1 flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected
                            ? "text-black dark:text-sky-400 translate-x-0.5 -translate-y-0.5"
                            : "text-neutral-300 dark:text-neutral-600 opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </h3>
                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {item.role} • {item.period}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Case Study Deep-Dive */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between bg-white dark:bg-[#15171e]">
            <div className="space-y-8">
              {/* Header Info */}
              <div className="pb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Verified Production Record
                  </span>
                  <span>•</span>
                  <span>{activeCase.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight mb-2">
                  {activeCase.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                  {activeCase.subtitle}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-2">
                  System Overview
                </h4>
                <p className="text-base text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                  {activeCase.overview}
                </p>
              </div>

              {/* Solutions & Milestones */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                  Technical Solutions & Milestones
                </h4>
                <div className="space-y-2.5">
                  {activeCase.architectureWins.map((win, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-none bg-black dark:bg-white mt-2 shrink-0"></span>
                      <span>{win}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-black/[0.08] dark:border-white/[0.08] divide-x divide-y sm:divide-y-0 divide-black/[0.08] dark:divide-white/[0.08] bg-neutral-50/50 dark:bg-neutral-900/40">
                {activeCase.metrics.map((m, i) => (
                  <div key={i} className="p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold font-mono text-neutral-900 dark:text-white mb-0.5">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Footer */}
            <div className="pt-8 mt-8 border-t border-black/[0.08] dark:border-white/[0.08]">
              <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                Technologies & Tools Enforced
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeCase.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-mono uppercase bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
