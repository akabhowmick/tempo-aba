import { FaInstagram, FaTiktok } from "react-icons/fa";
import { content } from "../../data/content";

const INSTAGRAM_URL = "https://www.instagram.com/tempoaba?utm_source=qr";
const TIKTOK_URL = "https://www.tiktok.com/@tempo.community.a?_r=1&_t=ZT-98HlcEgTKur";

export const Footer = () => {

  const aClasses =
    "text-md text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80 cursor-pointer";

  return (
    <footer className="py-10 bg-green-900 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          {/* Company */}
          <div>
            <p className="text-xl text-white">Company</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/about/members", text: "Who we are" },
                { href: "/about/mission", text: "Our Mission" },
                { href: "/about/methods", text: "Approach and Process " },
                { href: "/about/abaandautism", text: "About ABA and autism " },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} aria-label={`Navigate to ${item.text} page`}>
                    <span className={aClasses}>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-xl text-white">Services</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/services/home", text: "Home Based ABA" },
                { href: "/services/school", text: "In-School Consultation" },
                { href: "/services/community", text: "Community Based ABA" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} aria-label={`Navigate to ${item.text} page`}>
                    <span className={aClasses}>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xl text-white">Resources</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/resources/insurance", text: "Insurance" },
                { href: "/resources/faq", text: "FAQ" },
                { href: "/contact", text: "Contact" },
                { href: "/resources/aba", text: "ABA Resources" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} aria-label={`Navigate to ${item.text} page`}>
                    <span className={aClasses}>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xl text-white">Legal</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/legal", text: "Legal and Privacy Center" },
                { href: "/legal/privacy-policy", text: "Privacy Policy" },
                { href: "/legal/notice-of-privacy-practices", text: "Notice of Privacy Practices" },
                { href: "/legal/accessibility", text: "Accessibility" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} aria-label={`Navigate to ${item.text} page`}>
                    <span className={aClasses}>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-white-800" />

        <div className="flex flex-wrap items-center gap-4">
          <img
            className="w-12 rounded md:order-1"
            src={content.header.siteLogo2}
            alt="TEMPO"
            height={200}
            width={200}
          />

          <p className="w-full mt-8 text-sm text-center text-white md:mt-0 md:w-auto md:order-2">
            © Copyright 2025, TEMPO ABA. Site made by{" "}
            <a href="http://akashbhowmick.com" aria-label={`Navigate to Website Designer's page`}>
              AKA Code
            </a>
          </p>

          <div className="flex items-center gap-4 w-full mt-4 justify-center md:w-auto md:mt-0 md:order-3 md:ml-auto">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TEMPO ABA on Instagram"
              className="text-white hover:text-opacity-80"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TEMPO ABA on TikTok"
              className="text-white hover:text-opacity-80"
            >
              <FaTiktok size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
