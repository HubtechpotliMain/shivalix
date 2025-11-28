"use client";

import Header from "@/components/Header/Header";
import Benefits from "@/components/Benefits/Benefits";
import Collaboratin from "@/components/Collaboration/Collaboratin";
import ButtonGradient from "@/app/assets/svg/ButtonGradient";

const WhyShivalixPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen">
        <Header />
        <Benefits />
        <Collaboratin />
      </div>
      <ButtonGradient />
    </>
  );
};

export default WhyShivalixPage;

