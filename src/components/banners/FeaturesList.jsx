// import MyImg from "@assets/myImg.jpg";
import { BsBookmarkCheck, BsShieldLock, BsBrowserChrome } from "react-icons/bs";
import { MdOutlineComputer, MdAccessTime } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiShareCircleLine, RiAlignVertically } from "react-icons/ri";
import { FiUserCheck } from "react-icons/fi";

const featuresList = [
  {
    heading: "Centralized Bookmark Management",
    desc: "Our application provides a central platform for users to save, organize, and access their bookmarks. Say goodbye to managing bookmarks separately on different browsers and devices.",
    Icon: BsBookmarkCheck,
    iconClass: "text-green-600 w-8 h-8",
    iconCircleClass: "bg-green-200",
  },
  {
    heading: "Cutting-Edge Interface",
    desc: "Experience a modern and user-friendly interface that makes bookmark management effortless and intuitive.",
    Icon: MdOutlineComputer,
    iconClass: "text-pink-600 w-8 h-8",
    iconCircleClass: "bg-pink-200",
  },
  {
    heading: "Instant Sharing",
    desc: "Effortlessly share individual bookmarks or curated collections directly to your social media profiles with just a few clicks.",
    Icon: RiShareCircleLine,
    iconClass: "text-yellow-600 w-8 h-8",
    iconCircleClass: "bg-yellow-200",
  },
  {
    heading: "Seamless Accessibility",
    desc: "Access your saved bookmarks from anywhere, on any device. No more limitations due to a specific browser or device.",
    Icon: MdAccessTime,
    iconClass: "text-blue-600 w-8 h-8",
    iconCircleClass: "bg-blue-200",
  },
  {
    heading: "Time-Saving Convenience",
    desc: "Retrieve important links instantly without wasting time searching through scattered bookmarks. Everything you need is right at your fingertips.",
    Icon: AiOutlineFieldTime,
    iconClass: "text-orange-600 w-8 h-8",
    iconCircleClass: "bg-orange-200",
  },
  {
    heading: "Secure and Private",
    desc: "Rest assured that your saved bookmarks are kept secure and private within the application, enhancing your online privacy.",
    Icon: BsShieldLock,
    iconClass: "text-violet-600 w-8 h-8",
    iconCircleClass: "bg-violet-200",
  },
  {
    heading: "User-Centric Experience",
    desc: "Our application is designed to prioritize your needs, enhancing your bookmark management experience and making it a tool you can't live without.",
    Icon: FiUserCheck,
    iconClass: "text-fuchsia-600 w-8 h-8",
    iconCircleClass: "bg-fuchsia-200",
  },
  {
    heading: "Eliminate Browser Restrictions",
    desc: "Our application lets you break free from browser-specific bookmark limitations, giving you more control over your saved online resources.",
    Icon: BsBrowserChrome,
    iconClass: "text-teal-600 w-8 h-8",
    iconCircleClass: "bg-teal-200",
  },
  {
    heading: "Enhanced Communication",
    desc: "The sharing feature integrates seamlessly with communication tools, allowing you to share bookmarks directly within your preferred messaging or collaboration platforms.",
    Icon: RiAlignVertically,
    iconClass: "text-red-600 w-8 h-8",
    iconCircleClass: "bg-red-200",
  },
];
export default function FeaturesList() {
  return (
    <div>
      <div className="text-gray-600 dark:text-gray-200 text-center text-6xl my-4">
        Features
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 p-4 lg:px-20">
        {featuresList.map(
          ({ Icon, heading, desc, iconClass, iconCircleClass }, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center text-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-200 p-4 rounded-md"
            >
              <div className={"p-4 rounded-full " + iconCircleClass}>
                <Icon className={iconClass} />
              </div>
              <div className="font-semibold text-xl">{heading}</div>
              <div className="text-md">{desc}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
