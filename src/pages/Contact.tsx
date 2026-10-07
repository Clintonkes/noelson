import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check, MessageSquare, User, Navigation, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { createContact } from '@/lib/api';
import { business } from '@/data/business';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      await createContact({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <HeroSection
        badge="Contact Us"
        title="We're Here to Help"
        subtitle="Questions about our services? Need to schedule something? Reach out and we'll get back to you fast."
        image="https://images.pexels.com/photos/4469146/pexels-photo-4469146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href={`tel:${business.phoneRaw}`}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border-2 border-sand-200 hover:border-gold-400 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-ocean-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-extrabold text-ocean-900 text-lg mb-1">Call Us</h3>
              <p className="text-sand-500 text-sm mb-2">Fastest response</p>
              <p className="text-gold-500 font-bold">{business.phone}</p>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="group flex flex-col items-center text-center p-8 rounded-2xl border-2 border-sand-200 hover:border-gold-400 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-ocean-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-extrabold text-ocean-900 text-lg mb-1">Email Us</h3>
              <p className="text-sand-500 text-sm mb-2">We reply within 24 hours</p>
              <p className="text-gold-500 font-bold text-sm break-all">{business.email}</p>
            </a>

            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-sand-200">
              <div className="w-14 h-14 rounded-2xl bg-ocean-700 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-extrabold text-ocean-900 text-lg mb-1">Visit Us</h3>
              <p className="text-sand-500 text-sm mb-2">{business.address.city}, {business.address.state}</p>
              <p className="text-gold-500 font-bold text-sm">{business.address.full}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Message Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white border border-sand-200 p-8 lg:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <h2 className="text-2xl font-extrabold text-ocean-900 mb-3">Message Sent!</h2>
                    <p className="text-sand-600 mb-6">
                      Thanks for reaching out, {form.name}. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setError('');
                        setForm({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-3 rounded-xl border-2 border-ocean-700 text-ocean-800 font-bold hover:bg-ocean-50 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-ocean-100 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-ocean-700" />
                      </div>
                      <h2 className="text-xl font-extrabold text-ocean-900">Send Us a Message</h2>
                    </div>
                    <p className="text-sm text-sand-500 mb-6">
                      Have a question or comment? Fill out the form and we'll respond as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-sand-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sand-400" />
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-sand-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sand-400" />
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                            placeholder="john@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-sand-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-sand-200 text-sm text-sand-700 focus:border-gold-400 focus:outline-none transition-colors"
                        >
                          <option value="">Choose a topic...</option>
                          <option value="General Question">General Question</option>
                          <option value="Service Inquiry">Service Inquiry</option>
                          <option value="Scheduling">Scheduling Request</option>
                          <option value="Existing Customer">Existing Customer - Need Help</option>
                          <option value="Billing">Billing Question</option>
                          <option value="Feedback">Feedback / Review</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-sand-700 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors resize-none"
                          placeholder="Type your message here..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full px-6 py-4 rounded-xl bg-ocean-800 text-white font-bold hover:bg-ocean-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      {error && (
                        <div className="flex items-start gap-3 rounded-xl bg-gold-50 border border-gold-200 p-4">
                          <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gold-800 font-medium">{error}</p>
                        </div>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hours */}
              <div className="rounded-2xl bg-ocean-900 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Business Hours</h3>
                </div>
                <ul className="space-y-2.5">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm items-center">
                      <span className="text-sand-400">{h.day}</span>
                      <span className={`font-bold ${h.time === 'Closed' ? 'text-red-300' : 'text-gold-400'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-2xl bg-white border border-sand-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-ocean-900 text-lg">Find Us</h3>
                </div>
                <div className="rounded-xl overflow-hidden border border-sand-200 mb-4">
                  <iframe
                    title="Noelson LLC location"
                    src="https://www.google.com/maps?q=281+Bougainvillea+St+NW+Palm+Bay+FL+32907&output=embed"
                    className="w-full h-48"
                    loading="lazy"
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold-500 hover:text-gold-600 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>

              {/* Quote CTA */}
              <div className="rounded-2xl bg-gold-50 border border-gold-200 p-6">
                <h3 className="font-bold text-ocean-900 text-lg mb-2">Looking for a Price?</h3>
                <p className="text-sm text-sand-600 mb-4">
                  If you're ready for a free estimate, our quote form is the fastest way to get one.
                </p>
                <Link
                  to="/quote"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gold-500 text-white font-bold hover:bg-gold-400 transition-colors"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
