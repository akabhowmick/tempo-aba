import React from "react";
import { router } from "./components/Router";
import { RouterProvider } from "react-router-dom";
import { commonStyles } from "./components/Shared/CommonStyles";
import { Footer } from "./components/Shared/Footer";
import { content } from "./data/content";

const App: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${content.siteBG})`, opacity: 1 }}
      className={commonStyles.container}
    >
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
