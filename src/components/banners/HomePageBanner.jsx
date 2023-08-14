import Button from "@elements/Button";
import { BsRocketTakeoff, BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import LottieAnimationWrapper from "@components/lottie-animations/LottieAnimationWrapper";
import noDataFoundJson from "@assets/lottie-json/launchpad.json";

export default function HomePageBanner() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center px-4 py-1 md:px-16 md:py-8 gap-4">
      <LottieAnimationWrapper
        animationData={noDataFoundJson}
        lottieClass="max-h-96"
      />
      {/* <div className="text-4xl">🚀</div> */}
      <div className="text-center w-full lg:w-3/4 text-lg font-semibold text-gray-600 dark:text-gray-300">
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
          btnClass="bg-pink-600 dark:bg-green-400 text-white dark:text-gray-800 font-semibold p-2 w-40 gap-1"
          onClick={() => {
            navigate("get-started");
          }}
        />
        <Button
          title="Star on GitHub"
          Icon={BsGithub}
          btnClass="bg-pink-600 dark:bg-green-400 text-white dark:text-gray-800 font-semibold p-2 w-40 gap-1"
          onClick={() => {
            window.location.href =
              "https://github.com/nikhilkrdwivedi/launchpad";
          }}
        />
      </div>
    </div>
  );
}
