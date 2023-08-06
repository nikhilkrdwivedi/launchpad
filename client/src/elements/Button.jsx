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
      className={` text-white font-medium rounded-md px-3 py-2 my-3 w-40 md:w-44 text-center flex items-center justify-evenly ${btnClass}`}
    >
      {Icon && <Icon size={IconSize} />}
      {title}
    </button>
  );
}
