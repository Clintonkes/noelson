import { Link } from 'react-router-dom';
import {
  Phone,
  Check,
  Star,
  Shield,
  Sun,
  Wind,
  Users,
  Award,
  ArrowRight,
  MapPin,
  Quote,
} from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { pageImages } from '@/config/images';

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const topReview = testimonials[0];
  const trustItems = [
    { icon: Shield, label: 'Licensed & Insured' },
    { icon: Award, label: '8+ Years in Brevard' },
    { icon: Star, label: '5.0 Customer Rating' },
  ];

  return (
    <div>
      {/* Editorial Split Hero */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">
                Palm Bay, FL • Lawn Care & Landscaping
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ocean-900 leading-[1.08] tracking-tight mb-6">
              A beautiful lawn,
              <br />
              <span className="text-gold-600">without the work.</span>
            </h1>
            <p className="text-lg text-sand-700 leading-relaxed mb-8 max-w-xl">
              Professional lawn care and landscaping for Palm Bay, FL and all of Brevard County.
              From weekly mowing to full landscape design, we keep your yard looking its best
              year round.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold-500 text-white font-bold hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/30"
              >
                Get a Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-sand-300 text-ocean-900 font-bold hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {business.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2 text-sand-700">
                    <Icon className="w-5 h-5 text-gold-600" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-ocean-900/15 border border-sand-200">
              <img
                src={pageImages.home.hero}
                alt="Lush Florida landscape with palms"
                className="w-full h-[460px] lg:h-[560px] object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-4 bg-ocean-900 text-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-2.5">
              <Award className="w-5 h-5 text-gold-400" />
              <div>
                <div className="font-extrabold leading-none">8+ Years</div>
                <div className="text-xs text-sand-300 mt-1">In Brevard County</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-ocean-900/10 p-5 flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div>
                <div className="font-extrabold text-ocean-900 text-xl leading-none">5.0</div>
                <div className="text-xs text-sand-500 mt-1">8+ happy clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services as Numbered Rows */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-ocean-900 tracking-tight">
                Everything Your Lawn Needs
              </h2>
            </div>
            <p className="text-sand-600 max-w-sm leading-relaxed">
              From routine mowing to complete landscape design, we offer a full range of
              professional lawn care services for Florida properties.
            </p>
          </div>

          <div className="rounded-3xl border border-sand-200 bg-sand-50 divide-y divide-sand-200 overflow-hidden">
            {featuredServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to="/services"
                  className="group flex items-center gap-x-5 gap-y-1 px-5 sm:px-8 py-5 sm:py-6 transition-colors hover:bg-white"
                >
                  <span className="hidden sm:block w-10 text-gold-500 font-extrabold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-ocean-900">
                    <Icon className="w-5 h-5 text-gold-400" strokeWidth={2} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-ocean-900">{service.title}</span>
                    <span className="hidden md:block text-sm text-sand-600 mt-1">
                      {service.shortDescription}
                    </span>
                  </span>
                  <ArrowRight className="w-5 h-5 text-sand-400 group-hover:text-gold-500 shrink-0 transition-colors" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-ocean-800 hover:text-gold-600 transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wide Stats Band */}
      <section className="bg-sand-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-ocean-950 px-8 py-12 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center">
              {[
                { value: '8+', label: 'Years in Business' },
                { value: '400+', label: 'Lawns Maintained' },
                { value: '8', label: 'Professional Services' },
                { value: '100%', label: 'Satisfaction Goal' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl lg:text-5xl font-extrabold text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-sand-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-500" />
              <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">
                Why Noelson
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ocean-900 tracking-tight">
              The Florida Lawn Care Difference
            </h2>
            <p className="text-sand-600 mt-4 leading-relaxed">
              We're your Brevard County neighbors who understand Florida's unique climate and
              what it takes to keep your yard thriving.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  className="rounded-3xl bg-sand-50 border border-sand-200 p-8 hover:shadow-lg hover:shadow-ocean-900/5 hover:border-gold-300 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-ocean-800 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-gold-400" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-ocean-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-sand-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-sand-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-ocean-900/15 border border-sand-200">
              <img
                src={pageImages.home.about}
                alt="Manicured Florida lawn cared for by Noelson"
                className="w-full h-[420px] lg:h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl shadow-ocean-900/10 px-6 py-4">
              <div className="text-2xl font-extrabold text-gold-600 leading-none">8+</div>
              <div className="text-xs text-sand-500 mt-1">Years in Brevard County</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-gold-500" />
              <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">
                About Noelson LLC
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ocean-900 tracking-tight mb-6">
              Your Local Brevard County Lawn Care Team
            </h2>
            <p className="text-sand-700 leading-relaxed mb-4">
              Founded in {business.founded} and based in Palm Bay, FL, Noelson LLC has been
              keeping Brevard County properties beautiful for over 8 years. We know Florida
              lawns, from St. Augustine grass care to tropical landscape design and storm
              cleanup.
            </p>
            <p className="text-sand-700 leading-relaxed mb-8">
              We're a locally owned company that treats every property like it's our own.
              Whether you need weekly mowing, a complete yard makeover, or emergency storm
              cleanup, our team delivers quality work with a personal touch.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
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
              className="inline-flex items-center gap-2 font-bold text-ocean-800 hover:text-gold-600 transition-colors"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Pull Quote */}
      <section className="bg-ocean-950 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-gold-500 mx-auto mb-6" />
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(topReview.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <p className="text-xl lg:text-2xl text-sand-100 leading-relaxed mb-8">
            "{topReview.text}"
          </p>
          <div>
            <div className="font-bold text-white">{topReview.name}</div>
            <div className="text-sand-400 text-sm mt-1">{topReview.location}</div>
          </div>
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 mt-8 text-gold-500 font-bold hover:text-gold-400 transition-colors"
          >
            Read all reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-sand-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-ocean-800 px-8 py-12 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                Let's Make Your Yard Shine
              </h2>
              <p className="text-sand-200">
                Get a free, no obligation estimate today. Our team is ready to transform your
                Palm Bay area property into something you'll love.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/quote"
                className="px-7 py-3.5 rounded-full bg-gold-500 text-white font-bold text-center hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
              >
                Request a Free Quote
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-sand-400 text-white font-bold hover:bg-ocean-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {business.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-sand-600">
            <MapPin className="w-4 h-4 text-gold-600" />
            {business.serviceArea}
          </div>
        </div>
      </section>
    </div>
  );
}