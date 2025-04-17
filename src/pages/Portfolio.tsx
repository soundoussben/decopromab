
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Types pour notre galerie
type GalleryCategory = "all" | "cuisines" | "portes" | "fenetres";
type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  image: string;
};

const Portfolio = () => {
  // État pour le filtre de catégorie actif
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  // Images de la galerie (à remplacer par vos propres images)
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Cuisine Moderne Épurée",
      category: "cuisines",
      image: "/1.jpg"
    },
    {
      id: 2,
      title: "Cuisine Design Intégrée",
      category: "cuisines",
      image: "/2.png"
    },
    {
      id: 3,
      title: "Cuisine Luxe",
      category: "cuisines",
      image: "/3.png"
    },
    {
      id: 4,
      title: "Cuisine Luxe",
      category: "cuisines",
      image: "/4.png"
    },
    {
      id: 5,
      title: "Cuisine Intégrée Design",
      category: "cuisines",
      image: "/5.png"
    },
     {
      id: 6,
      title: "Porte d'Entrée Élégante",
      category: "portes",
      image: "/p1.jpg"
    },
    {
      id: 7,
      title: "Portes-Fenêtres Lumineuses",
      category: "portes",
      image: "/p2.jpg"
    },
    {
      id: 8,
      title: "Porte Coulissante Moderne",
      category: "portes",
      image: "/p3.jpg"
    },
    {
      id: 9,
      title: "Structure Aluminium Moderne",
      category: "fenetres",
      image: "/f2.jpg"
    },
    {
      id: 10,
      title: "Façade Aluminium Contemporaine",
      category: "fenetres",
      image: "/f1.jpg"
    },
    {
      id: 11,
      title: "Profilés Aluminium Design",
      category: "fenetres",
      image: "/f3.jpg"
    }
  ];

  // Filtrer les éléments de la galerie en fonction de la catégorie active
  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Options de filtre pour la galerie
  const filterOptions: { value: GalleryCategory; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "cuisines", label: "Cuisines" },
    { value: "portes", label: "Portes " },
    { value: "fenetres", label: "Fenêtres" }
  ];

  // État pour la modal de galerie
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-decopromab-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Notre <span className="text-decopromab-red">Portfolio</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Découvrez nos réalisations et laissez-vous inspirer pour votre prochain projet
            </p>
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveCategory(option.value)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === option.value
                      ? "bg-decopromab-red text-white"
                      : "bg-white text-decopromab-black hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-64"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-decopromab-red capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="bg-decopromab-black/50 hover:bg-decopromab-black text-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-decopromab-black">{selectedImage.title}</h3>
                <p className="text-decopromab-red capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-decopromab-black mb-4">
              Vous aimez ce que vous voyez?
            </h2>
            <p className="text-decopromab-black/80 max-w-2xl mx-auto mb-8">
              Contactez-nous pour discuter de votre projet et voir comment nous pouvons vous aider à réaliser vos idées.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-decopromab-red text-white font-bold rounded-md hover:bg-decopromab-red/90 transition-colors"
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

export default Portfolio;
