import { useParams } from "react-router-dom";
import { servicesData } from "../../../data/content";

// Service Component (Dynamic based on learner type)
export const ServicePage = () => {
  const { learnerType } = useParams<{ learnerType: string }>();
  console.log(learnerType);
  const service = servicesData[learnerType as keyof typeof servicesData];
  console.log(service);

  if (!service) {
    return <p className="text-center text-xl">Service not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
        <p className="text-lg">{service.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <img alt={`Image for ${service.title}`} className="w-full h-auto" src={service.image} />
      </div>
    </div>
  );
};
