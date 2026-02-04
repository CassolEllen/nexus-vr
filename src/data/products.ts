import gearVrImage from '@/assets/product-gear-vr.jpg';
import smartVrImage from '@/assets/product-smart-vr.jpg';
import playstationVrImage from '@/assets/product-playstation-vr.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  shortDescription: string;
}

export const products: Product[] = [
  {
    id: 'gear-vr',
    name: 'Gear VR Headset',
    price: 599,
    image: gearVrImage,
    shortDescription: 'Premium VR experience with cutting-edge display technology',
    description: 'Experience the next generation of virtual reality with our flagship Gear VR Headset. Featuring a stunning 4K OLED display, 120Hz refresh rate, and inside-out tracking for seamless immersion. The ergonomic design ensures comfort during extended sessions, while the advanced haptic controllers deliver precise, intuitive interaction.',
    features: [
      '4K OLED Display per eye',
      '120Hz Refresh Rate',
      'Inside-out 6DoF Tracking',
      'Advanced Haptic Controllers',
      'Wireless PC Streaming',
      '8 Hours Battery Life',
      'Spatial Audio Built-in',
      'Hand Tracking Support',
    ],
  },
  {
    id: 'smart-vr',
    name: 'Smart VR Headset',
    price: 449,
    image: smartVrImage,
    shortDescription: 'Intelligent VR with AI-powered features',
    description: 'The Smart VR Headset combines artificial intelligence with immersive virtual reality. Our proprietary AI adapts to your usage patterns, optimizing performance and comfort in real-time. Perfect for both gaming and productivity, with seamless integration to your digital ecosystem.',
    features: [
      'AI-Powered Performance',
      '2K LCD Display',
      '90Hz Refresh Rate',
      'Eye Tracking Technology',
      'Mixed Reality Passthrough',
      '6 Hours Battery Life',
      'Voice Command Support',
      'Gesture Recognition',
    ],
  },
  {
    id: 'playstation-vr',
    name: 'Play Station VR',
    price: 349,
    image: playstationVrImage,
    shortDescription: 'Console gaming in stunning virtual reality',
    description: 'Bring your gaming to life with Play Station VR. Designed specifically for console gaming, this headset delivers incredible visuals and responsive gameplay. Enjoy an extensive library of VR titles with the comfort and simplicity you expect from PlayStation.',
    features: [
      'HDR OLED Display',
      '120Hz Gaming Mode',
      'PlayStation Integration',
      'Haptic Feedback Controllers',
      'Cinematic Mode',
      'See-through View',
      '3D Audio Technology',
      'Adjustable Lens Distance',
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
