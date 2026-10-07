interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
}

export default function HeroSection({ title, subtitle, image, badge }: HeroSectionProps) {
  return (
    <section className="border-b border-sand-200 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold-500" />
            {badge && (
              <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">
                {badge}
              </span>
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ocean-900 leading-[1.1] tracking-tight mb-5">
            {title}
          </h1>
          <p className="text-lg text-sand-700 leading-relaxed max-w-2xl">{subtitle}</p>
        </div>
        <div className="hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-ocean-900/10 border border-sand-200">
            <img src={image} alt="" className="w-full h-56 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}