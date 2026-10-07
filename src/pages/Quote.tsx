import { useState } from 'react';
import { Check, Phone, Mail, Shield, Star, Calendar, User, Home, MessageSquare, Sprout, Loader2, AlertCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { createBooking } from '@/lib/api';
import { services } from '@/data/services';
import { business } from '@/data/business';
import { pageImages } from '@/config/images';

export default function Quote() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: 'residential',
    lotSize: '',
    frequency: '',
    timeline: '',
    details: '',
  });

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    const notes = [
      form.details,
      form.propertyType ? `Property type: ${form.propertyType}` : '',
      form.timeline ? `Timeline: ${form.timeline}` : '',
    ]
      .map((line) => line.trim())
      .filter(Boolean)
      .join('\n');
    try {
      await createBooking({
        address: form.address,
        name: form.name,
        email: form.email,
        phone: form.phone,
        frequency: form.frequency || undefined,
        service: selectedServices.join(', ') || undefined,
        lawn_size: form.lotSize || undefined,
        notes: notes || undefined,
      });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div>
        <HeroSection
          badge="Quote Request"
          title="Request a Free Estimate"
          subtitle="Fill out the form below and we'll get back to you within 24 hours with a detailed quote."
          image={pageImages.quote.header}
        />
        <section className="py-24 bg-sand-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-extrabold text-ocean-900 mb-4">Estimate Request Received!</h2>
            <p className="text-sand-600 text-lg mb-2">
              Thank you, {form.name}! Your request has been submitted.
            </p>
            <p className="text-sand-600 mb-8">
              We'll review your details and contact you within 24 hours to schedule your free
              on site estimate.
            </p>
            <div className="rounded-2xl bg-white border border-sand-200 p-6 text-left mb-8">
              <h3 className="font-bold text-ocean-900 mb-4">Request Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-sand-500">Services:</span><span className="font-medium text-sand-700 text-right">{selectedServices.join(', ') || 'General inquiry'}</span></div>
                <div className="flex justify-between"><span className="text-sand-500">Property Type:</span><span className="font-medium text-sand-700 capitalize">{form.propertyType}</span></div>
                {form.lotSize && <div className="flex justify-between"><span className="text-sand-500">Lot Size:</span><span className="font-medium text-sand-700">{form.lotSize}</span></div>}
                {form.frequency && <div className="flex justify-between"><span className="text-sand-500">Frequency:</span><span className="font-medium text-sand-700">{form.frequency}</span></div>}
                <div className="flex justify-between"><span className="text-sand-500">Name:</span><span className="font-medium text-sand-700">{form.name}</span></div>
                <div className="flex justify-between"><span className="text-sand-500">Phone:</span><span className="font-medium text-sand-700">{form.phone}</span></div>
                <div className="flex justify-between"><span className="text-sand-500">Address:</span><span className="font-medium text-sand-700 text-right">{form.address}</span></div>
              </div>
            </div>
            <p className="text-sand-500 text-sm mb-6">
              Need to talk sooner? Call us at{' '}
              <a href={`tel:${business.phoneRaw}`} className="text-gold-500 font-bold">
                {business.phone}
              </a>
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setError('');
                setSelectedServices([]);
                setForm({ name: '', email: '', phone: '', address: '', propertyType: 'residential', lotSize: '', frequency: '', timeline: '', details: '' });
              }}
              className="px-6 py-3 rounded-xl border-2 border-ocean-700 text-ocean-800 font-bold hover:bg-ocean-50 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <HeroSection
        badge="Free Estimate"
        title="Request a Free Estimate"
        subtitle="Tell us about your property and what you need. We'll provide a detailed, no obligation quote within 24 hours."
        image={pageImages.quote.header}
      />

      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form - 2 columns */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-sand-200 p-8 lg:p-10 shadow-sm space-y-8">
                {/* Service Selection */}
                <div>
                  <h2 className="text-lg font-extrabold text-ocean-900 mb-1">1. Which services do you need?</h2>
                  <p className="text-sm text-sand-500 mb-4">Select all that apply</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services.map((service) => {
                      const selected = selectedServices.includes(service.title);
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.title)}
                          className={`px-4 py-3.5 rounded-xl border-2 text-left text-sm font-semibold transition-all flex items-center gap-3 ${
                            selected
                              ? 'border-gold-400 bg-gold-50 text-ocean-900'
                              : 'border-sand-200 text-sand-600 hover:border-sand-300'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            selected ? 'border-gold-500 bg-gold-500' : 'border-sand-300'
                          }`}>
                            {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                          </div>
                          {service.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Property Details */}
                <div>
                  <h2 className="text-lg font-extrabold text-ocean-900 mb-1">2. Property details</h2>
                  <p className="text-sm text-sand-500 mb-4">Tell us about your yard</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Property Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['residential', 'commercial'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setForm({ ...form, propertyType: type })}
                            className={`px-3 py-2.5 rounded-xl border-2 text-sm font-semibold capitalize transition-colors ${
                              form.propertyType === type
                                ? 'border-gold-400 bg-gold-50 text-ocean-900'
                                : 'border-sand-200 text-sand-600 hover:border-sand-300'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Lot Size</label>
                      <select
                        value={form.lotSize}
                        onChange={(e) => setForm({ ...form, lotSize: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-sand-200 text-sm text-sand-700 focus:border-gold-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select size...</option>
                        <option value="Small (< ¼ acre)">Small (&lt; ¼ acre)</option>
                        <option value="Medium (¼ - ½ acre)">Medium (¼ - ½ acre)</option>
                        <option value="Large (½ - 1 acre)">Large (½ - 1 acre)</option>
                        <option value="Extra Large (1+ acre)">Extra Large (1+ acre)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Service Frequency</label>
                      <select
                        value={form.frequency}
                        onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-sand-200 text-sm text-sand-700 focus:border-gold-400 focus:outline-none transition-colors"
                      >
                        <option value="">Select frequency...</option>
                        <option value="One-time">One time service</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-weekly">Biweekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Ongoing plan">Ongoing maintenance plan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Timeline</label>
                      <select
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-sand-200 text-sm text-sand-700 focus:border-gold-400 focus:outline-none transition-colors"
                      >
                        <option value="">When do you need it?</option>
                        <option value="ASAP">As soon as possible</option>
                        <option value="Within 2 weeks">Within 2 weeks</option>
                        <option value="Within a month">Within a month</option>
                        <option value="Just exploring">Just exploring options</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-lg font-extrabold text-ocean-900 mb-1">3. Contact information</h2>
                  <p className="text-sm text-sand-500 mb-4">Where can we reach you?</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sand-400" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Phone <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sand-400" />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="(321) 516 4475"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Email <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sand-400" />
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="john@email.com"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-sand-700 mb-2">Street Address <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sand-400" />
                        <input
                          type="text"
                          required
                          value={form.address}
                          onChange={(e) => setForm({ ...form, address: e.target.value })}
                          className="w-full pl-11 pr-4 py-2.5 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors"
                          placeholder="281 Bougainvillea St NW, Palm Bay, FL 32907"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <h2 className="text-lg font-extrabold text-ocean-900 mb-1">4. Additional details</h2>
                  <p className="text-sm text-sand-500 mb-4">Anything else we should know? (Optional)</p>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-sand-400" />
                    <textarea
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      rows={4}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-sand-200 text-sm focus:border-gold-400 focus:outline-none transition-colors resize-none"
                      placeholder="Describe your property, specific needs, or any questions..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 rounded-xl bg-gold-500 text-white font-extrabold text-base hover:bg-gold-400 transition-colors shadow-md shadow-gold-500/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Submit Estimate Request
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-ocean-900 p-6">
                <h3 className="text-white font-bold text-lg mb-4">Why Get a Quote?</h3>
                <ul className="space-y-3">
                  {[
                    '100% free, no obligation',
                    'Detailed on site assessment',
                    'Response within 24 hours',
                    'Honest, upfront pricing',
                    'Customized for your property',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-sand-300">
                      <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-sand-200 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-ocean-600" />
                  <div>
                    <div className="font-bold text-ocean-900 text-sm">Licensed & Insured</div>
                    <div className="text-xs text-sand-500">State of Florida</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-gold-400 fill-gold-400" />
                  <div>
                    <div className="font-bold text-ocean-900 text-sm">5.0 Star Rating</div>
                    <div className="text-xs text-sand-500">From verified customers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Sprout className="w-8 h-8 text-ocean-600" />
                  <div>
                    <div className="font-bold text-ocean-900 text-sm">8+ Years Experience</div>
                    <div className="text-xs text-sand-500">Serving Brevard County</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gold-50 border border-gold-200 p-6 text-center">
                <p className="text-sm text-sand-600 mb-3">Prefer to talk to a person?</p>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gold-500 text-white font-bold hover:bg-gold-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {business.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
