import { Link } from 'react-router-dom';
import { Sprout, Check, Award, Users, Heart, Truck, ArrowRight, Phone, MapPin } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { business } from '@/data/business';

export default function About() {
  return (
    <div>
      <HeroSection
        badge="About Noelson"
        title="Florida Born, Brevard Proud"
        subtitle="Meet the team that's been keeping Palm Bay and Brevard County green since 2016."
        image="https://images.pexels.com/photos/31732617/pexels-photo-31732617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-clay-500 font-bold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-olive-900 mt-3 mb-6 leading-tight">
                From Palm Bay Roots to Brevard's Trusted Lawn Pros
              </h2>
              <div className="space-y-4 text-sand-600 leading-relaxed">
                <p>
                  Noelson LLC was founded in {business.founded} with a simple goal: give Palm Bay
                  and Brevard County residents a lawn care company they could actually rely on. Too
                  many homeowners were dealing with no-shows, inconsistent work, and companies that
                  didn't understand Florida's unique lawn care challenges.
                </p>
                <p>
                  We started small — one truck, one mower, and a commitment to showing up on time
                  and doing quality work. Word spread quickly through Palm Bay neighborhoods, and
                  before long we were maintaining hundreds of properties across Brevard County.
                </p>
                <p>
                  Today, we offer a full range of services from weekly mowing to complete landscape
                  design, palm tree care, irrigation repair, pest and weed control, and
                  post-storm cleanup. But our core philosophy hasn't changed: treat every property
                  with care, show up when we say we will, and do work we're proud of.
                </p>
                <p>
                  We're a locally owned, family-operated business. When you hire Noelson, you're
                  hiring neighbors who care about our community and the properties in it.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg shadow-olive-900/10">
                <img
                  src="https://images.pexels.com/photos/6728919/pexels-photo-6728919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Lawn mowing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 mt-8 shadow-lg shadow-olive-900/10">
                <img
                  src="https://images.pexels.com/photos/38936338/pexels-photo-38936338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Hedge trimming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg shadow-olive-900/10">
                <img
                  src="https://images.pexels.com/photos/15822397/pexels-photo-15822397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Tropical Florida yard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 mt-8 shadow-lg shadow-olive-900/10">
                <img
                  src="https://images.pexels.com/photos/7546775/pexels-photo-7546775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Landscaped backyard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-clay-500 font-bold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-olive-900 mt-3 mb-4">
              Our Core Values
            </h2>
            <p className="text-sand-600">
              These principles guide everything we do, from how we treat your lawn to how we
              treat our team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Excellence', desc: 'Every job done right, with attention to every detail.' },
              { icon: Users, title: 'Reliability', desc: 'We show up when promised and communicate clearly.' },
              { icon: Heart, title: 'Community', desc: 'Local business serving local neighbors with care.' },
              { icon: Truck, title: 'Professionalism', desc: 'Commercial equipment, trained crews, clean results.' },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white border border-sand-200 p-6 text-center hover:shadow-lg hover:shadow-olive-900/5 transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-clay-500 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-olive-900 text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-sand-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-olive-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-olive-800 border border-olive-700 p-10">
              <div className="w-14 h-14 rounded-2xl bg-clay-500 flex items-center justify-center mb-6">
                <Sprout className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
              <p className="text-sand-300 leading-relaxed">
                To provide Palm Bay and Brevard County with exceptional lawn care and landscaping
                services that are tailored to Florida's unique climate. We build lasting client
                relationships through honest pricing, consistent quality, and genuine care for
                every property we service.
              </p>
            </div>
            <div className="rounded-3xl bg-olive-800 border border-olive-700 p-10">
              <div className="w-14 h-14 rounded-2xl bg-clay-500 flex items-center justify-center mb-6">
                <Check className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
              <p className="text-sand-300 leading-relaxed">
                To be Brevard County's most trusted name in Florida lawn care and landscaping —
                known for our expertise, our reliability, and our commitment to making every
                property we service a showcase of what's possible in the Sunshine State.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-clay-500 font-bold text-sm uppercase tracking-wider">
            Where We Serve
          </span>
          <h2 className="text-3xl font-extrabold text-olive-900 mt-3 mb-4">
            Proudly Serving Brevard County
          </h2>
          <p className="text-sand-600 mb-8 text-lg">
            Based in Palm Bay, FL, we serve communities across Brevard County.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Palm Bay', 'Melbourne', 'West Melbourne', 'Rockledge', 'Satellite Beach', 'Cocoa', 'Titusville'].map(
              (city) => (
                <span
                  key={city}
                  className="px-4 py-2 rounded-full bg-olive-50 border border-olive-200 text-sm font-bold text-olive-700"
                >
                  {city}
                </span>
              )
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-7 py-3.5 rounded-xl bg-clay-500 text-white font-bold hover:bg-clay-400 transition-colors flex items-center gap-2"
            >
              Get a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="px-7 py-3.5 rounded-xl border-2 border-olive-700 text-olive-800 font-bold hover:bg-olive-50 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {business.phone}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-sand-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{business.address.full}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
