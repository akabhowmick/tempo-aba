import { emailSetUp } from "../../../data/content";
import { SectionTitle } from "../../Shared/CommonSections";

export const ContactForm = () => {
  const formContainerStyles = "mt-6 overflow-hidden bg-white rounded-xl";
  const formContentStyles = "px-6 py-12 sm:p-12";
  const inputStyles =
    "block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800";
  const buttonStyles =
    "inline-flex cursor-pointer items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-green-800 border border-transparent rounded-md focus:outline-none hover:bg-green-700 focus:bg-green-700";

  return (
    <div className={formContainerStyles}>
      <div className={formContentStyles}>
        <SectionTitle title="Reach out to us!" />

        <form action={emailSetUp.formSubmitEmail} method="POST" className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="text-base font-medium text-gray-900">
                Your Name
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  placeholder="Enter your full name"
                  className={inputStyles}
                />
              </div>
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="text-base font-medium text-gray-900">
                Email Address
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  placeholder="Enter your email address"
                  className={inputStyles}
                />
              </div>
            </div>

            {/* Phone field */}
            <div>
              <label htmlFor="phone" className="text-base font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="tel"
                  id="phone"
                  name="Phone"
                  required
                  placeholder="Enter your phone number"
                  className={inputStyles}
                />
              </div>
            </div>

            {/* Message field */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-base font-medium text-gray-900">
                Message
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  id="message"
                  name="Message"
                  required
                  placeholder="Enter your message"
                  className={`${inputStyles} resize-y`}
                ></textarea>
              </div>
            </div>

            {/* Hidden input for redirect after submission (optional) */}
            <input type="hidden" name="_next" value={emailSetUp.redirectLink} />
            <input type="hidden" name="_subject" value="Contact Form Inquiry!"></input>
            <input type="hidden" name="_cc" value={emailSetUp.ccLinks}></input>
            <input type="hidden" name="_template" value="table"></input>

            {/* Submit button */}
            <div className="sm:col-span-2">
              <button type="submit" className={buttonStyles}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
