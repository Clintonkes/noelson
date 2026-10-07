import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { galleryItems } from '@/data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];
  const filtered =
    filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <div>
      <HeroSection
        badge="Project Gallery"
        title="Our Florida Work"
        subtitle="Browse a selection of our lawn care, landscaping, and maintenance projects across Brevard County."
        image="https://images.pexels.com/photos/8143668/pexels-photo-8143668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  filter === cat
                    ? 'bg-olive-800 text-white'
                    : 'bg-white border border-sand-200 text-sand-600 hover:border-clay-400 hover:text-clay-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightbox(item.image)}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-clay-500 text-white text-xs font-bold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-sand-600 mb-6 text-lg">
              Want results like these for your property? Let's talk.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-clay-500 text-white font-bold hover:bg-clay-400 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-olive-950/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-olive-800 text-white flex items-center justify-center hover:bg-olive-700 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
}
