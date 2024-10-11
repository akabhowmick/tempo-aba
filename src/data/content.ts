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
          { name: "Parent Training Workshop", path: "/services/parentTraining" },
          { name: "Transition to Adulthood", path: "/services/transition" },
          { name: "Behavior Consultation", path: "/services/behavior" },
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
    subheader:
      "At Tempo ABA, we are committed to delivering a high-quality ABA Therapy experience for children and their families. Our dedicated team of experienced therapists and BCBAs conduct thorough assessments and create personalized treatment plans tailored to achieve each child's specific goals.",
    subheader2:
      "We eagerly anticipate the opportunity to meet with you and explore how we can serve to meet the unique needs of your family.",
    heroImage: heroImage,
  },
  services: {
    title: "Where do we provide our services?",
    serviceList: [
      {
        cardTitle: "Home Based ABA",
        cardDescription:
          "Tailored ABA support in the comfort of your child’s home for effective skill generalization.",
        cardImage: serviceImage1,
        cardLink: "services/home", // Link to the specific service page
        cardGradient: "from-blue-500 to-transparent", // Custom gradient
      },
      {
        cardTitle: "Community Based ABA",
        cardDescription:
          "We integrate community outings into your child’s program to support real-world skill development.",
        cardImage: serviceImage2,
        cardLink: "/community-based-aba", // Link to the specific service page
        cardGradient: "from-orange-500 to-transparent", // Custom gradient
      },
      {
        cardTitle: "School-Based ABA",
        cardDescription:
          "We provide ABA services in schools to support your child’s success in the classroom.",
        cardImage: serviceImage3,
        cardLink: "/school-based-aba", // Link to the specific service page
        cardGradient: "from-green-500 to-transparent", // Custom gradient
      },
      {
        cardTitle: "Center-Based ABA",
        cardDescription: "Our clinics offer ABA therapy in a structured, professional setting.",
        cardImage: serviceImage4,
        cardLink: "/center-based-aba", // Link to the specific service page
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
    title: "Home Based ABA",
    description: `Learning in a home setting can be the most comfortable option for your child. In familiar surroundings, your child can engage in daily routines while receiving tailored support. Family members can easily  receive parent training and participate in the process, fostering a collaborative environment. Home-based ABA is ideal for helping your child acquire skills in their own space and apply those skills in various settings, promoting effective generalization.`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  community: {
    title: "Community Based ABA",
    description: `If you could use some help making trips to the grocery store, playground, or park more successful, we seamlessly integrate community outings into your child’s program, ensuring that these everyday experiences are both enjoyable and effective. Our dedicated Tempo ABA team will work closely with your family to create a supportive environment, making each outing easier and more rewarding for everyone involved.`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
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
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  parentTraining: {
    title: "Parent Training Workshops",
    description: `ABA parent training is a vital component of any ABA program. It equips parents with essential skills to promote generalization, enhance functioning in natural settings, and reduce stress, ultimately creating a more enjoyable and fulfilling life for the entire family`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  transition: {
    title: "Transition to Adulthood",
    description: `As children grow older, their focus shifts toward preparing for adulthood. We prioritize essential 
    skills for this transition, including activities of daily living, appropriate social behaviors, and job training. 
    Our programs are designed to equip individuals with the necessary tools to navigate life independently and successfully. 
    We also emphasize communication skills, self-advocacy, and decision-making to ensure they are well-prepared for the 
    challenges of adult life.`,
    image:
      "https://storage.googleapis.com/a1aa/image/gpkBVlMvuKJ1CFjE3N5Uj9UGlg2MPunxosEJjVtINnajAH5E.jpg",
  },
  center: {
    title: "Center Based ABA (Coming Soon)",
    description: `We are excited to announce the upcoming launch of our center-based ABA programs. These programs will offer 
    a structured environment for skill acquisition and social interaction under the supervision of experienced BCBAs. Stay 
    tuned for more details on this new offering!`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  behavior: {
    title: "Behavior Consultation",
    description: `By cultivating collaborative and professional relationships, we aim to empower educators with the tools and knowledge necessary to create inclusive and supportive learning environments.`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
};
