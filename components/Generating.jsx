import { assets } from "@/app/assets";
import Image from "next/image";
import React from "react";

const Generating = ({ className }) => {
  return (
    <>
      <div
        className={`flex items-center bg-n-8/80 rounded-[1.7rem] px-6 h-[3.5rem] gap-4 border border-n-6 ${
          className || ""
        }`}
      >
        <div className="w-5 h-5">
          <Image src={assets.loading} alt="" />
        </div>
        <p className="body-2 text-n-13">Get live rates</p>
      </div>
    </>
  );
};

export default Generating;
