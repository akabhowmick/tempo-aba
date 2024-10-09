import { savedMissionImage } from "../../../data/content";

export const MissionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg leading-relaxed">
            At Tempo ABA, our mission is to provide exceptional ABA therapy rooted in the principles
            of Applied Behavior Analysis (ABA). We are dedicated to empowering individuals to
            uncover their unique strengths and potential while welcoming the challenges of their
            learning journey toward independence. Our dedicated team of Board Certified Behavior
            Analysts and behavior technicians implement tailored treatment plans designed to enhance
            skills that foster greater independence, open up new opportunities, and encourage active
            involvement, all while addressing and reducing learning barriers.
          </p>
          <p className="text-lg leading-relaxed">
            We value collaboration among all team members and prioritize strong partnerships with
            families, respecting each individual’s uniqueness and the rich cultural diversity of the
            families we serve. Our commitment extends to creating a positive, inclusive, and diverse
            learning environment for our employees, the families we support, and our broader
            community.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 relative">
          <div className="absolute inset-0 bg-green-400 rounded-lg transform rotate-6"></div>
          <img
            alt="Group of professionals smiling"
            className="relative rounded-lg"
            height={400}
            src={savedMissionImage}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};
