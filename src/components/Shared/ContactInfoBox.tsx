import { useState } from "react";
import { CareerForm } from "../Pages/CareersPage/CareerForm";
import { ContactForm } from "../Pages/ContactPage/ContactForm";

type InquiryType = "parent" | "career";

const choiceButtonStyles =
  "flex-1 px-6 py-8 text-lg font-semibold text-green-900 bg-white border-2 border-green-800 rounded-xl transition-all duration-200 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700";

export const ContactInfoBox = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType | null>(null);

  if (!inquiryType) {
    return (
      <div className="max-w-3xl mx-auto my-12 sm:mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-950 mb-8">What brings you here today?</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            type="button"
            className={choiceButtonStyles}
            onClick={() => setInquiryType("parent")}
          >
            Services for my child
          </button>
          <button
            type="button"
            className={choiceButtonStyles}
            onClick={() => setInquiryType("career")}
          >
            Careers at TEMPO ABA
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-12 sm:mt-16">
      <button
        type="button"
        onClick={() => setInquiryType(null)}
        className="text-green-900 font-semibold underline hover:text-opacity-80"
      >
        ‹ Choose a different option
      </button>

      {inquiryType === "career" ? <CareerForm /> : <ContactForm />}
    </div>
  );
};
