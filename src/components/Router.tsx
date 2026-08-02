import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import { Header } from "./Shared/Header";
import { HomePage } from "./HomeSections/HomePage";
import MethodPage from "./Pages/Services/MethodPage";
import FaqPage from "./Pages/Resources/FAQPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { OurMembersPage } from "./Pages/About/OurMembersPage";
import { ProfilePage } from "./Pages/About/ProfilePage";
import { MissionPage } from "./Pages/About/MissionPage";
import { InsurancePage } from "./Pages/Resources/InsuranceInfo";
import { ABAResourcesPage } from "./Pages/Resources/ABAResourcesPage";
import { ServicePage } from "./Pages/Services/ServicePage";
import { ABAautism  } from "./Pages/About/ABAAustism";
import { LegalCenter } from "./Pages/Legal/LegalCenter";
import { LegalPage } from "./Pages/Legal/LegalPage";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/" element={<HomePage />} />
      {/* About Us */}
      <Route path="/about/abaandautism" element={<ABAautism  />} />
      <Route path="/about/methods" element={<MethodPage />} />
      <Route path="/about/mission" element={<MissionPage />} />
      <Route path="/about/members" element={<OurMembersPage />} />
      <Route path="/about/members/:member" element={<ProfilePage />} />

      <Route path="/careers" element={<Navigate to="/contact" replace />} />

      {/* Services */}
      <Route path="/services/:learnerType" element={<ServicePage />} />

      {/* Resources */}
      <Route path="/resources/faq" element={<FaqPage />} />
      <Route path="/resources/insurance" element={<InsurancePage />} />
      <Route path="/resources/aba" element={<ABAResourcesPage />} />

      <Route path="/contact" element={<ContactPage />} />

      {/* Legal */}
      <Route path="/legal" element={<LegalCenter />} />
      <Route path="/legal/:policy" element={<LegalPage />} />

      <Route path="/*" element={<HomePage />} />
    </Route>
  )
);
