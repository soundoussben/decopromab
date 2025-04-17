import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const backgroundImages = [
  "/cuisine.jpg",
  "/portes.jpg",
  "/solutions.jpg"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Slider d'images de fond */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImages[currentIndex]} 
          alt="Décoration intérieure" 
          className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-decopromab-black/70"></div>
      </div>

      {/* Contenu par-dessus */}
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mb-6">
          Bienvenue chez <span className="text-decopromab-red">Showroom Decopromab</span>
        </h1>
        
        <p className="text-lg text-white/80 text-center max-w-3xl mb-8">
          Votre destination incontournable pour découvrir des solutions innovantes et de qualité dans le domaine de la décoration intérieure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-decopromab-red hover:bg-decopromab-red/90 text-white hover:bg-white/5">
            <Link to="/portfolio">Découvrir Nos Réalisations</Link>
          </Button>
          <Button asChild variant="outline" className="text-black border-white hover:bg-white/10">
            <Link to="/contact">Nous Contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
