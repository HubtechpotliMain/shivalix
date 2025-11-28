"use client";
import ButtonSvg from "@/app/assets/svg/ButtonSvg";
import React from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Provide a clear visual for buttons:
  // - Default: solid brand background with white text
  // - white: white background with dark text and subtle border (used in several places)
  const base = `relative inline-flex items-center justify-center h-11 transition-colors ${px || "px-7"} ${className || ""}`;
  const variant = white
    ? `button bg-white text-n-8 border border-n-6 rounded-md shadow-sm hover:shadow-md`
    : `button bg-color-1 text-white rounded-md shadow hover:shadow-md`;
  const btnStyle = `${base} ${variant}`;
  const spanStyle = `relative z-10`;
  const renderButton = () => (
    <button className={btnStyle} onClick={onClick}>
      <span className={spanStyle}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={btnStyle} onClick={onClick}>
      <span className={spanStyle}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
