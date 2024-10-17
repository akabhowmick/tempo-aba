import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  cardTitle: string;
  cardImage: string;
  cardDescription: string;
  cardLink: string;
  cardGradient: string;
}

export const ServiceCard = ({ service }: { service: ServiceCardProps }) => {
  const { cardTitle, cardImage, cardDescription, cardLink, cardGradient } = service;

  return (
    <Link
      to={cardLink}
      onClick={() => {
        window.scrollTo(0, 0); // Scroll to top
      }}
    >
      <motion.div
        className="relative rounded-lg overflow-hidden cursor-pointer w-80 max-w-[calc(100vw-40px)] h-60 group" // Set a fixed height
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img src={cardImage} alt={cardTitle} className="w-full h-full object-cover" />

        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${cardGradient} opacity-75`} />

        {/* Title and Description */}
        <div className="absolute bottom-4 left-4 text-white">
          {/* Title */}
          <motion.div
            className="text-xl font-semibold group-hover:-translate-y-5 transition-transform"
            transition={{ type: "spring", stiffness: 300 }}
          >
            {cardTitle}
          </motion.div>

          {/* Description - Fully Hidden and Shows on Hover */}
          <motion.div
            className="text-sm mt-2 hidden transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
          >
            {cardDescription}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};
