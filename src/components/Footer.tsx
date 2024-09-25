import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <Typography variant="body1" className="mb-4 text-lg">
          {`If you want to learn more about ABA, contact our team today!`}
        </Typography>
        <div className="flex justify-center space-x-4">
          {/* Social media icons */}
          <a href="#" className="text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
