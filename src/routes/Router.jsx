/* eslint-disable no-unused-vars */
// import React from 'react'
// import GetStarted from "@pages/publicPages/GetStarted.jsx";
import PageNotFound from "@pages/commonPages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import PrivateHomePage from "@pages/privatePages/Home";
import RequiredAuthentication from "./RequiredAuthentication";
import { useState } from "react";
import { useEffect } from "react";
import GetStarted from "@pages/publicPages/GetStarted";
import PublicHomePage from "@pages/publicPages/Home";
import Dashboard from "@pages/privatePages/Dashboard";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";
import useAuthentication from "../hooks/useAuthentication";
import Profile from "@pages/privatePages/Profile";

export default function Router() {
  const { userContext, setUserContext, isAuthenticated } = useAuthentication();
  console.log({ isAuthenticated, userContext });
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Profile />} path="/profile" />
        </>
      ) : (
        <>
          <Route element={<PublicHomePage />} path="/" />
          <Route element={<PublicHomePage />} path="/home" />
          <Route element={<GetStarted />} path="/get-started" />
        </>
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
