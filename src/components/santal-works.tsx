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
      subtitle: "High-Traffic Real-Time Social & Matchmaking Web Application",
      role: "Lead Frontend Developer",
      period: "Mar 2024 – Present",
      company: "Ink In Caps",
      overview:
        "Spearheaded core real-time frontend development serving thousands of concurrent users. Built the Socket.IO-based chat system, live matchmaking engine, and media galleries with sub-second message delivery and fault-tolerant event handling.",
      challenges: [
        "Eliminating message drop-offs and latency spikes during sudden mobile network switches.",
        "Rendering virtualized chat streams with thousands of messages on low-memory devices without frame drops.",
        "Managing complex distributed state across WebSockets, chat rooms, and optimistic client UI updates.",
      ],
      architectureWins: [
        "Implemented exponential backoff reconnection strategies and heartbeat detection, reducing reconnection latency by 60%.",
        "Built custom virtualized chat lists, reducing browser memory footprint by 45% on low-end mobile devices.",
        "Integrated Cloudflare R2 and AWS EC2 for instant CDN delivery of user media assets.",
      ],
      metrics: [
        { label: "Delivery Latency", value: "< 100ms" },
        { label: "Active Scale", value: "10,000+ DAU" },
        { label: "Reconnection Speed", value: "+60% Faster" },
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
        "Scaled and led a 6-member frontend engineering team. Enforced clean coding standards, component architecture, and automated release pipelines across high-traffic platforms.",
      challenges: [
        "Accumulated technical debt and inconsistent release cycles slowing down feature releases.",
        "Lack of standardized observability across client-side errors in production.",
      ],
      architectureWins: [
        "Reduced overall technical debt by 30% through modular component refactoring and clean code reviews.",
        "Enforced strict CI/CD performance budgets with Lighthouse scores < 3s.",
        "Deployed Sentry error tracking and AWS CloudWatch dashboards, cutting incident resolution time by 50%.",
        "Mentored junior and mid-level engineers through structured 1:1 coaching and pair programming.",
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
        "Architected performance optimizations for high-traffic enterprise intelligence dashboards, reducing client bundle size and drastically improving initial First Contentful Paint times.",
      challenges: [
        "Heavy monolithic JS bundles causing sluggish initial load on slower networks.",
        "Inconsistent component implementations increasing maintenance overhead.",
      ],
      architectureWins: [
        "Boosted overall frontend performance by 20% by implementing dynamic route code splitting with React.lazy and Suspense.",
        "Built modular UI components adhering to strict design systems, reducing customer support tickets by 10%.",
        "Refactored state management to eliminate redundant re-renders across enterprise search listings.",
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
        "Solely engineered the user-facing responsive web application from blank canvas to production launch, including real-time listing feeds, Redux state hydration, and payment flows.",
      challenges: [
        "Tight go-to-market schedule requiring rapid feature development without compromising component hygiene.",
        "Synchronizing live price updates across user dashboards without full page reloads.",
      ],
      architectureWins: [
        "Constructed a responsive, pixel-perfect frontend interface using React and Tailwind CSS.",
        "Integrated Node.js / Express.js backend services and Firebase authentication with zero downtime.",
        "Implemented normalized Redux and Zustand state slices for instant local UI responsiveness.",
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
              Featured Projects.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-sm uppercase leading-relaxed">
            Real-world systems highlighting real-time web features, team leadership, and performance engineering.
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
