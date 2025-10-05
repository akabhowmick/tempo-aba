import { useState, FormEvent } from "react";
import { emailSetUp } from "../../../data/content";
import { SectionTitle } from "../../Shared/CommonSections";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm = (): JSX.Element => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<string>("");

  const formContainerStyles: string = "mt-6 overflow-hidden bg-white rounded-xl";
  const formContentStyles: string = "px-6 py-12 sm:p-12";
  const inputStyles: string =
    "block w-full px-4 py-4 text-black placeholder-white-500 transition-all duration-200 bg-white border border-white-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-800 caret-green-800";
  const inputErrorStyles: string =
    "block w-full px-4 py-4 text-black placeholder-white-500 transition-all duration-200 bg-white border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 caret-green-800";
  const buttonStyles: string =
    "inline-flex cursor-pointer items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-green-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 hover:bg-green-700";

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    const name: FormDataEntryValue | null = formData.get("Name");
    if (!name || (typeof name === "string" && !name.trim())) {
      newErrors.name = "Name is required";
    }

    const email: FormDataEntryValue | null = formData.get("Email");
    if (!email || (typeof email === "string" && !email.trim())) {
      newErrors.email = "Email is required";
    } else if (typeof email === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phone: FormDataEntryValue | null = formData.get("Phone");
    if (!phone || (typeof phone === "string" && !phone.trim())) {
      newErrors.phone = "Phone number is required";
    // eslint-disable-next-line no-useless-escape
    } else if (typeof phone === "string" && !/^\+?[\d\s\-\(\)]+$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    const message: FormDataEntryValue | null = formData.get("Message");
    if (!message || (typeof message === "string" && !message.trim())) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    const formData: FormData = new FormData(e.currentTarget);
    const newErrors: FormErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
      setFormStatus("Please fix the errors below before submitting");
      return;
    }

    setErrors({});
    setFormStatus("Submitting your message...");
  };

  return (
    <div className={formContainerStyles}>
      <div className={formContentStyles}>
        <SectionTitle title="Reach out to us!" />

        {/* Form status announcement for screen readers */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={
            formStatus.includes("error") || formStatus.includes("fix")
              ? "text-red-600 text-center mb-4 font-semibold"
              : "text-green-700 text-center mb-4 font-semibold"
          }
        >
          {formStatus && <p>{formStatus}</p>}
        </div>

        <form
          action={emailSetUp.formSubmitEmail}
          method="POST"
          className="mt-14"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="text-base font-medium text-white-900">
                Your Name <span className="text-red-600" aria-label="required">*</span>
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Enter your full name"
                  className={errors.name ? inputErrorStyles : inputStyles}
                />
              </div>
              {errors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="text-base font-medium text-white-900">
                Email Address <span className="text-red-600" aria-label="required">*</span>
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="Enter your email address"
                  className={errors.email ? inputErrorStyles : inputStyles}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone field */}
            <div>
              <label htmlFor="phone" className="text-base font-medium text-white-900">
                Phone Number <span className="text-red-600" aria-label="required">*</span>
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="tel"
                  id="phone"
                  name="Phone"
                  autoComplete="tel"
                  required
                  aria-required="true"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error phone-help" : "phone-help"}
                  placeholder="Enter your phone number"
                  className={errors.phone ? inputErrorStyles : inputStyles}
                />
              </div>
              <p id="phone-help" className="mt-1 text-sm text-white-600">
                Format: (555) 123-4567 or 555-123-4567
              </p>
              {errors.phone && (
                <p id="phone-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message field */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-base font-medium text-white-900">
                Message <span className="text-red-600" aria-label="required">*</span>
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  id="message"
                  name="Message"
                  required
                  rows={4}
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error message-help" : "message-help"}
                  placeholder="Tell us how we can help you"
                  className={errors.message ? `${inputErrorStyles} resize-y` : `${inputStyles} resize-y`}
                ></textarea>
              </div>
              <p id="message-help" className="mt-1 text-sm text-white-600">
                Please provide details about your inquiry
              </p>
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Hidden input for redirect after submission */}
            <input type="hidden" name="_next" value={emailSetUp.redirectLink} />
            <input type="hidden" name="_subject" value="Contact Form Inquiry!" />
            <input type="hidden" name="_cc" value={emailSetUp.ccLinks} />
            <input type="hidden" name="_template" value="table" />

            {/* Submit button */}
            <div className="sm:col-span-2">
              <button type="submit" className={buttonStyles} aria-label="Submit contact form">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};