import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary transition-all duration-300 group-hover:scale-110">
              <span className="font-display font-bold text-lg text-background">VR</span>
            </div>
            <span className="font-display font-semibold text-xl tracking-wider">
              META<span className="text-primary">VERSE</span>
            </span>
          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    "relative font-medium text-sm tracking-wide transition-colors duration-300 hover:text-primary",
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative p-2 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:glow-primary group"
          >
            <ShoppingCart className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-xs font-semibold flex items-center justify-center text-accent-foreground animate-glow-pulse">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};
