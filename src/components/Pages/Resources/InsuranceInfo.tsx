import { pageBanners } from "../../../data/content";
import { SubPageTitle } from "../../Shared/CommonSections";
import { commonStyles } from "../../Shared/CommonStyles";
import insuranceImage from "../../../assets/siteImages/home/insurance.png";

export const InsurancePage: React.FC = () => {
  return (
    <div className={commonStyles.containerStyles}>
      <SubPageTitle pageBannerInfo={pageBanners.insurance} />
      <div className="max-w-4xl mx-auto p-6">
        {/* Icon and description */}
        <div className="text-center mb-8">
          <div className="text-orange-500 text-3xl mb-4">
            <i className="fas fa-crown" />
          </div>
          <p className="text-lg">
            Tempo ABA proudly accepts most major commercial health plans, offering both in-network
            and out-of-network benefits, as well as Medicaid. Please note that insurance plans can
            differ in their coverage and benefits for our{" "}
            <span className="text-orange-500 font-bold">Applied Behavior Analysis (ABA)</span>{" "}
            therapy services.
          </p>
        </div>

        {/* Image and description */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              alt="Family sitting together and smiling"
              className="rounded-full mx-auto"
              src={insuranceImage}
              width="300"
              height="200"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 pl-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Here to Help</h2>
            <p className="text-lg">
              Our team is dedicated to assisting you in understanding your benefits and coverage. We
              can help you determine which services are covered by your plan and provide clarity on
              the costs associated with therapy sessions or an entire course of treatment.
            </p>
            <p className="text-lg mt-4">
              Additionally, we’re committed to working with you to establish a payment plan that
              fits your family’s budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
