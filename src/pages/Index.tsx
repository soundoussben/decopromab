
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
      image: "/public/IMG_1185.jpeg",
    },
    {
      id: 2,
      title: "Portes & Fenêtres",
      image: "/public/portes.jpg",
    
    },
    {
      id: 3,
      title: "Solutions Aluminium",
      image: "/public/solutions.jpg",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* About Section */}
        <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-decopromab-black mb-4">
        Notre <span className="text-decopromab-red">Showroom</span>
      </h2>
      <div className="w-24 h-1 bg-decopromab-red mx-auto mb-10 rounded-full"></div>

      <div className="prose prose-lg text-decopromab-black/80 max-w-none text-justify space-y-6">
        <p>
          Bienvenue chez <strong>Showroom Decopromab</strong>, votre destination incontournable pour découvrir des solutions innovantes et de qualité dans le domaine de la décoration intérieure. Depuis notre création, nous nous engageons à offrir à nos clients une expérience unique en matière de design et d'aménagement, en alliant esthétique, confort et fonctionnalité.
        </p>
        <p>
          Nous proposons une large gamme de produits soigneusement sélectionnés pour répondre aux besoins de chacun, qu'il s'agisse de particuliers à la recherche de nouveautés tendance ou de professionnels du secteur souhaitant offrir des espaces raffinés et modernes. 
        </p>
        <p>
          Grâce à notre équipe d’experts passionnés, nous offrons un <span className="text-decopromab-red font-medium">service personnalisé</span>, en vous guidant dans le choix de vos matériaux et en vous apportant des conseils adaptés à vos projets.
        </p>
        <p>
          Chez <strong>Showroom Decopromab</strong>, nous croyons que chaque espace mérite une attention particulière. Laissez-vous inspirer par nos collections et nos <span className="italic">solutions créatives</span> pour transformer votre intérieur.
        </p>
      </div>
    </div>
  </div>
</section>

        
        {/* Services Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-decopromab-black mb-4">
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
        <section className="py-20 bg-gradient-to-r from-decopromab-black via-decopromab-red/80 to-decopromab-black/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Transformez votre intérieur avec <span className="text-decopromab-black">Decopromab</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à créer l'espace de vos rêves.
            </p>
            <Link
              to="/contact"
             // className="inline-block px-8 py-4 bg-decopromab-red text-white font-bold rounded-md hover:bg-decopromab-red/90 transition-colors"
          // className="inline-block px-8 py-4 bg-decopromab-red !text-white font-bold rounded-xl shadow-md border border-transparent hover:bg-decopromab-red/90 hover:shadow-lg transition-all duration-300"
          className="inline-block px-8 py-4 bg-decopromab-red !text-white font-bold rounded-md hover:bg-decopromab-red/90 transition-colors"
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
