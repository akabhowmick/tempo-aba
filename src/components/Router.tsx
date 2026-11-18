import { CareersRedirect } from "./Shared/CareersRedirect";
import type { RouteRecord } from "vite-react-ssg";
import App from "../App";
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
import { ABAautism } from "./Pages/About/ABAAustism";
import { LegalCenter } from "./Pages/Legal/LegalCenter";
import { LegalPage } from "./Pages/Legal/LegalPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { servicesData, teamBios } from "../data/content";
import { legalDocuments } from "../data/legalContent";

// "center" is a "Coming Soon" placeholder that is not linked anywhere, but it is a valid URL today
const servicePaths = () => Object.keys(servicesData).map((key) => `/services/${key}`);
// Lowercase first name is the canonical URL. The first-name-as-written variant (e.g. /Cynthia)
// is also generated so old links and bookmarks keep working; no redirect needed.
const memberPaths = () =>
  teamBios.flatMap((bio) => {
    const first = bio.name.split(" ")[0];
    return [...new Set([`/about/members/${first.toLowerCase()}`, `/about/members/${first}`])];
  });
const legalPaths = () => legalDocuments.map((doc) => `/legal/${doc.slug}`);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      // About Us
      { path: "/about/abaandautism", element: <ABAautism /> },
      { path: "/about/methods", element: <MethodPage /> },
      { path: "/about/mission", element: <MissionPage /> },
      { path: "/about/members", element: <OurMembersPage /> },
      {
        path: "/about/members/:member",
        element: <ProfilePage />,
        getStaticPaths: memberPaths,
      },

      { path: "/careers", element: <CareersRedirect /> },

      // Services
      {
        path: "/services/:learnerType",
        element: <ServicePage />,
        getStaticPaths: servicePaths,
      },

      // Resources
      { path: "/resources/faq", element: <FaqPage /> },
      { path: "/resources/insurance", element: <InsurancePage /> },
      { path: "/resources/aba", element: <ABAResourcesPage /> },

      { path: "/contact", element: <ContactPage /> },

      // Legal
      { path: "/legal", element: <LegalCenter /> },
      {
        path: "/legal/:policy",
        element: <LegalPage />,
        getStaticPaths: legalPaths,
      },

      // Anything else
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
