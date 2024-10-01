import logo from "../assets/siteImages/logowithname.jpeg";
import heroImage from "../assets/siteImages/adam-winger-7fF0iei80AQ-unsplash.jpg";
import serviceImage1 from "../assets/siteImages/19198612.jpg";
import serviceImage2 from "../assets/siteImages/19198612.jpg";
import serviceImage3 from "../assets/siteImages/19198612.jpg";
import serviceImage4 from "../assets/siteImages/19198612.jpg";
import resourceImage1 from "../assets/siteImages/4824.jpg";
import resourceImage2 from "../assets/siteImages/5767946.jpg";

export const content = {
  header: {
    logoAlt: "Tempo ABA Logo",
    phoneNumber: "888-922-2844",
    siteLogo: logo,
    navItems: [
      { name: "Approach", path: "/approach" },
      { name: "Services", path: "/services" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
      { name: "Methods", path: "/methods" },
    ],
  },
  hero: {
    title: "ABA - Our Approach",
    description: "At Behavior Frontiers, we take a client-centered approach to ABA.",
    heroImage: heroImage,
  },
  services: {
    title: "Where do we provide our services?",
    serviceList: [
      {
        cardTitle: "In-Home ABA",
        cardDescription: "We offer in-home ABA services to create a familiar environment.",
        cardImage: serviceImage1,
        cardLink: "/in-home-aba", // Link to the specific service page
        cardGradient: "from-blue-500 to-transparent", // Custom gradient
      },
      {
        cardTitle: "School-Based ABA",
        cardDescription: "Our therapists provide ABA in school settings.",
        cardImage: serviceImage2,
        cardLink: "/school-based-aba",
        cardGradient: "from-green-500 to-transparent",
      },
      {
        cardTitle: "Community-Based ABA",
        cardDescription: "Our services can be provided in various community settings.",
        cardImage: serviceImage3,
        cardLink: "/community-based-aba",
        cardGradient: "from-orange-500 to-transparent",
      },
      {
        cardTitle: "Center-Based ABA",
        cardDescription: "Our clinics offer center-based ABA therapy.",
        cardImage: serviceImage4,
        cardLink: "/center-based-aba",
        cardGradient: "from-purple-500 to-transparent",
      },
    ],
  },
  resources: {
    image1: {
      type: "image",
      alt: "A woman working on a laptop with a child sitting beside her",
      src: resourceImage1,
    },
    text1: {
      type: "text",
      title: "Resource Links",
      description:
        "We not only treat our clients, but we also support them as well. Check out some of these helpful resources!",
      buttonText: "Read more",
    },
    image2: {
      type: "image",
      alt: "Children conducting a science experiment with beakers and test tubes",
      src: resourceImage2,
    },
    text2: {
      type: "text",
      title: "Our Process",
      description:
        "We will provide you with the necessary tools to meet all current and future challenges.",
      buttonText: "Read more",
    },
  },
  programs: {
    title: "Our Programs",
    earlyIntervention: "Early Intervention for children aged 0-3...",
    comprehensive: "Comprehensive Program for children 3+...",
    focused: "Focused ABA Programs designed for specific behavioral issues...",
    parentTraining: "Parent-Control Programs for involving parents...",
  },
  resourcesData: [
    { name: "Organization 1", imageUrl: "https://via.placeholder.com/150" },
    { name: "Organization 2", imageUrl: "https://via.placeholder.com/150" },
    { name: "Organization 3", imageUrl: "https://via.placeholder.com/150" },
    { name: "Organization 4", imageUrl: "https://via.placeholder.com/150" },
  ],
  footer: {
    text: "If you want to learn more about ABA, contact our team today!",
  },
};
