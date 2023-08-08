import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { TbClipboardCopy } from "react-icons/tb";
// import ErrorText from "./ErrorText";

function TextArea({
  label,
  rows,
  onChange,
  value,
  placeholder,
  disabled,
  classNames,
  isHide,
  readOnly,
  // error,
}) {
  return (
    <div
      className={`relative flex items-center justify-between w-full flex-wrap ${
        isHide ? "hidden" : ""
      }`}
    >
      <label
        htmlFor="inputField"
        className="form-label text-gray-500 w-full text-sm"
      >
        {label}
        <textarea
          readOnly={readOnly}
          onChange={onChange}
          value={value}
          disabled={disabled}
          rows={rows}
          placeholder={placeholder || label}
          className={`
          relative
          px-3 py-2.5 my-3
          placeholder-slate-300  
          bg-white dark:bg-gray-800 
          text-sm shadow outline-none 
          focus:outline-none  w-full  
          text-gray-500 dark:text-gray-200
            bg-clip-padding
            border border-solid border-gray-300 dark:border-gray-600
            transition
            ease-in-out
            rounded
            m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-400 ${classNames} `}
        />
      </label>
      {/* <ErrorText error={error} classNames="py-1" /> */}
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  classNames: PropTypes.string,
  isHide: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  rows: PropTypes.number,
};
TextArea.defaultProps = {
  placeholder: "",
  disabled: false,
  classNames: "",
  isHide: false,
  readOnly: false,
  error: "",
  onChange: null,
  rows: 3,
};
export default TextArea;
