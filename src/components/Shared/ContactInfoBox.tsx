import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { CareerForm } from "../Pages/CareersPage/CareerForm";
import { ContactForm } from "../Pages/ContactPage/ContactForm";

export const ContactInfoBox = ({ formType }: { formType: string }) => {
  const cardStyles = "overflow-hidden bg-white rounded-xl";
  const cardContentStyles = "p-6";
  const iconStyles = "flex-shrink-0 w-10 h-10 mx-auto text-gray-400";

  return (
    <div className="max-w-5xl mx-auto my-12 sm:mt-16">
      <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
        <div className={cardStyles}>
          <div className={cardContentStyles}>
            <FiPhone className={iconStyles} />
            <p className="mt-6 text-lg font-medium text-gray-900">+1 (917) 496 6144</p>
            <p className="mt-1 text-lg font-medium text-gray-900">+1 (917) 582 9560</p>
          </div>
        </div>

        <div className={cardStyles}>
          <div className={cardContentStyles}>
            <FiMail className={iconStyles} />
            <p className="mt-6 text-lg font-medium text-gray-900">contact@auraui.com</p>
            <p className="mt-1 text-lg font-medium text-gray-900">hr@auraui.com</p>
          </div>
        </div>

        <div className={cardStyles}>
          <div className={cardContentStyles}>
            <FiMapPin className={iconStyles} />
            <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
              8502, Sector 28, Ingle Colony, Patna, India
            </p>
          </div>
        </div>
      </div>
      {formType === "career" ? <CareerForm /> : <ContactForm />}
    </div>
  );
};
