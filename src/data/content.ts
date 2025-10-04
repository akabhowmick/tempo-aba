import logov1 from "../assets/siteImages/logov4.jpg";
import logov2 from "../assets/siteImages/logowithname.jpeg";
import heroImage from "../assets/siteImages/home/IMG_5457.jpeg";
import mobileHeroImage from "../assets/siteImages/home/mobilehero1.png";
import serviceImage1 from "../assets/siteImages/animated/19198612.jpg";
import serviceImage2 from "../assets/siteImages/animated/4824.jpg";
import serviceImage3 from "../assets/siteImages/animated/5767946.jpg";
import serviceImage5 from "../assets/siteImages/animated/Wavy_Ppl-04_Single-11.jpg";
import serviceImage6 from "../assets/siteImages/animated/mission.png";
import serviceImage7 from "../assets/siteImages/animated/Cartoon married couple communicating with doctor.jpg";
import inaeImage from "../assets/siteImages/members/inae.png";
import cynthiaImage from "../assets/siteImages/members/cynthia.png";

import resourceImage1 from "../assets/siteImages/home/resource1.jpeg";
import resourceImage2 from "../assets/siteImages/home/resource2.jpeg";
import backgroundImage from "../assets/siteImages/sitebg.jpg";

import servicePageImage1 from "../assets/siteImages/home/IMG_5459.jpeg";
import servicePageImage2 from "../assets/siteImages/home/method3.png";
import servicePageImage3 from "../assets/siteImages/home/aba3.png";
import servicePageImage4 from "../assets/siteImages/members/members-2.png";
import servicePageImage5 from "../assets/siteImages/home/service5.jpeg";
import servicePageImage6 from "../assets/siteImages/home/service6.jpeg";
import servicePageImage7 from "../assets/siteImages/home/aba1.png";

import banner1 from "../assets/siteImages/banners/banner1.jpg";
// import banner2 from "../assets/siteImages/banner2.jpg";

export const content = {
  siteBG: backgroundImage,
  header: {
    siteLogo: logov1,
    siteLogo2: logov2,
    logoAlt: "Logo",
    navItems: [
      {
        name: "About Us",
        submenu: [
          { name: "Who we are", path: "/about/members" },
          { name: "Our Mission", path: "/about/mission" },
          { name: "Approach and Process ", path: "/about/methods" },
          { name: "ABA & autism ", path: "/about/abaandautism" },
        ],
      },
      {
        name: "Join Us",
        path: "/careers",
      },
      {
        name: "Services",
        submenu: [
          { name: "Home Based ABA", path: "/services/home" },
          { name: "In-School Consultation", path: "/services/school" },
          { name: "Community Based ABA", path: "/services/community" },
          // { name: "Center-Based ABA", path: "/services/center" },
          { name: "Parent Training and Workshops", path: "/services/parentTraining" },
          { name: "Transition to Adulthood", path: "/services/transition" },
          { name: "Behavioral Consultation", path: "/services/behavior" },
        ],
      },
      {
        name: "Resources",
        submenu: [
          { name: "Insurance", path: "/resources/insurance" },
          { name: "Resources", path: "/resources/aba" },
          { name: "FAQ", path: "/resources/faq" },
        ],
      },
    ],
  },
  hero: {
    title: "ABA - Our Approach",
    description: "At Behavior Frontiers, we take a client-centered approach to ABA.",
    subheader1:
      "At Tempo ABA, we are committed to delivering a high-quality ABA Therapy experience for children and their families. Our dedicated team of experienced therapists and BCBAs conduct thorough assessments and create personalized treatment plans tailored to achieve each child's specific goals.",
    subheader2:
      "We eagerly anticipate the opportunity to meet with you and explore how we can serve to meet the unique needs of your family.",
    subheader3:
      "At Tempo ABA, our mission is to deliver outstanding therapy grounded in the principles of Applied Behavior Analysis (ABA). We are dedicated to empowering individuals to discover their unique strengths and potential, embracing the challenges of their learning journey toward independence.",
    subheader4:
      "We are committed to fostering a positive, inclusive, and diverse environment for our employees, the families we support, and our broader community. Our personalized approach to therapy ensures that collaboration among team members and families creates a safe and nurturing environment throughout your journey with us. We understand that navigating the path to effective care can be overwhelming for families and clients. So, where do you begin? Let us guide you through the process!",
    heroImage: heroImage,
    heroMobileImage: mobileHeroImage,
  },
  services: {
    title: "Where do we provide our services?",
    serviceList: [
      {
        cardTitle: "Home Based ABA",
        cardDescription:
          "Tailored ABA support in the comfort of your child’s home for effective skill generalization.",
        cardImage: serviceImage1,
        cardLink: "/services/home", // Link to the specific service page
        cardGradient: "from-purple-500 to-transparent", // Custom gradient
      },
      {
        cardTitle: "Community Based ABA",
        cardDescription:
          "We integrate community outings into your child’s program to support real-world skill development.",
        cardImage: serviceImage2,
        cardLink: "/services/community", // Link to the specific service page
        cardGradient: "from-blue-500 to-transparent", // Custom gradient
      },
      {
        cardTitle: "School-Based ABA",
        cardDescription:
          "We provide ABA services in schools to support your child’s success in the classroom.",
        cardImage: serviceImage3,
        cardLink: "/services/school", // Link to the specific service page
        cardGradient: "from-green-700 to-transparent", // Custom gradient
      },
      // {
      //   cardTitle: "Center-Based ABA",
      //   cardDescription: "Our clinics offer ABA therapy in a structured, professional setting.",
      //   cardImage: serviceImage4,
      //   cardLink: "/services/center", // Link to the specific service page
      //   cardGradient: "from-yellow-500 to-transparent", // Custom gradient
      // },
      {
        cardTitle: "Parent Training and Workshopss",
        cardDescription:
          "We integrate community outings into your child’s program to support real-world skill development.",
        cardImage: serviceImage5,
        cardLink: "/services/parentTraining", // Link to the specific service page
        cardGradient: "from-orange-500 to-transparent", // Custom gradient
      },
      {
        cardTitle: "Transition to Adulthood",
        cardDescription:
          "We provide ABA services in schools to support your child’s success in the classroom.",
        cardImage: serviceImage6,
        cardLink: "/services/transition", // Link to the specific service page
        cardGradient: "from-red-600 to-transparent", // Custom gradient
      },
      {
        cardTitle: "Behavioral Consultation",
        cardDescription: "Our clinics offer ABA therapy in a structured, professional setting.",
        cardImage: serviceImage7,
        cardLink: "/services/behavior", // Link to the specific service page
        cardGradient: "from-purple-500 to-transparent", // Custom gradient
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
      description: "Check out some of these helpful resources!",
      buttonText: "Read more",
      link: "/resources/aba",
    },
    image2: {
      type: "image",
      alt: "Children conducting a science experiment with beakers and test tubes",
      src: resourceImage2,
    },
    text2: {
      type: "text",
      title: "Our process",
      description:
        "We will provide you with the necessary tools to meet current and future challenges.",
      buttonText: "Read more",
      link: "/about/methods",
    },
  },
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
      "Cynthia's journey in the field of autism  and developmental disabilities began as a Medicaid Service Coordinator, where her passion for helping others first took root. Since then, she has embraced a variety of roles, including Special Education Teacher, Clinical Supervisor, Program Coordinator, Supervising BCBA, and Program Director at a dedicated school for children on the autism  Spectrum.",
      "Now serving as the Director of Tempo ABA, Cynthia’s enthusiasm and commitment to supporting clients and their families are at the heart of her work. She skillfully navigates challenges and advocates fiercely for her clients with special needs. Her dedication and compassion shine through in every interaction, making a profound and lasting impact on the lives of those she serves.",
    ],
    imageUrl: cynthiaImage,
    profileLink: "/about/members/Cynthia",
  },
  {
    name: "Inae Kim",
    credentials: "M.A.Ed ",
    title: "Co-Founder & Program Coordinator",
    bio: [
      "Inae holds a Master of Arts in Health and Behavior Studies, intellectual disability/autism, from Teachers College, Columbia University. She has extensive experience in developing programs for families and students, gained as a research assistant in Dr. Hsu-Min Chiang's Parent Education Program for Parents of Chinese American Children with autism spectrum disorders (ASDs): A Pilot Study at Teachers College.",
      "Inae brings over 20 years of dedicated experience in both non-profit and public education, serving students with a wide range of disabilities in New York City. Her career has provided her with invaluable opportunities to refine her teaching practices across diverse classroom settings, supporting students with autism spectrum disorder, intellectual disabilities, emotional disturbances, speech impairments, other health impairments, and more.",
      " Throughout her journey, Inae has excelled in various roles, including Special Education Inclusion Program Coordinator, classroom teacher, SEIT provider, and SETSS provider. In these positions, she has facilitated meaningful communication between families and schools, designing intellectually engaging and challenging instruction that empowers students to meet and exceed their IEP and instructional goals. Currently, she is pursuing an ABA Advanced Certificate program to become a Board Certified Behavior Analyst (BCBA), further enhancing her expertise. ",
      "Inae's passion for helping clients and families drives her work. As a program coordinator, she prioritizes ensuring that all parents and caregivers feel informed and supported in their understanding of ABA therapy, guiding them every step of the way",
    ],
    imageUrl: inaeImage,
    profileLink: "/about/members/inae",
  },
];

export const servicesData = {
  home: {
    title: "Home Based ABA",
    description: `Learning in a home setting can be the most comfortable option for your child. In familiar surroundings, your child can engage in daily routines while receiving tailored support. Family members can easily  receive parent training and participate in the process, fostering a collaborative environment. Home-based ABA is ideal for helping your child acquire skills in their own space and apply those skills in various settings, promoting effective generalization.`,
    image: servicePageImage1,
  },
  community: {
    title: "Community Based ABA",
    description: `If you could use some help making trips to the grocery store, playground, or park more successful, we seamlessly integrate community outings into your child’s program, ensuring that these everyday experiences are both enjoyable and effective. Our dedicated Tempo ABA team will work closely with your family to create a supportive environment, making outing easier and more rewarding for everyone involved.`,
    image: servicePageImage2,
  },
  school: {
    title: "In-School Consultation",
    description: `Our School Consulting services are tailored to address the specific needs of each school, student, and teacher. Led by our experienced Board Certified Behavior Analysts (BCBAs), who have successfully taken on leadership roles in school settings and excel in classroom management, we offer invaluable in-school consultation services. Our goal is to help schools create supportive and inclusive environments for all students.`,
    additionalInfo: [
      "Classroom set-up for optimal learning",
      "Educator training sessions",
      "Standardized assessments",
      "IEP support and development",
      "Behavior Intervention Services; and Teacher, caregiver, and general classroom modification training",
      "Family training sessions",
    ],
    image: servicePageImage3,
  },
  parentTraining: {
    title: "Parent Training and Workshopss",
    description: `ABA parent training is a vital component of any ABA program. It equips parents with essential skills to promote generalization, enhance functioning in natural settings, and reduce stress, ultimately creating a more enjoyable and fulfilling life for the entire family`,
    image: servicePageImage4,
  },
  transition: {
    title: "Transition to Adulthood",
    description: `As children grow older, the focus shifts toward preparing for adulthood. We prioritize essential 
    skills for this transition, including activities of daily living, appropriate social behaviors, and job training. 
    Our programs are designed to equip individuals with the necessary tools to navigate life independently and successfully. 
    We also emphasize communication skills, self-advocacy, and decision-making to ensure they are well-prepared for the 
    challenges of adult life.`,
    image: servicePageImage5,
  },
  center: {
    title: "Center Based ABA",
    description: `Coming Soon!`,
    image: servicePageImage6,
  },
  behavior: {
    title: "Behavioral Consultation",
    description: `By cultivating collaborative and professional relationships, we aim to empower educators with the tools and knowledge necessary to create inclusive and supportive learning environments.`,
    image: servicePageImage7,
  },
};

export const pageBanners = {
  mission: { alt: "missionImage", src: banner1, title: "Our Mission", subtitle: "" },
  members: {
    alt: "membersImage",
    src: banner1,
    title: "Who we are",
    subtitle: "Welcome to Tempo ABA Services, where compassion meets expertise.",
  },
  methods: {
    alt: "methodsImage",
    src: banner1,
    title: "Approach and process",
    subtitle: "Learn about our process",
  },
  services: { alt: "servicesImage", src: banner1, title: "Services", subtitle: "Our offerings" },
  contact: {
    alt: "contactImage",
    src: banner1,
    title: "Contact Us",
    subtitle: "Get in touch with us for any inquiries or support. ",
  },
  aba: { alt: "abaImage", src: banner1, title: "ABA and autism ", subtitle: "" },
  joinUs: {
    alt: "joinImage",
    src: banner1,
    title: "Join our team!",
    subtitle: "Complete the form below and we will shortly be in touch with you",
  },
  faq: { alt: "faqImage", src: banner1, title: "Frequently Asked Questions", subtitle: "" },
  insurance: { alt: "insuranceImage", src: banner1, title: "Insurance", subtitle: "" },
  abaResources: {
    alt: "abaResourcesImage",
    src: banner1,
    title: "Helpful Resources",
    subtitle: "",
  },
};

export const emailSetUp = {
  formSubmitEmail: "https://formsubmit.co/cmartinez@tempoaba.com",
  redirectLink: "https://tempoaba.com/",
  ccLinks: "ikim@tempoaba.com",
  // ccLinks: "ikim@tempoaba.com, cmartinez@tempoaba.com"
};
