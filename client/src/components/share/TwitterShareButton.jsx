/* eslint-disable react/prop-types */
import Button from "@elements/Button";
import { FaTwitterSquare } from "react-icons/fa";
const TwitterShareButton = ({ url }) => {
  const handleShare = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?&url=${encodeURIComponent(
      url
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div className="">
      <Button
        btnClass={"text-blue-600  !w-auto !p-0.5 !m-0 "}
        onClick={handleShare}
        Icon={FaTwitterSquare}
        IconSize={28}
      />
    </div>
  );
};
export default TwitterShareButton;
