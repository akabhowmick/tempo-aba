import logo from "../assets/siteImages/logowithname.jpeg";
import heroImage from "../assets/siteImages/adam-winger-7fF0iei80AQ-unsplash.jpg";
import serviceImage1 from "../assets/siteImages/19198612.jpg";
import serviceImage2 from "../assets/siteImages/19198612.jpg";
import serviceImage3 from "../assets/siteImages/19198612.jpg";
import serviceImage4 from "../assets/siteImages/19198612.jpg";
import inaeImage from "../assets/siteImages/full-shot-women-with-instruments-floor.jpg";
import cynthiaImage from "../assets/siteImages/kid-doing-occupational-therapy-session.jpg";

import resourceImage1 from "../assets/siteImages/4824.jpg";
import resourceImage2 from "../assets/siteImages/5767946.jpg";
import backgroundImage from "../assets/siteImages/sitebg.jpg";

export const content = {
  siteBG: backgroundImage,
  header: {
    siteLogo: logo,
    logoAlt: "Logo",
    navItems: [
      {
        name: "About Us",
        submenu: [
          { name: "Our Members", path: "/about/members" },
          { name: "Our Mission", path: "/about/mission" },
        ],
      },
      {
        name: "Join Us",
        path: "/careers",
      },
      {
        name: "Services",
        submenu: [
          { name: "Methods", path: "/services/methods" },
          { name: "In-Home ABA", path: "/services/in-home" },
          { name: "School-Based ABA", path: "/services/school" },
          { name: "Community-Based ABA", path: "/services/community" },
          { name: "Center-Based ABA", path: "/services/center" },
        ],
      },
      {
        name: "Resources",
        submenu: [
          { name: "Insurance", path: "/resources/insurance" },
          { name: "ABA Resources", path: "/resources/aba" },
          { name: "FAQ", path: "/resources/faq" },
        ],
      },
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

export const teamBios = [
  {
    name: "Cynthia Martinez",
    title: "Board Certified Behavior Analyst (BCBA)",
    bio: `
      Cynthia has a Bachelor's degree in Psychology from Hunter College, City University of New York, 
      a Master's degree in Special Education from City College, City University of New York, 
      a Master's degree in School Building Leadership from Touro College, 
      and a Master's degree in Applied Behavior Analysis from St. Joseph's College. 

      Cynthia holds professional certifications as a New York State Special Education Teacher and School Administrator. 
      She is a Board Certified Behavior Analyst (BCBA) and a licensed behavior analyst in New York State (LBA). 

      Cynthia started her journey in the field of Autism and Developmental Disabilities as a Medicaid Service Coordinator. 
      She has held positions as a classroom Special Education Teacher, Special Education Teacher Support Services, Clinical Supervisor, 
      Program Coordinator, Supervising BCBA, and Program Director for a school for children on the Autism Spectrum.
    `,
    imageUrl: cynthiaImage, // Add actual path to Cynthia's image
    profileLink: "/about/Cynthia", // Replace with actual profile link
  },
  {
    name: "Inae Kim",
    title: "Program Coordinator",
    bio: `
      Inae holds a Master of Arts in Health and Behavior Studies, Intellectual Disability/Autism, from Teachers College, Columbia University. 
      She has extensive experience in developing programs for families and students, gained as a research assistant in 
      Dr. Hsu-Min Chiang's Parent Education Program for Parents of Chinese American Children with Autism Spectrum Disorders (ASDs): A Pilot Study at Teachers College. 

      Inae has been working in both non-profit and public schools for over 20 years, serving students with a broad range of disabilities in New York City. 
      She has had tremendous opportunities to refine her practices by teaching in diverse classroom settings for students with Autism Spectrum Disorder, 
      Intellectual Disabilities, Emotional Disturbances, Speech Impairments, Other Health Impairments, and more. 

      Throughout these years, she has served as a Special Education Inclusion Program Coordinator, classroom teacher, SEIT provider, and SETSS provider, 
      facilitating communication between families and schools, and designing intellectually engaging and challenging instruction to help students 
      meet and exceed their IEP and instructional goals. She is currently pursuing an ABA Advanced Certificate program to become a Board Certified Behavior Analyst (BCBA).

      Inae has a strong passion for helping her clients and families to the best of her ability. As a program coordinator, 
      she ensures that all parents and caregivers feel knowledgeable about ABA therapy, offering support and guidance throughout the process.
    `,
    imageUrl: inaeImage, // Add actual path to Inae's image
    profileLink: "/about/inae", // Replace with actual profile link
  },
];

interface ABAResource {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

export const abaResources: ABAResource[] = [
  {
    id: 1,
    title: "Therapy provided at your preferred time and location",
    description:
      "We understand that each child is unique and requires a personalized approach. Our therapy sessions are designed to fit into your schedule and can be provided at home, in school, or at our centers.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/CeMjxniBUH25QSgfLoEoPmNDo7Als1oHqqVoNXDVwRBzimiTA.jpg",
    imgAlt: "Therapist with child",
  },
  {
    id: 2,
    title: "Guiding your child along the path of success",
    description:
      "Our team of highly skilled therapists work closely with your child to develop a customized plan that addresses their unique needs and helps them achieve their full potential.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/CeMjxniBUH25QSgfLoEoPmNDo7Als1oHqqVoNXDVwRBzimiTA.jpg",
    imgAlt: "Therapist with child",
  },
  {
    id: 3,
    title: "Is ABA therapy right for your child?",
    description:
      "Every child is unique, and our therapists work closely with you to determine if ABA therapy is the right fit for your child. We provide a thorough assessment and develop a tailored therapy plan.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/CeMjxniBUH25QSgfLoEoPmNDo7Als1oHqqVoNXDVwRBzimiTA.jpg",
    imgAlt: "Therapist with child",
  },
  {
    id: 4,
    title: "Sample Behaviors We Help With",
    description:
      "Our ABA therapy programs are designed to help children develop a range of skills, including communication, social/emotional skills, adaptive daily living skills, and reducing problem behaviors.",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/CeMjxniBUH25QSgfLoEoPmNDo7Als1oHqqVoNXDVwRBzimiTA.jpg",
    imgAlt: "Therapist with child",
  },
];
