import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  image: string;
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumb,
  image,
}: PageBannerProps) {
  return (
    <section
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-slate-300 mb-4">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-amber-400">{breadcrumb}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-slate-200 max-w-2xl">{subtitle}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
    </section>
  );
}
