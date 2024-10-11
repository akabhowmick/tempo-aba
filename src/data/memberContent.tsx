import { FaHandsHelping, FaUserGraduate, FaClipboardCheck, FaChartLine } from "react-icons/fa";

import missionImage from "../assets/siteImages/mission.png";
export const savedMissionImage = missionImage;

import backgroundPrinciples from "../assets/siteImages/backgrounds/greenBG.png"
export const savedBgLightestGreen = backgroundPrinciples;

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
        icon: <FaHandsHelping className="text-green-500 w-9 h-9" />,
        title: "Collaboration",
        description:
          "Collaboration among service providers and caregivers is essential in the implementation and success of treatment plans.",
      },
      {
        icon: <FaUserGraduate className="text-blue-600 w-9 h-9" />,
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
