/* eslint-disable no-unused-vars */
// import React from 'react'
// import GetStarted from "@pages/publicPages/GetStarted.jsx";
import PageNotFound from "@pages/commonPages/PageNotFound";
import { Route, Routes } from "react-router-dom";

import GetStarted from "@pages/publicPages/GetStarted";
import PublicHomePage from "@pages/publicPages/Home";
import Dashboard from "@pages/privatePages/Dashboard";
import useAuthentication from "@hooks/useAuthentication";
import Profile from "@pages/privatePages/Profile";

export default function Router() {
  const { userContext, isAuthenticated } = useAuthentication();
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
