// import React from "react";
import PropTypes from "prop-types";

export default function Button({
  title,
  Icon,
  btnClass,
  onClick,
  IconSize = 18,
  iconClass,
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md  text-center flex items-center justify-evenly ${btnClass}`}
    >
      {Icon && <Icon size={IconSize} className={iconClass} />}
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.string,
  btnClass: PropTypes.string,
  IconSize: PropTypes.number,
  iconClass: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  title: "",
  Icon: "",
  btnClass: "",
  onClick: null,
  IconSize: 24,
  iconClass: "",
};
