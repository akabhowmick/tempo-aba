import { Typography } from "@mui/material";
import { content } from "../../data/content";

export const Programs = () => {
  return (
    <section className="py-16">
      <Typography variant="h3" className="text-center font-bold mb-8">
        {content.programs.title}
      </Typography>
      <div className="max-w-4xl mx-auto">
        <Typography variant="h6" className="font-semibold">
          {content.programs.earlyIntervention}
        </Typography>
        <Typography variant="h6" className="font-semibold mt-4">
          {content.programs.comprehensive}
        </Typography>
        <Typography variant="h6" className="font-semibold mt-4">
          {content.programs.focused}
        </Typography>
        <Typography variant="h6" className="font-semibold mt-4">
          {content.programs.parentTraining}
        </Typography>
      </div>
    </section>
  );
};
