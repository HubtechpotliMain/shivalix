"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={toggleTheme}
      className={`button relative inline-flex items-center gap-3 h-11 px-4 rounded-full border border-stroke-1 text-xs font-semibold uppercase tracking-wide text-n-13 transition-colors hover:border-color-1 hover:text-color-1 ${className}`}
    >
      <span className="hidden sm:inline">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
      <span className="sm:hidden">{isDark ? "Light" : "Dark"}</span>
      <span className="relative inline-flex h-5 w-10 flex-shrink-0 items-center rounded-full border border-stroke-1 bg-n-8 transition-colors">
        <span
          className={`absolute h-4 w-4 rounded-full bg-n-5 transition-transform duration-200 ease-linear ${
            isDark ? "translate-x-[1.35rem]" : "translate-x-1"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;

