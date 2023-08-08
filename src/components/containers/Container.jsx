/* eslint-disable react/prop-types */
// import React from "react";
import PropTypes from "prop-types";

export default function Container({ children, className }) {
  return (
    <div className={"w-full p-1 sm:px-2 md:px-4 " + className}>{children}</div>
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
