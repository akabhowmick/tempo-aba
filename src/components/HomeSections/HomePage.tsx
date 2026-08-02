import { FollowUp } from "./FollowUp";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { WhyUs } from "./WhyUs";

export const HomePage = () => {
  return (
    <div className="mb-10">
      <Hero />
      <Services />
      <FollowUp />
      <WhyUs />
    </div>
  );
};
