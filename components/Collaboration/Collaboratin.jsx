 "use client";
import React from "react";
import Section from "../Section";
import { collabApps, collabContent, collabText } from "@/constants";
import Image from "next/image";
import { assets } from "@/app/assets";
import Button from "../Button/Button";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import { openWhatsApp } from "../utils/openWhatsApp";

const Collaboratin = () => {
  return (
    <>
      <Section crosses>
        <div className="container lg:flex">
          <div className="max-w-[25rem] mx-auto lg:mx-0">
            <h2 className="h2 mb-4 md:mb-8 text-n-1 text-center lg:text-left text-xl sm:text-2xl md:text-3xl">
              Forex expertise across every journey
            </h2>
            <ul className="max-w-[22rem] mb-8 sm:mb-10 md:mb-14 mx-auto lg:mx-0">
              {collabContent.map((item) => (
                <li key={item.id} className="mb-3 py-3">
                  <div className="flex items-center">
                    <Image src={assets.check} alt="" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <h6 className="body-2 ml-3 sm:ml-5 text-n-1 text-sm sm:text-base">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="body-2 text-n-2 mt-3 text-sm sm:text-base">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>
            <div className="text-center lg:text-left">
              <Button
                onClick={() =>
                  openWhatsApp("talking to a forex expert about my requirements")
                }
                className="text-sm sm:text-base"
              >
                talk to an expert
              </Button>
            </div>
          </div>
          <div className="lg:ml-auto xl:w-[38rem] mt-6 sm:mt-8 lg:mt-4">
            <p className="body-2 text-n-2 mb-4 md:mb-16 lg:mb-28 lg:w-[22rem] lg:mx-auto text-sm sm:text-base text-center lg:text-left px-4 lg:px-0">
              {collabText}
            </p>
            <div className="w-[18rem] sm:w-[22rem] border border-n-6 rounded-full aspect-square relative left-1/2 -translate-x-1/2 flex scale-75 sm:scale-90 md:scale-100">
              <div className="w-60 border border-n-6 aspect-square m-auto rounded-full flex">
                <div className="w-[6rem] aspect-square m-auto bg-conic-gradient p-[0.2rem] rounded-full">
                  <div className="w-full h-full flex items-center justify-center bg-n-8 rounded-full">
                    <Image src={assets.brainwaveSymbol} alt="" />
                  </div>
                </div>
              </div>
              <ul>
                {collabApps.map((item, index) => (
                  <li
                    key={item.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                        index * 45
                      }`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={item.width}
                        height={item.height}
                        className="m-auto"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Collaboratin;
