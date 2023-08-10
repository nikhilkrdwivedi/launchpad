import darkLogo from "@assets/dark-logo.png";
import lightLogo from "@assets/light-logo.png";
import { useTheme } from "@contexts/ThemeContext";
import ThemeSwitch from "@components/themes/ThemeSwitch";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";

export default function Header() {
  const navigate = useNavigate();

  const { isDarkMode } = useTheme();

  return (
    <div className="hidden md:flex z-10 justify-between items-center h-16 px-2 md:px-20 py-4 md:py-4 gap-4 backdrop-filter bg-transparent backdrop-blur-lg bg-opacity-70 sticky -top-0.5 bottom-0.5 border-b border-gray-200 dark:border-gray-600">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
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
