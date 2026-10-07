import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, Sprout } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { services } from '@/data/services';
import { business } from '@/data/business';
import { pageImages } from '@/config/images';

export default function Services() {
  return (
    <div>
      <HeroSection
        badge="Our Services"
        title="Complete Lawn Care Services"
        subtitle="From weekly mowing to full landscape design, we handle everything your Florida property needs to look its best."
        image={pageImages.services.header}
      />

      {/* Services - Alternating Layout */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reversed = index % 2 === 1;
              return (
                <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="rounded-3xl overflow-hidden shadow-xl shadow-ocean-900/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[360px] object-cover"
                      />
                    </div>
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gold-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-gold-500 font-bold text-sm uppercase tracking-wider">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-ocean-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-sand-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-gold-600" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-sand-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ocean-800 text-white font-bold hover:bg-ocean-700 transition-colors"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-ocean-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-400 font-bold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-sand-400">
              Getting started is easy. We make the whole process smooth from your first call to a
              beautiful lawn.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Contact Us', desc: 'Call or request a quote online. Tell us about your property.' },
              { step: '2', title: 'Free Estimate', desc: 'We assess your property and provide a detailed quote.' },
              { step: '3', title: 'Schedule', desc: 'Choose a plan and schedule that works for you.' },
              { step: '4', title: 'Enjoy', desc: 'Sit back and enjoy a beautiful, well maintained yard.' },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-ocean-800 border border-ocean-700 p-6">
                <div className="text-4xl font-extrabold text-gold-400/30 mb-3">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-sand-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gold-50 text-gold-600 text-sm font-bold mb-4">
            <Sprout className="w-4 h-4" />
            Need Something Custom?
          </div>
          <h2 className="text-3xl font-extrabold text-ocean-900 mb-4">
            We Build Custom Service Plans
          </h2>
          <p className="text-sand-600 mb-8 text-lg">
            Every Florida property is unique. Call us and we'll create a plan that fits your yard,
            your budget, and your schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-7 py-3.5 rounded-xl bg-gold-500 text-white font-bold hover:bg-gold-400 transition-colors"
            >
              Request a Custom Quote
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="px-7 py-3.5 rounded-xl border-2 border-ocean-700 text-ocean-800 font-bold hover:bg-ocean-50 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
