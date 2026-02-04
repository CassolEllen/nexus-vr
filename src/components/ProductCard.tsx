import { Link } from 'react-router-dom';
import { Play, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    });
  };

  const handlePlayNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.info('Demo Experience', {
      description: 'VR demo launching... Put on your headset!',
    });
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="block group"
    >
      <div className="relative rounded-2xl overflow-hidden neon-border card-hover bg-card">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
              {product.shortDescription}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-display font-bold text-primary">
              ${product.price}
            </span>
            <span className="text-sm text-muted-foreground">.00</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handlePlayNow}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-accent text-accent font-medium text-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground btn-glow-accent"
            >
              <Play className="w-4 h-4" />
              Play now
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 btn-glow"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
