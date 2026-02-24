import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight text-foreground">
              Snezana Kragujevac
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mt-1">
              Portfolio  • FRONTEND DEVELOPER
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://github.com/snezanakg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-base font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex space-x-4 pt-4 border-t border-border">
                <a
                  href="https://github.com/snezanakg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/snezana-k-a03693102/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="mailto:sneza.kragujevac@gmail.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Snezana Kragujevac. All rights reserved.
          </p>

          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/snezanakg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/snezana-k-a03693102/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:sneza.kragujevac@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
              Designed & developed by Snezana Kragujevac
          </p>
        </div>
      </footer>
    </div>
  );
}
