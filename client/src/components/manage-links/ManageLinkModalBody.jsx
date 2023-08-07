/* eslint-disable react/prop-types */
import Input from "@elements/Input";
import TextArea from "@elements/TextArea";
// import React from "react";

export default function ManageLinkModalBody({ item, onChange }) {
  return (
    <div>
      <Input
        label="Your Link*"
        placeholder="please paste your link "
        value={item?.link || ""}
        onChange={onChange}
        classNames="!my-2"
      />
      <TextArea
        label="Your Link*"
        placeholder="please paste your link "
        value={item?.link || ""}
        onChange={onChange}
        classNames="!my-2"
      />
    </div>
  );
}
