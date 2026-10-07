import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight, Phone } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { faqs } from '@/data/faqs';
import { business } from '@/data/business';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <div>
      <HeroSection
        badge="FAQ"
        title="Frequently Asked Questions"
        subtitle="Got questions about our lawn care services? Find answers to common questions below, or reach out to us directly."
        image="https://images.pexels.com/photos/3971211/pexels-photo-3971211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-24 bg-sand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-colors overflow-hidden ${
                    isOpen
                      ? 'bg-white border-clay-300 shadow-md'
                      : 'bg-white border-sand-200 hover:border-sand-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-bold text-olive-900 text-base lg:text-lg">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-clay-500 text-white' : 'bg-sand-100 text-sand-500'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sand-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="mt-16 rounded-3xl bg-olive-900 p-10 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">Still Have Questions?</h2>
            <p className="text-sand-400 mb-6">
              We're happy to help. Call us or send a message and we'll get right back to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="px-7 py-3.5 rounded-xl bg-clay-500 text-white font-bold hover:bg-clay-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {business.phone}
              </a>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl border-2 border-sand-500 text-white font-bold hover:bg-olive-800 transition-colors flex items-center gap-2"
              >
                Send a Message
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
