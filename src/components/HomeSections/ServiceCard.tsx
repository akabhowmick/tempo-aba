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
    <motion.div
      className="relative rounded-lg overflow-hidden w-80 max-w-[calc(100vw-40px)] h-60"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        to={cardLink}
        onClick={() => window.scrollTo(0, 0)}
        className="block w-full h-full group focus:outline-none focus:ring-4 focus:ring-green-700 focus:ring-offset-2 rounded-lg"
        aria-label={`Learn more about ${cardTitle}: ${cardDescription}`}
      >
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src={cardImage} 
            alt="" 
            role="presentation"
            className="w-full h-full object-cover" 
          />

          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t ${cardGradient} opacity-85`} />

          {/* Title and Description */}
          <div className="absolute bottom-4 left-4 text-white">
            <motion.h3
              className="text-xl font-semibold group-hover:-translate-y-2 transition-transform"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {cardTitle}
            </motion.h3>

            <motion.p
              className="text-sm mt-0.5 hidden transform translate-y-5 opacity-0 group-hover:block group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3 }}
            >
              {cardDescription}
            </motion.p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};