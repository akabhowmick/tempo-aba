import React from "react";
import { router } from "./components/Router";
import { RouterProvider } from "react-router-dom";
import { commonStyles } from "./components/Shared/CommonStyles";
import { Footer } from "./components/Shared/Footer";

const App: React.FC = () => {
  return (
    <div className={commonStyles.container}>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
