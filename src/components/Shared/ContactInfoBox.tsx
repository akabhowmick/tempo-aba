import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { CareerForm } from "../Pages/CareersPage/CareerForm";
import { ContactForm } from "../Pages/ContactPage/ContactForm";

export const ContactInfoBox = ({ formType }: { formType: string }) => {
  const cardStyles = "overflow-hidden bg-white rounded-xl";
  const cardContentStyles = "p-6 text-lg";
  const iconStyles = "flex-shrink-0 w-10 h-10 mx-auto text-gray-400";

  return (
    <div className="max-w-5xl mx-auto my-12 sm:mt-16">
      <div className="grid grid-cols-1 gap-6 px-2 text-center md:px-0 md:grid-cols-3">
        <div className={cardStyles}>
          <div className={cardContentStyles}>
            <FiPhone className={iconStyles} />
            <p className="mt-6">
              <a
                href="tel:+19174966144"
                className=" font-medium text-gray-900 hover:underline"
              >
                +1 (917) 496 6144
              </a>
            </p>
            <p className="mt-1">
              <a
                href="tel:+19175829560"
                className=" font-medium text-gray-900 hover:underline"
              >
                +1 (917) 582 9560
              </a>
            </p>
          </div>
        </div>

        <div className={cardStyles}>
          <div className={cardContentStyles}>
            <FiMail className={iconStyles} />
            <a
              href="mailto:contact@auraui.com"
              className="mt-6 block font-medium text-gray-900 hover:underline"
            >
              Cynmartinez810@gmail.com
            </a>
            <a
              href="mailto:hr@auraui.com"
              className="mt-1  block font-medium text-gray-900 hover:underline"
            >
              inaekim.ny@gmail.com
            </a>
          </div>
        </div>

        <div className={cardStyles}>
          <div className={cardContentStyles}>
            <FiMapPin className={iconStyles} />
            <p className="mt-6 block font-medium leading-relaxed text-gray-900">
              Long Island, New York
            </p>
          </div>
        </div>
      </div>

      {formType === "career" ? <CareerForm /> : <ContactForm />}
    </div>
  );
};
