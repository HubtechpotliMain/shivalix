import { companyLogos } from "@/constants";
import React from "react";

const CompanyLogos = ({ className }) => {
  return (
    <>
      <div className={`${className || ""}`}>
        <h5 className="tagline mb-6 lg:mb-12 xl:mb-16 text-center text-black">
          TRUSTED FOREX & REMITTANCE PARTNER
        </h5>
        <ul className="grid grid-cols-2 gap-6 text-center md:flex md:items-center md:justify-between">
          {companyLogos.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-stroke-1 bg-n-1 px-6 py-4"
            >
              <p className="text-3xl font-semibold text-color-1">{item.value}</p>
              <p className="body-2 text-black mt-2">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompanyLogos;
