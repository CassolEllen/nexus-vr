import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-lg mx-auto slide-up">
          <h1 className="font-display text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="font-display text-3xl font-semibold mb-4">
            Lost in the Metaverse
          </h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 btn-glow"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
