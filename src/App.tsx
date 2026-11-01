import React from "react";
import { Header } from "./components/Shared/Header";
import { Footer } from "./components/Shared/Footer";
import { content } from "./data/content";
import SupportChat from "./components/Shared/SupportChat";
import { SkipLink } from "./components/Shared/SkipLink";
import { RouteSEO } from "./components/Shared/SEO";

// Root layout. Header renders the routed page through its <Outlet />.
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
      <RouteSEO />
      <SkipLink />
      {/* Content on top of the background */}
      <div className="relative z-10">
        <Header />
        <SupportChat />
        <Footer />
      </div>
    </div>
  );
};

export default App;
