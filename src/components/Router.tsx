import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Header } from "./Shared/Header";
import { HomePage } from "./HomeSections/HomePage";
import MethodPage from "./Pages/MethodPage";
import FaqPage from "./Pages/FAQPage";
import { ContactPage } from "./Pages/ContactPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/methods" element={<MethodPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<HomePage />} />
    </Route>
  )
);
