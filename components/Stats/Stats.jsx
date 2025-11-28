import React from "react";
import Section from "../Section";
import { companyLogos } from "@/constants";

const Stats = () => {
  return (
    <>
      <Section className="bg-n-1 py-12 lg:py-16">
        <div className="container relative z-2">
          <h2 className="txt-grad1 fontstyle1 fs36 fw600 mb-5 aos-init text-center uppercase">
            TRUSTED FOREX & REMITTANCE PARTNER
          </h2>
          <ul className="grid grid-cols-2 gap-6 text-center md:flex md:items-center md:justify-between">
            {companyLogos.map((item) => (
              <li
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-stroke-1 bg-n-1 px-6 py-6 md:py-8 transition-transform transition-shadow duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-color-1/20 via-transparent to-color-4/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <p className="text-3xl md:text-4xl font-semibold text-color-1 mb-1">
                    {item.value}
                  </p>
                  <p className="body-2 text-n-2">{item.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Stats;

