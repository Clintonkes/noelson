export const siteConfig = {
  name: 'S Amerix LLC',
  tagline: 'Premier Lawn Care & Landscape Management',
  phone: '+1 (661) 675-990',
  phoneRaw: '+1661675990',
  email: 'info@samerix.org',
  address: {
    street: '39 Claret',
    city: 'Rancho Mirage',
    state: 'CA',
    zip: '92270',
  },
  hours: [
    { day: 'Monday', time: '6:00 AM - 6:00 PM' },
    { day: 'Tuesday', time: '6:00 AM - 6:00 PM' },
    { day: 'Wednesday', time: '6:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '6:00 AM - 6:00 PM' },
    { day: 'Friday', time: '6:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 3:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  serviceAreas: [
    'Rancho Mirage',
    'Palm Desert',
    'Palm Springs',
    'Indian Wells',
    'La Quinta',
    'Cathedral City',
    'Thousand Palms',
  ],
};

export const services = [
  {
    slug: 'lawn-mowing',
    title: 'Lawn Mowing & Edging',
    icon: 'Scissors',
    short: 'Precision mowing and crisp edging for a pristine, resort-quality finish.',
    description:
      'Our signature mowing service delivers a clean, uniform cut at the optimal height for your turf type. We edge all walkways, driveways, and curbs, and blow every surface clean. Scheduled to match your lawn growth and the Coachella Valley growing season.',
    features: [
      'Optimal cutting height for your turf species',
      'Crisp edging along all hard surfaces',
      'Complete blowing of walkways and patios',
      'Weekly or bi-weekly scheduling',
      'Same professional crew every visit',
    ],
    imageId: 4162016,
  },
  {
    slug: 'hedge-trimming',
    title: 'Hedge & Shrub Pruning',
    icon: 'Shrub',
    short: 'Expert shaping and pruning for healthy, beautifully defined hedges.',
    description:
      'Keep your hedges and shrubs looking resort-quality with our professional pruning service. We shape formal and informal hedges, remove deadwood, thin overgrown areas, and maintain clean lines that complement your property and the desert landscape.',
    features: [
      'Formal and natural hedge shaping',
      'Shrub pruning and thinning',
      'Deadwood and dead branch removal',
      'Height and width control',
      'Complete debris cleanup',
    ],
    imageId: 38936351,
  },
  {
    slug: 'yard-cleanup',
    title: 'Yard Cleanup & Debris Removal',
    icon: 'Leaf',
    short: 'Seasonal cleanups, debris clearing, and full haul-away service.',
    description:
      'From seasonal cleanups to storm debris clearing, we get your property back in pristine condition. Our team handles raking, bagging, branch removal, and complete haul-away so your yard is clean, safe, and ready to enjoy.',
    features: [
      'Spring and fall seasonal cleanups',
      'Leaf and debris removal',
      'Storm debris clearing',
      'Branch and limb removal',
      'Full haul-away included',
    ],
    imageId: 9620213,
  },
  {
    slug: 'irrigation',
    title: 'Irrigation & Sprinkler Service',
    icon: 'Droplets',
    short: 'Installation, repair, and maintenance of irrigation systems.',
    description:
      'A properly functioning irrigation system is essential in the desert. We install, repair, and maintain sprinkler and drip systems, program smart controllers, and make seasonal adjustments to keep your landscape healthy while conserving water.',
    features: [
      'Sprinkler system installation',
      'Head repair and adjustment',
      'Drip irrigation for beds and gardens',
      'Smart controller programming',
      'Leak detection and line repair',
    ],
    imageId: 8791457,
  },
  {
    slug: 'landscape-design',
    title: 'Landscape Design & Installation',
    icon: 'Trees',
    short: 'Custom landscape design and full installation services.',
    description:
      'Transform your outdoor space with our custom landscape design and installation services. We handle plant selection, bed construction, rock work, lighting, and everything needed to create a stunning desert-appropriate landscape that complements your home.',
    features: [
      'Custom landscape design consultation',
      'Drought-tolerant plant selection',
      'Decorative rock and gravel installation',
      'Landscape lighting installation',
      'Complete project management',
    ],
    imageId: 26599272,
  },
  {
    slug: 'property-maintenance',
    title: 'Full Property Maintenance',
    icon: 'Sparkles',
    short: 'Complete property care plans covering everything, all year long.',
    description:
      'Our full maintenance plans take care of every aspect of your property. From mowing and trimming to irrigation, pruning, seasonal cleanups, and everything in between, one call handles it all. Perfect for homeowners and businesses who want a worry-free solution.',
    features: [
      'All lawn care services included',
      'Seasonal cleanups and prep',
      'Irrigation monitoring and adjustment',
      'Hedge and bed maintenance',
      'Priority scheduling',
      'Dedicated property manager',
    ],
    imageId: 8143668,
  },
];

export const galleryImages = [
  {
    id: 8143668,
    caption: 'Luxury estate with manicured lawn',
    category: 'Full Service',
  },
  {
    id: 4162016,
    caption: 'Precision mowing for clean, even lines',
    category: 'Mowing',
  },
  {
    id: 38936351,
    caption: 'Expertly shaped hedges and shrubs',
    category: 'Trimming',
  },
  {
    id: 38936338,
    caption: 'Detailed hedge trimming in progress',
    category: 'Trimming',
  },
  {
    id: 9620213,
    caption: 'Leaf blowing and yard cleanup',
    category: 'Cleanup',
  },
  {
    id: 29192617,
    caption: 'Raking and debris removal',
    category: 'Cleanup',
  },
  {
    id: 8791457,
    caption: 'Sprinkler irrigation system in action',
    category: 'Irrigation',
  },
  {
    id: 37720375,
    caption: 'Lawn sprinkler coverage check',
    category: 'Irrigation',
  },
  {
    id: 26599272,
    caption: 'Garden pathway with manicured landscaping',
    category: 'Design',
  },
  {
    id: 816198,
    caption: 'Modern home with lush lawn and palms',
    category: 'Full Service',
  },
  {
    id: 6728925,
    caption: 'Professional mowing on a sunny day',
    category: 'Mowing',
  },
  {
    id: 8143677,
    caption: 'Elegant property with maintained garden',
    category: 'Design',
  },
];

export const testimonials = [
  {
    name: 'Richard D.',
    location: 'Rancho Mirage, CA',
    rating: 5,
    text: 'S Amerix has maintained our property for over a year. They are always on time, the mowing is perfect, and the edging is crisp. Our yard has never looked better. The crew is professional and always cleans up. Highly recommend.',
  },
  {
    name: 'Patricia L.',
    location: 'Palm Desert, CA',
    rating: 5,
    text: 'We switched to S Amerix after being disappointed by other companies. The difference is remarkable. Their attention to detail with the hedges and cleanup is outstanding. Professional, reliable, and fairly priced.',
  },
  {
    name: 'Michael S.',
    location: 'Palm Springs, CA',
    rating: 5,
    text: 'From the initial quote to weekly service, everything has been seamless. They transformed our overgrown shrubs and the lawn looks incredible. Great communication and quality work.',
  },
  {
    name: 'Catherine M.',
    location: 'Indian Wells, CA',
    rating: 5,
    text: 'The irrigation repair they did saved us from a huge water bill. They found leaks two other companies missed. The sprinkler coverage is perfect now. Trustworthy and knowledgeable team.',
  },
  {
    name: 'Robert K.',
    location: 'La Quinta, CA',
    rating: 5,
    text: 'Their full maintenance plan is worth every penny. One company handles everything — mowing, trimming, irrigation, cleanup. Our property always looks resort-quality. Could not be happier.',
  },
  {
    name: 'Susan T.',
    location: 'Rancho Mirage, CA',
    rating: 5,
    text: 'After a windstorm our yard was covered in debris. S Amerix came out the same week, cleaned everything up, and hauled it all away. Fast, reliable, and they left the property spotless.',
  },
];

export const faqs = [
  {
    question: 'What areas do you service?',
    answer:
      'We proudly serve Rancho Mirage, Palm Desert, Palm Springs, Indian Wells, La Quinta, Cathedral City, Thousand Palms, and surrounding communities in the Coachella Valley.',
  },
  {
    question: 'How often should my lawn be mowed in the desert?',
    answer:
      'During the active growing season, most lawns benefit from weekly mowing. In cooler months, bi-weekly may be sufficient. We will assess your turf and recommend the best schedule based on your grass type and local conditions.',
  },
  {
    question: 'Do you offer one-time services or only recurring plans?',
    answer:
      'Both. We offer one-time services such as yard cleanup, hedge trimming, and irrigation repair, as well as recurring weekly or bi-weekly maintenance plans. You can start, pause, or cancel service at any time.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. S Amerix LLC is fully licensed and insured for all lawn care and landscape maintenance services. We carry liability insurance to protect your property and our team.',
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on your property size, the services you need, and the frequency of visits. We provide free, no-obligation estimates. Fill out our quote form or call us for a clear, upfront price.',
  },
  {
    question: 'Do you provide your own equipment?',
    answer:
      'Yes, we bring all our own professional-grade equipment, tools, and materials. You do not need to provide anything. We show up ready to work.',
  },
  {
    question: 'What happens if it rains or is too hot on my service day?',
    answer:
      'Desert weather can be unpredictable. If conditions prevent us from providing quality service on your scheduled day, we will reschedule for the next available day and notify you of the change.',
  },
  {
    question: 'Can you handle large or commercial properties?',
    answer:
      'Absolutely. We service residential homes, commercial properties, HOAs, and large estates throughout the Coachella Valley. Contact us for a custom quote tailored to your property.',
  },
];
