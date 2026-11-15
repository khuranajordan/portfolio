import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Web Audio API Synthesized Precision Click Sound (Braun / Leica tactile switch feel)
function playTactileClick(toTheme: Theme) {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    // Pitch shift depending on light (higher 900Hz) vs dark (lower 650Hz)
    const freq = toTheme === "dark" ? 650 : 920;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(toTheme === "dark" ? 320 : 1200, ctx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.038);
  } catch {
    // AudioContext blocked or not supported - silently ignore
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("portfolio-theme") as Theme | null;
      if (stored === "light" || stored === "dark") return stored;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    }
    return "light";
  });

  const applyThemeToDOM = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    // Update meta theme-color for mobile safari / chrome status bar
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", newTheme === "dark" ? "#0c0d0f" : "#faf9f6");
    }

    localStorage.setItem("portfolio-theme", newTheme);
  }, []);

  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme, applyThemeToDOM]);

  const toggleTheme = useCallback(
    (e?: React.MouseEvent) => {
      const nextTheme: Theme = theme === "light" ? "dark" : "light";
      playTactileClick(nextTheme);

      // Fancy Circular View Transition Reveal if supported
      const doc = document as unknown as {
        startViewTransition?: (updateCallback: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!doc.startViewTransition || prefersReducedMotion) {
        setThemeState(nextTheme);
        applyThemeToDOM(nextTheme);
        return;
      }

      // Calculate origin of ripple transition
      let x = window.innerWidth - 100;
      let y = 32;

      if (e) {
        x = e.clientX;
        y = e.clientY;
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = doc.startViewTransition(() => {
        setThemeState(nextTheme);
        applyThemeToDOM(nextTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath: nextTheme === "dark" ? clipPath : [...clipPath].reverse(),
          },
          {
            duration: 480,
            easing: "cubic-bezier(0.2, 0, 0, 1)",
            pseudoElement:
              nextTheme === "dark"
                ? "::view-transition-new(root)"
                : "::view-transition-old(root)",
          }
        );
      });
    },
    [theme, applyThemeToDOM]
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      applyThemeToDOM(newTheme);
    },
    [applyThemeToDOM]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
