
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const FeatureCard = ({ title, description, icon, link }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-decopromab-red/10 text-decopromab-red">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-decopromab-black">{title}</h3>
      <p className="text-decopromab-black/70 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-decopromab-red hover:text-decopromab-red/70 transition-colors font-medium"
      >
        En savoir plus <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default FeatureCard;
