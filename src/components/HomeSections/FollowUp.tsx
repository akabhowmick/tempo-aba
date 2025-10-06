import { Link } from "react-router-dom";
import { content } from "../../data/content";

export const FollowUp = () => {
  const resourceCards = [
    {
      image: content.resources.image1,
      text: content.resources.text1,
    },
    {
      image: content.resources.image2,
      text: content.resources.text2,
    },
  ];

  return (
    <div className="font-roboto flex items-center justify-center my-10 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl w-full">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resourceCards.map((card, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="relative mb-6">
                <img
                  alt={card.image.alt}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  src={card.image.src}
                />
              </div>
              <div className="text-center md:text-left flex flex-col flex-grow">
                <h2 className="text-3xl font-bold mb-4 text-green-800">
                  {card.text.title}
                </h2>
                <p className="text-lg mb-6 text-gray-700 flex-grow">
                  {card.text.description}
                </p>
                <Link
                  to={card.text.link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded w-full transition-colors">
                    {card.text.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};