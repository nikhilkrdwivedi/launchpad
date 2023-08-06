/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TopHeader from "./TopHeader";

export default function TopHeaderWrapper({ children }) {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-900">
      <TopHeader />
      {children}
    </div>
  );
}
