 "use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { assets } from "@/app/assets";
import Image from "next/image";
import Button from "../Button/Button";
import { openWhatsApp } from "../utils/openWhatsApp";

const Cashback = () => {
  const features = [
    "Max Cashback of ₹7500 on Forex Orders",
    "Offer applicable on new forex card and currency notes purchase",
    "Avail this offer along with our Lowest Rate Guarantee Program",
    "Get 2x the price difference if you find a better rate elsewhere",
  ];

  return (
    <>
      <Section id="cashback" className="bg-n-1">
        <div className="container relative z-2">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
            {/* Content Section */}
            <div className="order-1">
              <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-4 sm:mb-5 aos-init text-left text-center sm:text-left">
                Get up to 3.3% Cashback on Forex This Travel Season
              </h2>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-color-2/20 flex items-center justify-center mt-0.5">
                      <Image
                        src={assets.check}
                        alt=""
                        width={14}
                        height={14}
                        className="text-color-2 w-3 h-3 sm:w-3.5 sm:h-3.5"
                      />
                    </div>
                    <p className="body-2 text-color-2 font-bold flex-1 text-sm sm:text-base">{feature}</p>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() =>
                  openWhatsApp("the Cashback offer on Forex This Travel Season")
                }
                white
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Claim Offer
              </Button>
            </div>

            {/* Image Section */}
            <div className="relative order-2">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stroke-1 bg-n-8">
                <Image
                  src={assets.cashbackImage}
                  alt="Cashback Offer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Cashback;

