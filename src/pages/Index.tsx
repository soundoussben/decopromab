
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Index = () => {
  // Images placeholder - à remplacer par vos propres images
  const serviceImages = [
    {
      id: 1,
      title: "Cuisines Modernes",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Portes & Fenêtres",
      image: "https://images.unsplash.com/photo-1558799401-8e0eac8a3f8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Solutions Aluminium",
      image: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-decopromab-black">
                Notre <span className="text-decopromab-red">Showroom</span>
              </h2>
              <div className="space-y-4 text-decopromab-black/80">
                <p>
                  Bienvenue chez Showroom Decopromab, votre destination incontournable pour découvrir des solutions innovantes et de qualité dans le domaine de la décoration intérieure. Depuis notre création, nous nous engageons à offrir à nos clients une expérience unique en matière de design et d'aménagement, en alliant esthétique, confort et fonctionnalité.
                </p>
                <p>
                  Nous proposons une large gamme de produits soigneusement sélectionnés pour répondre aux besoins de chacun, qu'il s'agisse de particuliers à la recherche de nouveautés tendance ou de professionnels du secteur souhaitant offrir des espaces raffinés et modernes. Grâce à notre équipe d'experts passionnés, nous offrons un service personnalisé, en vous guidant dans le choix de vos matériaux et en vous apportant des conseils adaptés à vos projets.
                </p>
                <p>
                  Chez Showroom Decopromab, nous croyons que chaque espace mérite une attention particulière et nous nous efforçons de vous offrir des produits à la hauteur de vos attentes. Découvrez nos collections et laissez-vous inspirer par nos solutions créatives pour transformer votre intérieur.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-decopromab-black">
                Nos <span className="text-decopromab-red">Services</span>
              </h2>
              <p className="mt-4 text-decopromab-black/70 max-w-2xl mx-auto">
                Découvrez notre gamme complète de solutions pour transformer votre espace
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceImages.map((service) => (
                <div key={service.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <Link 
                        to="/services" 
                        className="inline-flex items-center text-decopromab-red hover:text-white transition-colors"
                      >
                        En savoir plus <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-decopromab-red text-white rounded-md hover:bg-decopromab-red/90 transition-colors"
              >
                Tous nos services <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-decopromab-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transformez votre intérieur avec <span className="text-decopromab-red">Decopromab</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à créer l'espace de vos rêves.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-decopromab-red text-white font-bold rounded-md hover:bg-decopromab-red/90 transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
