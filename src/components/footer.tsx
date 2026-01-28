import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-muted/20 backdrop-blur-sm py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">
              <span className="text-primary">Rohan</span> Khurana
            </h3>
            <p className="text-sm text-muted-foreground">
              Senior Frontend Developer specializing in React, TypeScript, and
              modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("about");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("experience");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("projects");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/khuranajordan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/rohan-khurana-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://x.com/Rohank201099"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rohankhurana20@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Let's connect and build something amazing together.
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="tracking-wide">© {currentYear} Rohan Khurana. Crafted with React + TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
