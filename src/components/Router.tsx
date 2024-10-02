import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Header } from "./Shared/Header";
import { HomePage } from "./HomeSections/HomePage";
import MethodPage from "./Pages/MethodPage";
import FaqPage from "./Pages/FAQPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { CareerPage } from "./Pages/CareersPage/CareerPage";
import { OurMembersPage } from "./Pages/OurMembersPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { MissionPage } from "./Pages/MissionPage";
import { InsurancePage } from "./Pages/InsuranceInfo";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/methods" element={<MethodPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareerPage />} />
      <Route path="/about/members" element={<OurMembersPage />} />
      <Route path="/about/mission" element={<MissionPage />} />
      <Route path="/about/:member" element={<ProfilePage />} />
      <Route path="/resources/insurance" element={<InsurancePage />} />
      <Route path="/*" element={<HomePage />} />
    </Route>
  )
);
