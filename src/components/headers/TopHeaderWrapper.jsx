/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TopHeader from "./Header";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default function TopHeaderWrapper({ children }) {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-900">
      <Header />
      <MobileHeader />
      {children}
    </div>
  );
}
