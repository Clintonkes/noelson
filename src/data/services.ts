import {
  Scissors,
  Trees,
  Droplets,
  Sparkles,
  Flower2,
  Shield,
  Wind,
  Wrench,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: typeof Scissors;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'lawn-mowing',
    title: 'Lawn Mowing & Edging',
    icon: Scissors,
    shortDescription: 'Weekly or biweekly mowing with precise edging for a clean finish.',
    description:
      'Our core service keeps your lawn looking its best with regularly scheduled mowing and edging. We use commercial grade equipment and follow Florida specific mowing heights for St. Augustine and Bahia grasses. Every visit includes edging along walkways, driveways, and flower beds.',
    features: [
      'Weekly or biweekly schedules',
      'Commercial grade mowers',
      'Precise edging along hardscapes',
      'Clipping blow off & cleanup',
      'Florida grass height expertise',
    ],
    image: 'https://images.pexels.com/photos/6728925/pexels-photo-6728925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'landscaping',
    title: 'Landscape Design & Installation',
    icon: Flower2,
    shortDescription: 'Custom landscape designs with Florida friendly plants and flowers.',
    description:
      'Transform your property with a custom landscape design tailored to Florida\'s unique climate. We select and install Florida friendly plants, palms, shrubs, and flowers that thrive in Brevard County. From garden beds to full yard makeovers, we bring your vision to life.',
    features: [
      'Custom landscape design',
      'Florida native plant selection',
      'Garden bed installation',
      'Mulch & rock installation',
      'Tropical plant expertise',
    ],
    image: 'https://images.pexels.com/photos/38198729/pexels-photo-38198729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'palm-tree-care',
    title: 'Palm Tree Trimming & Removal',
    icon: Trees,
    shortDescription: 'Safe palm tree trimming, pruning, and removal services.',
    description:
      'Palm trees are a Florida staple, and they need regular maintenance to stay healthy and safe. Our trained team trims dead fronds, removes seed pods, and shapes palms for optimal health. We also offer safe palm tree removal when needed.',
    features: [
      'Palm frond trimming',
      'Seed pod removal',
      'Tree health evaluation',
      'Safe tree removal',
      'Stump grinding',
    ],
    image: 'https://images.pexels.com/photos/12596112/pexels-photo-12596112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'irrigation',
    title: 'Irrigation Repair & Installation',
    icon: Droplets,
    shortDescription: 'Keep your lawn hydrated with efficient irrigation systems.',
    description:
      'Florida heat demands a reliable irrigation system. We install, repair, and maintain sprinkler systems that keep your lawn green without wasting water. From fixing broken heads to installing complete systems with smart controllers, we handle it all.',
    features: [
      'Sprinkler system installation',
      'Repair broken heads & lines',
      'Smart controller setup',
      'Leak detection & repair',
      'Seasonal system adjustments',
    ],
    image: 'https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'hedge-trimming',
    title: 'Hedge & Shrub Trimming',
    icon: Sparkles,
    shortDescription: 'Keep hedges and shrubs shaped, healthy, and looking great.',
    description:
      'Regular trimming keeps your hedges, shrubs, and bushes neat while promoting healthy growth. We shape and prune all types of Florida ornamentals, creating clean lines and well maintained borders that enhance your property\'s curb appeal.',
    features: [
      'Hedge shaping & pruning',
      'Shrub & bush maintenance',
      'Ornamental plant care',
      'Debris cleanup included',
      'Seasonal pruning schedules',
    ],
    image: 'https://images.pexels.com/photos/38936351/pexels-photo-38936351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'pest-control',
    title: 'Lawn Pest & Weed Control',
    icon: Shield,
    shortDescription: 'Protect your lawn from weeds, insects, and disease.',
    description:
      'Florida lawns face unique pest and weed pressures. Our lawn pest and weed control program targets common Florida lawn threats including chinch bugs, sod webworms, and stubborn weeds. We use safe, effective treatments that protect your lawn without harming the environment.',
    features: [
      'Weed prevention & control',
      'Insect & pest treatment',
      'Fungus & disease management',
      'Fertilization programs',
      'Safe, EPA approved products',
    ],
    image: 'https://images.pexels.com/photos/4894608/pexels-photo-4894608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'yard-cleanup',
    title: 'Yard Cleanup & Debris Removal',
    icon: Wind,
    shortDescription: 'Storm cleanup, yard clearing, and debris hauling.',
    description:
      'Florida weather can leave your yard a mess. Whether it\'s after a storm, a seasonal transition, or you just need a fresh start, our cleanup service removes debris, branches, leaves, and overgrowth to restore your yard to pristine condition.',
    features: [
      'Storm debris removal',
      'Leaf & branch cleanup',
      'Overgrowth clearing',
      'Full debris hauling',
      'Pressure washing available',
    ],
    image: 'https://images.pexels.com/photos/9620215/pexels-photo-9620215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'maintenance-plans',
    title: 'Full Service Maintenance Plans',
    icon: Wrench,
    shortDescription: 'All inclusive monthly plans that cover everything.',
    description:
      'Take the hassle out of lawn care with our full service maintenance plans. We bundle mowing, trimming, weed control, fertilization, and irrigation checks into one affordable monthly package. You\'ll never have to worry about your yard again.',
    features: [
      'Mowing & edging included',
      'Hedge & shrub trimming',
      'Weed & pest control',
      'Fertilization treatments',
      'Priority storm service',
    ],
    image: 'https://images.pexels.com/photos/12087398/pexels-photo-12087398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
