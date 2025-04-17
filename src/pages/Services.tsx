
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Cuisines Modernes",
      description: "Nous proposons des solutions de cuisine complètes, alliant esthétique et fonctionnalité. Nos cuisines sont conçues pour optimiser l'espace tout en offrant un design élégant qui s'adapte à votre intérieur.",
      image: "/public/cuisine.jpg",
      features: [
        "Design personnalisé selon vos besoins",
        "Matériaux de haute qualité",
        "Options d'aménagement variées",
        "Installation professionnelle"
      ]
    },
    {
      id: 2,
      title: "Portes & Fenêtres",
      description: "Notre gamme de portes et fenêtres combine sécurité, isolation et design. Que vous recherchiez un style classique ou contemporain, nous avons des solutions adaptées à tous les goûts et tous les budgets.",
      image: "/public/portes.jpg",
      features: [
        "Large choix de matériaux et finitions",
        "Isolation thermique et acoustique",
        "Solutions sécurisées",
        "Installation par des professionnels"
      ]
    },
    {
      id: 3,
      title: "Solutions Aluminium",
      description: "Spécialistes de l'aluminium, nous offrons des produits durables et modernes pour vos projets d'aménagement. L'aluminium combine légèreté, résistance et facilité d'entretien, en faisant un matériau idéal pour de nombreuses applications.",
      image: "/public/solutions.jpg",
      features: [
        "Profilés aluminium sur mesure",
        "Résistance aux intempéries",
        "Variété de couleurs et finitions",
        "Solutions écologiques et durables"
      ]
    },
    {
      id: 4,
      title: "Conseils & Conception",
      description: "Notre équipe d'experts vous accompagne tout au long de votre projet, de la conception à la réalisation. Nous vous aidons à définir vos besoins et à trouver les solutions les plus adaptées à votre espace et votre budget.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: [
        "Consultation personnalisée",
        "Visualisation 3D de votre projet",
        "Recommandations de matériaux",
        "Estimation détaillée des coûts"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-decopromab-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Nos <span className="text-decopromab-red">Services</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Découvrez notre gamme complète de solutions pour transformer votre espace intérieur
            </p>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4 text-decopromab-black">
                      {service.title}
                    </h2>
                    <p className="text-decopromab-black/80 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-decopromab-red font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-decopromab-black mb-4">
              Intéressé par nos services?
            </h2>
            <p className="text-decopromab-black/80 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir une consultation personnalisée.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-decopromab-red !text-white font-bold rounded-md hover:bg-decopromab-red/90 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
