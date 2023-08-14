import Container from "@components/containers/Container";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";
// import Button from "@elements/Button";
import { useNavigate } from "react-router-dom";

import { logout } from "@data/rest/authentication";
import { toast } from "react-toastify";
import { useTheme } from "@contexts/ThemeContext";

import useAuthentication from "@hooks/useAuthentication";

import UpdatePasswordCard from "@components/profiles/UpdatePasswordCard";
import ProfileCard from "@components/profiles/ProfileCard";
import LogoutCard from "@components/profiles/LogoutCard";

export default function Profile() {
  const { resetIsAuthenticatedAndUserContext } = useAuthentication();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  async function logoutAllDevices() {
    try {
      await logout({ allDeviceLogout: true });
      await resetIsAuthenticatedAndUserContext();
      navigate("/");
    } catch (error) {
      const errorMsg = error.message;
      toast(errorMsg, {
        type: "error",
        theme: isDarkMode ? "dark" : "light",
      });
    }
  }

  return (
    <TopHeaderWrapper>
      <Container className="flex-1 p-4 md:px-20 md:py-4">
        <div className="w-full lg:w-3/5 m-auto grid grid-cols-1 md:grid-cols-2 md:h-full content-center gap-4">
          <div className="flex flex-col gap-2">
            <ProfileCard />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <UpdatePasswordCard />
            <LogoutCard logoutClick={() => logoutAllDevices()} />
          </div>
        </div>
      </Container>
    </TopHeaderWrapper>
  );
}
