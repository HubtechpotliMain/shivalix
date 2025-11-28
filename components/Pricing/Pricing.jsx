import React from "react";
import Section from "../Section";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/assets";
import Heading from "../Heading";
import Tagline from "../Tagline/Tagline";
import PricingList from "../PricingList/PricingList";
import { LeftLine, RightLine } from "../design/Pricing";
const Pricing = () => {
  return (
    <>
      <Section className="overflow-hidden bg-n-1" id="pricing">
        <div className="container relative z-2">
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <Image
              src={assets.smallSphere}
              alt=""
              className="relative z-1"
              width={255}
              height={255}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
              <Image src={assets.stars} alt="" />
            </div>
          </div>
          <div className="mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center">
            <Tagline className="mb-4 md:justify-center">
              SHIVALIX FOREX PROMISE
            </Tagline>
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              Offers that pack more value
            </h2>
            <p className="body-2 text-black mt-4 lg:text-center">
              Seasonal cashback, zero-fee student cards and enterprise remittance desks built for savings.
            </p>
          </div>
          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>
          <div className="flex justify-center mt-10 text-xs font-bold font-code tracking-wider">
            <Link
              href={
                "https://wa.me/919599516159?text=" +
                encodeURIComponent(
                  "Hi Shivalix Forex, I want to share my forex requirement from the website."
                )
              }
              className="border-b border-black text-black hover:border-none hover:text-color-1 transition-colors"
            >
              SHARE YOUR REQUIREMENT
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Pricing;
