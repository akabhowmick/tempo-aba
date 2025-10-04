import React, { useState, useRef, useEffect, FormEvent } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";
import { emailSetUp } from "../../data/content";

interface ChatIconProps {
  className: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
}

const ChatIcon = ({ className }: ChatIconProps): JSX.Element => (
  <FiMessageSquare className={className} size={30} />
);

export const SupportChat: React.FC = (): JSX.Element => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<string>("");
  const chatRef = useRef<HTMLDivElement | null>(null);

  const inputStyles: string =
    "mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-green-600 focus:border-green-500";
  const inputErrorStyles: string =
    "mt-1 block w-full border-2 border-red-500 rounded-md p-2 text-sm focus:ring-2 focus:ring-red-500";

  const toggleChat = (): void => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      // Clear errors and status when opening
      setErrors({});
      setFormStatus("");
    }
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
      setIsChatOpen(false);
    }
  };

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

    const topic: FormDataEntryValue | null = formData.get("Topic");
    if (!topic || (typeof topic === "string" && !topic.trim())) {
      newErrors.topic = "Please select a topic";
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

  useEffect((): (() => void) => {
    document.addEventListener("mousedown", handleClickOutside);
    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        className="z-50 fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-small border rounded-full w-16 h-16 bg-green-700 cursor-pointer border-green-700 p-0 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-colors"
        type="button"
        onClick={toggleChat}
        aria-label={isChatOpen ? "Close support chat" : "Open support chat"}
        aria-expanded={isChatOpen}
        aria-controls="support-chat-dialog"
      >
        <ChatIcon className="text-white" />
      </button>

      {isChatOpen && (
        <div
          ref={chatRef}
          id="support-chat-dialog"
          role="dialog"
          aria-labelledby="chat-title"
          aria-describedby="chat-description"
          className="z-50 fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-80 max-w-[calc(100vw-40px)] max-h-[70vh] overflow-y-auto"
          style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" }}
        >
          <div className="flex flex-col space-y-1.5 pb-6">
            <div className="flex justify-between items-center">
              <h2 id="chat-title" className="font-semibold text-lg text-gray-800">
                Get in touch with us!
              </h2>

              <button
                className="p-1 -m-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                onClick={toggleChat}
                aria-label="Close support chat"
              >
                <FiX size={20} />
              </button>
            </div>
            <p id="chat-description" className="text-sm text-gray-600 leading-5">
              Talk directly with our members and receive a response in 24-48 hours.
            </p>
          </div>

          {/* Form status announcement for screen readers */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className={
              formStatus.includes("error") || formStatus.includes("fix")
                ? "text-red-600 text-center mb-4 text-sm font-semibold"
                : "text-green-700 text-center mb-4 text-sm font-semibold"
            }
          >
            {formStatus && <p>{formStatus}</p>}
          </div>

          {/* Contact Form */}
          <form
            action={emailSetUp.formSubmitEmail}
            method="POST"
            className="space-y-4"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Support chat contact form"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="chat-name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-600" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="chat-name"
                name="Name"
                required
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "chat-name-error" : undefined}
                className={errors.name ? inputErrorStyles : inputStyles}
                placeholder="Your Name"
              />
              {errors.name && (
                <p id="chat-name-error" className="mt-1 text-xs text-red-600" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="chat-email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-600" aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="chat-email"
                name="Email"
                required
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "chat-email-error" : undefined}
                className={errors.email ? inputErrorStyles : inputStyles}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p id="chat-email-error" className="mt-1 text-xs text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="chat-phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-600" aria-label="required">*</span>
              </label>
              <input
                type="tel"
                id="chat-phone"
                name="Phone"
                required
                aria-required="true"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "chat-phone-error chat-phone-help" : "chat-phone-help"}
                className={errors.phone ? inputErrorStyles : inputStyles}
                placeholder="(555) 123-4567"
              />
              <p id="chat-phone-help" className="mt-1 text-xs text-gray-600">
                Format: (555) 123-4567
              </p>
              {errors.phone && (
                <p id="chat-phone-error" className="mt-1 text-xs text-red-600" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Topic/Subject of Inquiry */}
            <div>
              <label htmlFor="chat-topic" className="block text-sm font-medium text-gray-700">
                Topic/Subject <span className="text-red-600" aria-label="required">*</span>
              </label>
              <select
                id="chat-topic"
                name="Topic"
                required
                aria-required="true"
                aria-invalid={errors.topic ? "true" : "false"}
                aria-describedby={errors.topic ? "chat-topic-error" : undefined}
                className={errors.topic ? inputErrorStyles : inputStyles}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="General question or inquiry">General question or inquiry</option>
                <option value="I am interested in services for my child(ren)">
                  I am interested in services for my child(ren)
                </option>
                <option value="Recruiting and hiring">Recruiting and hiring</option>
              </select>
              {errors.topic && (
                <p id="chat-topic-error" className="mt-1 text-xs text-red-600" role="alert">
                  {errors.topic}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="chat-message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-600" aria-label="required">*</span>
              </label>
              <textarea
                id="chat-message"
                name="Message"
                required
                rows={4}
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "chat-message-error" : undefined}
                className={errors.message ? inputErrorStyles : inputStyles}
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && (
                <p id="chat-message-error" className="mt-1 text-xs text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="_next" value={emailSetUp.redirectLink} />
            <input type="hidden" name="_subject" value="ChatBox Form Inquiry!" />
            <input type="hidden" name="_cc" value={emailSetUp.ccLinks} />
            <input type="hidden" name="_template" value="table" />

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 px-4 py-2 transition-colors"
                aria-label="Submit support chat message"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};