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
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-sand-50/95 backdrop-blur-sm border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Noelson LLC logo"
            className="w-9 h-9 rounded-xl group-hover:scale-105 transition-transform"
          />
          <span className="flex flex-col leading-none">
            <span className="text-ocean-900 font-extrabold text-lg tracking-tight">Noelson</span>
            <span className="text-gold-600 text-[10px] font-bold uppercase tracking-[0.18em] mt-1">
              Lawn & Landscaping
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-gold-500 after:transition-all ${
                  isActive
                    ? 'text-ocean-900 after:w-full'
                    : 'text-sand-600 hover:text-ocean-900 after:w-0'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-ocean-900 hover:text-gold-600 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-600" />
            <span className="hidden xl:inline">{business.phone}</span>
          </a>
          <Link
            to="/quote"
            className="px-5 py-2.5 rounded-full bg-gold-500 text-white text-sm font-bold hover:bg-gold-400 transition-colors shadow-sm shadow-gold-500/30"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-ocean-900 p-2 rounded-lg hover:bg-sand-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-sand-200 bg-sand-50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-ocean-900 bg-white'
                      : 'text-sand-600 hover:text-ocean-900 hover:bg-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-4 py-3 text-ocean-900 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              {business.phone}
            </a>
            <Link
              to="/quote"
              className="block px-4 py-3 rounded-full bg-gold-500 text-white font-bold text-center text-sm hover:bg-gold-400 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}