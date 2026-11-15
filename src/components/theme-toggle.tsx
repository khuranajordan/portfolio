import { useTheme } from "@/context/theme-context";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "pill" | "compact" | "floating";
}

export function ThemeToggle({ className = "", variant = "pill" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "compact") {
    return (
      <button
        onClick={(e) => toggleTheme(e)}
        type="button"
        aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
        className={`relative p-2 rounded-full border transition-all duration-300 focus:outline-hidden focus:ring-1 focus:ring-black dark:focus:ring-white ${
          isDark
            ? "bg-neutral-900 border-white/15 text-yellow-400 hover:border-white/30"
            : "bg-white border-black/10 text-neutral-800 hover:border-black/25"
        } ${className}`}
      >
        <div className="relative w-4 h-4 overflow-hidden">
          <Sun
            className={`w-4 h-4 absolute inset-0 transition-transform duration-500 ${
              isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-amber-600"
            }`}
          />
          <Moon
            className={`w-4 h-4 absolute inset-0 transition-transform duration-500 ${
              isDark ? "rotate-0 scale-100 opacity-100 text-sky-400" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      type="button"
      aria-label={`Switch architectural lighting: currently ${isDark ? "Nocturne" : "Daylight"}`}
      className={`group relative flex items-center gap-2.5 px-2.5 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase transition-all duration-300 select-none cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-black dark:focus:ring-white ${
        isDark
          ? "bg-[#161820] border-white/15 hover:border-white/30 text-neutral-300 shadow-inner"
          : "bg-white border-black/10 hover:border-black/25 text-neutral-700 shadow-xs"
      } ${className}`}
    >
      {/* Sliding Mechanical Capsule Indicator */}
      <div
        className={`relative flex items-center justify-center w-5 h-5 rounded-full transition-all duration-400 ease-out ${
          isDark ? "bg-white/10 text-sky-300 rotate-180" : "bg-black/5 text-amber-600 rotate-0"
        }`}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-sky-400 animate-in fade-in zoom-in duration-200" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500 animate-in fade-in zoom-in duration-200" />
        )}
      </div>

      {/* Architectural Lighting Calibration Label */}
      <div className="flex items-center gap-1.5 pr-1 font-mono text-[10px] tracking-widest">
        <span
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
            isDark ? "bg-sky-400 animate-pulse" : "bg-amber-500"
          }`}
        />
        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
          {isDark ? "2700K" : "5600K"}
        </span>
        <span className="text-neutral-400 dark:text-neutral-500 hidden sm:inline">
          {isDark ? "NOCTURNE" : "DAYLIGHT"}
        </span>
      </div>
    </button>
  );
}
