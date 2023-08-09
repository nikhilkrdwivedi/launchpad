// import React from "react";

/* eslint-disable react/prop-types */
import { useLocation, Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
// import Header from "../Navigation/Header";
import AccessDenied from "@pages/commonPages/AccessDenied";

function RequiredAuthentication({ isRoleRequired, roleName }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  let userCtx = localStorage.getItem("userCtx");
  console.log({ token });
  if (token) {
    userCtx = JSON.parse(userCtx);
    if (isRoleRequired && !userCtx?.roles.includes(roleName)) {
      return <AccessDenied />;
    }
    return <Outlet />;
    // return <Navigate to="/" state={{ from: location }} replace />;
  }
  //   return <Outlet />;

  //   return <Navigate to="/login" state={{ from: location }} replace />;
  return <Navigate to="/" state={{ from: location }} replace />;
}
RequiredAuthentication.defaultProps = {
  isRoleRequired: false,
  roleName: "",
};
RequiredAuthentication.prototypes = {
  isRoleRequired: PropTypes.bool,
  roleName: PropTypes.string,
};
export default RequiredAuthentication;