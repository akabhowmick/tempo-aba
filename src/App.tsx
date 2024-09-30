import React from "react";
import { Footer } from "./components/Shared/Footer";
import { router } from "./components/Router";
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
