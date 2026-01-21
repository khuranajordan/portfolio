import { ThemeToggle } from '@/components/theme-toggle';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Name */}
        <div
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-primary">Rohan</span>
          <span>Patel</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </button>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
