import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import logos
import ideaLogo from "../../../assets/siteImages/resources/idea.png";
import iesLogo from "../../../assets/siteImages/resources/ies.png";
import bacbLogo from "../../../assets/siteImages/resources/bacb.png";
import naspLogo from "../../../assets/siteImages/resources/nasp.png";
import usdepLogo from "../../../assets/siteImages/resources/usdep.png";
import { SubPageTitle } from "../../Shared/CommonSections";
import { pageBanners } from "../../../data/content";

// Resource data
const resources = [
  {
    name: "Individuals with Disabilities Education Improvement Act",
    url: "http://idea.ed.gov",
    description:
      "This is the website for the most up-to-date information on the Individuals with Disabilities Education Improvement Act (IDEA).",
    logo: ideaLogo,
  },
  {
    name: "Institute of Education Sciences",
    url: "http://ies.ed.gov",
    description:
      "This website provides information about the Institute of Education Sciences (IES), a division of the U.S. Department of Education.",
    logo: iesLogo,
  },
  {
    name: "National Association of School Psychologists (NASP)",
    url: "http://www.nasponline.org",
    description:
      "This website provides information for students, families, and educators on the most recent developments in school psychology.",
    logo: naspLogo,
  },
  {
    name: "U.S. Department of Education",
    url: "https://www.ed.gov/",
    description:
      "This page provides news and information about the government’s educational initiatives, including standards and assessment.",
    logo: usdepLogo,
  },
  {
    name: "Behavior Analyst Certification Board (BACB)",
    url: "https://www.bacb.com/",
    description:
      "The BACB website provides essential information about certification, ethics, and professional standards in ABA.",
    logo: bacbLogo,
  },
];

export const ABAResourcesPage = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <SubPageTitle pageBannerInfo={pageBanners.abaResources} />
      {/* Flex container for cards, default to column on mobile */}
      <ul className="flex flex-col space-y-8 py-8 md:space-y-0 md:flex-row md:flex-wrap gap-8 justify-center">
        {resources.map((resource, index) => (
          <motion.li
            key={index}
            className="relative border bg-white rounded-lg shadow-lg hover:bg-white flex flex-col md:flex-row md:w-full md:max-w-md" // Set max width for each card
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={resource.url}
              className="flex-col justify-center items-center rounded-lg p-6 relative z-10"
            >
              {/* Logo */}
              <img
                src={resource.logo}
                alt={`${resource.name} logo`}
                className="w-24 h-24 object-contain mb-4" // Add margin for spacing
              />

              {/* Resource Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">
                  <p className="text-blue-600 hover:underline">{resource.name}</p>
                </h2>
                <p className="text-gray-700">{resource.description}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
