import React from "react";
import Section from "../Section";
import { assets } from "@/app/assets";
import Image from "next/image";

const HeroFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Save More",
      description: "5%+ better than market rates.",
      icon: assets.check,
    },
    {
      id: 2,
      title: "Fast Credit",
      description: "Credit/Delivery in 48 working hours.",
      icon: assets.check,
    },
    {
      id: 3,
      title: "Expert Help",
      description: "Professional support, every step",
      icon: assets.check,
    },
  ];

  return (
    <>
      <Section className="bg-n-1 py-12 lg:py-16">
        <div className="container relative z-2">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-3 aos-init text-center uppercase">
              Forex &amp; Money Transfers..
            </h2>
            <h3 className="h3 mb-6 txt-grad1 fontstyle1 aos-init">
              Extra simple, extra savings
            </h3>
            <p className="body-1 text-black max-w-2xl mx-auto">
              Get the best exchange rates on currency, forex cards, and money
              transfers from India. Fast, easy, and trusted
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative p-6 lg:p-8 border border-stroke-1 rounded-3xl bg-n-1 hover:border-color-1/50 transition-all hover:shadow-[0_15px_45px_rgba(15,23,42,0.12)] text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-color-1/10 flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="text-color-1"
                    />
                  </div>
                </div>
                <h4 className="h5 mb-3 text-black">{feature.title}</h4>
                <p className="body-2 text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default HeroFeatures;

