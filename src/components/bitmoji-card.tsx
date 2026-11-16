import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface FloatingParticle {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

export function BitmojiCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [clickCount, setClickCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [manualMessage, setManualMessage] = useState<string | null>(null);
  const [isBouncing, setIsBouncing] = useState(false);

  // Global window scroll tracking across the hero visibility range (0px to 450px)
  const { scrollY } = useScroll();
  const rawProgress = useTransform(scrollY, [0, 450], [0, 1], { clamp: true });

  // Spring physics to make the scroll reaction feel elastic and organic
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.4,
  });

  // Parallax translation, rotation tilt, and scale while scrolling
  const yParallax = useTransform(smoothProgress, [0, 1], [0, -28]);
  const avatarRotate = useTransform(smoothProgress, [0, 0.35, 0.7, 1], [0, 5, -4, 2]);
  const avatarScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.04, 0.96]);

  // Dynamic reaction message based on scroll progress
  const [scrollStage, setScrollStage] = useState<number>(0);

  // Viewport-relative scroll stage listener
  useEffect(() => {
    const handleScroll = () => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (rect.top >= 220) {
        setScrollStage(0);
      } else if (rect.top > 80) {
        setScrollStage(1);
      } else {
        setScrollStage(2);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reaction messages for scroll stages
  const reactionStages = [
    { text: "👋 Hey there!" },
    { text: "👀 Keep scrolling!" },
    { text: "↓ Check out my work" },
  ];

  // Mouse tilt tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const smoothRotateX = useSpring(mousePos.y * -10, { stiffness: 220, damping: 22 });
  const smoothRotateY = useSpring(mousePos.x * 10, { stiffness: 220, damping: 22 });

  // Click burst reaction
  const clickEmojis = ["🚀", "⚡", "✨", "🔥", "💻", "🎉"];
  const clickPhrases = [
    "🚀 Let's build together!",
    "⚡ 60 FPS in production",
    "✨ Clean architecture",
    "💻 React 19 & Next.js",
  ];

  const handleCardClick = (e?: React.MouseEvent<HTMLDivElement>) => {
    setClickCount((c) => c + 1);
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 600);

    const rect = cardRef.current?.getBoundingClientRect();
    const clickX = rect && e?.clientX ? e.clientX - rect.left : 120;
    const clickY = rect && e?.clientY ? e.clientY - rect.top : 120;

    // Spawn 5 floating particles
    const newParticles: FloatingParticle[] = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      emoji: clickEmojis[Math.floor(Math.random() * clickEmojis.length)],
      x: clickX + (Math.random() - 0.5) * 70,
      y: clickY - 20 - Math.random() * 35,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // Show temporary custom message
    const nextPhrase = clickPhrases[clickCount % clickPhrases.length];
    setManualMessage(nextPhrase);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1100);

    setTimeout(() => {
      setManualMessage(null);
    }, 2400);
  };

  const activeMessage = manualMessage || reactionStages[scrollStage].text;

  return (
    <motion.div
      ref={cardRef}
      style={{
        y: yParallax,
        rotateX: isHovered ? smoothRotateX : 0,
        rotateY: isHovered ? smoothRotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      onTap={() => handleCardClick()}
      whileTap={{ scale: 0.98 }}
      className="w-full max-w-sm bg-white dark:bg-[#15171e] border border-black/[0.08] dark:border-white/[0.08] p-6 shadow-sm flex flex-col items-center text-center relative group hover:border-black/20 dark:hover:border-white/25 transition-colors duration-300 cursor-pointer select-none"
    >
      {/* Floating Particles Container */}
      <div className="absolute inset-0 pointer-events-none overflow-visible z-30">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 1, scale: 0.6, x: p.x, y: p.y }}
              animate={{
                opacity: 0,
                scale: 1.5,
                y: p.y - 80 - Math.random() * 40,
                x: p.x + (Math.random() - 0.5) * 60,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute text-xl pointer-events-none"
            >
              {p.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Dynamic Reaction Speech Bubble */}
      <div className="absolute -top-4 right-4 z-20">
        <AnimatePresence>
          <motion.div
            key={activeMessage}
            data-testid="bitmoji-reaction"
            initial={{ opacity: 0, scale: 0.85, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -6 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="px-3 py-1 bg-[#121316] dark:bg-white text-white dark:text-[#121316] text-[11px] font-mono tracking-wide rounded-full shadow-md flex items-center gap-1.5 border border-white/20 dark:border-black/10"
          >
            <span>{activeMessage}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bitmoji Portrait Container with Scroll & Click Reactions */}
      <motion.div
        style={{
          rotate: avatarRotate,
          scale: avatarScale,
        }}
        animate={
          isBouncing
            ? { scale: [1, 0.92, 1.12, 0.98, 1], rotate: [0, -6, 6, -3, 0] }
            : { y: isHovered ? [0, -3, 0] : [0, -2, 0] }
        }
        transition={
          isBouncing
            ? { duration: 0.55, ease: "easeInOut" }
            : {
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/10 mb-5 shadow-inner"
      >
        <motion.img
          src="/bitmoji.png"
          alt="Rohan Khurana Bitmoji Avatar"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* Brand Tag */}
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/75 dark:bg-black/90 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider rounded-md flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-amber-300" />
          <span>Rohan.dev</span>
        </div>

        {/* Micro-hint on hover */}
        <div className="absolute bottom-2 inset-x-2 py-0.5 bg-black/60 dark:bg-black/75 backdrop-blur-xs text-white text-[9px] font-mono uppercase tracking-wider rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Click to React
        </div>
      </motion.div>

      {/* Identity & Status */}
      <div className="space-y-1 mb-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight font-sans">
          Rohan Khurana
        </h2>
        <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          Software Developer & Team Lead
        </p>
        <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          Ink In Caps • Mumbai, India
        </p>
      </div>

      {/* Status Indicator */}
      <div className="w-full pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
        <span className="text-neutral-500 dark:text-neutral-400">Status</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Open to Opportunities
        </span>
      </div>
    </motion.div>
  );
}
