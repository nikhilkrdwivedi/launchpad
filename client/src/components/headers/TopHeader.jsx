import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import darkLogo from "@assets/dark-logo.png";
import lightLogo from "@assets/light-logo.png";
import { useTheme } from "@contexts/ThemeContext";

export default function TopHeader() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center h-16 px-4 md:px-24 py-4 md:py-4 backdrop-filter bg-transparent backdrop-blur-lg bg-opacity-70 sticky -top-0.5 bottom-0.5 border-b border-gray-200 dark:border-gray-600">
      <div>
        {/* Remove spin class */}
        <img
          className="animate-spin-slow-"
          src={!isDarkMode ? darkLogo : lightLogo}
          height={48}
          width={48}
        />
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-green-500 dark:bg-pink-500"
        >
          {
            isDarkMode ? (
              // '🌞'
              <FiMoon color="white" size={24} fill="white" />
            ) : (
              <FiSun color="yellow" size={24} fill="yellow" />
            )
            // '🌚'
          }
        </button>
      </div>
    </div>
  );
}
