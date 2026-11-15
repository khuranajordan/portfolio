import { ArrowUp, ArrowUpRight, Github, Linkedin } from "lucide-react";

export function SantalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-[#f0eee9] dark:bg-[#08090b] text-[#121316] dark:text-[#f4f4f6] pt-24 pb-16 border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-black/[0.08] dark:border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-black dark:bg-white"></span>
              <span>SECTION 05 // ENQUIRIES & DISCUSSIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-sans text-neutral-900 dark:text-white uppercase tracking-tight">
              Let's Connect.
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 max-w-xs uppercase leading-relaxed">
            Open for software developer roles, technical team leadership, and real-time web applications.
          </div>
        </div>

        {/* Contact Grid: 3 Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/[0.08] dark:border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-black/[0.08] dark:divide-white/[0.08] bg-white dark:bg-[#15171e] shadow-xs">
          {/* Column 1: Direct Contact */}
          <div className="p-8 space-y-6 flex flex-col justify-between hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                01 // DIRECT CHANNELS
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
                Direct Enquiries
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mb-1">
                  Electronic Mail
                </div>
                <a
                  href="mailto:rohankhurana20@gmail.com"
                  className="text-sm font-mono text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white font-medium flex items-center gap-2 group transition-colors"
                >
                  <span>rohankhurana20@gmail.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
              </div>

              <div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mb-1">
                  Telephone / WhatsApp
                </div>
                <a
                  href="tel:+919899394489"
                  className="text-sm font-mono text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white font-medium flex items-center gap-2 group transition-colors"
                >
                  <span>+91-9899394489</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Response Window &lt; 24h</span>
            </div>
          </div>

          {/* Column 2: Networks & Source Code */}
          <div className="p-8 space-y-6 flex flex-col justify-between hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                02 // VERIFIED PROFILES
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
                Networks & Code
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mb-1">
                  Source Repositories
                </div>
                <a
                  href="https://github.com/khuranajordan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white font-medium flex items-center gap-2 group transition-colors"
                >
                  <Github className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  <span>github.com/khuranajordan</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
              </div>

              <div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mb-1">
                  Professional Network
                </div>
                <a
                  href="https://linkedin.com/in/rohan-khurana-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white font-medium flex items-center gap-2 group transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  <span>linkedin.com/in/rohan-khurana-india</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
              OPEN SOURCE // PRODUCTION REPOSITORIES
            </div>
          </div>

          {/* Column 3: Geolocation */}
          <div className="p-8 space-y-6 flex flex-col justify-between hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase">
                03 // OPERATIONAL BASE
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-tight">
                Mumbai, India
              </h3>
            </div>

            <div className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <p>Coordinates: 19.0760° N, 72.8777° E</p>
              <p>Standard Timezone: UTC +05:30 (IST)</p>
              <p>Work Mode: Hybrid / Global Remote</p>
            </div>

            <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
              AVAILABLE FOR FULL-TIME ROLES
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div>
            © {new Date().getFullYear()} ROHAN KHURANA. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <div className="w-5 h-5 border border-black/20 dark:border-white/20 rounded-full flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
