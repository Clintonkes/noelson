import { Link } from 'react-router-dom';
import {
  Sprout,
  Phone,
  Check,
  Star,
  Shield,
  Sun,
  Droplets,
  Wind,
  ArrowRight,
  MapPin,
  Award,
  Users,
} from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      {/* Full-Screen Hero with Image Background */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Professional lawn care in a lush green garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/85 via-ocean-900/70 to-ocean-900/50" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gold-500/20 border border-gold-400/40 mb-6">
            <Sprout className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-bold">
              Palm Bay's Trusted Lawn Care Professionals
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
            A Beautiful Lawn,<br />
            <span className="text-gold-400">Without the Work</span>
          </h1>
          <p className="text-lg sm:text-xl text-sand-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            Professional lawn care and landscaping for Palm Bay, FL and all of Brevard County.
            From weekly mowing to full landscape design, we keep your yard looking its best
            year round.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-4 rounded-xl bg-gold-500 text-white font-bold text-base hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/30 flex items-center gap-2"
            >
              Get a Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-2 text-sand-200">
              <Shield className="w-5 h-5 text-gold-400" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sand-200">
              <Award className="w-5 h-5 text-gold-400" />
              <span className="text-sm font-medium">8+ Years in Brevard</span>
            </div>
            <div className="flex items-center gap-2 text-sand-200">
              <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
              <span className="text-sm font-medium">5.0 Customer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Overlapping Hero */}
      <section className="relative -mt-24 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Sun, title: 'Florida Tested', desc: 'Heat & humidity proven methods' },
              { icon: Droplets, title: 'Water Smart', desc: 'Efficient irrigation solutions' },
              { icon: Wind, title: 'Storm Ready', desc: 'Rapid cleanup after storms' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white shadow-xl shadow-ocean-900/10 p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gold-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ocean-900">{item.title}</h3>
                    <p className="text-sm text-sand-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-gold-500 font-bold text-sm uppercase tracking-wider">
                About Noelson LLC
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ocean-900 mt-3 mb-6 leading-tight">
                Your Local Brevard County Lawn Care Team
              </h2>
              <p className="text-sand-600 leading-relaxed mb-4">
                Founded in {business.founded} and based in Palm Bay, FL, Noelson LLC has been
                keeping Brevard County properties beautiful for over 8 years. We know Florida lawns,
                from St. Augustine grass care to tropical landscape design and storm cleanup.
              </p>
              <p className="text-sand-600 leading-relaxed mb-8">
                We're a locally owned company that treats every property like it's our own. Whether
                you need weekly mowing, a complete yard makeover, or emergency storm cleanup, our
                team delivers quality work with a personal touch.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Free estimates', 'Reliable scheduling', 'Residential & commercial', 'Storm cleanup service', 'Fair, upfront pricing', 'Fully insured team'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-gold-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-sand-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-ocean-700 font-bold hover:text-gold-500 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-ocean-900/15">
                <img
                  src="https://images.pexels.com/photos/8143668/pexels-photo-8143668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Beautiful manicured Florida lawn"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 rounded-2xl p-6 text-white shadow-xl hidden sm:block">
                <div className="text-3xl font-extrabold">8+</div>
                <div className="text-sm text-gold-100">Years Serving<br />Brevard County</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-bold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ocean-900 mt-3 mb-4">
              Everything Your Lawn Needs
            </h2>
            <p className="text-sand-600">
              From routine mowing to complete landscape design, we offer a full range of
              professional lawn care services for Florida properties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to="/services"
                  className="group rounded-2xl overflow-hidden bg-sand-50 border border-sand-200 hover:border-gold-300 hover:shadow-xl hover:shadow-ocean-900/5 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-gold-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-ocean-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-sand-600 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-gold-500 group-hover:text-gold-600 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-ocean-800 text-white font-bold hover:bg-ocean-700 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-ocean-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '8+', label: 'Years in Business' },
              { value: '400+', label: 'Lawns Maintained' },
              { value: '8', label: 'Professional Services' },
              { value: '100%', label: 'Satisfaction Goal' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl lg:text-5xl font-extrabold text-gold-400">{stat.value}</div>
                <div className="text-sm text-sand-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-bold text-sm uppercase tracking-wider">
              Why Noelson
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ocean-900 mt-3 mb-4">
              The Florida Lawn Care Difference
            </h2>
            <p className="text-sand-600">
              We're not just another lawn service. We're your Brevard County neighbors who
              understand Florida's unique climate and what it takes to keep your yard thriving.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed and insured for your protection and peace of mind.' },
              { icon: Sun, title: 'Florida Experts', desc: 'We know St. Augustine grass, Florida palms, and tropical plants.' },
              { icon: Users, title: 'Local & Trusted', desc: 'Palm Bay based, serving Brevard County for 8+ years.' },
              { icon: Wind, title: 'Storm Ready', desc: 'Rapid response cleanup after Florida storms and hurricanes.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white border border-sand-200 p-6 hover:shadow-lg hover:shadow-ocean-900/5 transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-ocean-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-sand-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-500 font-bold text-sm uppercase tracking-wider">
              Customer Reviews
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ocean-900 mt-3 mb-4">
              What Our Neighbors Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl bg-sand-50 border border-sand-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sand-700 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-sand-200">
                  <div className="w-11 h-11 rounded-full bg-ocean-700 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-ocean-900 text-sm">{t.name}</div>
                    <div className="text-xs text-sand-500">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-ocean-700 font-bold hover:text-gold-500 transition-colors"
            >
              Read All Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-ocean-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/31732617/pexels-photo-31732617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Florida palm trees"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4">
            Let's Make Your Yard Shine
          </h2>
          <p className="text-sand-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no obligation estimate today. Our team is ready to transform your Palm Bay
            area property into something you'll love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-4 rounded-xl bg-gold-500 text-white font-extrabold text-base hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
            >
              Request a Free Quote
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="px-8 py-4 rounded-xl border-2 border-sand-500 text-white font-bold text-base hover:bg-ocean-800 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-sand-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{business.serviceArea}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
