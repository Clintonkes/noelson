import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { highPriority } from '@/lib/preloadImages';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  image: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-16 overflow-hidden bg-neutral-900">
      {/* A real <img> rather than a CSS background: browsers fetch it at
          high priority and can match it to the preload in index.html. */}
      <img
        src={image}
        alt=""
        {...highPriority}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(rgba(23, 23, 23, 0.85), rgba(23, 23, 23, 0.6))' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-neutral-300 mb-4">
          <Link to="/" className="hover:text-rose-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-rose-400">{breadcrumb}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-neutral-200 max-w-2xl">{subtitle}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-rose-700" />
    </section>
  );
}
