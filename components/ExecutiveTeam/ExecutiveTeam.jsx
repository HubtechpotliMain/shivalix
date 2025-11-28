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
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-3xl border border-stroke-1 bg-n-1 p-8 shadow-[0_15px_45px_rgba(15,23,42,0.08)] hover-lift card-glow transition-all duration-300">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={assets.ownerImage}
                    alt="Owner - Shivalix Forex"
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="text-center">
                  <h4 className="h5 mb-2 text-black">Owner</h4>
                  <p className="body-2 text-black">Shivalix Forex Services Pvt. Ltd.</p>
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

