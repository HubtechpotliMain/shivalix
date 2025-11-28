 "use client";
import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { assets } from "@/app/assets";
import { pricing } from "@/constants";
import { openWhatsApp } from "../utils/openWhatsApp";
const PricingList = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-[1rem] max-lg:flex-wrap">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-full sm:flex-1 lg:w-auto h-full px-4 sm:px-6 even:py-8 sm:even:py-12 lg:even:py-14 odd:py-6 sm:odd:py-8 odd:my-0 sm:odd:my-4 border border-stroke-1 rounded-xl sm:rounded-2xl bg-n-1 hover-lift card-glow transition-all duration-300 hover:border-color-1/50 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-3 sm:mb-4 text-black text-lg sm:text-xl md:text-2xl">{item.title}</h4>
            <p className="body-2 min-h-[3rem] sm:min-h-[4rem] text-black text-sm sm:text-base">
              {item.description}
            </p>
            <div className="flex items-center h-[4rem] sm:h-[5rem] md:h-[5.5rem] mb-4 sm:mb-6">
              {item.price && (
                <>
                  <div className="h3 text-black text-xl sm:text-2xl md:text-3xl">$</div>
                  <div className="text-4xl sm:text-5xl md:text-[5.5rem] leading-none font-bold text-black">
                    {item.price}
                  </div>
                </>
              )}
            </div>
            <Button
              white={!!item.price}
              className="w-full mb-6"
              onClick={() =>
                openWhatsApp(
                  item.price
                    ? `the "${item.title}" pricing option`
                    : `the "${item.title}" offer`
                )
              }
            >
              {item.price ? "Get started" : "talk to sales"}
            </Button>
            <ul>
              {item.features.map((item, index) => (
                <li
                  key={index}
                  className="py-3 sm:py-4 md:py-5 border-t border-stroke-1 flex items-start gap-3 sm:gap-4 body-2 text-black text-sm sm:text-base"
                >
                  <Image src={assets.check} alt="" className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingList;
