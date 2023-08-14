import darkLogo from "@assets/dark-logo.png";
import lightLogo from "@assets/light-logo.png";
import { useTheme } from "@contexts/ThemeContext";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import Link from "@elements/Link";

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex justify-center items-center flex-col gap-4 p-8 border-t border-gray-200 dark:border-gray-600 ">
      <div className="flex justify-center items-center gap-4">
        <img src={isDarkMode ? lightLogo : darkLogo} className="w-16 h-16" />
        <p className="text-2xl font-medium font-mono text-gray-600 dark:text-gray-300">
          Launchpad
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <p className="text-center text-2xl font-medium font-mono text-gray-600 dark:text-gray-300">
          Built for Innovation: Empowering Tomorrow's Possibilities!😍
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-2 md:gap-4">
        <Link
          target="blank"
          href="https://github.com/nikhilkrdwivedi/"
          Icon={FaSquareGithub}
          IconSize={24}
          title="My GitHub"
          btnClass="gap-1 text-gray-600 dark:text-gray-300 text-sm"
        />
        <Link
          target="blank"
          href="https://www.linkedin.com/in/nikhilkrdwivedi/"
          Icon={FaLinkedin}
          IconSize={24}
          title="My Linkedin"
          btnClass="gap-1 text-gray-600 dark:text-gray-300 text-sm"
        />
        <Link
          target="blank"
          href="https://twitter.com/nikhilkrdwivedi/"
          Icon={FaTwitterSquare}
          IconSize={24}
          title="My Twitter"
          btnClass="gap-1 text-gray-600 dark:text-gray-300 text-sm"
        />
      </div>
    </div>
  );
}
