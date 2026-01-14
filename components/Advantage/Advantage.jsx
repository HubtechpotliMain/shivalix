import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { assets } from "@/app/assets";
import Image from "next/image";

const Advantage = () => {
  const advantages = [
    {
      id: 1,
      title: "Fastest & Best Delivery Service",
      description:
        "Place the order online before 1 pm and get same day delivery from Shivalix Forex Services Pvt. Ltd. We provide the fastest service and time bound delivery of currencies at your doorstep. You can track orders on a real-time basis.",
      icon: assets.check,
    },
    {
      id: 2,
      title: "Best Rates, 24x7",
      description:
        "Get the best live rates with full transparency—online or in-store.",
      icon: assets.check,
    },
    {
      id: 3,
      title: "Currency in Stock",
      description:
        "We stock currencies like IDR, THB, etc., ensuring top rates always.",
      icon: assets.check,
    },
    {
      id: 4,
      title: "Easy Access",
      description:
        "Branches across India and a simple online platform.",
      icon: assets.check,
    },
  ];

  return (
    <>
      <Section id="advantage" className="bg-n-1">
        <div className="container relative z-2">
          <div className="mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center">
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              The Shivalix Forex Services Pvt. Ltd. Advantage over Banks & Other Forex Vendors
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                className="relative p-4 sm:p-6 lg:p-8 border border-stroke-1 rounded-2xl sm:rounded-3xl bg-n-1 hover:border-color-1/50 hover-lift card-glow transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-color-1/10 flex items-center justify-center">
                    <Image
                      src={advantage.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="text-color-1 w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <h4 className="h6 text-black flex-1 text-base sm:text-lg">{advantage.title}</h4>
                </div>
                <p className="body-2 text-black text-sm sm:text-base">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Advantage;

