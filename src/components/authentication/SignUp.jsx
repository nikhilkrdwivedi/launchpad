/* eslint-disable react/prop-types */
// import React from "react";
import Input from "@elements/Input";
import Button from "@elements/Button";
// import { fromError } from "@apollo/client";

export default function SignUp({
  changeFormType,
  data,
  dataErrors,
  onChange,
  submitForm,
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-8 px-4">
      <div className="text-gray-600 dark:text-gray-200 text-2xl font-bold">
        Register Here
      </div>
      <div className="text-gray-600 dark:text-gray-200 text-base text-center px-4 w-full md:w-2/3 lg:w-1/3">
        Registration: Where usernames become superheroes and passwords become
        secret agents.
      </div>
      <div
        className="flex flex-col gap-1 
        py-4 px-4 md:p-4 w-full md:w-2/3 lg:w-1/3  
        rounded-md shadow-md dark:shadow-gray-600 shadow-gray-300 dark:bg-gray-800 bg-gray-100"
      >
        <Input
          placeholder="enter full name"
          label="Full Name*"
          value={data?.name || ""}
          error={dataErrors?.name || ""}
          onChange={(e) => onChange(e.target.value, "name")}
        />
        <Input
          placeholder="enter email"
          label="Email*"
          value={data?.email || ""}
          error={dataErrors?.email || ""}
          onChange={(e) => onChange(e.target.value, "email")}
        />
        <Input
          placeholder="enter password"
          label="Password*"
          type="password"
          value={data?.password || ""}
          error={dataErrors?.password || ""}
          onChange={(e) => onChange(e.target.value, "password")}
        />
        <Button
          // btnClass="bg-green-900"
          title={"Register"}
          btnClass="!w-full bg-green-500 p-2 text-white font-semibold text-md"
          onClick={submitForm}
        />
        <div className="text-gray-600 dark:text-gray-200 text-sm font-semibold text-center p-2">
          Recover Password
        </div>
      </div>
      <div
        className="text-gray-600 dark:text-gray-200 text-md font-semibold underline m-2 cursor-pointer"
        onClick={changeFormType}
      >
        Already have an account?
      </div>
      {/* </div> */}
    </div>
  );
}
