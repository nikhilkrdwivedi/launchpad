/* eslint-disable no-unused-vars */
// import React from 'react'
// import GetStarted from "@pages/publicPages/GetStarted.jsx";
import PageNotFound from "@pages/commonPages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import PrivateHomePage from "@pages/privatePages/Home";
import RequiredAuthentication from "./RequiredAuthentication";
import { useState } from "react";
import { useEffect } from "react";
import GetStarted from "@pages/PublicPages/GetStarted";
import PublicHomePage from "@pages/privatePages/Home";
// const PublicHome = () => {
//   return (
//     <Route>
//       <Route element={<PublicHomePage />} path="/" exact />
//       <Route element={<PublicHomePage />} path="/home" />
//       <Route element={<GetStarted />} path="/get-started" />
//       <Route path="*" element={<PageNotFound />} />
//     </Route>
//   );
// };

// const PrivateHome = () => {
//   return (
//     <Route element={<RequiredAuthentication />}>
//       <Route element={<PrivateHomePage />} path="/" />
//       <Route element={<PrivateHomePage />} path="/dashboard" />
//     </Route>
//   );
// };

export default function Router() {
  const token = localStorage.getItem("token");
  //   let userCtx = localStorage.getItem("userCtx");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log({ token });
  //   if (token) {
  //     userCtx = JSON.parse(userCtx);
  //     if (isRoleRequired && !userCtx?.roles.includes(roleName)) {
  //       return <AccessDenied />;
  //     }
  //     return <Outlet />;
  //     // return <Navigate to="/" state={{ from: location }} replace />;
  //   }
  const validateToken = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log({ data: await data.json() });
  };
  useEffect(() => {
    validateToken();
  }, [isLoggedIn]);
  return (
    <Routes>
      {isLoggedIn ? (
        <Route
        // element={<RequiredAuthentication />}
        >
          <Route element={<PrivateHomePage />} path="/" />
          <Route element={<PrivateHomePage />} path="/dashboard" />
        </Route>
      ) : (
        <Route>
          <Route element={<PublicHomePage />} path="/" />
          <Route element={<PublicHomePage />} path="/home" />
          <Route element={<GetStarted />} path="/get-started" />
          <Route element={<GetStarted />} path="/login" />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>
      )}
      <Route path="*" element={<PageNotFound />} />
      {/* <Route index element={<PublicHome />} />
      <PrivateRoute element={<PrivateHome />} /> */}
      {/* <Route element={<RequiredAuthentication />}>
        <Route element={<PrivateHomePage />} path="/" />
        <Route element={<PrivateHomePage />} path="/dashboard" />
      </Route>
      <Route element={<PublicHomePage />} path="/" exact />
      <Route element={<PublicHomePage />} path="/home" />
      <Route element={<LoginPage />} path="/login" />
      <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}
