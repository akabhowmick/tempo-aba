import { content } from "../../data/content";
import { commonStyles } from "../Shared/CommonStyles";

export const Hero = () => {
  return (
    <section
      className={`${commonStyles.section} relative`}
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end items-center bg-black bg-opacity-50 text-white p-4`}
      >
        <div className="text-center align-bottom">
          <div className="flex gap-4 items-center align-middle justify-center">
            <img src={content.header.siteLogo} className="w-14 md:w-24 rounded-md" />
            <h1 className={`${commonStyles.heading} text-4xl md:text-6xl`}>Discover your Tempo</h1>
          </div>
          <p className={`${commonStyles.paragraph} mt-4`}>
            Connect with us, at Tempo ABA, where we celebrate everyone's unique rhythm.
          </p>
          <a
            href="/about/methods"
            title="Get started with Tempo"
            className={`${commonStyles.button} mt-6`}
            role="button"
          >
            Learn More About Us!
          </a>
        </div>
      </div>

      <div
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-contain sm:bg-cover"
        style={{ backgroundImage: `url(${content.hero.heroImage})` }}
      />

      <div id="random" className="relative h-full w-full" />
    </section>
  );
};
