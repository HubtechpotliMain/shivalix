import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { benefits } from "@/constants";
import "./Benefits.scss";
import Image from "next/image";
import Arrow from "@/app/assets/svg/Arrow";
import { GradientLight } from "../design/Benefits";
import ClipPath from "@/app/assets/svg/ClipPath";
const Benefits = () => {
  return (
    <>
      <Section id="features" className="bg-n-1">
        <div className="container relative z-2">
          <div className="md:text-center md:max-w-md lg:max-w-2xl mx-auto mb-12">
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              Why travelers trust Shivalix Forex
            </h2>
            <p className="body-2 text-black mt-4 text-center">
              Value-packed benefits for leisure travelers, students, expats and enterprises.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-10 justify-center">
            {benefits.map((item) => (
              <div
                key={item.id}
                className="benefitsBgUrlCss block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full sm:w-[calc(50%-0.5rem)] md:max-w-[24rem]"
              >
                <div className="relative z-2 flex flex-col min-h-[18rem] sm:min-h-[20rem] md:min-h-[22rem] p-4 sm:p-6 md:p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-3 sm:mb-4 md:mb-5 text-black text-lg sm:text-xl md:text-2xl">{item.title}</h5>
                  <p className="body-2 mb-4 sm:mb-5 md:mb-6 text-black text-sm sm:text-base">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <Image src={item.iconUrl} alt="" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                  </div>
                </div>
                {item.light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-1 rounded-["
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Benefits;
