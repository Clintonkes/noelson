import { Link } from 'react-router-dom';
import {
  Heart, ShieldCheck, Sparkles, Users, ArrowRight, Phone, MapPin,
  CheckCircle2, Award, Truck, Clock,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { siteConfig } from '@/config/site';
import { pageImages } from '@/config/images';


const values = [
  { icon: Heart, title: 'Local Pride', description: 'We are part of the Coachella Valley community. Every property we care for reflects our pride in our home.' },
  { icon: ShieldCheck, title: 'Reliability', description: 'We show up on schedule, every time. Consistent, dependable service you can count on.' },
  { icon: Sparkles, title: 'Quality First', description: 'From clean mowing lines to spotless cleanup, we sweat the details so your property always looks its best.' },
  { icon: Users, title: 'Customer Care', description: 'We listen, communicate, and stand behind our work. Your satisfaction drives everything we do.' },
];

const stats = [
  { value: '300+', label: 'Properties Served' },
  { value: '5+', label: 'Years in Business' },
  { value: '4.9', label: 'Average Rating' },
  { value: String(siteConfig.serviceAreas.length), label: 'Areas Served' },
];

export default function About() {
  return (
    <div>
      <PageHeader
        title="About S Amerix"
        subtitle="Locally owned, community-driven lawn care serving Rancho Mirage and the Coachella Valley."
        breadcrumb="About"
        image={pageImages.about.header}
      />

      {/* Story - Text left, image right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-600 font-bold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2 mb-6">
                Built on Quality and Community Trust
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  S Amerix LLC was founded in Rancho Mirage with a simple mission:
                  provide lawn care that Coachella Valley property owners can
                  actually rely on. We saw too many homeowners frustrated by
                  inconsistent crews, poor quality, and companies that did not
                  understand the demands of desert landscaping.
                </p>
                <p>
                  We built our business one property at a time, earning trust
                  through consistent, high-quality service. From weekly mowing
                  to full property maintenance, we have grown our offerings to
                  meet the real needs of our community.
                </p>
                <p>
                  Today, we serve hundreds of properties across Rancho Mirage,
                  Palm Desert, Palm Springs, and beyond. But we have never lost
                  the personal touch that earned us our reputation. When you
                  call S Amerix, you are working with a team that genuinely
                  cares about your property.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={pageImages.about.team} decoding="async" alt="S Amerix team at work" className="w-full h-[450px] object-cover" />
              </div>
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-2xl px-5 py-3 shadow-xl hidden md:block">
                <p className="text-2xl font-extrabold">5+ Years</p>
                <p className="text-xs font-medium">In the Coachella Valley</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-extrabold mb-1">{stat.value}</p>
                <p className="text-rose-100 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - 2x2 grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-bold text-sm uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2 mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-7 border border-neutral-100 hover:shadow-lg transition-shadow duration-300 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2 mb-4">The S Amerix Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: 'Professional Results', text: 'Experienced crew and professional equipment deliver a clean, polished look every visit.' },
              { icon: Clock, title: 'Dependable Scheduling', text: 'We arrive on schedule and communicate clearly. No guessing when your service will happen.' },
              { icon: Truck, title: 'All Equipment Provided', text: 'We bring everything needed to get the job done right. You do not lift a finger.' },
              { icon: CheckCircle2, title: 'Complete Cleanup', text: 'We leave your property spotless. Clippings, leaves, and debris are always cleaned up.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl relative">
            <img src={pageImages.about.area} decoding="async" alt="Service area" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 to-neutral-950/30 flex items-center">
              <div className="px-8 md:px-16 max-w-lg">
                <h2 className="text-3xl font-extrabold text-white mb-4">Areas We Serve</h2>
                <p className="text-neutral-200 mb-5">
                  Proudly serving Rancho Mirage and the surrounding Coachella Valley communities.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {siteConfig.serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-neutral-200 text-sm">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      {area}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Check Your Area <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-rose-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Let&apos;s Transform Your Property</h2>
          <p className="text-rose-100 mb-8">Join hundreds of satisfied customers who trust S Amerix with their lawn care needs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote" className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2">
              <Phone className="w-5 h-5" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
