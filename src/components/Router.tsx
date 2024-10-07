import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Header } from "./Shared/Header";
import { HomePage } from "./HomeSections/HomePage";
import MethodPage from "./Pages/Services/MethodPage";
import FaqPage from "./Pages/Resources/FAQPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { CareerPage } from "./Pages/CareersPage/CareerPage";
import { OurMembersPage } from "./Pages/About/OurMembersPage";
import { ProfilePage } from "./Pages/About/ProfilePage";
import { MissionPage } from "./Pages/About/MissionPage";
import { InsurancePage } from "./Pages/Resources/InsuranceInfo";
import { ABAResourcesPage } from "./Pages/Resources/ABAResourcesPage";
import { ServicePage } from "./Pages/Services/ServicePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<HomePage />} />
      {/* About Us */}
      <Route path="/about/members" element={<OurMembersPage />} />
      <Route path="/about/mission" element={<MissionPage />} />
      <Route path="/about/:member" element={<ProfilePage />} />

      <Route path="/careers" element={<CareerPage />} />

      {/* Services */}
      <Route path="/services/methods" element={<MethodPage />} />
      <Route path="/services/:service" element={<ServicePage />} />


      {/* Resources */}
      <Route path="/resources/faq" element={<FaqPage />} />
      <Route path="/resources/insurance" element={<InsurancePage />} />
      <Route path="/resources/aba" element={<ABAResourcesPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/*" element={<HomePage />} />
    </Route>
  )
);
