interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
}

export default function HeroSection({ title, subtitle, image, badge }: HeroSectionProps) {
  return (
    <section className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden bg-ocean-900">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-ocean-900/60 to-ocean-900/20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        {badge && (
          <div className="inline-block px-4 py-1.5 rounded-lg bg-gold-500 text-white text-sm font-bold mb-4">
            {badge}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 max-w-3xl">
          {title}
        </h1>
        <p className="text-lg text-sand-200 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
