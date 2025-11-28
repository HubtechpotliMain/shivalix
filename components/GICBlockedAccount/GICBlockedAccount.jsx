 "use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { assets } from "@/app/assets";
import Image from "next/image";
import Button from "../Button/Button";
import { openWhatsApp } from "../utils/openWhatsApp";

const GICBlockedAccount = () => {
  const features = [
    "Easy transfer to Canadian GIC and German blocked accounts",
    "24/7 online booking with convenient doorstep KYC",
    "Swift, same-day transfers*",
    "Best exchange rates and zero bank charges",
  ];

  return (
    <>
      <Section id="gic-blocked-account" className="bg-n-1">
        <div className="container relative z-2">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-stroke-1 bg-n-8">
                <Image
                  src={assets.gicImage}
                  alt="Fund Your GIC or Blocked Account"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-left">
                Fund Your GIC or Blocked Account with Zero Bank Fees
              </h2>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-color-4/10 flex items-center justify-center mt-0.5">
                      <Image
                        src={assets.check}
                        alt=""
                        width={14}
                        height={14}
                        className="text-color-4"
                      />
                    </div>
                    <p className="body-2 text-black flex-1" style={{ color: '#000000' }}>{feature}</p>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() =>
                  openWhatsApp(
                    "funding a GIC or Blocked Account with Zero Bank Fees"
                  )
                }
                white
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default GICBlockedAccount;

