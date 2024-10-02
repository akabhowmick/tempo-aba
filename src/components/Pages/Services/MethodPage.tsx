import React from "react";
const MethodPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-blue-200 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Our Method</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={item.imageUrl} alt={item.title} className="mb-4 rounded-lg" />
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const methodItems = [
  {
    title: "Consultation",
    description:
      "Behavioral consultation to analyze, plan, evaluate and implement a structured routine.",
    imageUrl: "path-to-image/consultation.jpg",
  },
  {
    title: "Assessment",
    description: "Assessment to review the current and ongoing skills of your child.",
    imageUrl: "path-to-image/assessment.jpg",
  },
  {
    title: "Treatment Plan",
    description: "Creating an effective treatment plan with appropriate goals.",
    imageUrl: "path-to-image/treatment-plan.jpg",
  },
];

export default MethodPage;
