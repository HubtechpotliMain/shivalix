"use client";

import Header from "@/components/Header/Header";
import Roadmap from "@/components/Roadmap/Roadmap";
import ButtonGradient from "@/app/assets/svg/ButtonGradient";

const ProcessPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen">
        <Header />
        <Roadmap />
      </div>
      <ButtonGradient />
    </>
  );
};

export default ProcessPage;

