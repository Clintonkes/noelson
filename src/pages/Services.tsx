import { Link } from 'react-router-dom';
import {
  Scissors, Shrub, Droplets, Leaf, Trees, Sparkles,
  Check, ArrowRight, Phone,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { siteConfig, services } from '@/config/site';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors, Shrub, Leaf, Droplets, Trees, Sparkles,
};

const heroImage =
  'https://images.pexels.com/photos/38936351/pexels-photo-38936351.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Full-service lawn care and landscape management designed for the Coachella Valley."
        breadcrumb="Services"
        image={heroImage}
      />

      {/* Services - Alternating image/text */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Leaf;
              const isReversed = index % 2 === 1;
              return (
                <div key={service.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="rounded-2xl overflow-hidden shadow-xl relative">
                      <img src={service.image} alt={service.title} className="w-full h-[340px] object-cover" />
                      <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                    <span className="text-rose-600 font-bold text-sm uppercase tracking-widest">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mt-2 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-rose-600" />
                          </div>
                          <span className="text-neutral-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                    >
                      Request This Service <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-rose-400 font-bold text-sm uppercase tracking-widest">Getting Started</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">How to Get Service</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Reach Out', text: 'Call us or fill out the quote form with your property details.' },
              { step: '02', title: 'Free Estimate', text: 'We assess your yard and provide a clear, upfront price.' },
              { step: '03', title: 'Pick a Plan', text: 'Choose a service plan and schedule that works for you.' },
              { step: '04', title: 'We Get to Work', text: 'Our crew takes care of everything. You enjoy the results.' },
            ].map((item) => (
              <div key={item.step} className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700">
                <div className="text-5xl font-extrabold text-rose-500/20 mb-3">{item.step}</div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-rose-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-rose-100 mb-8">Get your free quote today and see the S Amerix difference.</p>
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
