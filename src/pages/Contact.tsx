import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    // Pour cet exemple, nous simulons simplement une soumission réussie
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    // Réinitialiser l'état après 5 secondes
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-decopromab-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Contactez <span className="text-decopromab-red">Nous</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Nous sommes là pour répondre à vos questions et vous aider à réaliser vos projets
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-decopromab-black">
                  Envoyez-nous un message
                </h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                    <p className="font-medium">Message envoyé avec succès!</p>
                    <p className="text-sm mt-1">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-decopromab-black mb-1">
                      Nom Complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-decopromab-black mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-decopromab-black mb-1">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre numéro de téléphone"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-decopromab-black mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Comment pouvons-nous vous aider?"
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-decopromab-red hover:bg-decopromab-red/90">
                    <Send size={16} className="mr-2" />
                    Envoyer le Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-decopromab-black">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-decopromab-red rounded-full p-3 text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-decopromab-black">Téléphone</h3>
                      <p className="text-decopromab-black/70 mt-1">0560 26 26 65</p>
                      <p className="text-decopromab-black/70 mt-1">0560 26 26 66</p>
                      <p className="text-decopromab-black/70 mt-1">0560 26 26 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-decopromab-red rounded-full p-3 text-white">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-decopromab-black">Email</h3>
                      <p className="text-decopromab-black/70 mt-1">showroom.decopromab@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-decopromab-red rounded-full p-3 text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-decopromab-black">Adresse</h3>
                      <p className="text-decopromab-black/70 mt-1">VMH7+V85, Unnamed Road, Mansourah</p>
                      <a 
                        href="https://maps.google.com/?q=VMH7+V85,+Unnamed+Road,+Mansourah" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decopromab-red hover:underline inline-block mt-2"
                      >
                        Voir sur Google Maps
                      </a>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center text-decopromab-black">
              Notre Emplacement
            </h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12810.365664731606!2d3.2697537!3d36.3874175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e517bd4d1d463%3A0x70cf09e44ca9a34!2sMansourah%2C%20Alg%C3%A9rie!5e0!3m2!1sfr!2sus!4v1650000000000!5m2!1sfr!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Emplacement de Decopromab Showroom"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
