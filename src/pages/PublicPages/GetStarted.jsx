// import React from "react";
// import darkLogo from "@assets/dark-logo.png";
import Container from "@components/containers/Container";
// import TopHeader from "@components/headers/Header";
// import Input from "@elements/Input";
// import Button from "@elements/Button";
import SignIn from "@components/authentication/SignIn";
import { useState } from "react";
import SignUp from "@components/authentication/SignUp";
import ThemeSwitch from "@components/themes/ThemeSwitch";
import { register, signIn } from "../../data/rest/authentication";
import { useTheme } from "@contexts/ThemeContext";
import { toast } from "react-toastify";
import useAuthentication from "../../hooks/useAuthentication";
import { setLocalStorage } from "../../utils/manageLocalStorage";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const { isDarkMode } = useTheme();
  const {
    userContext,
    setUserContext,
    isAuthenticated,
    setIsAuthenticatedAndUserContext,
  } = useAuthentication();
  console.log("===>", { userContext, setUserContext, isAuthenticated });
  const navigate = useNavigate();
  const [renderSignInForm, setRenderSignInForm] = useState(true);
  const [form, setForm] = useState({
    email: 'pankaj.dwivedi@gmail.com',//"authornikhildwivedi@gmail.com",
    password: "Pankaj123.@",
  });

  const [formErrors, setFormErrors] = useState({});

  const toggleFormType = () => {
    setForm({});
    setFormErrors({});
    setRenderSignInForm(!renderSignInForm);
  };
  const validatedRequest = () => {
    const errors = {};
    console.log("------------------------------------");
    console.log({ errors });
    if (!renderSignInForm && !form?.name) {
      errors["name"] = "Name is required field!";
    }
    if (!form?.email) {
      errors["email"] = "Email is required field!";
    }
    if (!form?.password) {
      errors["password"] = "Password is required field!";
    }
    console.log({ errors });
    console.log("------------------------------------");

    setFormErrors(errors);
    if (!Object.keys(errors).length) {
      handleSubmit();
    }
  };
  const handleSubmit = async () => {
    try {
      console.log("trye to");
      const call = renderSignInForm ? signIn : register;
      const {
        data: { data },
      } = await call(form);
      console.log({ data });
      await setLocalStorage({
        userCtx: JSON.stringify(data?.user),
        token: data?.token,
      });
      toast(data?.successMsg, {
        theme: "colored",
        type: "success",
        position: "top-right",
      });
      setIsAuthenticatedAndUserContext({
        userCtx: data?.user,
        token: data?.token,
      });
      navigate("/");

      setUserContext(data);
      toast("Great news! You can use your services now 😃", {
        type: "success",
        theme: isDarkMode ? "dark" : "light",
      });
    } catch (error) {
      console.log({ error });
      const errorMsg = error.response.data.message || "Try again 🤠";
      console.log({ errorMsg });
      toast(errorMsg, {
        type: "error",
        theme: isDarkMode ? "dark" : "light",
      });
    }
  };

  // if (userContext?.token) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }
  return (
    <div className="flex justify-center items-center  h-screen dark:bg-gray-900">
      <ThemeSwitch themeSwitchClass="!fixed top-0 right-0 m-4 md:m-12" />

      <Container className="flex-1 dark:bg-gray-900">
        {renderSignInForm ? (
          <SignIn
            onChange={(value, key) => {
              setForm((prev) => ({ ...prev, [key]: value }));
            }}
            dataErrors={formErrors}
            data={form}
            changeFormType={() => {
              toggleFormType();
            }}
            submitForm={() => validatedRequest()}
          />
        ) : (
          <SignUp
            onChange={(value, key) => {
              setForm((prev) => ({ ...prev, [key]: value }));
            }}
            dataErrors={formErrors}
            data={form}
            changeFormType={() => {
              toggleFormType();
            }}
            submitForm={() => validatedRequest()}
          />
        )}
      </Container>
    </div>
  );
}
