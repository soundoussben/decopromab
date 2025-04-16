
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-decopromab-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-4">
              <img 
                src="/lovable-uploads/cb7445de-2386-42bc-bd0a-20c34c68ea17.png" 
                alt="Decopromab Logo" 
                className="h-24" 
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-decopromab-red">Liens Rapides</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4 text-decopromab-red">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-decopromab-red" />
                <span>0560 26 26 65</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-decopromab-red" />
                <span>0560 26 26 66</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-decopromab-red" />
                <span>0560 26 26 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-decopromab-red" />
                <span>showroom.decopromab@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-decopromab-red" />
                <span>VMH7+V85, Unnamed Road, Mansourah</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Decopromab. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
