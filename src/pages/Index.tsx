import { Link } from 'react-router-dom';
import { Play, ChevronRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-vr.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="VR Experience"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl slide-up">
            <p className="text-primary font-medium tracking-widest mb-4 uppercase">
              Enter the future
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              NEXT GEN{' '}
              <span className="gradient-text">VIRTUAL REALITY</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Step into worlds beyond imagination. Our premium VR headsets deliver 
              unparalleled immersion with cutting-edge technology and stunning visuals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 btn-glow hover:bg-primary/90"
              >
                See more
                <ChevronRight className="w-5 h-5" />
              </Link>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-accent text-accent font-semibold transition-all duration-300 btn-glow-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Play className="w-5 h-5" />
                Play now
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <p className="text-primary font-medium tracking-widest mb-4 uppercase">
              Our Products
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Premium VR <span className="gradient-text">Headsets</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose from our carefully curated selection of virtual reality devices, 
              each designed to deliver an extraordinary immersive experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground btn-glow"
            >
              View all products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Immersive Worlds',
                description: 'Explore vast virtual universes with stunning detail and responsive environments.',
                icon: '🌌',
              },
              {
                title: 'Cutting-Edge Tech',
                description: 'Experience the latest in display technology, tracking, and haptic feedback.',
                icon: '⚡',
              },
              {
                title: 'Premium Support',
                description: '24/7 expert assistance to help you get the most from your VR experience.',
                icon: '🎯',
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl neon-border bg-card card-hover text-center fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
