import { useParams } from "react-router-dom";
import { servicesData } from "../../../data/content";

// Service Component (Dynamic based on learner type)
export const ServicePage = () => {
  const { learnerType } = useParams<{ learnerType: string }>();
  const service = servicesData[learnerType as keyof typeof servicesData];

  if (!service) {
    return <p className="text-center text-xl">Service not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center my-4 gap-10">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg leading-relaxed">{service.description}</p>
          {learnerType === "school" && (
            <ul role="list" className="marker:text-green-800 list-disc pl-5 space-y-3 text-black">
              {servicesData.school.additionalInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 relative">
          <div className="absolute inset-0 bg-green-400 rounded-lg transform rotate-6"></div>
          <img
            alt="Group of professionals smiling"
            className="relative rounded-lg"
            height={400}
            src={service.image}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="container flex mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
        <p className="text-lg">{service.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <img alt={`Image for ${service.title}`} className="w-full h-auto" src={service.image} />
      </div>
    </div> */
}
