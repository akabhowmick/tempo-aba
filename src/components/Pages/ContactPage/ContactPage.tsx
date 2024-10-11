import { ContactForm } from "./ContactForm";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export const ContactPage = () => {
  const containerStyles = "py-10 sm:py-16 lg:py-24";
  const innerContainerStyles = "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col";
  const headerStyles = "max-w-2xl mx-auto text-center ";
  const titleStyles = "text-3xl font-bold leading-tight text-white-900 sm:text-4xl lg:text-5xl";
  const descriptionStyles = "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500";
  const cardStyles = "overflow-hidden bg-white rounded-xl";
  const cardContentStyles = "p-6";
  const iconStyles = "flex-shrink-0 w-10 h-10 mx-auto text-gray-400";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={headerStyles}>
          <h2 className={titleStyles}>Contact Us</h2>
          <p className={descriptionStyles}>
            Get in touch with us for any inquiries or support. We&apos;re here to help you with any
            questions you may have.
          </p>
        </div>
        <div className="max-w-5xl mx-auto my-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className={cardStyles}>
              <div className={cardContentStyles}>
                <FiPhone className={iconStyles} />
                <p className="mt-6 text-lg font-medium text-gray-900">+91-76879-06978</p>
                <p className="mt-1 text-lg font-medium text-gray-900">+91-76879-06878</p>
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

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
