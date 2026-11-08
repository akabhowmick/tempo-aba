import React from "react";
import { Steps } from "./Steps";
import { content, pageBanners } from "../../../data/content";
import { SubPageTitle } from "../../Shared/CommonSections";
import { ContentSection } from "../About/ContentSection";
import { membersContent } from "../../../data/memberContent";
const MethodPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="min-h-screen flex flex-col">
        <SubPageTitle pageBannerInfo={pageBanners.methods} />
        <ContentSection
          paragraph={content.hero.subheader1 + " " + content.hero.subheader2}
          image={membersContent.image4}
          alt="A teacher guiding three children as they read at a desk"
          index={2}
        />
        <ContentSection
          paragraph={content.hero.subheader3}
          image={membersContent.image3}
          alt="A teacher showing materials to a young boy in a red sweater"
          index={1}
        />
        <ContentSection
          paragraph={content.hero.subheader4}
          image={membersContent.image6}
          alt="A smiling teacher reaching out to give a child a high five in a classroom"
          index={2}
        />
        <Steps />
      </div>
    </div>
  );
};

export default MethodPage;
