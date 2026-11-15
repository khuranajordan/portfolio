import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function SantalHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ["philosophy", "works", "spec", "journey", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Philosophy", href: "#philosophy", id: "philosophy" },
    { label: "Works", href: "#works", id: "works" },
    { label: "Specification", href: "#spec", id: "spec" },
    { label: "Journey", href: "#journey", id: "journey" },
    { label: "Enquire", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf9f6]/95 dark:bg-[#0c0d0f]/95 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] shadow-xs"
          : "bg-transparent border-b border-black/[0.05] dark:border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand: Clean Avatar + Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group text-[#121316] dark:text-[#f4f4f6]"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800 shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-200">
              <img
                src="/bitmoji.png"
                alt="Rohan Khurana"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase font-sans text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors">
              Rohan Khurana
            </span>
          </a>

          {/* Desktop Nav + Theme Switcher */}
          <div className="hidden md:flex items-center gap-7">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`group relative py-1 text-xs font-mono tracking-wider uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-black dark:text-white font-semibold"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[1.5px] bg-black dark:bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full opacity-60"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Architectural Theme Switcher */}
            <div className="pl-2 border-l border-black/10 dark:border-white/10">
              <ThemeToggle variant="pill" />
            </div>
          </div>

          {/* Mobile Right Bar: Compact Theme Toggle + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle variant="compact" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf9f6] dark:bg-[#0c0d0f] border-b border-black/[0.08] dark:border-white/[0.08] px-6 py-6 space-y-4 shadow-md animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white py-1.5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">
              Lighting Calibration
            </span>
            <ThemeToggle variant="pill" />
          </div>
        </div>
      )}
    </header>
  );
}
