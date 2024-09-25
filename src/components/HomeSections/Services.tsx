import Typography from "@mui/material/Typography";
import { content } from "../../data/content";
import { ServiceCard } from "./ServiceCard";

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <Typography variant="h3" className="text-center font-bold mb-8">
        {content.services.title}
      </Typography>
      <div className="flex flex-wrap justify-center">
        <ServiceCard
          title={content.services.inHome.title}
          description={content.services.inHome.description}
        />
        <ServiceCard
          title={content.services.schoolBased.title}
          description={content.services.schoolBased.description}
        />
        <ServiceCard
          title={content.services.communityBased.title}
          description={content.services.communityBased.description}
        />
        <ServiceCard
          title={content.services.centerBased.title}
          description={content.services.centerBased.description}
        />
      </div>
    </section>
  );
};
