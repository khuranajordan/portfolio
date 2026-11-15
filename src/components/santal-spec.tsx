import { Layout, Zap, ShieldCheck, Cloud } from "lucide-react";

export function SantalSpec() {
  const specs = [
    {
      code: "SPEC-01",
      category: "Frontend Architecture & Frameworks",
      icon: Layout,
      focus: "Type-safe component hierarchies and modern React runtimes",
      items: [
        { name: "Next.js & React 19", detail: "App Router, Server Components, streaming SSR, and Suspense" },
        { name: "Strict TypeScript", detail: "End-to-end typed contracts, strict compiler flags, zero any-casts" },
        { name: "State Architecture", detail: "Zustand, TanStack Query, Redux Toolkit, and optimistic UI updates" },
        { name: "Design Systems", detail: "Tailwind CSS, Radix UI, accessible patterns, and design tokens" },
      ],
    },
    {
      code: "SPEC-02",
      category: "Performance & Memory Profiling",
      icon: Zap,
      focus: "Client-side optimization and Core Web Vitals enforcement",
      items: [
        { name: "DOM Virtualization", detail: "Virtualized lists and tables handling 10k+ rows with zero lag" },
        { name: "Code Splitting", detail: "Route-level dynamic imports via React.lazy and Suspense boundaries" },
        { name: "Memory Profiling", detail: "Heap snapshot tracing, memory leak elimination, and GC hygiene" },
        { name: "Web Vitals Budgets", detail: "Lighthouse FCP < 2.5s, INP < 100ms, and bundle size budgets" },
      ],
    },
    {
      code: "SPEC-03",
      category: "Engineering Leadership & Quality",
      icon: ShieldCheck,
      focus: "Team standards, automated testing, and CI/CD pipelines",
      items: [
        { name: "Team Leadership", detail: "Mentoring 6 developers, conducting code reviews, and roadmap planning" },
        { name: "Test Automation", detail: "Jest, React Testing Library, and unit test suites covering 90%+" },
        { name: "CI/CD Pipelines", detail: "Automated linting, bundle validation, and zero-downtime deployment" },
        { name: "Observability", detail: "Sentry telemetry, AWS CloudWatch dashboards, and error alerting" },
      ],
    },
    {
      code: "SPEC-04",
      category: "Cloud, Edge & Data Sync",
      icon: Cloud,
      focus: "Edge infrastructure, cloud storage, and bi-directional sync",
      items: [
        { name: "Cloudflare Workers & R2", detail: "Edge compute storage, zero-egress asset caching, and global CDN" },
        { name: "AWS EC2 & Lambda", detail: "Scalable cloud infrastructure and serverless utility functions" },
        { name: "Real-Time Sync", detail: "WebSockets, Socket.IO, resilient reconnection, and event streaming" },
        { name: "API Integration", detail: "RESTful services, GraphQL queries, and structured caching" },
      ],
    },
  ];

  return (
    <section
      id="spec"
      className="py-24 md:py-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-[#faf9f6] dark:bg-[#0c0d0f] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-black/[0.08] dark:border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>SECTION 03 // TECHNICAL SPECIFICATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-neutral-900 dark:text-white uppercase tracking-tight">
              Tech Stack & Tooling.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-sm uppercase leading-relaxed">
            Core tools, architecture patterns, and workflows I use to build production systems.
          </p>
        </div>

        {/* Spec Ledger Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/[0.08] dark:border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-black/[0.08] dark:divide-white/[0.08] bg-white dark:bg-[#15171e] shadow-xs">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="p-6 sm:p-10 flex flex-col justify-between hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06] dark:border-white/[0.06]">
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">{spec.code}</span>
                    <Icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-neutral-900 dark:text-white uppercase tracking-tight mb-2">
                    {spec.category}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-8">
                    {spec.focus}
                  </p>

                  <div className="space-y-4">
                    {spec.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-neutral-50 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08] flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold font-sans text-neutral-900 dark:text-neutral-100 tracking-wide">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                            Verified
                          </span>
                        </div>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">
                  <span>Standard: Production Grade</span>
                  <span>Clean Code & Maintainability</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
