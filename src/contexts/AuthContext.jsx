/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { validateToken } from "@data/rest/authentication";
import { removeLocalStorage } from "@utils/manageLocalStorage";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userContext, setUserContext] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  async function validateUserToken() {
    try {
      await validateToken();
      setUserContext(JSON.parse(localStorage.getItem("userCtx")));
      setIsAuthenticated(true);
    } catch (error) {
      removeLocalStorage(["userCtx", "token"]);
      setIsAuthenticated(false);
      navigate("/");
    }
  }
  const resetIsAuthenticatedAndUserContext = () => {
    setUserContext({});
    setIsAuthenticated(false);
    removeLocalStorage(["userCtx", "token"]);
  };
  const setIsAuthenticatedAndUserContext = ({ userCtx }) => {
    setUserContext({ userCtx });
    setIsAuthenticated(true);
  };
  React.useEffect(() => {
    let userCtx = localStorage.getItem("userCtx");
    const token = localStorage.getItem("token");
    if (token) {
      userCtx = JSON.parse(userCtx);
      validateUserToken(userCtx, token);
    } else {
      resetIsAuthenticatedAndUserContext();
    }
  }, []);
  const authArgs =
    //  useMemo(
    //   () => (
    {
      userContext,
      setUserContext,
      isAuthenticated,
      setIsAuthenticatedAndUserContext,
      resetIsAuthenticatedAndUserContext,
    };
  //   ),
  //   [userContext, isAuthenticated]
  // );
  return (
    <AuthContext.Provider value={authArgs}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
