import { useEffect, useState } from "react";
import { content } from "../../data/content";
import { commonStyles } from "../Shared/CommonStyles";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      className={`overflow-hidden relative ${
        isMobile ? "h-[calc(70vh)]" : "h-[calc(100vh-80px)]"
      }`}
    >
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end items-center bg-black bg-opacity-30 text-white p-4`}
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
        id="hero-image"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            isMobile ? content.hero.heroMobileImage : content.hero.heroImage
          })`,
        }}
      />
    </section>
  );
};
