import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, Clock, Facebook, Instagram, Star, ArrowRight } from 'lucide-react';
import { business } from '@/data/business';

export default function Footer() {
  return (
    <footer className="bg-olive-950 text-sand-300">
      {/* CTA strip */}
      <div className="bg-clay-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-lg text-center sm:text-left">
            Ready for a beautiful lawn? Get your free estimate today.
          </p>
          <div className="flex gap-3">
            <Link
              to="/quote"
              className="px-6 py-2.5 rounded-lg bg-white text-clay-500 font-bold hover:bg-sand-100 transition-colors flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="px-6 py-2.5 rounded-lg border-2 border-white text-white font-bold hover:bg-clay-400 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-olive-800 flex items-center justify-center">
                <Sprout className="w-6 h-6 text-clay-400" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-lg">Noelson LLC</span>
                <span className="text-clay-400 text-xs font-semibold tracking-wider uppercase">
                  Lawn & Landscaping
                </span>
              </div>
            </div>
            <p className="text-sm text-sand-400 leading-relaxed mb-4">
              Professional lawn care and landscaping for Palm Bay, FL and surrounding Brevard
              County. Florida-friendly, storm-ready, and built for the Sunshine State.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-clay-400 text-clay-400" />
              ))}
              <span className="ml-2 text-sm text-sand-400">5.0 from 8+ reviews</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href={business.social.facebook} className="w-9 h-9 rounded-lg bg-olive-800 flex items-center justify-center hover:bg-clay-500 text-sand-300 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={business.social.instagram} className="w-9 h-9 rounded-lg bg-olive-800 flex items-center justify-center hover:bg-clay-500 text-sand-300 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-sand-400 hover:text-clay-400 transition-colors">Lawn Mowing & Edging</Link></li>
              <li><Link to="/services" className="text-sand-400 hover:text-clay-400 transition-colors">Landscape Design</Link></li>
              <li><Link to="/services" className="text-sand-400 hover:text-clay-400 transition-colors">Palm Tree Trimming</Link></li>
              <li><Link to="/services" className="text-sand-400 hover:text-clay-400 transition-colors">Irrigation Services</Link></li>
              <li><Link to="/services" className="text-sand-400 hover:text-clay-400 transition-colors">Pest & Weed Control</Link></li>
              <li><Link to="/services" className="text-sand-400 hover:text-clay-400 transition-colors">Maintenance Plans</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-sand-400 hover:text-clay-400 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-sand-400 hover:text-clay-400 transition-colors">Project Gallery</Link></li>
              <li><Link to="/testimonials" className="text-sand-400 hover:text-clay-400 transition-colors">Customer Reviews</Link></li>
              <li><Link to="/faq" className="text-sand-400 hover:text-clay-400 transition-colors">FAQ</Link></li>
              <li><Link to="/quote" className="text-sand-400 hover:text-clay-400 transition-colors">Request a Quote</Link></li>
              <li><Link to="/contact" className="text-sand-400 hover:text-clay-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clay-400 flex-shrink-0 mt-0.5" />
                <span className="text-sand-400">{business.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clay-400 flex-shrink-0" />
                <a href={`tel:${business.phoneRaw}`} className="text-sand-400 hover:text-clay-400 transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-clay-400 flex-shrink-0" />
                <a href={`mailto:${business.email}`} className="text-sand-400 hover:text-clay-400 transition-colors break-all">
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-clay-400 flex-shrink-0 mt-0.5" />
                <div className="text-sand-400">
                  <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-olive-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-sand-500 text-center">
            © {new Date().getFullYear()} Noelson LLC. All rights reserved. Licensed & Insured in Florida.
          </p>
        </div>
      </div>
    </footer>
  );
}