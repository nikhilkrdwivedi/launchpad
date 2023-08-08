/* eslint-disable react/prop-types */
import Button from "@elements/Button";
// import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
const FaceBookShareButton = ({ url }) => {
  const handleShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
  };

  return (
    <div>
      <Button
        btnClass={"text-blue-900 !w-auto !p-0.5 !m-0 "}
        onClick={handleShare}
        Icon={FaFacebookSquare}
        IconSize={28}
      />
    </div>
  );
};

export default FaceBookShareButton;
