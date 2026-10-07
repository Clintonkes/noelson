import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star } from 'lucide-react';
import { business } from '@/data/business';
import logo from '@/assets/noelson-logo.svg';

const serviceLinks = ['Lawn Mowing & Edging', 'Landscape Design', 'Palm Tree Trimming', 'Irrigation Services', 'Pest & Weed Control', 'Maintenance Plans'];
const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Project Gallery' },
  { to: '/testimonials', label: 'Customer Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/quote', label: 'Request a Quote' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Noelson LLC logo" className="w-11 h-11 rounded-xl" />
              <span className="flex flex-col leading-none">
                <span className="text-ocean-900 font-extrabold text-lg">Noelson LLC</span>
                <span className="text-gold-600 text-[10px] font-bold uppercase tracking-[0.16em] mt-1">
                  Lawn & Landscaping
                </span>
              </span>
            </div>
            <p className="text-sm text-sand-600 leading-relaxed mb-5">
              Professional lawn care and landscaping for Palm Bay, FL and surrounding Brevard
              County. Florida friendly, storm ready, and built for the Sunshine State.
            </p>
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
              <span className="ml-1 text-sm text-sand-500">5.0 from 8+ reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={business.social.facebook}
                className="w-9 h-9 rounded-xl bg-white border border-sand-200 flex items-center justify-center text-ocean-800 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={business.social.instagram}
                className="w-9 h-9 rounded-xl bg-white border border-sand-200 flex items-center justify-center text-ocean-800 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-ocean-900 font-bold text-sm tracking-wider mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link to="/services" className="text-sand-600 hover:text-gold-600 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ocean-900 font-bold text-sm tracking-wider mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sand-600 hover:text-gold-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-ocean-900 font-bold text-sm tracking-wider mb-5">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <span className="text-sand-600">{business.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <a href={`tel:${business.phoneRaw}`} className="text-sand-600 hover:text-gold-600 transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <a href={`mailto:${business.email}`} className="text-sand-600 hover:text-gold-600 transition-colors break-all">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <div className="text-sand-600">
                  <p>Mon to Fri: 7:00 AM to 6:00 PM</p>
                  <p>Saturday: 8:00 AM to 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-sand-500">
            © {new Date().getFullYear()} Noelson LLC. All rights reserved.
          </p>
          <p className="text-sm text-sand-500">Licensed & Insured in Florida</p>
        </div>
      </div>
    </footer>
  );
}