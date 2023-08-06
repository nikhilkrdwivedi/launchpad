import React from "react";
// import { IconBase } from 'react-icons';

export default function Button({
  title,
  Icon,
  btnClass,
  onClick,
  IconSize = 18,
}) {
  return (
    <button
      onClick={onClick}
      className={` text-white font-medium rounded-md  text-center flex items-center justify-evenly ${btnClass}`}
    >
      {Icon && <Icon size={IconSize} />}
      {title}
    </button>
  );
}
