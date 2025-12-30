import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import Image from "next/image";
import { assets } from "@/app/assets";

const ExecutiveTeam = () => {
  return (
    <>
      <Section id="team" className="bg-n-1">
        <div className="container relative z-2">
          <div className="mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center">
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              Our Executive Team
            </h2>
            <p className="body-2 text-black mt-4 lg:text-center">
              Our success stems from teamwork, technical expertise, and creative solutions for our clients.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-stroke-1 bg-n-1 p-4 sm:p-6 md:p-8 shadow-[0_15px_45px_rgba(15,23,42,0.08)] hover-lift card-glow transition-all duration-300">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                  <Image
                    src={assets.ownerImage}
                    alt="Owner - Shivalix Forex"
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 400px"
                  />
                </div>
                <div className="text-center">
                  <h4 className="h5 mb-2 text-black text-lg sm:text-xl md:text-2xl">Owner</h4>
                  <p className="body-2 text-black text-sm sm:text-base mb-2">Shivalix Forex Services Pvt. Ltd.</p>
                  <p className="body-2 text-black text-xs sm:text-sm">GSTIN: 07ABMCS4722M1ZU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ExecutiveTeam;

