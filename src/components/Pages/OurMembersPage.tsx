import { Link } from "react-router-dom";
import { teamBios } from "../../data/content";

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
}: {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  profileLink: string;
}) => (
  <div className="text-center">
    <div className="w-40 h-40 mx-auto mb-4">
      <img
        src={imageUrl}
        alt={`Portrait of ${name}`}
        className="rounded-full bg-orange-500"
        width="160"
        height="160"
      />
    </div>
    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
    <p className="text-md font-semibold text-gray-600">{title}</p>
    <p className="text-sm text-gray-600 mt-2">{truncateText(bio, 100)}</p>
    <Link to={profileLink} className="text-blue-800 font-semibold mt-2 inline-block">
      Learn More
    </Link>
  </div>
);

export const OurMembersPage = () => (
  <div className="container mx-auto py-12">
    <div className="flex justify-center space-x-8">
      {teamBios.map((member) => (
        <TeamBioCard
          key={member.name}
          name={member.name}
          title={member.title}
          bio={member.bio}
          imageUrl={member.imageUrl}
          profileLink={member.profileLink}
        />
      ))}
    </div>
  </div>
);
