import { pageBanners } from "../../../data/content.ts";
import { savedBgLightestGreen, savedMissionImage } from "../../../data/memberContent";
import { missionContent } from "../../../data/memberContent.tsx";
import { SubPageTitle } from "../../Shared/CommonSections.tsx";

export const MissionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SubPageTitle pageBannerInfo={pageBanners.mission} />
      <div className="flex flex-col md:flex-row items-center my-4 pt-4 gap-10">
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-lg leading-relaxed">{missionContent.mission.paragraph1}</p>
          <p className="text-lg leading-relaxed">{missionContent.mission.paragraph2}</p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 relative">
          <div className="absolute inset-0 bg-green-600 rounded-lg transform rotate-6"></div>
          <img
            alt="Group of professionals smiling"
            className="relative rounded-lg"
            height={400}
            src={savedMissionImage}
            width={600}
          />
        </div>
      </div>

      <div className="relative my-20">
        <div className="absolute inset-0 bg-green-600 rounded-lg transform rotate-3 -z-10"></div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 text-white bg-cover rounded-lg relative">
          <div
            className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12 p-4 bg-cover rounded-lg"
            style={{ backgroundImage: `url(${savedBgLightestGreen})` }}
          >
            <h1 className="text-4xl font-bold mb-4">{missionContent.guidingPrinciple.title}</h1>
            {missionContent.guidingPrinciple.principles.map((principle, index) => (
              <div key={index} className="flex items-start">
                {principle.icon}
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                  <p className="mt-3 text-base text-white">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
