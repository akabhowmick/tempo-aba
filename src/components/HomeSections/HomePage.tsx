import { ContactSnippet } from "./ContactForm";
import { FollowUp } from "./FollowUp";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { WhyUs } from "./WhyUs";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <FollowUp />
      <WhyUs />
      <ContactSnippet />
    </>
  );
};
