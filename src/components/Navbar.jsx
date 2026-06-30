import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Mission', href: '#mission' },
  { name: 'Programs', href: '#programs' },
  { name: 'Impact', href: '#impact' },
  { name: 'Volunteer', href: '#volunteer' },
  { name: 'Donate', href: '#donate' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-slate-800 dark:text-white">
                Naye<span className="text-primary-600 dark:text-primary-400">Pankh</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <DarkModeToggle />
              </div>
              <a
                href="#donate"
                onClick={(e) => handleNavClick(e, '#donate')}
                className="hidden lg:flex btn-primary text-sm items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <DarkModeToggle />
              <a
                href="#donate"
                onClick={(e) => handleNavClick(e, '#donate')}
                className="btn-primary text-sm flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
