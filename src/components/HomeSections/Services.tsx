import Typography from "@mui/material/Typography";
import { content } from "../../data/content";
import { ServiceCard } from "./ServiceCard";

const services = content.services.serviceList.map((service) => {
  return <ServiceCard key={service.cardTitle} service={service} />;
});

export const Services: React.FC = () => {
  return (
    <section className="py-16 ">
      <Typography variant="h3" className="text-center font-bold mb-12">
        {content.services.title}
      </Typography>
      <div className="flex flex-wrap justify-center gap-4 mt-12">{services}</div>
    </section>
  );
};
