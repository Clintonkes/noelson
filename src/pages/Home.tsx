import { Link } from 'react-router-dom';
import {
  Scissors, Shrub, Droplets, Leaf, Trees, Sparkles,
  ArrowRight, Phone, CheckCircle2, ShieldCheck, Clock, Truck,
} from 'lucide-react';
import { siteConfig, services, testimonials } from '@/config/site';
import StarRating from '@/components/StarRating';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors, Shrub, Leaf, Droplets, Trees, Sparkles,
};

const heroImage =
  'https://images.pexels.com/photos/8143668/pexels-photo-8143668.jpeg?auto=compress&cs=tinysrgb&w=1600';
const aboutImage =
  'https://images.pexels.com/photos/9029162/pexels-photo-9029162.jpeg?auto=compress&cs=tinysrgb&w=1200';
const ctaImage =
  'https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Home() {
  return (
    <div>
      {/* Hero - Full image with centered content */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Luxury estate with manicured lawn" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/60 to-neutral-950/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-rose-300 text-sm font-medium">
              Rancho Mirage&apos;s Premier Lawn Care Service
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Resort-Quality Lawn Care
            <br />
            <span className="text-rose-400">for Your Property</span>
          </h1>
          <p className="text-lg text-neutral-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            S Amerix LLC delivers professional lawn care and landscape management
            across Rancho Mirage and the Coachella Valley. Reliable service,
            exceptional results — every visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="border border-neutral-500 hover:border-rose-400 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { icon: ShieldCheck, text: 'Licensed & Insured' },
              { icon: Clock, text: 'On-Time, Every Time' },
              { icon: Truck, text: 'Free Estimates' },
              { icon: CheckCircle2, text: 'Satisfaction Guaranteed' },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2 text-sm font-medium">
                <item.icon className="w-5 h-5 text-rose-400" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Card grid with image overlay */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-bold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2 mb-4">
              Complete Lawn Care Solutions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              From routine mowing to full landscape management, we handle every
              aspect of keeping your property looking its best.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Leaf;
              return (
                <Link
                  key={service.slug}
                  to="/services"
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-rose-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-neutral-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">{service.short}</p>
                    <span className="inline-flex items-center gap-1 text-rose-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About preview - Image right, text left */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rose-600 font-bold text-sm uppercase tracking-widest">About S Amerix</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2 mb-5">
                Coachella Valley&apos;s Lawn Care Experts
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                S Amerix LLC is a locally owned and operated lawn care company
                serving Rancho Mirage and the surrounding Coachella Valley. We
                understand the unique demands of maintaining a beautiful
                landscape in the desert climate and deliver reliable,
                high-quality service that keeps your property looking resort-quality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Locally owned in Rancho Mirage',
                  'Same crew every visit',
                  'Professional equipment',
                  'Free, no-obligation estimates',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={aboutImage} alt="S Amerix lawn care professional at work" className="w-full h-[420px] object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <p className="text-3xl font-extrabold">5+</p>
                <p className="text-sm font-medium">Years in the Valley</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Vertical numbered steps */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-400 font-bold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">Simple Process, Beautiful Results</h2>
          </div>
          <div className="space-y-6">
            {[
              { num: '1', title: 'Contact Us', text: 'Call us or fill out our quote form. Tell us about your property and what you need.' },
              { num: '2', title: 'Free Estimate', text: 'We assess your yard, discuss your goals, and provide a clear, upfront price.' },
              { num: '3', title: 'Schedule Service', text: 'Pick a plan and schedule that works for you. We set everything up hassle-free.' },
              { num: '4', title: 'Enjoy Your Yard', text: 'Our crew takes care of everything. You enjoy a beautiful, well-maintained property.' },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-5 bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-600 font-bold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <StarRating rating={5} size="md" />
              <span className="text-neutral-600 font-medium text-sm">4.9 average rating</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
                <StarRating rating={t.rating} size="md" />
                <p className="text-neutral-700 mt-4 mb-5 leading-relaxed text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center font-bold text-rose-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                    <p className="text-neutral-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full width image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ctaImage} alt="Beautifully maintained property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 to-neutral-950/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready for a Yard You Will Love?
          </h2>
          <p className="text-neutral-200 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. Our team will create a
            customized care plan that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/quote"
              className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Request Your Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="border border-neutral-400 hover:border-rose-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
