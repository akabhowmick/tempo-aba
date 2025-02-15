import { FaClipboardCheck, FaCogs, FaComment, FaHome, FaLightbulb, FaUsers } from "react-icons/fa";
import { SectionTitle } from "../Shared/CommonSections";

const contentData = [
  {
    title: "Language and Communication",
    description:
      "We assist learners in developing language and communication skills. Through functional communication training, we enable them to express their wants and needs effectively.",
    icon: <FaComment size={100} className="mx-auto" color="green" />, // Adjust the icon if necessary
  },
  {
    title: "Social Skills",
    description:
      "Our social skills program aims to develop a comprehensive plan for generalization and transfer of skills across various settings, individuals, situations, and time.",
    icon: <FaUsers size={100} className="mx-auto" color="green" />, // Adjust the icon if necessary
  },
  {
    title: "Adaptive Behavior",
    description:
      "We focus on enhancing adaptive behavior by teaching individuals the necessary skills to improve their independence and quality of life, making it easier for them to navigate their environments and engage with others.",
    icon: <FaCogs size={100} className="mx-auto" color="green" />, // Adjust the icon if necessary
  },
  {
    title: "Skill Acquisition",
    description:
      "Goals will be established based on specific, measurable, achievable, and relevant criteria derived from assessment results, fostering independence and enhancing the overall quality of life.",
    icon: <FaLightbulb size={100} className="mx-auto" color="green" />, // Adjust the icon if necessary
  },
  {
    title: "Behavior Management",
    description:
      "ABA focuses on understanding the function of a child’s behavior and using this insight to teach more appropriate alternative behaviors, creating a supportive environment that promotes learning and social interaction.",
    icon: <FaClipboardCheck size={100} className="mx-auto" color="green" />, // Adjust the icon if necessary
  },
  {
    title: "Independent Living Skills",
    description:
      "We empower individuals to independently complete daily living skills and functional routines, selecting tailored goals based on their strengths and areas for improvement.",
    icon: <FaHome size={100} className="mx-auto" color="green" />, // Adjust the icon if necessary
  },
];

export const WhyUs = () => {
  return (
    <div className="flex items-center justify-center my-10 p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-5xl">
        {/* Title Section */}
        <SectionTitle title="Focus Areas" />

        {/* Content Section */}
        <div className="flex flex-wrap justify-between text-center gap-4">
          {contentData.map((item, index) => (
            <div key={index} className="w-full md:w-1/4 p-4 gap-4">
              {/* Icon */}
              <div className="mx-auto mb-4">{item.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-bold mb-4">{item.title}</h2>

              {/* Description */}
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
