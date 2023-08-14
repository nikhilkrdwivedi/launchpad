/* eslint-disable react/prop-types */
import { useLocation, Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import AccessDenied from "@pages/commonPages/AccessDenied";

function RequiredAuthentication({ isRoleRequired, roleName }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  let userCtx = localStorage.getItem("userCtx");

  if (token) {
    userCtx = JSON.parse(userCtx);
    if (isRoleRequired && !userCtx?.roles.includes(roleName)) {
      return <AccessDenied />;
    }
    return <Outlet />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
}

RequiredAuthentication.defaultProps = {
  isRoleRequired: false,
  roleName: "",
};
RequiredAuthentication.propTypes = {
  isRoleRequired: PropTypes.bool,
  roleName: PropTypes.string,
};
export default RequiredAuthentication;
