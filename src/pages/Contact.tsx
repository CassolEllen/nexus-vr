import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { toast } from 'sonner';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    toast.success('Message sent!', {
      description: 'We\'ll get back to you as soon as possible.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 slide-up">
            <p className="text-primary font-medium tracking-widest mb-4 uppercase">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have questions about our products or services? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="p-8 rounded-3xl neon-border bg-card slide-up">
              <h2 className="font-display text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all"
                    placeholder="Your name"
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
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none input-neon transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 slide-up" style={{ animationDelay: '0.15s' }}>
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl neon-border bg-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">support@metaversevr.com</p>
                    <p className="text-muted-foreground">sales@metaversevr.com</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl neon-border bg-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl neon-border bg-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">123 Innovation Drive</p>
                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl neon-border bg-card">
                <h3 className="font-display font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover-scale"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
