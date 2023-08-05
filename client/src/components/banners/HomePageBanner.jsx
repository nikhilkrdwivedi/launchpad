import React from "react";
import Button from "@elements/Button";
import { FiSun, FiMoon } from "react-icons/fi";
import { BsRocketTakeoff, BsGithub } from "react-icons/bs";
export default function HomePageBanner() {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-1 md:px-16 md:py-8 gap-4">
      <div className="text-4xl">🚀</div>
      <div className="text-center w-4/5 md:w-3/4 text-2xl font-medium text-gray-600 dark:text-gray-300">
        Introducing our cutting-edge application that empowers users to
        effortlessly save, organize, and access their bookmarks from a
        centralized platform. With our user-friendly interface, bookmark
        management has never been more seamless. Say goodbye to scattered
        bookmarks across various browsers and devices. Our application
        simplifies the process, allowing you to conveniently save your favorite
        websites in one centralized location. No more wasting time searching for
        that important link you saved days ago – it's all at your fingertips!
      </div>
      <div className="flex gap-4">
        <Button
          title="Get Started"
          Icon={BsRocketTakeoff}
          btnClass="bg-pink-600 dark:bg-green-600"
        />
        <Button
          title="Star on GitHub"
          Icon={BsGithub}
          btnClass="bg-pink-600 dark:bg-green-600"
          onClick={() => {
            window.location.href =
              "https://github.com/nikhilkrdwivedi/launchpad";
          }}
        />
      </div>
    </div>
  );
}
