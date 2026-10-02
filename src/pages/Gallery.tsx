import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { galleryImages } from '@/config/site';

const heroImage =
  'https://images.pexels.com/photos/26599272/pexels-photo-26599272.jpeg?auto=compress&cs=tinysrgb&w=1600';
const categories = ['All', 'Mowing', 'Trimming', 'Cleanup', 'Irrigation', 'Design', 'Full Service'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Our Work"
        subtitle="See the quality of our lawn care and landscape management in action."
        breadcrumb="Gallery"
        image={heroImage}
      />

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-md'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, index) => (
              <div
                key={`${img.url}-${index}`}
                className="group relative rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                onClick={() => setLightbox(img.url)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="inline-block bg-rose-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md mb-2">{img.category}</span>
                    <p className="text-white text-sm font-medium">{img.caption}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-neutral-950/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white p-2 hover:text-rose-400 transition-colors" aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <img src={lightbox} alt="Gallery image" className="max-w-full max-h-[85vh] rounded-lg shadow-2xl" />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Want Results Like These?</h2>
          <p className="text-neutral-300 mb-8">Let us bring the same quality care to your property. Get a free quote today.</p>
          <Link to="/quote" className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
            Get Your Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
