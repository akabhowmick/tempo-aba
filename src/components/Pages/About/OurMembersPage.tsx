import { Link } from "react-router-dom";
import { content, pageBanners, teamBios } from "../../../data/content";
import { SubPageTitle } from "../../Shared/CommonSections";
import { membersContent } from "../../../data/memberContent";
import { ContentSection } from "./ContentSection";

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
    <h2 className="text-xl font-bold text-black mt-10">
      {name} - <span className="text-black">{credentials}</span>
    </h2>
    <p className="text-md font-semibold text-black">{title}</p>
    <p className="text-sm text-black mt-2 py-2">{truncateText(bio, 250)}</p>
    <Link
      to={profileLink}
      className="text-blue-900 underline font-semibold mt-2 inline-block"
      onClick={() => {
        window.scrollTo(0, 0); // Scroll to top
      }}
    >
      Learn More about {name.split(" ")[0]}
    </Link>
  </div>
);

export const OurMembersPage = () => (
  <div className="container mx-auto px-4 py-8">
    <SubPageTitle pageBannerInfo={pageBanners.members} />

    {/* <ContentSection paragraph={membersContent.paragraph1} image={membersContent.image1} index={1} />
    <ContentSection paragraph={membersContent.paragraph2} image={membersContent.image2} index={2} />
    <ContentSection paragraph={membersContent.paragraph3} image={membersContent.image5} index={3} /> */}
    <ContentSection
      paragraph={membersContent.paragraph4}
      image={content.header.siteLogo}
      index={2}
    />

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
