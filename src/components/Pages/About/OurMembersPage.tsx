import { Link } from "react-router-dom";
import { teamBios } from "../../../data/content";

// Helper function to truncate bio text
const truncateText = (text: string, charLimit: number) => {
  return text.length > charLimit ? `${text.substring(0, charLimit)}...` : text;
};

const TeamBioCard = ({
  name,
  title,
  bio,
  imageUrl,
  profileLink,
  credentials,
}: {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  profileLink: string;
  credentials: string;
}) => (
  <div className="text-center mt-5 px-4">
    <div className="w-40 h-40 mx-auto mb-4">
      <img
        alt={`Portrait of ${name}`}
        className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0"
        src={imageUrl}
      />
    </div>
    <h2 className="text-xl font-bold text-gray-900 mt-10">
      {name} - <span className="text-gray-600 ">{credentials}</span>
    </h2>
    <p className="text-md font-semibold text-gray-600">{title}</p>
    <p className="text-sm text-gray-600 mt-2 py-2">{truncateText(bio, 250)}</p>
    <Link to={profileLink} className="text-blue-800 font-semibold mt-2 inline-block">
      Learn More
    </Link>
  </div>
);
export const OurMembersPage = () => (
  <div className="container mx-auto py-12">
    <div className="flex flex-wrap md:flex-nowrap justify-center">
      {teamBios.map((member) => (
        <TeamBioCard
          key={member.name}
          credentials={member.credentials}
          name={member.name}
          title={member.title}
          bio={member.bio.join(" ")}
          imageUrl={member.imageUrl}
          profileLink={member.profileLink}
        />
      ))}
    </div>
  </div>
);
