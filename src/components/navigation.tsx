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
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo/Name */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg md:text-xl font-bold"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          <span className="text-primary">Rohan</span>
          <span>Khurana</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
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
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="lg"
                    className={`justify-start transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}
