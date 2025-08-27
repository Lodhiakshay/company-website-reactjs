import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-background animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">TechFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="relative text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('about')} className="relative text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('services')} className="relative text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="relative text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('team')} className="relative text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button onClick={() => scrollToSection('careers')} className="relative text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('careers')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Careers
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}