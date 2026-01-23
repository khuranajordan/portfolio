import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Navigation() {
  const [open, setOpen] = useState(false);

  const sectionIds = [
    "hero",
    "about",
    "experience",
    "skills",
    "projects",
    "contact",
  ];
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60`">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Name */}
        <div
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <span className="text-primary">Rohan</span>
          <span>Khurana</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`relative group transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'hover:text-primary hover:bg-primary/5'
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              {/* Active underline */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {/* Hover arrow */}
              <motion.span
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ↓
              </motion.span>
            </Button>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-lg font-medium transition-colors text-left relative ${
                      activeSection === item.id
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-full" />
                    )}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
