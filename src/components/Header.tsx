import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md  ">
      <div className="container mx-auto px-8 py-8 flex justify-between items-center  ">
        <Link to="/" className="flex items-center space-x-2 ">
          <img 
            src="/lovable-uploads/cb7445de-2386-42bc-bd0a-20c34c68ea17-removebg-preview.png" 
            alt="Decopromab Logo" 
            className="h-24" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-40">
          <Link
            to="/"
           className="text-decopromab-black hover:text-decopromab-red font-bold text-[18px] transition-colors"
          >
            Accueil
          </Link>
          <Link
            to="/services"
      className="text-decopromab-black hover:text-decopromab-red font-bold text-[18px] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
           className="text-decopromab-black hover:text-decopromab-red font-bold text-[18px] transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
           className="text-decopromab-black hover:text-decopromab-red font-bold text-[18px] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-decopromab-black"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white p-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-decopromab-black hover:text-decopromab-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="text-decopromab-black hover:text-decopromab-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-decopromab-black hover:text-decopromab-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-decopromab-black hover:text-decopromab-red font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
