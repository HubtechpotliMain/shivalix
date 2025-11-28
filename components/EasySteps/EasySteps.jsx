import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import CompanyLogos from "../CompanyLogos";
import { assets } from "@/app/assets";
import Image from "next/image";

const EasySteps = () => {
  const steps = [
    {
      id: 1,
      title: "Visit our website",
      description: "Register or Login to our portal.",
    },
    {
      id: 2,
      title: "Choose the requirements",
      description: "Select Buy Currency",
    },
    {
      id: 3,
      title: "Enter order details",
      description: "Select the Currency and enter the value",
    },
    {
      id: 4,
      title: "Upload documents",
      description: "Upload the required document as listed",
    },
    {
      id: 5,
      title: "Delivery mode",
      description: "Choose Delivery or Pick up",
    },
    {
      id: 6,
      title: "Payment process",
      description: "Make the payment online",
    },
  ];

  return (
    <>
      <Section id="easy-steps" className="bg-n-1">
        <div className="container relative z-2">
          <div className="mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center">
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              6 Easy Steps
            </h2>
            <p className="body-2 text-black mt-4 lg:text-center">
              Take your required document as listed before you get started. Get your foreign currency easily in just 6 simple steps. From selecting your requirements to making payment!
            </p>
          </div>

          {/* Features */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-color-1/10 border border-color-1/20">
              <p className="body-2 text-color-1 font-semibold text-xs sm:text-sm md:text-base">It&apos;s fast</p>
            </div>
            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-color-4/10 border border-color-4/20">
              <p className="body-2 text-color-4 font-semibold text-xs sm:text-sm md:text-base">Secure</p>
            </div>
            <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-color-2/10 border border-color-2/20">
              <p className="body-2 text-color-2 font-semibold text-xs sm:text-sm md:text-base">Convenient</p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative p-4 sm:p-6 lg:p-8 border border-stroke-1 rounded-xl sm:rounded-2xl bg-n-1 hover:border-color-1/50 hover-lift card-glow transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-conic-gradient p-0.5">
                    <div className="w-full h-full rounded-full bg-n-1 flex items-center justify-center">
                      <span className="h6 text-color-1 text-sm sm:text-base">{step.id}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="h6 mb-2 text-black text-base sm:text-lg">{step.title}</h4>
                    <p className="body-2 text-black text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="relative">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="h3 mb-3 sm:mb-4 text-black text-xl sm:text-2xl md:text-3xl">Proudly says</h3>
              <div className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">😊😊😊</div>
            </div>
            <CompanyLogos />
          </div>
        </div>
      </Section>
    </>
  );
};

export default EasySteps;

