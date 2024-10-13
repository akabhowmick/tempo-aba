import React, { useState } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

interface ChatIconProps {
  className?: string;
}

const ChatIcon: React.FC<ChatIconProps> = ({ className }) => (
  <FiMessageSquare className={className} size={30} />
);

export const SupportChat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <button
        className="z-1000 fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium border rounded-full w-16 h-16 bg-gray-100 cursor-pointer border-green-800 p-0 hover:text-gray-900"
        type="button"
        onClick={toggleChat}
      >
        <ChatIcon className="text-green-800" />
      </button>

      {isChatOpen && (
        <div
          className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-80 max-h-[70vh] z-1000 overflow-y-auto"
          style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" }}
        >
          <div className="flex flex-col space-y-1.5 pb-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-gray-800">Get in touch with us!</h2>

              <button
                className="p-1 -m-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                onClick={toggleChat}
              >
                <FiX size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-600 leading-5">
              Talk directly with our members and receive a response in 24-48 hours.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Your Email"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Topic/Subject of Inquiry */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Topic/Subject</label>
              <select
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-green-500 focus:border-green-500"
              >
                <option value="" disabled selected>
                  Select a topic
                </option>
                <option value="general">General question or inquiry</option>
                <option value="services">I am interested in services for my child(ren)</option>
                <option value="recruiting">Recruiting and hiring</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-green-800 hover:bg-green-700 px-4 py-2"
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
