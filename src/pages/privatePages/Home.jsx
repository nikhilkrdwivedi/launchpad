// import React from "react";

import Button from "@elements/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-yellow-400 flex flex-col justify-center items-center gap-4">
      Home Page Private
      <Button
        title={"Go To Dashboard"}
        btnClass={"bg-green-500 p-2"}
        onClick={() => {
          navigate("/dashboard");
        }}
      />
    </div>
  );
}
