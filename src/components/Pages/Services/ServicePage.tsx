import { useParams } from "react-router-dom";
import { pageBanners, servicesData } from "../../../data/content";
import { SubPageTitle } from "../../Shared/CommonSections";
import { ContentSection } from "../About/ContentSection";

// Service Component (Dynamic based on learner type)
export const ServicePage = () => {
  const { learnerType } = useParams<{ learnerType: string }>();
  const service = servicesData[learnerType as keyof typeof servicesData];

  if (!service) {
    return <p className="text-center text-xl">Service not found</p>;
  }

  const image = service.image; 

  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={pageBanners.services} />
      <h1 className="text-4xl font-bold mb-4 text-center py-4">{service.title}</h1>
      <ContentSection paragraph={service.description} index={1} image={image}/>
    </div>
  );
};
