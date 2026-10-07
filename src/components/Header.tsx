import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { business } from '@/data/business';
import logo from '@/assets/noelson-logo.svg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-sand-900/5'
          : 'bg-white'
      }`}
    >
      <div className="border-b border-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Noelson LLC logo"
              className="w-12 h-12 rounded-2xl group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-none">
              <span className="text-sand-900 font-extrabold text-xl tracking-tight">Noelson LLC</span>
              <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
                Lawn Care & Landscaping
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-gold-500 bg-gold-50'
                      : 'text-sand-600 hover:text-gold-500 hover:bg-sand-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 rounded-lg border-2 border-ocean-700 text-ocean-800 font-bold text-sm hover:bg-ocean-50 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="ml-1 px-5 py-2.5 rounded-lg bg-gold-500 text-white font-bold text-sm hover:bg-gold-400 transition-colors shadow-md shadow-gold-500/20"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-sand-900 p-2 rounded-lg hover:bg-sand-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-sand-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-gold-500 bg-gold-50'
                      : 'text-sand-600 hover:text-gold-500 hover:bg-sand-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-2">
              <Link
                to="/contact"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-ocean-700 text-ocean-800 font-bold text-center hover:bg-ocean-50 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/quote"
                className="flex-1 px-4 py-3 rounded-lg bg-gold-500 text-white font-bold text-center hover:bg-gold-400 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-4 py-3 text-gold-500 font-bold"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
