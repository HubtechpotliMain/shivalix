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
      <div className="flex gap-[1rem] max-lg:flex-wrap -red-800">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-full h-full px-6 even:py-14 odd:py-8 odd:my-4 border border-stroke-1 rounded-[2rem] bg-n-1 hover-lift card-glow transition-all duration-300 hover:border-color-1/50 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4 text-black">{item.title}</h4>
            <p className="body-2 min-h-[4rem] text-black">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3 text-black">$</div>
                  <div className="text-[5.5rem] leading-none font-bold text-black">
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
                  className="py-5 border-t border-stroke-1 flex items-start gap-4 body-2 text-black"
                >
                  <Image src={assets.check} alt="" />
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
