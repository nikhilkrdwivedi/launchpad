/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { BsRocketTakeoff, BsGithub } from "react-icons/bs";
import Button from "@elements/Button";
import LottieAnimationWrapper from "@components/lottie-animations/LottieAnimationWrapper";
import noDataFoundJson from "@assets/lottie-json/launchpad.json";
import Link from "@elements/Link";

export default function HomePageBanner() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:m-h-[calc(100vh-75px)]  content-center">
      <LottieAnimationWrapper
        animationData={noDataFoundJson}
        lottieClass="h-96 lg:h-auto"
      />
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="col-span-1 lg:col-span-2 text-6xl 2xl:text-8xl text-center font-bold text-gray-600 dark:text-gray-200">
          Manage Links, Like Never Before!
        </div>

        <div className="text-center text-2xl font-normal text-gray-600 dark:text-gray-300">
          Introducing our cutting-edge application that empowers users to
          effortlessly save, organize, and access their bookmarks from a
          centralized platform. With our user-friendly interface, bookmark
          management has never been more seamless. Say goodbye to scattered
          bookmarks across various browsers and devices. Our application
          simplifies the process, allowing you to conveniently save your
          favorite websites in one centralized location. No more wasting time
          searching for that important link you saved days ago – it's all at
          your fingertips!
        </div>
        <div className="flex gap-4">
          <Button
            title="Get Started"
            Icon={BsRocketTakeoff}
            btnClass="bg-pink-600 dark:bg-green-400 text-white dark:text-gray-800 font-semibold p-2 w-40 gap-1"
            onClick={() => {
              navigate("get-started");
            }}
          />
          <Link
            target="blank"
            href="https://github.com/nikhilkrdwivedi/"
            IconSize={24}
            title="Star on GitHub"
            Icon={BsGithub}
            btnClass="bg-pink-600 dark:bg-green-400 text-white dark:text-gray-800 font-semibold p-2 w-40 gap-1 rounded-md"
            onClick={() => {
              window.location.href =
                "https://github.com/nikhilkrdwivedi/launchpad";
              window.open(window.location.href, "_blank");
            }}
          />
        </div>
      </div>{" "}
    </div>
  );
}
