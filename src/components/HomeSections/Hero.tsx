import { commonStyles } from "../Shared/CommonStyles";

export const Hero = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.contentContainer}>
        <div className={commonStyles.textContainer}>
          <div className={commonStyles.textContent}>
            <div className="flex flex-col justify-between flex-1 h-full">
              <div>
                <h1 className={commonStyles.heading}>Discover your Tempo</h1>
                <p className={commonStyles.paragraph}>
                  Connect with us, at Tempo ABA, where we celebrate every child's unique rhythm.
                </p>
                <a
                  href="#"
                  title="Get started with Tempo"
                  className={commonStyles.button}
                  role="button"
                >
                  Learn More About Us!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={commonStyles.imageContainer}>
          <img
            className={commonStyles.image}
            src="https://www.auraui.com/memeimage/phone-mockup.png"
            alt="AuraUI Mockup"
          />
        </div>
      </div>
    </section>
  );
};
