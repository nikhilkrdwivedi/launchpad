// import React from "react";
// import darkLogo from "@assets/dark-logo.png";
import Container from "@components/containers/Container";
import TopHeader from "@components/headers/TopHeader";
// import Input from "@elements/Input";
// import Button from "@elements/Button";
import SignIn from "@components/Authentication/SignIn";
import { useState } from "react";
import SignUp from "@components/Authentication/SignUp";
export default function GetStarted() {
  const [renderSignInForm, setRenderSignInForm] = useState(true);
  return (
    <div className="flex flex-col h-screen dark:bg-gray-900">
      <TopHeader />

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
