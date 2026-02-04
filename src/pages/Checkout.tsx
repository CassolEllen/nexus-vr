import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart, totalItems } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const shipping = totalPrice >= 200 ? 0 : 15;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.address.trim() !== '' &&
      formData.city.trim() !== '' &&
      formData.postalCode.trim() !== '' &&
      formData.country.trim() !== '' &&
      formData.cardName.trim() !== '' &&
      formData.cardNumber.trim().length >= 16 &&
      formData.expiry.trim() !== '' &&
      formData.cvv.trim().length >= 3
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setOrderPlaced(true);
    clearCart();

    toast.success('Order placed successfully!', {
      description: 'Thank you for your purchase.',
    });
  };

  if (items.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-lg mx-auto slide-up">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 glow-primary">
              <Check className="w-12 h-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-bold mb-4">
              Order <span className="gradient-text">Confirmed!</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase! Your order has been placed successfully. 
              You will receive a confirmation email shortly.
            </p>
            <div className="p-6 rounded-2xl neon-border bg-card mb-8 text-left">
              <h3 className="font-display font-semibold mb-4">Order Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Number</span>
                  <span className="font-mono">VR-{Date.now().toString().slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-semibold text-primary">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Delivery</span>
                  <span>3-5 Business Days</span>
                </div>
              </div>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 btn-glow"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Cart
          </Link>

          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Checkout</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Fields */}
              <div className="lg:col-span-2 space-y-8">
                {/* Delivery Information */}
                <div className="p-6 rounded-2xl neon-border bg-card slide-up">
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-xl font-semibold">Delivery Information</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-2">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="123 Main Street"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="New York"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Postal Code *</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="10001"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-2">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="United States"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="p-6 rounded-2xl neon-border bg-card slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-xl font-semibold">Payment Information</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-2">Cardholder Name *</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-2">Card Number *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiration Date *</label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="p-6 rounded-2xl neon-border bg-card sticky top-24 slide-up" style={{ animationDelay: '0.2s' }}>
                  <h2 className="font-display text-xl font-semibold mb-6">Order Summary</h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                    {items.map(item => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-muted-foreground text-xs">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 pt-4 border-t border-border mb-6">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Shipping</span>
                      <span className={shipping === 0 ? 'text-primary' : ''}>
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-display font-semibold">Total</span>
                      <span className="font-display text-2xl font-bold text-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 btn-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Place order
                        <Check className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
