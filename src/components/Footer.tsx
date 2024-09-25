import { Typography } from "@mui/material";
import { content } from "../data/content";

export const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="max-w-4xl mx-auto text-center">
        <Typography variant="body1" className="mb-4">
          {content.footer.text}
        </Typography>
        <div className="flex justify-center space-x-4">{/* Social media icons can go here */}</div>
      </div>
    </footer>
  );
};

