import { Typography } from "@mui/material";
import { content } from "../../data/content";

export const Programs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <Typography variant="h3" className="text-center font-bold text-3xl text-blue-900 mb-8">
        {content.programs.title}
      </Typography>
      <div className="max-w-4xl mx-auto space-y-6">
        <Typography variant="h6" className="font-semibold text-xl text-gray-800">
          {content.programs.earlyIntervention}
        </Typography>
        <Typography variant="h6" className="font-semibold text-xl text-gray-800">
          {content.programs.comprehensive}
        </Typography>
        <Typography variant="h6" className="font-semibold text-xl text-gray-800">
          {content.programs.focused}
        </Typography>
        <Typography variant="h6" className="font-semibold text-xl text-gray-800">
          {content.programs.parentTraining}
        </Typography>
      </div>
    </section>
  );
};
