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
          className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-80 h-80 z-1000"
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
              Talk directly with our members and receive a response in 24-48 hours
            </p>
          </div>

          <div className="flex items-center pt-0">
            <form className="flex items-center justify-center w-full space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-black focus-visible:ring-offset-2 bg-white"
                placeholder="Type your message"
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-gray-800 hover:bg-[#111827E6] h-10 px-4 py-2">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
