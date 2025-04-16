
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-decopromab-black/80 z-0">
        <img 
          src="/hero-background.jpg" 
          alt="Decopromab Showroom" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-decopromab-black to-decopromab-black/50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mb-6">
          Bienvenue chez <span className="text-decopromab-red">Showroom Decopromab</span>
        </h1>
        
        <p className="text-lg text-white/80 text-center max-w-3xl mb-8">
          Votre destination incontournable pour découvrir des solutions innovantes et de qualité dans le domaine de la décoration intérieure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-decopromab-red hover:bg-decopromab-red/90 text-white">
            <Link to="/portfolio">Découvrir Nos Réalisations</Link>
          </Button>
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
            <Link to="/contact">Nous Contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
