/* eslint-disable react/prop-types */
import Input from "@elements/Input";
import TextArea from "@elements/TextArea";
// import React from "react";
import PropTypes from "prop-types";
export default function ManageLinkModalBody({ data, onChange }) {
  // {console.log({data})}
  return (
    <div>
      <Input
        label="Your Link*"
        placeholder="please paste your link "
        value={data?.link || ""}
        onChange={(e) => onChange(e.target.value, "link")}
        classNames="!my-2"
      />
      <TextArea
        label="Quick Note*"
        placeholder="please add quick note"
        value={data?.quickNote || ""}
        name="quickNote"
        onChange={(e) => onChange(e.target.value, "quickNote")}
        classNames="!my-2"
      />
    </div>
  );
}

ManageLinkModalBody.propTypes = {
  data: PropTypes.any,
  onChange: PropTypes.func,
};

ManageLinkModalBody.defaultProps = {
  data: {},
  onChange: null,
};
