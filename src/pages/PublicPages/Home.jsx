import Button from "@elements/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-green-400 flex flex-col justify-center items-center gap-4">
      Home Page Public
      <Button
        title={"Go To Get Started "}
        btnClass={"bg-green-500 p-2"}
        onClick={() => {
          navigate("/get-started");
        }}
      />
    </div>
  );
}
