import React from "react";
import { router } from "./components/Router";
import { RouterProvider } from "react-router-dom";
import { Footer } from "./components/Shared/Footer";
import { content } from "./data/content";
import { SupportChat } from "./components/Shared/SupportChat";
import { SkipLink } from "./components/Shared/SkipLink";

const App: React.FC = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${content.siteBG})`,
          opacity: 0.5,
        }}
      ></div>
      <SkipLink />
      {/* Content on top of the background */}
      <div className="relative z-10">
        <RouterProvider router={router} />
        <SupportChat />
        <Footer />
      </div>
    </div>
  );
};

export default App;
