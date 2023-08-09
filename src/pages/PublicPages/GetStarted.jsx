// import React from "react";
// import darkLogo from "@assets/dark-logo.png";
import Container from "@components/containers/Container";
import TopHeader from "@components/headers/Header";
// import Input from "@elements/Input";
// import Button from "@elements/Button";
import SignIn from "@components/authentication/SignIn";
import { useState } from "react";
import SignUp from "@components/authentication/SignUp";
import ThemeSwitch from "@components/themes/ThemeSwitch";
export default function GetStarted() {
  const [renderSignInForm, setRenderSignInForm] = useState(true);
  return (
    <div className="flex justify-center items-center  h-screen dark:bg-gray-900">
      <ThemeSwitch themeSwitchClass="!fixed top-0 right-0 m-4 md:m-12"  />

      <Container className="flex-1 dark:bg-gray-900">
        {renderSignInForm ? (
          <SignIn
            changeFormType={() => {
              setRenderSignInForm(!renderSignInForm);
            }}
          />
        ) : (
          <SignUp
            changeFormType={() => {
              setRenderSignInForm(!renderSignInForm);
            }}
          />
        )}
      </Container>
    </div>
  );
}
