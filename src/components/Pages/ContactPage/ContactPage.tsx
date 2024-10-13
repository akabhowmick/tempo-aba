import { pageBanners } from "../../../data/content";
import { SubPageTitle } from "../../Shared/CommonSections";
import { commonStyles } from "../../Shared/CommonStyles";
import { ContactInfoBox } from "../../Shared/ContactInfoBox";

export const ContactPage = () => {
  return (
    <div className={commonStyles.containerStyles}>
      <SubPageTitle pageBannerInfo={pageBanners.contact} />
      <ContactInfoBox formType={"contact"} />
    </div>
  );
};
