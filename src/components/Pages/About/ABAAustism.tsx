import { pageBanners } from "../../../data/content";
import { membersContent } from "../../../data/memberContent";
import { abaText } from "../../../data/randomText";
import { SubPageTitle } from "../../Shared/CommonSections";
import { ContentSection } from "./ContentSection";

export const ABAAutism = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={pageBanners.aba} />
      <h2 className="text-2xl font-bold text-center pt-8">{abaText.abaPage.section1.title}</h2>
      <ContentSection
        paragraph={abaText.abaPage.section1.paragraph1}
        image={membersContent.image8}
        index={1}
      />
      <h2 className="text-2xl font-bold text-center pt-8">{abaText.abaPage.section2.title}</h2>
      <ContentSection
        paragraph={abaText.abaPage.section2.paragraph1}
        image={membersContent.image9}
        index={2}
      />
      <ContentSection
        paragraph={abaText.abaPage.section2.paragraph2}
        image={membersContent.image7}
        index={1}
      />
      <ContentSection
        paragraph={abaText.abaPage.section2.paragraph3}
        image={membersContent.image3}
        index={2}
      />
      <h2 className="text-2xl font-bold text-center pt-8">{abaText.abaPage.section3.title}</h2>
      <ContentSection
        paragraph={abaText.abaPage.section3.paragraph1}
        image={membersContent.image1}
        index={1}
      />
    </div>
  );
};
