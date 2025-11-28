 "use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import Tagline from "../Tagline/Tagline";
import Image from "next/image";
import { assets } from "@/app/assets";
import { fxServices } from "@/constants";
import Button from "../Button/Button";
import { openWhatsApp } from "../utils/openWhatsApp";

const Services = () => {
  return (
    <>
      <Section id="services" className="bg-n-1">
        <div className="container">
          <div className="mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center">
            <Tagline className="mb-4 md:justify-center">
              FOREX SERVICES
            </Tagline>
            <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center">
              Services engineered for every requirement
            </h2>
            <p className="body-2 text-black mt-4 lg:text-center">
              Currency exchange, remittances, cards and embedded forex rails delivered with transparent pricing and compliant processes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {fxServices.map((service) => (
              <article
                key={service.id}
                className="relative z-1 flex flex-col h-full border border-stroke-1 rounded-3xl bg-n-1 p-8 shadow-[0_15px_45px_rgba(15,23,42,0.08)] hover-lift card-glow transition-all duration-300 hover:border-color-1/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-color-1/10 text-color-1">
                    {service.badge}
                  </span>
                </div>
                <h4 className="h4 mb-4 text-black">{service.title}</h4>
                <p className="body-2 text-black mb-6">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 body-2 text-black">
                      <Image src={assets.check} alt="" className="mt-1" />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
                {service.dropdownOptions && (
                  <label className="flex flex-col gap-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-black">
                      {service.dropdownLabel}
                    </span>
                    <select className="w-full rounded-2xl border border-stroke-1 bg-n-1 px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-color-1/50 transition-all">
                      {service.dropdownOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
                <Button
                  className="mt-auto w-full md:w-auto"
                  onClick={() =>
                    openWhatsApp(`the "${service.title}" service`)
                  }
                  white
                >
                  Talk to sales
                </Button>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
