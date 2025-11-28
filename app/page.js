"use client";
import Button from "@/components/Button/Button";
import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import HeroFeatures from "@/components/HeroFeatures/HeroFeatures";
import Stats from "@/components/Stats/Stats";
import Benefits from "@/components/Benefits/Benefits";
import Collaboratin from "@/components/Collaboration/Collaboratin";
import Services from "@/components/Services/Services";
import Pricing from "@/components/Pricing/Pricing";
import GICBlockedAccount from "@/components/GICBlockedAccount/GICBlockedAccount";
import Cashback from "@/components/Cashback/Cashback";
import StudentCard from "@/components/StudentCard/StudentCard";
import ExploreServices from "@/components/ExploreServices/ExploreServices";
import Advantage from "@/components/Advantage/Advantage";
import EasySteps from "@/components/EasySteps/EasySteps";
import ExecutiveTeam from "@/components/ExecutiveTeam/ExecutiveTeam";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Stats />
        <HeroFeatures />
        <GICBlockedAccount />
        <Cashback />
        <StudentCard />
        <Benefits />
        <Collaboratin />
        <Services />
        <Pricing />
        <ExploreServices />
        <Advantage />
        <EasySteps />
        <ExecutiveTeam />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Home;
