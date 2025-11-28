"use client";
import { assets } from "@/app/assets";
import { navigation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button/Button";
import MenuSvg from "@/app/assets/svg/MenuSvg";
import { HambugerMenu } from "../design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  return (
    <>
      <div
        className={`${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        } w-full left-0 fixed top-0 z-50 border-b border-n-6 lg:bg-n-8/90`}
      >
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-center gap-6 px-5 lg:px-7.5 xl:px-10 h-9 bg-n-1 border-b border-stroke-1 text-xs text-n-13">
          <a
            href="mailto:shivalixforex@gmail.com"
            className="hover:text-color-1 transition-colors"
          >
            Email: shivalixforex@gmail.com
          </a>
          <span className="text-n-6">|</span>
          <a
            href="tel:+919599516159"
            className="hover:text-color-1 transition-colors"
          >
            Call Us: 9599516159
          </a>
        </div>

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-3 lg:py-4">
          <Link href={"/"} className="w-[12rem] block xl:mr-8">
            <Image
              src={"/logo/image.png"}
              alt="Shivalix Forex"
              width={192}
              height={48}
              priority
            />
          </Link>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } lg:flex fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:mx-auto lg:bg-transparent`}
          >
            <div className="flex flex-col lg:flex-row m-auto z-2 relative">
              {navigation.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  className={`${
                    item.onlyMobile && "lg:hidden"
                  } uppercase text-2xl text-n-1 transition-colors hover:text-color-1 font-code relative px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs font-semibold xl:px-12 lg:leading-5 lg:hover:text-color-1 ${
                    item.title == "new account" && "mr-8"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <HambugerMenu />
          </nav>
          <Link
            href={
              "https://wa.me/919599516159?text=" +
              encodeURIComponent(
                "Hi Shivalix Forex, I would like to book forex from the website."
              )
            }
            className="ml-auto"
          >
            <Button className="hidden lg:flex">Book forex</Button>
          </Link>
          <Button
            className="ml-2 lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
