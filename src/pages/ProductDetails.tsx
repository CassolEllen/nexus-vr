import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, ShoppingCart, Check } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      features: product.features,
    });
    toast.success(`${product.name} added to cart`, {
      description: 'Continue shopping or proceed to checkout',
      action: {
        label: 'View Cart',
        onClick: () => navigate('/cart'),
      },
    });
  };

  const handlePlayNow = () => {
    toast.info('Demo Experience', {
      description: 'VR demo launching... Put on your headset!',
    });
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="slide-up">
              <div className="rounded-3xl overflow-hidden neon-border">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="slide-up" style={{ animationDelay: '0.15s' }}>
              <p className="text-primary font-medium tracking-widest mb-2 uppercase">
                Premium VR
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-display font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-muted-foreground">.00 USD</span>
              </div>

              <p className="text-muted-foreground text-lg mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-display font-semibold text-lg mb-4">Features</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 btn-glow"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to cart
                </button>
                <button
                  onClick={handlePlayNow}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-accent text-accent font-semibold transition-all duration-300 btn-glow-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Play className="w-5 h-5" />
                  Play now
                </button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display font-semibold text-primary">Free</p>
                  <p className="text-xs text-muted-foreground">Shipping</p>
                </div>
                <div>
                  <p className="font-display font-semibold text-primary">2 Year</p>
                  <p className="text-xs text-muted-foreground">Warranty</p>
                </div>
                <div>
                  <p className="font-display font-semibold text-primary">30 Day</p>
                  <p className="text-xs text-muted-foreground">Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
