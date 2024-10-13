import { content } from "../../data/content";
import { commonStyles } from "../Shared/CommonStyles";

export const Hero = () => {
  return (
    <section
      className={`${commonStyles.section} relative`}
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-center md:justify-end items-center bg-black bg-opacity-50 text-white p-4`}
      >
        <div className="text-center">
          <h1 className={`${commonStyles.heading} text-4xl md:text-6xl`}>Discover your Tempo</h1>
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
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${content.hero.heroImage})` }}
      />

      <div className="relative h-full w-full" />
    </section>
  );
};
