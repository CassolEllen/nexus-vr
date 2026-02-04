import { Layout } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const Products = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 slide-up">
            <p className="text-primary font-medium tracking-widest mb-4 uppercase">
              Our Collection
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              VR <span className="gradient-text">Headsets</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Discover our premium range of virtual reality headsets. Each device 
              is crafted to deliver exceptional performance and comfort.
            </p>
          </div>

          {/* Products Grid */}
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

          {/* Additional Info */}
          <div className="mt-24 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl neon-border bg-card">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Free Shipping
              </h3>
              <p className="text-muted-foreground">
                All orders over $200 qualify for free worldwide shipping. 
                Get your VR headset delivered right to your door.
              </p>
            </div>
            <div className="p-8 rounded-2xl neon-border bg-card">
              <h3 className="font-display text-2xl font-semibold mb-4">
                30-Day Returns
              </h3>
              <p className="text-muted-foreground">
                Not satisfied? Return any unopened product within 30 days 
                for a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
