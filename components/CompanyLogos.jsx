import { companyLogos } from "@/constants";
import React from "react";

const CompanyLogos = ({ className }) => {
  return (
    <>
      <div className={`${className || ""}`}>
        <h5 className="tagline mb-4 sm:mb-6 lg:mb-12 xl:mb-16 text-center text-black text-xs sm:text-sm">
          TRUSTED FOREX & REMITTANCE PARTNER
        </h5>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-center md:flex md:items-center md:justify-between">
          {companyLogos.map((item) => (
            <li
              key={item.id}
              className="rounded-xl sm:rounded-2xl border border-stroke-1 bg-n-1 px-3 sm:px-4 md:px-6 py-3 sm:py-4"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-color-1">{item.value}</p>
              <p className="body-2 text-black mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompanyLogos;
