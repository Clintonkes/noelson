export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Diane Marsh',
    location: 'Palm Bay, FL',
    rating: 5,
    text: 'Noelson has been mowing our lawn every week for over a year now and the difference is night and day. Our St. Augustine grass has never looked healthier. They always show up on the same day and leave everything spotless.',
    service: 'Lawn Mowing & Edging',
  },
  {
    id: '2',
    name: 'Carlos Mendez',
    location: 'Melbourne, FL',
    rating: 5,
    text: 'They completely redesigned our front yard with Florida-native plants and it looks incredible. The crew was professional, fast, and cleaned up perfectly. We get compliments from neighbors constantly.',
    service: 'Landscape Design',
  },
  {
    id: '3',
    name: 'Rebecca Thompson',
    location: 'Palm Bay, FL',
    rating: 5,
    text: 'After Hurricane Ian left our yard covered in branches and debris, Noelson came out the next day and had everything cleaned up by the afternoon. They were lifesavers when we were overwhelmed.',
    service: 'Yard Cleanup',
  },
  {
    id: '4',
    name: 'James O\'Brien',
    location: 'Rockledge, FL',
    rating: 5,
    text: 'Our irrigation system was leaking for months without us knowing. Noelson found three broken heads, repaired them, and installed a smart controller. Water bill dropped significantly. Very knowledgeable team.',
    service: 'Irrigation Repair',
  },
  {
    id: '5',
    name: 'Tanya Richards',
    location: 'Palm Bay, FL',
    rating: 5,
    text: 'The full-service maintenance plan is the best money I spend every month. Mowing, trimming, weed control, fertilization — all covered. My yard looks like a golf course and I never lift a finger.',
    service: 'Maintenance Plans',
  },
  {
    id: '6',
    name: 'Michael Stevens',
    location: 'West Melbourne, FL',
    rating: 5,
    text: 'We had three large palms that needed trimming badly. The team climbed them safely, removed all the dead fronds and seed pods, and ground up the debris. Very professional and reasonably priced.',
    service: 'Palm Tree Trimming',
  },
  {
    id: '7',
    name: 'Sandra Lee',
    location: 'Palm Bay, FL',
    rating: 5,
    text: 'The pest and weed control program saved my lawn. Chinch bugs had destroyed a big patch of grass and within two months of treatment it was growing back thick and green. Highly recommend.',
    service: 'Pest & Weed Control',
  },
  {
    id: '8',
    name: 'Kevin Walsh',
    location: 'Satellite Beach, FL',
    rating: 5,
    text: 'I switched to Noelson from a bigger company and the personal service is a breath of fresh air. They actually care about your property. The quality of work is better and the price is lower. Can\'t beat that.',
    service: 'Lawn Mowing & Edging',
  },
];
