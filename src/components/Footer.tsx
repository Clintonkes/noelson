import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-lg tracking-tight">S Amerix</span>
                <span className="text-rose-400 text-[10px] font-semibold tracking-widest uppercase">Lawn Care</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Premier lawn care and landscape management serving Rancho Mirage
              and the Coachella Valley. Reliable service, exceptional results.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-rose-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-rose-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-rose-400 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-rose-400 transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-rose-400 transition-colors">FAQ</Link></li>
              <li><Link to="/quote" className="hover:text-rose-400 transition-colors">Get a Quote</Link></li>
              <li><Link to="/contact" className="hover:text-rose-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-rose-400 transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-rose-400 transition-colors break-all">{siteConfig.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wide">Business Hours</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-rose-400/60" />
                    {h.day}
                  </span>
                  <span className={h.time === 'Closed' ? 'text-red-400' : 'text-neutral-500'}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Licensed &amp; Insured | Serving the Coachella Valley</p>
        </div>
      </div>
    </footer>
  );
}
