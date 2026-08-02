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
      className={`overflow-hidden relative ${isMobile ? "h-[calc(70vh)]" : "h-[calc(100vh-80px)]"}`}
    >
      <div
        className="absolute inset-0 z-10 bg-black bg-opacity-50 flex flex-col text-white p-4"
        role="banner"
        aria-label="Welcome to TEMPO ABA"
      >
        <div className="text-center flex flex-col justify-end items-center h-full">
          <div className="mb-12 md:mb-4">
            <div className="hidden md:flex gap-4 flex-row items-center md:justify-center md:gap-4">
              <img
                src={content.header.siteLogo}
                className="w-14 md:w-60 rounded-md"
                alt="TEMPO ABA logo"
              />
              <h1 className={`${commonStyles.heading} text-4xl md:text-6xl text-center`}>
                Discover your TEMPO
              </h1>
            </div>
            <p className={`${commonStyles.paragraph} mt-4 text-center`}>
              Connect with us, at TEMPO ABA, where we celebrate everyone's unique rhythm.
            </p>
          </div>
          <div>
            <a
              href="/about/methods"
              aria-label="Learn more about TEMPO ABA's methods and approach"
              className={`${commonStyles.button} mt-6 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2`}
            >
              Learn More About Us!
            </a>
          </div>
        </div>
      </div>

      <div
        id="hero-image"
        className="absolute inset-0 z-0 bg-cover bg-center"
        role="presentation"
        style={{
          backgroundImage: `url(${
            isMobile ? content.hero.heroMobileImage : content.hero.heroImage
          })`,
        }}
      />
    </section>
  );
};
