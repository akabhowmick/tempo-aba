import { Link } from "react-router-dom";
import { pageBanners, teamBios } from "../../../data/content";
import { SubPageTitle } from "../../Shared/CommonSections";
import { membersContent } from "../../../data/memberContent";

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
      {name} - <span className="text-gray-600">{credentials}</span>
    </h2>
    <p className="text-md font-semibold text-gray-600">{title}</p>
    <p className="text-sm text-gray-600 mt-2 py-2">{truncateText(bio, 250)}</p>
    <Link to={profileLink} className="text-blue-800 font-semibold mt-2 inline-block">
      Learn More
    </Link>
  </div>
);

const ContentSection = ({
  paragraph,
  image,
  index,
}: {
  paragraph: string;
  image: string;
  index: number;
}) => (
  <div
    className={`flex flex-col ${
      index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
    } items-center my-4 gap-10} p-4`}
  >
    <div className="md:w-1/2 flex flex-col gap-4">
      <p className="text-lg leading-relaxed">{paragraph}</p>
    </div>
    <div className={`md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} relative`}>
      <img
        alt="Group of professionals smiling"
        className="relative rounded-lg w-1/1"
        
        src={image}
      />
    </div>
  </div>
);

export const OurMembersPage = () => (
  <div className="container mx-auto px-4 py-8">
    <SubPageTitle pageBannerInfo={pageBanners.members} />

    <ContentSection paragraph={membersContent.paragraph1} image={membersContent.image1} index={1} />
    <ContentSection paragraph={membersContent.paragraph2} image={membersContent.image2} index={2} />
    <ContentSection paragraph={membersContent.paragraph3} image={membersContent.image3} index={3} />

    <h2 className="text-4xl font-bold mt-8 mb-4 text-center">Our Team</h2>

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
