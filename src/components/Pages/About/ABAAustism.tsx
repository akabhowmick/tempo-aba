import { pageBanners } from "../../../data/content";
import { membersContent } from "../../../data/memberContent";
import { abaText } from "../../../data/randomText";
import { SubPageTitle } from "../../Shared/CommonSections";
import { ReviewedBy } from "../../Shared/ReviewedBy";
import { ContentSection } from "./ContentSection";

export const ABAautism  = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={pageBanners.aba} />
      <h2 className="text-2xl font-bold text-center pt-8">{abaText.abaPage.section1.title}</h2>
      <ContentSection
        paragraph={abaText.abaPage.section1.paragraph1}
        image={membersContent.image8}
        alt="Illustration of parents and children in a school hallway"
        index={1}
      />
      <h2 className="text-2xl font-bold text-center pt-8">{abaText.abaPage.section2.title}</h2>
      <ContentSection
        paragraph={abaText.abaPage.section2.paragraph1}
        image={membersContent.image9}
        alt="Two smiling children doing schoolwork at a classroom table with their teacher"
        index={2}
      />
      <ContentSection
        paragraph={abaText.abaPage.section2.paragraph2}
        image={membersContent.image7}
        alt="A teacher working with children at a table"
        index={1}
      />
      <ContentSection
        paragraph={abaText.abaPage.section2.paragraph3}
        image={membersContent.image3}
        alt="A teacher showing materials to a young boy in a red sweater"
        index={2}
      />
      <h2 className="text-2xl font-bold text-center pt-8">{abaText.abaPage.section3.title}</h2>
      <ContentSection
        paragraph={abaText.abaPage.section3.paragraph1}
        image={membersContent.image1}
        alt="A boy laughing while a therapist sits across from him at a table"
        index={1}
      />
      <ReviewedBy name="TODO(reviewer name)" date="TODO(review date)" />
    </div>
  );
};
