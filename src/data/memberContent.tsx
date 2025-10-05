import { FaHandsHelping, FaUserGraduate, FaClipboardCheck, FaChartLine } from "react-icons/fa";

import missionImage from "../assets/siteImages/home/pikaso_edit_Candid-image-photography-natural-textures-highly-r.jpeg";
export const savedMissionImage = missionImage;

import backgroundPrinciples from "../assets/siteImages/backgrounds/greenBG.png";
export const savedBgLightestGreen = backgroundPrinciples;

import banner2 from "../assets/siteImages/banners/banner2.jpg";
import banner3 from "../assets/siteImages/members/members-2.png";
import banner4 from "../assets/siteImages/banners/banner4.png";

import banner5 from "../assets/siteImages/members/members-3.png";
import banner6 from "../assets/siteImages/home/method2.png";
import banner7 from "../assets/siteImages/home/method3.png";
import aba1 from "../assets/siteImages/home/aba1.png";
import aba2 from "../assets/siteImages/members/members-2.png";
import aba3 from "../assets/siteImages/home/aba3.png";

export const missionContent = {
  mission: {
    title: "Our Mission:",
    paragraph1:
      "  At Tempo ABA, our mission is to provide exceptional ABA therapy rooted in the principles of Applied Behavior Analysis (ABA). We are dedicated to empowering individuals to uncover their unique strengths and potential while welcoming the challenges of their learning journey toward independence. Our dedicated team of Board Certified Behavior Analysts and behavior technicians implement tailored treatment plans designed to enhance skills that foster greater independence, open up new opportunities, and encourage active involvement, all while addressing and reducing learning barriers.",
    paragraph2:
      "We value collaboration among all team members and prioritize strong partnerships with families, respecting each individual’s uniqueness and the rich cultural diversity of the families we serve. Our commitment extends to creating a positive, inclusive, and diverse learning environment for our employees, the families we support, and our broader community.",
  },
  guidingPrinciple: {
    title: "Our Guiding Principles:",
    principles: [
      {
        icon: <FaHandsHelping className="text-green-700 w-9 h-9" />,
        title: "Collaboration",
        description:
          "Collaboration among service providers and caregivers is essential in the implementation and success of treatment plans.",
      },
      {
        icon: <FaUserGraduate className="text-blue-800 w-9 h-9" />,
        title: "Individualized Learning",
        description:
          "Each child’s unique background, strengths, learning styles, and interests plays an integral role in the development of an effective individualized treatment plan.",
      },
      {
        icon: <FaClipboardCheck className="text-red-500 w-9 h-9" />,
        title: "Comprehensive Assessments",
        description:
          "Comprehensive, varied, and ongoing assessments are necessary in the development and refinement of service plans.",
      },
      {
        icon: <FaChartLine className="text-purple-600 w-9 h-9" />,
        title: "Research-Based Decisions",
        description:
          "Successful treatment plans are built upon research-based and data-driven decisions.",
      },
    ],
  },
};

export const membersContent = {
  title: "The Story of Cynthia and Inae:",
  paragraph1:
    "Tempo ABA was born from the passion and dedication of Cynthia and Inae, sparked since their first meeting, when Inae was an intern in Cynthia's special education classroom. This shared commitment to making a difference laid the foundation for our mission.",
  paragraph2:
    "With over 20 years of combined experience in Special Education and Applied Behavior Analysis (ABA), Cynthia and Inae are equipped with the expertise to provide exceptional care. Cynthia brings a wealth of professional experience in ABA along with strong administrative skills, while Inae excels in developing programs and services for clients and families, drawing from her diverse and dynamic background across various settings.",
  paragraph3:
    "Together, their extensive experience working with students, clients, families, and professionals drives Tempo ABA to deliver the highest quality services to our community. United by their passion for helping individuals of all ages with autism spectrum disorders, Cynthia and Inae are dedicated to fostering growth, learning, and independence for every client they serve.",
  paragraph4:
    "Tempo ABA was born from the passion and dedication of Cynthia and Inae, sparked since their first meeting, when Inae was an intern in Cynthia's special education classroom. This shared commitment to making a difference laid the foundation for our mission. With over 20 years of combined experience in Special Education and Applied Behavior Analysis (ABA), Cynthia and Inae are equipped with the expertise to provide exceptional care. Cynthia brings a wealth of professional experience in ABA along with strong administrative skills, while Inae excels in developing programs and services for clients and families, drawing from her diverse and dynamic background across various settings. Together, their extensive experience working with students, clients, families, and professionals drives Tempo ABA to deliver the highest quality services to our community. United by their passion for helping individuals of all ages with autism spectrum disorders, Cynthia and Inae are dedicated to fostering growth, learning, and independence for every client they serve.",
  image1: banner2,
  image2: banner3,
  image3: banner4,
  image4: banner5,
  image5: banner6,
  image6: banner7,
  image7: aba1,
  image8: aba2,
  image9: aba3,
  image10: missionImage,
};
