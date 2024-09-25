import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/HomeSections/Hero";
import { Footer } from "./components/Footer";
import { Programs } from "./components/HomeSections/Programs";
import { Services } from "./components/HomeSections/Services";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Programs />
      <Footer />
    </div>
  );
};

export default App;
