import { ContactForm } from "../Pages/ContactPage/ContactForm";
import { FollowUp } from "./FollowUp";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { WhyUs } from "./WhyUs";

export const HomePage = () => {
  return (
    <main id="main-content" role="main" className="mb-10">
      <Hero />
      <Services />
      <FollowUp />
      <WhyUs />
      <div className="sm:py-6 lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};
