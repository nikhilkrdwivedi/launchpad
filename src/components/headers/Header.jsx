import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import darkLogo from "@assets/dark-logo.png";
import lightLogo from "@assets/light-logo.png";
import { useTheme } from "@contexts/ThemeContext";
import ThemeSwitch from "@components/themes/ThemeSwitch";
export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="hidden md:flex z-10 justify-between items-center h-16 px-2 md:px-20 py-4 md:py-4 gap-4 backdrop-filter bg-transparent backdrop-blur-lg bg-opacity-70 sticky -top-0.5 bottom-0.5 border-b border-gray-200 dark:border-gray-600">
      <div>
        <img
          className=""
          src={!isDarkMode ? darkLogo : lightLogo}
          height={48}
          width={48}
        />
      </div>
     
      <div className="flex gap-4">
      <UserMenu />

      <ThemeSwitch />
      </div>
    </div>
  );
}


// import ThemeContoller from "../themes/ThemeContoller";
// import UserProfile from "../profiles/UserProfile";
// import MobileNavigation from "./MobileNavigation";
import { useTranslation } from "react-i18next";
import MobileNavigation from "./MobileHeader";
import UserMenu from "./UserMenu";

 function Header2() {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-2 p-4 bg-gray-50 dark:bg-black shadow-md dark:shadow-sm shadow-gray-200 dark:shadow-gray-600">
          <div>
            <MobileNavigation />
          </div>
          <div className="font-medium text-gray-900 text-lg dark:text-white ">
            {t("SITE_NAME")}
          </div>
          <div className="flex items-center justify-start gap-4">
            {/* <UserProfile /> */}
            <ThemeSwitch />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center justify-between gap-2 p-4 bg-gray-50 dark:bg-black shadow-md dark:shadow-sm shadow-gray-200 dark:shadow-gray-600">
          <div className="font-medium text-gray-900 text-lg dark:text-white ">
            {t("SITE_NAME")}
          </div>
          <div className="flex items-center justify-start gap-4">
            <MobileNavigation />
            {/* <ThemeContoller /> */}
          </div>
        </div>
      </div>
    </>
  );
}