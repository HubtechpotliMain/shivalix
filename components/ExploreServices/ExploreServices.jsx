import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { assets } from "@/app/assets";
import Image from "next/image";

const ExploreServices = () => {
  const services = [
    {
      id: 1,
      title: "Private Visit/Leisure",
      description:
        "Foreign Exchange can be availed by Indian Residents travelling abroad for a private visit to any other country other than Nepal and Bhutan.",
    },
    {
      id: 2,
      title: "Business Visit",
      description:
        "Foreign Exchange can be released to Employees travelling abroad under Business Visit with the required documents.",
    },
    {
      id: 3,
      title: "Education",
      description:
        "Students who want to pursue overseas education can avail of Remittance and Foreign Exchange services before travelling, post travel parents can support.",
    },
    {
      id: 4,
      title: "Employment",
      description:
        "Indian Residents travelling abroad for the very first time under employment visa can buy Foreign Exchange.",
    },
    {
      id: 5,
      title: "Emigration",
      description:
        "Foreign Exchange can be released to an Indian Resident who is travelling under the Emigration visa for the first time.",
    },
    {
      id: 6,
      title: "Medical Treatment",
      description:
        "One can buy Foreign Exchange to meet the expenses of Medical Treatment outside India based on the estimation.",
    },
  ];

  return (
    <>
      <Section id="explore-services" className="bg-n-1">
        <div className="container relative z-2">
          <div className="mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center">
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              Explore our services
            </h2>
            <p className="body-2 text-black mt-4 lg:text-center">
              Complete suite of services for Indian travelers, expats, and students—covering currency exchange, money transfers, visa assistance and student account opening.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative p-4 sm:p-6 lg:p-8 border border-stroke-1 rounded-2xl sm:rounded-3xl bg-n-1 hover:border-color-1/50 hover-lift card-glow transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-color-1/10 flex items-center justify-center">
                    <Image
                      src={assets.check}
                      alt=""
                      width={20}
                      height={20}
                      className="text-color-1 w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <h4 className="h6 text-black flex-1 text-base sm:text-lg">{service.title}</h4>
                </div>
                <p className="body-2 text-black text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ExploreServices;

