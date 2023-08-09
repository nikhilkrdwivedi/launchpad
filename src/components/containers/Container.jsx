/* eslint-disable react/prop-types */
// import React from "react";
import PropTypes from "prop-types";

export default function Container({ children, className }) {
  return (
    <div className={"w-full " + className}>{children}</div>
  );
}

Container.defaultProps = {
  children: null,
  className: "",
};
Container.prototypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
