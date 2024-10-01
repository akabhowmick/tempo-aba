import { FaUserFriends, FaChessKnight, FaFlask, FaHeart } from "react-icons/fa";
import { SectionTitle } from "../Shared/CommonSections";

const contentData = [
  {
    title: "PEOPLE FIRST",
    description: "Focusing on what is best for the patient and the family in all decisions made.",
    icon: <FaUserFriends size={100} className="mx-auto" color="green" />,
  },
  {
    title: "ONE MOVE AHEAD",
    description: "We try to stay one step ahead of the problem during treatment with all patients.",
    icon: <FaChessKnight size={100} className="mx-auto" color="green" />,
  },
  {
    title: "LATEST RESEARCH",
    description:
      "We use the latest and most advanced methods and techniques to ensure the best results.",
    icon: <FaFlask size={100} className="mx-auto" color="green" />,
  },
  {
    title: "A BETTER LIFE",
    description:
      "With proper treatment, you and your family can enjoy a better life without further problems.",
    icon: <FaHeart size={100} className="mx-auto" color="green" />,
  },
];

export const WhyUs = () => {
  return (
    <div className="bg-green-100 flex items-center justify-center my-10">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl">
        {/* Title Section */}
        <SectionTitle title="Focused on Family" />

        {/* Content Section */}
        <div className="flex flex-wrap justify-between text-center">
          {contentData.map((item, index) => (
            <div key={index} className="w-full md:w-1/4 p-4">
              {/* Icon */}
              <div className="mx-auto mb-4">{item.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-bold">{item.title}</h2>

              {/* Description */}
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
