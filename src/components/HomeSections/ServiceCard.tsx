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
    <Link to={cardLink}>
      <motion.div
        className="relative rounded-lg overflow-hidden cursor-pointer w-60 group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img
          src={cardImage}
          alt={cardTitle}
          className="w-full h-full object-cover"
          height="400"
          width="600"
        />

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

          {/* Description - Visible on Hover */}
          <motion.div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {cardDescription}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};
