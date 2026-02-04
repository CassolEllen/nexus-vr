import { Glasses, Globe, Cpu, Headphones, Gamepad2, Cloud } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Glasses,
    title: 'VR Immersive Experiences',
    description: 'Step into breathtaking virtual worlds with our curated library of immersive experiences. From adventure to relaxation, find your perfect escape.',
    features: ['360° Environments', 'Interactive Narratives', 'Multiplayer Worlds'],
  },
  {
    icon: Globe,
    title: 'Metaverse Environments',
    description: 'Build, explore, and socialize in our expansive metaverse. Create your own spaces or discover worlds crafted by our community.',
    features: ['Custom World Building', 'Social Spaces', 'Virtual Events'],
  },
  {
    icon: Cpu,
    title: 'Hardware Integration',
    description: 'Seamless integration with all major VR platforms. Our headsets work flawlessly with your existing gaming setup and accessories.',
    features: ['PC VR Compatible', 'Console Support', 'Wireless Options'],
  },
  {
    icon: Headphones,
    title: 'Spatial Audio',
    description: 'Experience sound like never before with our advanced spatial audio technology. Every direction has its own soundscape.',
    features: ['3D Sound Design', 'Noise Cancellation', 'Voice Chat'],
  },
  {
    icon: Gamepad2,
    title: 'Gaming Platform',
    description: 'Access thousands of VR games and experiences through our integrated platform. New releases added weekly.',
    features: ['Exclusive Titles', 'Cloud Gaming', 'Cross-Platform'],
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Store your experiences, sync across devices, and access your virtual world from anywhere with our cloud infrastructure.',
    features: ['Cloud Storage', 'Profile Sync', 'Remote Access'],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 slide-up">
            <p className="text-primary font-medium tracking-widest mb-4 uppercase">
              What We Offer
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Beyond premium hardware, we provide a complete ecosystem of services 
              to enhance your virtual reality journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl neon-border bg-card card-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 glow-primary">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="max-w-3xl mx-auto p-12 rounded-3xl neon-border bg-card">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Enter the <span className="gradient-text">Metaverse</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get started with our premium VR headsets and unlock access to 
                all our services and experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 btn-glow"
                >
                  Shop Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
