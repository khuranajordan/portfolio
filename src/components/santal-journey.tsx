import { MapPin } from "lucide-react";

export function SantalJourney() {
  const experiences = [
    {
      period: "Jul 2025 - Present",
      role: "Team Lead • Frontend Systems",
      company: "Ink In Caps",
      location: "Mumbai, India",
      type: "Full-Time Leadership",
      summary:
        "Leading a 6-engineer frontend team at Ink In Caps, setting architectural standards, and maintaining production reliability across high-traffic platforms.",
      milestones: [
        "Refactored monolithic UI code into modular components, cutting technical debt by 30%.",
        "Set up CI/CD performance gates and Sentry alerting, cutting incident response times in half.",
        "Partnered with backend and DevOps engineers to streamline API contracts and ship zero-downtime releases.",
        "Held weekly 1:1 coaching and code reviews to help junior and mid-level developers grow into feature leads.",
      ],
    },
    {
      period: "Mar 2024 - Jul 2025",
      role: "Senior Software Developer • Frontend",
      company: "Ink In Caps",
      location: "Mumbai, India",
      type: "Full-Time",
      summary:
        "Engineered the core web application for KNKY, handling high-volume social feeds, real-time matchmaking, and edge media distribution.",
      milestones: [
        "Built virtualized feeds and media streaming pipelines, keeping interactions smooth at 60 FPS on budget mobile devices.",
        "Engineered resilient bi-directional sync and automatic reconnection logic over volatile mobile networks.",
        "Reduced initial JavaScript bundle size by 40% and maintained 90%+ unit test coverage across core application flows.",
      ],
    },
    {
      period: "Jul 2023 - Feb 2024",
      role: "Software Developer",
      company: "Blodin Pvt. Ltd.",
      location: "Remote",
      type: "Full-Time",
      summary:
        "Built and shipped the complete web app from wireframes to production on schedule.",
      milestones: [
        "Shipped price-tracking tools and product listings using Redux and Zustand state management.",
        "Integrated Node.js backend endpoints and Firebase authentication with zero downtime.",
      ],
    },
    {
      period: "Jan 2023 - Apr 2023",
      role: "Software Developer",
      company: "Tracxn Technologies Ltd.",
      location: "Bangalore, India",
      type: "Full-Time",
      summary:
        "Sped up dashboard load times by 20% using route-level code splitting with React.lazy and Suspense.",
      milestones: [
        "Configured React.lazy and Suspense boundaries to load heavy dashboard routes only on demand.",
        "Built shared design system components that reduced UI bugs and customer support requests by 10%.",
        "Improved search engine indexing using server-rendered React and Next.js.",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology • Electrical Engineering",
      institution: "Bundelkhand Institute of Engineering and Technology (BIET)",
      period: "2018 - 2022",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Masai School",
      period: "Feb 2022 - Nov 2022",
    },
  ];

  return (
    <section
      id="journey"
      className="py-24 md:py-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-[#faf9f6] dark:bg-[#0c0d0f] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-black/[0.08] dark:border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>SECTION 04 // EXPERIENCE & EDUCATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-neutral-900 dark:text-white uppercase tracking-tight">
              Career Journey.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-sm uppercase leading-relaxed">
            4+ years of building web applications, leading engineering teams, and shipping production code.
          </p>
        </div>

        {/* Experience Timeline Rows */}
        <div className="border border-black/[0.08] dark:border-white/[0.08] divide-y divide-black/[0.08] dark:divide-white/[0.08] bg-white dark:bg-[#15171e] shadow-xs">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors duration-300"
            >
              {/* Period & Company Meta */}
              <div className="lg:col-span-4 space-y-2">
                <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                  RECORD // 0{idx + 1}
                </div>
                <div className="text-sm font-mono text-neutral-900 dark:text-neutral-200 font-semibold tracking-wider uppercase">
                  {exp.period}
                </div>
                <div className="text-lg font-bold text-neutral-900 dark:text-white uppercase font-sans">
                  {exp.company}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                  <span>{exp.location}</span>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider border border-black/10 dark:border-white/10 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Role & Achievements */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {exp.summary}
                  </p>
                </div>

                <div className="pt-2 space-y-2.5 border-t border-black/[0.06] dark:border-white/[0.06]">
                  {exp.milestones.map((ms, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-none bg-black dark:bg-white mt-1.5 shrink-0"></span>
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Sub-Ledger */}
        <div className="mt-16 pt-12 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-6">
            ACADEMIC FOUNDATIONS & SPECIALIZED TRAINING
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black/[0.08] dark:border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-black/[0.08] dark:divide-white/[0.08] bg-white dark:bg-[#15171e] shadow-xs">
            {education.map((edu, i) => (
              <div key={i} className="p-6 sm:p-8 space-y-2 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors">
                <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                  {edu.period}
                </div>
                <div className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white uppercase">
                  {edu.degree}
                </div>
                <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 uppercase">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
