/* eslint-disable react/prop-types */
// import React from "react";
import queryString from "query-string";
import { ImLinkedin } from "react-icons/im";
import Button from "@elements/Button";

const LinkedInShareButton = ({ url }) => {
  const handleShare = () => {
    const queryParams = queryString.stringify({
      mini: "true",
      url,
    });

    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?${queryParams}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <div>
      <Button
        btnClass={"text-blue-400 !w-auto !p-0.5 !m-0 "}
        onClick={handleShare}
        Icon={ImLinkedin}
        IconSize={25}
      />
    </div>
  );
};

export default LinkedInShareButton;
