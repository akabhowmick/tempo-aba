import logo from "../assets/siteImages/logowithname.jpeg";
import heroImage from "../assets/siteImages/adam-winger-7fF0iei80AQ-unsplash.jpg";
import serviceImage1 from "../assets/siteImages/19198612.jpg";
import serviceImage2 from "../assets/siteImages/19198612.jpg";
import serviceImage3 from "../assets/siteImages/19198612.jpg";
import serviceImage4 from "../assets/siteImages/19198612.jpg";
import inaeImage from "../assets/siteImages/members/inae.png";
import cynthiaImage from "../assets/siteImages/members/cynthia.png";

import resourceImage1 from "../assets/siteImages/4824.jpg";
import resourceImage2 from "../assets/siteImages/5767946.jpg";
import backgroundImage from "../assets/siteImages/sitebg.jpg";

import missionImage from "../assets/siteImages/mission.png";
export const savedMissionImage = missionImage;

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
          { name: "Home Based ABA", path: "/services/home" },
          { name: "In-School Consultation", path: "/services/school" },
          { name: "Community Based ABA", path: "/services/community" },
          { name: "Center-Based ABA", path: "/services/center" },
          { name: "Parent Training Workshop", path: "/services/transition" },
          { name: "Transition to Adulthood", path: "/services/adult" },
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
    credentials: "M.S. Ed, MS, BCBA, LBA, SBL",
    title: "Co-Founder & Director",
    bio: [
      "Cynthia has a Bachelor's degree in Psychology from Hunter College, City University of New York, a Master's degree in Special Education from City College, City University of New York, a Master's degree in School Building Leadership from Touro College, and a Master's degree in Applied Behavior Analysis from St. Joseph's College. Cynthia holds professional certifications as a New York State Special Education Teacher and School Administrator. Cynthia is a Board Certified Behavior Analyst (BCBA), and is a licensed behavior analyst in New York State (LBA).",
      "Cynthia's journey in the field of Autism and Developmental Disabilities began as a Medicaid Service Coordinator, where her passion for helping others first took root. Since then, she has embraced a variety of roles, including Special Education Teacher, Clinical Supervisor, Program Coordinator, Supervising BCBA, and Program Director at a dedicated school for children on the Autism Spectrum.",
      "Now serving as the Director of Tempo ABA, Cynthia’s enthusiasm and commitment to supporting clients and their families are at the heart of her work. She skillfully navigates challenges and advocates fiercely for her clients with special needs. Her dedication and compassion shine through in every interaction, making a profound and lasting impact on the lives of those she serves.",
    ],
    imageUrl: cynthiaImage,
    profileLink: "/about/Cynthia",
  },
  {
    name: "Inae Kim",
    credentials: "M.A.Ed ",
    title: "Co-Founder & Program Coordinator",
    bio: [
      "Inae holds a Master of Arts in Health and Behavior Studies, Intellectual Disability/Autism, from Teachers College, Columbia University. She has extensive experience in developing programs for families and students, gained as a research assistant in Dr. Hsu-Min Chiang's Parent Education Program for Parents of Chinese American Children with Autism Spectrum Disorders (ASDs): A Pilot Study at Teachers College.",
      "Inae brings over 20 years of dedicated experience in both non-profit and public education, serving students with a wide range of disabilities in New York City. Her career has provided her with invaluable opportunities to refine her teaching practices across diverse classroom settings, supporting students with Autism Spectrum Disorder, Intellectual Disabilities, Emotional Disturbances, Speech Impairments, Other Health Impairments, and more.",
      " Throughout her journey, Inae has excelled in various roles, including Special Education Inclusion Program Coordinator, classroom teacher, SEIT provider, and SETSS provider. In these positions, she has facilitated meaningful communication between families and schools, designing intellectually engaging and challenging instruction that empowers students to meet and exceed their IEP and instructional goals. Currently, she is pursuing an ABA Advanced Certificate program to become a Board Certified Behavior Analyst (BCBA), further enhancing her expertise. ",
      "Inae's passion for helping clients and families drives her work. As a program coordinator, she prioritizes ensuring that all parents and caregivers feel informed and supported in their understanding of ABA therapy, guiding them every step of the way",
    ],
    imageUrl: inaeImage,
    profileLink: "/about/inae",
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

export const servicesData = {
  home: {
    title: "Preschool Learners",
    description: `For our preschool learners, we offer home-based early learner programs 
    designed to prepare toddlers and young children for their future. Our trained therapists 
    work closely with each child, creating individualized goals that encompass language 
    development, social skills training, and effective behavior management strategies. In 
    addition, our social skills groups provide opportunities for children to generalize their 
    skills in a supportive and interactive setting. Throughout the entire process, our Board 
    Certified Behavior Analysts (BCBAs) provide ongoing supervision to ensure continuous progress 
    and monitoring.`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  school: {
    title: "School-aged Learners",
    description: `Our school-aged learner programs cater to children from Kindergarten to High School. 
    These in-home ABA therapy programs are meticulously customized to address the specific needs of 
    each learner. Assessment and program development are carried out by our BCBAs, ensuring a 
    comprehensive approach. The implementation of the program is handled by trained and experienced 
    Behavior Technicians and Registered Behavior Technicians (RBTs).`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  adult: {
    title: "Adult Learners",
    description: `For adult learners aged 18 and over, our in-home ABA therapy programs are individually crafted 
    to meet their specific needs. We conduct thorough screenings using assessment tools that align with their areas 
    of concern, allowing us to create comprehensive and personalized plans.`,
    image:
      "https://storage.googleapis.com/a1aa/image/gpkBVlMvuKJ1CFjE3N5Uj9UGlg2MPunxosEJjVtINnajAH5E.jpg",
  },
};
