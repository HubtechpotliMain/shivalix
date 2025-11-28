"use client";

import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";
import ButtonGradient from "@/app/assets/svg/ButtonGradient";

const ServicesPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen">
        <Header />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
};

export default ServicesPage;

