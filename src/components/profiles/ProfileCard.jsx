import Card from "@elements/Card";
import Input from "@elements/Input";
import Button from "@elements/Button";
import myImg from "@assets/myImg.jpg";
// import Input from "@elements/Input";
// import useAuthentication from "@hooks/useAuthentication";
import { useEffect, useState } from "react";
import { updateUser } from "@data/rest/users";
import { toast } from "react-toastify";
import { useTheme } from "@contexts/ThemeContext";
import useAuthentication from "@hooks/useAuthentication";
export default function ProfileCard() {
  // const { userContext } = useAuthentication();
  const { isDarkMode } = useTheme();
  const { userContext } = useAuthentication();
  // const navigate = useNavigate();

  const [form, setForm] = useState({
    name: userContext?.name,
    email: userContext?.email,
  });
  const [formError, setFormError] = useState({
    name: "",
  });
  useEffect(() => {
    setForm(userContext);
  }, [userContext]);
  const validatedRequest = () => {
    const errors = {};
    console.log("------------------------------------");
    console.log({ errors });
    if (!form?.name) {
      errors["name"] = "Name is required!";
    }
    // if (!form?.newPassword) {
    //   errors["newPassword"] = "New Password is required!";
    // }
    console.log({ errors });
    console.log("------------------------------------");

    setFormError(errors);
    if (!Object.keys(errors).length) {
      updateUserProfile();
    }
  };
  async function updateUserProfile() {
    try {
      const { _id } = userContext;
      await updateUser(_id, form);
      toast("Profile updated successfully.", {
        type: "success",
        theme: isDarkMode ? "dark" : "light",
      });
      // set({});
    } catch (error) {
      console.log({ error });
      const errorMsg = error?.response?.data?.message || "Try again 🤠";
      toast(errorMsg, {
        type: "error",
        theme: isDarkMode ? "dark" : "light",
      });
    }
  }
  return (
    <Card cardClass="bg-gray-200 dark:bg-gray-800 rounded-md" bodyClass="p-2">
      <div className=" mb-2">
        <img src={myImg} className="w-full max-h-80 rounded-md" />
      </div>
      <div className="">
        <Input
          label="Your Name"
          value={form?.name}
          error={formError?.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="">
        <Input
          disabled
          label="Your Email"
          value={form?.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="">
        <Button
          title={"Update Profile"}
          onClick={() => validatedRequest()}
          btnClass="!w-full bg-green-500 p-2 text-white font-semibold text-md !my-2"
        />
      </div>
    </Card>
  );
}

ProfileCard.propTypes = {};

ProfileCard.defaultProps = {};
