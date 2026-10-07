import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-clay-500 text-white shadow-lg shadow-clay-500/30 flex items-center justify-center hover:bg-clay-400 transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}
