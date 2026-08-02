import { pageBanners, contactNextSteps } from "../../../data/content";
import { SectionTitle, SubPageTitle } from "../../Shared/CommonSections";
import { commonStyles } from "../../Shared/CommonStyles";
import { ContactInfoBox } from "../../Shared/ContactInfoBox";

export const ContactPage = () => {
  return (
    <div className={commonStyles.containerStyles}>
      <SubPageTitle pageBannerInfo={pageBanners.contact} />
      <div className="mt-6 overflow-hidden bg-white rounded-xl px-6 py-12 sm:p-12">
        <SectionTitle title={contactNextSteps.heading} />
        <p className="text-gray-800 leading-relaxed">{contactNextSteps.body}</p>
      </div>
      <ContactInfoBox />
    </div>
  );
};
