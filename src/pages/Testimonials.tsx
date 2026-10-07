import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { testimonials } from '@/data/testimonials';
import { pageImages } from '@/config/images';

export default function Testimonials() {
  const avgRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <div>
      <HeroSection
        badge="Reviews"
        title="What Our Customers Say"
        subtitle="Real reviews from real Brevard County homeowners. See why Palm Bay trusts Noelson LLC with their lawn care."
        image={pageImages.testimonials.header}
      />

      {/* Rating Summary */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-ocean-900">{avgRating.toFixed(1)}</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-sand-500 mt-1 text-sm">{testimonials.length} verified reviews</p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-sand-200" />
            <div className="text-center">
              <div className="text-5xl font-extrabold text-ocean-900">100%</div>
              <p className="text-sand-500 mt-2 text-sm">Would recommend</p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-sand-200" />
            <div className="text-center">
              <div className="text-5xl font-extrabold text-ocean-900">8+</div>
              <p className="text-sand-500 mt-2 text-sm">Years of service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl bg-white border border-sand-200 p-8 hover:shadow-lg hover:shadow-ocean-900/5 transition-shadow relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-100" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sand-700 leading-relaxed mb-6 relative z-10">{t.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-sand-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-ocean-700 flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-ocean-900">{t.name}</div>
                      <div className="text-sm text-sand-500">{t.location}</div>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-ocean-50 text-ocean-700 text-xs font-bold">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-sand-600 mb-6 text-lg">
              Ready to become our next satisfied customer?
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gold-500 text-white font-bold hover:bg-gold-400 transition-colors"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
