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
      title: "Tracxn Performance Optimization",
      subtitle: "Dynamic Code Splitting, React Suspense & SEO Architecture",
      role: "Software Developer",
      period: "Jan 2023 – Apr 2023",
      company: "Tracxn Technologies Ltd., Bangalore",
      overview:
        "Developed performance-critical web modules for Tracxn's market intelligence database. Optimized SEO architectures, dynamic loading states, and built reusable component suites.",
      challenges: [
        "Heavy initial JavaScript bundles impacting Core Web Vitals and organic SEO crawl efficiency.",
        "Complex data tables requiring fast rendering on search engine spiders.",
      ],
      architectureWins: [
        "Improved frontend performance by 20% by implementing React.lazy and Suspense for dynamic route-based code splitting.",
        "Built standardized reusable UI component suite that reduced customer support tickets by 10%.",
        "Optimized server-side and SEO-focused pages with React and Next.js, elevating organic search rankings.",
      ],
      metrics: [
        { label: "Performance Boost", value: "+20%" },
        { label: "Support Tickets", value: "-10%" },
        { label: "Engagement Lift", value: "+15%" },
        { label: "SEO Crawl Speed", value: "Optimized" },
      ],
      stack: ["React.js", "Next.js", "Suspense", "React.lazy", "TypeScript", "REST APIs", "SEO Architecture"],
    },
    {
      id: "blodin",
      index: "04",
      title: "Blodin 0-to-1 Production Delivery",
      subtitle: "Full-Lifecycle Web Application Shipped from Scratch",
      role: "Software Developer",
      period: "Jul 2023 – Feb 2024",
      company: "Blodin Pvt. Ltd. (Remote)",
      overview:
        "Built and shipped the complete user-facing web application from scratch to live production, delivering price tracking engines, listings, and backend services.",
      challenges: [
        "Tight startup timeline requiring rapid execution while preserving maintainability and accessibility.",
      ],
      architectureWins: [
        "Shipped pixel-perfect, responsive client workflows with rigorous state management via Redux and Zustand.",
        "Contributed to backend services using Node.js and Express for seamless full-stack integration.",
        "Implemented secure authentication, real-time database syncing, and hosting with Firebase.",
      ],
      metrics: [
        { label: "Lifecycle", value: "0 to Production" },
        { label: "Backend API", value: "Node/Express" },
        { label: "State Sync", value: "Redux & Zustand" },
        { label: "Delivery", value: "100% on Schedule" },
      ],
      stack: ["React", "TypeScript", "Node.js", "Express.js", "Firebase", "Redux", "Zustand", "Tailwind CSS"],
    },
  ];

  const activeCase = caseStudies.find((c) => c.id === activeCaseId) || caseStudies[0];

  return (
    <section id="works" className="py-24 md:py-32 border-b border-black/[0.08] bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-black/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-black"></span>
              <span>SECTION 02 // SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-neutral-900 uppercase tracking-tight">
              Featured Projects.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 max-w-sm uppercase leading-relaxed">
            Real-world systems highlighting real-time web features, team leadership, and performance engineering.
          </p>
        </div>

        {/* Case Studies Master-Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-black/[0.08] bg-white shadow-xs">
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 divide-y divide-black/[0.08] border-b lg:border-b-0 lg:border-r border-black/[0.08]">
            {caseStudies.map((item) => {
              const isSelected = item.id === activeCaseId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCaseId(item.id)}
                  className={`w-full text-left p-6 sm:p-8 transition-all flex flex-col justify-between group ${
                    isSelected
                      ? "bg-neutral-50 text-neutral-900 border-l-2 border-l-black"
                      : "text-neutral-500 hover:text-black hover:bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                    <span>CASE // {item.index}</span>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      {item.company}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight uppercase mb-1 flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isSelected ? "text-black translate-x-0.5 -translate-y-0.5" : "text-neutral-300 opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </h3>
                    <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      {item.role} • {item.period}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Case Study Deep-Dive */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between bg-white">
            <div className="space-y-8">
              {/* Header Info */}
              <div className="pb-6 border-b border-black/[0.08]">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                  <span className="text-emerald-600 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Verified Production Record
                  </span>
                  <span>•</span>
                  <span>{activeCase.period}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 uppercase tracking-tight mb-2">
                  {activeCase.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-neutral-500 uppercase tracking-wide">
                  {activeCase.subtitle}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                  System Overview
                </h4>
                <p className="text-base text-neutral-700 font-light leading-relaxed">
                  {activeCase.overview}
                </p>
              </div>

              {/* Solutions & Milestones */}
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
                  Technical Solutions & Milestones
                </h4>
                <div className="space-y-2.5">
                  {activeCase.architectureWins.map((win, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-neutral-800">
                      <span className="w-1.5 h-1.5 rounded-none bg-black mt-2 shrink-0"></span>
                      <span>{win}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 border border-black/[0.08] divide-x divide-y sm:divide-y-0 divide-black/[0.08] bg-neutral-50/50">
                {activeCase.metrics.map((m, i) => (
                  <div key={i} className="p-4 text-center">
                    <div className="text-lg sm:text-xl font-bold font-mono text-neutral-900 mb-0.5">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills & Footer */}
            <div className="pt-8 mt-8 border-t border-black/[0.08]">
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-3">
                Technologies & Tools Enforced
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeCase.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-mono uppercase bg-neutral-100 text-neutral-800 border border-black/[0.06]"
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
