"use client";
import { assets } from "@/app/assets";
import { navigation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import MenuSvg from "@/app/assets/svg/MenuSvg";
import { HambugerMenu } from "../design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import WhatsAppChat from "../WhatsAppChat/WhatsAppChat";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openWhatsAppChat, setOpenWhatsAppChat] = useState(false);

  const closeNavigation = () => {
    setOpenNavigation(false);
    enablePageScroll();
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      closeNavigation();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Ensure scroll is enabled when component unmounts
  useEffect(() => {
    return () => {
      enablePageScroll();
    };
  }, []);

  // Ensure scroll is enabled on mount (in case it was locked from previous navigation)
  useEffect(() => {
    enablePageScroll();
  }, []);

  // Handle window resize - ensure scroll is enabled on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // On desktop, menu should be open and scroll should be enabled
        enablePageScroll();
        if (openNavigation) {
          setOpenNavigation(false);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openNavigation]);

  // Close navigation when clicking outside (on mobile)
  useEffect(() => {
    if (openNavigation && typeof window !== 'undefined' && window.innerWidth < 1024) {
      const handleClickOutside = (e) => {
        const nav = e.target.closest('nav');
        const button = e.target.closest('button');
        if (!nav && !button) {
          closeNavigation();
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openNavigation]);
  return (
    <>
      <div
        className={`${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        } w-full left-0 fixed top-0 z-50 border-b border-n-6 lg:bg-n-8/90`}
      >
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-center gap-6 px-5 lg:px-7.5 xl:px-10 h-7 bg-n-1 border-b border-stroke-1 text-xs text-n-13">
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

        <div className="flex items-center px-4 sm:px-5 lg:px-7.5 xl:px-10 py-2 lg:py-3">
          <Link href={"/"} className="w-[8rem] sm:w-[10rem] md:w-[12rem] block xl:mr-8">
            <Image
              src={"/logo/image.png"}
              alt="Shivalix Forex"
              width={192}
              height={48}
              priority
              className="w-full h-auto"
            />
          </Link>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } lg:flex fixed top-[3.75rem] md:top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:mx-auto lg:bg-transparent`}
          >
            <div className="flex flex-col lg:flex-row m-auto z-2 relative">
              {navigation.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  onClick={() => {
                    // Close mobile menu when clicking a link
                    if (window.innerWidth < 1024) {
                      closeNavigation();
                    }
                  }}
                  className={`${
                    item.onlyMobile && "lg:hidden"
                  } uppercase text-xl sm:text-2xl text-n-1 transition-colors hover:text-color-1 font-code relative px-4 sm:px-6 py-4 sm:py-6 md:py-8 lg:-mr-0.25 lg:text-xs font-semibold xl:px-12 lg:leading-5 lg:hover:text-color-1 ${
                    item.title == "new account" && "lg:mr-8"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <HambugerMenu />
          </nav>
          <Button
            onClick={() => {
              setOpenWhatsAppChat(true);
            }}
            className="ml-auto lg:flex"
          >
            Book forex
          </Button>
          <Button
            className="ml-auto lg:hidden"
            px="px-2 sm:px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
      <WhatsAppChat
        isOpen={openWhatsAppChat}
        onClose={() => setOpenWhatsAppChat(false)}
      />
    </>
  );
};

export default Header;
