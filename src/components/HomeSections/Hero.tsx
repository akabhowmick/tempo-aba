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
      <div className={`absolute inset-0 z-10 bg-black bg-opacity-30 flex flex-col text-white p-4`}>
        <div className="text-center flex flex-col justify-end items-center h-full">
          <div className="mb-12 md:mb-4">
            {" "}
            <div className=" hidden md:flex gap-4 flex-row md:justify-center md:gap-4">
              <img src={content.header.siteLogo2} className="w-14 md:w-24 rounded-md" />
              <h1 className={`${commonStyles.heading} text-4xl md:text-6xl text-center`}>
                Discover your Tempo
              </h1>
            </div>
            <p className={`${commonStyles.paragraph} mt-4 text-center`}>
              Connect with us, at Tempo ABA, where we celebrate everyone's unique rhythm.
            </p>
          </div>
          <div>
            <a
              href="/about/methods"
              aria-label="Learn more about Tempo ABA's methods and approach"
              className={`${commonStyles.button} mt-6`}
            >
              Learn More About Us!
            </a>
          </div>
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
