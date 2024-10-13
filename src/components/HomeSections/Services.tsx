import { content } from "../../data/content";
import { ServiceCard } from "./ServiceCard";
import { SectionTitle } from "../Shared/CommonSections";

const services = content.services.serviceList.map((service) => {
  return <ServiceCard key={service.cardTitle} service={service} />;
});

export const Services: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <SectionTitle title={content.services.title} />
      <div className="p-4 flex flex-wrap justify-center gap-8 mt-12">{services}</div>
    </section>
  );
};
