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
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.id
                  ? "text-primary"
                  : "hover:text-primary"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-5.25 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

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
