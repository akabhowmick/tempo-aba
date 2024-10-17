import { Link } from "react-router-dom";
import { content } from "../../data/content";

export const FollowUp = () => {
  return (
    <div className="font-roboto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Image 1 */}
        <div className="relative">
          <img
            alt={content.resources.image1.alt}
            className="w-full h-full object-cover"
            height="400"
            src={content.resources.image1.src}
            width="600"
          />
        </div>

        {/* Text 1 */}
        <div className="bg-green-700 p-8 flex flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.resources.text1.title}</h2>
          <p className="text-lg mb-4">{content.resources.text1.description}</p>
          <Link
            to={content.resources.text1.link}
            onClick={() => {
              window.scrollTo(0, 0); // Scroll to top
            }}
          >
            <button className="bg-green-600 px-4 py-2 rounded w-full">
              {content.resources.text1.buttonText}
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Image 2 (this comes after Text 2 on mobile) */}
        <div className="relative md:order-none">
          <img
            alt={content.resources.image2.alt}
            className="w-full h-full object-cover"
            height="400"
            src={content.resources.image2.src}
            width="600"
          />
        </div>

        {/* Text 2 (comes last on desktop) */}
        <div className="bg-green-700 p-8 flex flex-col justify-center md:order-last text-white">
          <h2 className="text-3xl font-bold mb-4">{content.resources.text2.title}</h2>
          <p className="text-lg mb-4">{content.resources.text2.description}</p>
          <Link to={content.resources.text2.link} onClick={() => {
                window.scrollTo(0, 0); // Scroll to top
              }}>
            <button className="bg-green-600 px-4 py-2 rounded w-full">
              {content.resources.text2.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
