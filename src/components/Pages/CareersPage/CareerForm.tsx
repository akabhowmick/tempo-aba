import { useState, FormEvent } from "react";
import { emailSetUp } from "../../../data/content";
import { SectionTitle } from "../../Shared/CommonSections";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  resume?: string;
  coverLetter?: string;
}

export const CareerForm = (): JSX.Element => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<string>("");

  const formContainerStyles: string = "mt-6 overflow-hidden bg-white rounded-xl";
  const formContentStyles: string = "px-6 py-12 sm:p-12";
  const inputStyles: string =
    "block w-full px-4 py-4 text-black placeholder-white-500 transition-all duration-200 bg-white border border-white-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-800 caret-green-800";
  const inputErrorStyles: string =
    "block w-full px-4 py-4 text-black placeholder-white-500 transition-all duration-200 bg-white border-2 border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 caret-green-800";
  const buttonStyles: string =
    "inline-flex cursor-pointer items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-green-900 transition-all duration-200 bg-green-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 hover:bg-green-700";

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    const name: FormDataEntryValue | null = formData.get("Name");
    if (!name || typeof name === 'string' && !name.trim()) {
      newErrors.name = "Name is required";
    }

    const email: FormDataEntryValue | null = formData.get("Email");
    if (!email || typeof email === 'string' && !email.trim()) {
      newErrors.email = "Email is required";
    } else if (typeof email === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phone: FormDataEntryValue | null = formData.get("Phone");
    if (!phone || typeof phone === 'string' && !phone.trim()) {
      newErrors.phone = "Phone number is required";
    // eslint-disable-next-line no-useless-escape
    } else if (typeof phone === 'string' && !/^\+?[\d\s\-\(\)]+$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    const resume: FormDataEntryValue | null = formData.get("Resume-Attachment");
    if (resume && resume instanceof File && resume.size > 5 * 1024 * 1024) {
      newErrors.resume = "Resume file size must be less than 5MB";
    }

    const coverLetter: FormDataEntryValue | null = formData.get("Cover-Letter-Attachment");
    if (coverLetter && coverLetter instanceof File && coverLetter.size > 5 * 1024 * 1024) {
      newErrors.coverLetter = "Cover letter file size must be less than 5MB";
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
    setFormStatus("Submitting your application...");
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
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Career application form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="text-base font-medium text-green-900">
                Your Name <span className="text-red-600" aria-label="required">*</span>
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  id="name"
                  name="Name"
                  required
                  autoComplete="name"
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
              <label htmlFor="email" className="text-base font-medium text-green-900">
                Email Address <span className="text-red-600" aria-label="required">*</span>
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="email"
                  id="email"
                  name="Email"
                  autoComplete="email"
                  required
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
              <label htmlFor="phone" className="text-base font-medium text-green-900">
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
              <p id="phone-help" className="mt-1 text-sm text-green-900">
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
              <label htmlFor="message" className="text-base font-medium text-green-900">
                Message <span className="text-green-900">(Optional)</span>
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  aria-describedby="message-help"
                  placeholder="Tell us about yourself and why you're interested in joining our team"
                  className={`${inputStyles} resize-y`}
                ></textarea>
              </div>
              <p id="message-help" className="mt-1 text-sm text-green-900">
                Share your experience and career goals
              </p>
            </div>

            {/* Resume Upload */}
            <div className="sm:col-span-2">
              <label htmlFor="resume" className="text-base font-medium text-green-900">
                Upload Your Resume <span className="text-green-900">(Optional, PDF only)</span>
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="file"
                  id="resume"
                  name="Resume-Attachment"
                  accept=".pdf,application/pdf"
                  aria-describedby={errors.resume ? "resume-help resume-error" : "resume-help"}
                  aria-invalid={errors.resume ? "true" : "false"}
                  className={errors.resume ? inputErrorStyles : inputStyles}
                />
              </div>
              <p id="resume-help" className="mt-1 text-sm text-green-900">
                PDF format only, maximum 5MB
              </p>
              {errors.resume && (
                <p id="resume-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.resume}
                </p>
              )}
            </div>

            {/* Cover Letter Upload */}
            <div className="sm:col-span-2">
              <label htmlFor="coverLetter" className="text-base font-medium text-green-900">
                Upload Your Cover Letter <span className="text-green-900">(Optional, PDF only)</span>
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="file"
                  id="coverLetter"
                  name="Cover-Letter-Attachment"
                  accept=".pdf,application/pdf"
                  aria-describedby={
                    errors.coverLetter ? "cover-letter-help cover-letter-error" : "cover-letter-help"
                  }
                  aria-invalid={errors.coverLetter ? "true" : "false"}
                  className={errors.coverLetter ? inputErrorStyles : inputStyles}
                />
              </div>
              <p id="cover-letter-help" className="mt-1 text-sm text-green-900">
                PDF format only, maximum 5MB
              </p>
              {errors.coverLetter && (
                <p id="cover-letter-error" className="mt-2 text-sm text-red-600" role="alert">
                  {errors.coverLetter}
                </p>
              )}
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="_next" value={emailSetUp.redirectLink} />
            <input type="hidden" name="_subject" value="Career Form Inquiry!" />
            <input type="hidden" name="_cc" value={emailSetUp.ccLinks} />
            <input type="hidden" name="_template" value="table" />

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button type="submit" className={buttonStyles} aria-label="Submit career application form">
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};