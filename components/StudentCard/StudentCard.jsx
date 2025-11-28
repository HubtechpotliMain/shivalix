 "use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { assets } from "@/app/assets";
import Image from "next/image";
import Button from "../Button/Button";
import { openWhatsApp } from "../utils/openWhatsApp";

const StudentCard = () => {
  const features = [
    "Zero markup rate* and zero cross-currency fees",
    "Zero ATM withdrawal fees",
    "Zero fees for paying tuition fees via the card",
    "Save more than Rs.1.5 lakh with the card annually",
  ];

  return (
    <>
      <Section id="student-card" className="bg-n-1">
        <div className="container relative z-2">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stroke-1 bg-n-8">
                <Image
                  src={assets.studentCardImage}
                  alt="Zero-Fee Student Forex Card"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2">
              <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-4 sm:mb-5 aos-init text-left text-center sm:text-left">
                Introducing Zero-Fee Student Forex Card
              </h2>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-color-4/10 flex items-center justify-center mt-0.5">
                      <Image
                        src={assets.check}
                        alt=""
                        width={14}
                        height={14}
                        className="text-color-4 w-3 h-3 sm:w-3.5 sm:h-3.5"
                      />
                    </div>
                    <p className="body-2 text-color-4 font-bold flex-1 text-sm sm:text-base">{feature}</p>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() =>
                  openWhatsApp("the Zero-Fee Student Forex Card")
                }
                white
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default StudentCard;

