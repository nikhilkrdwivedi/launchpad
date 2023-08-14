import PropTypes from "prop-types";
import useAuthentication from "@hooks/useAuthentication";
import Card from "@elements/Card";
import Input from "@elements/Input";
import Button from "@elements/Button";
import { useState } from "react";
import { updatePassword } from "@data/rest/users";
import { toast } from "react-toastify";
import { useTheme } from "@contexts/ThemeContext";
export default function UpdatePasswordCard() {
  const { isDarkMode } = useTheme();
  const { userContext } = useAuthentication();

  const [passwords, setPasswords] = useState({
    newPassword: "",
    password: "",
  });
  const [passwordsError, setPasswordsError] = useState({
    newPassword: "",
    password: "",
  });
  const validatedRequest = () => {
    const errors = {};
    console.log("------------------------------------");
    console.log({ errors });
    if (!passwords?.password) {
      errors["password"] = "Password is required!";
    }
    if (!passwords?.newPassword) {
      errors["newPassword"] = "New Password is required!";
    }
    console.log({ errors });
    console.log("------------------------------------");

    setPasswordsError(errors);
    if (!Object.keys(errors).length) {
      updateUserPassword();
    }
  };

  async function updateUserPassword() {
    try {
      const { _id } = userContext;
      console.log({ passwords, _id });
      await updatePassword(_id, passwords);
      toast("Password updated successfully.", {
        type: "success",
        theme: isDarkMode ? "dark" : "light",
      });
      setPasswords({});
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
    <Card
      title={"Update Password"}
      cardClass="bg-gray-200 dark:bg-gray-800 rounded-md"
      headerClass="p-2 text-gray-600 dark:text-gray-200 font-semibold border-b border-gray-400 dark:border-gray-600"
      bodyClass="p-2"
    >
      <div className="">
        <Input
          type="password"
          label="Current Password"
          value={passwords?.password || ""}
          error={passwordsError?.password}
          onChange={(e) =>
            setPasswords({ ...passwords, password: e.target.value })
          }
        />
      </div>
      <div className="">
        <Input
          type="password"
          label="New Password"
          value={passwords?.newPassword || ""}
          error={passwordsError?.newPassword}
          onChange={(e) =>
            setPasswords({ ...passwords, newPassword: e.target.value })
          }
        />
      </div>
      <div className="">
        <Button
          onClick={() => validatedRequest()}
          title={"Update Password"}
          btnClass="!w-full bg-green-500 p-2 text-white font-semibold text-md !my-2"
        />
      </div>
    </Card>
  );
}

UpdatePasswordCard.propTypes = {
  data: PropTypes.any,
  onChange: PropTypes.func,
  actionClick: PropTypes.func,
};

UpdatePasswordCard.defaultProps = {
  data: {},
  onChange: null,
  actionClick: null,
};
