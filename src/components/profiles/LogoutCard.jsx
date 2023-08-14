import PropTypes from "prop-types";
import Card from "@elements/Card";
import Input from "@elements/Input";
import Button from "@elements/Button";
// import myImg from "@assets/myImg.jpg";
// import Input from "@elements/Input";
import useAuthentication from "@hooks/useAuthentication";

export default function LogoutCard({ logoutClick }) {
  const { userContext } = useAuthentication();

  return (
    <Card
      title={"Security"}
      cardClass="bg-gray-200 dark:bg-gray-800 rounded-md"
      headerClass="p-2 text-gray-600 dark:text-gray-200 font-semibold border-b border-gray-400 dark:border-gray-600"
      bodyClass="p-2"
    >
      <div className="">
        <Input
          label="Total Active Tokens"
          value={userContext?.tokens?.length}
          readOnly
        />
      </div>
      <div className="">
        <Button
          onClick={logoutClick}
          title={"Logout from all devices"}
          btnClass="!w-full bg-green-500 p-2 text-white font-semibold text-md !my-2"
        />
      </div>
    </Card>
  );
}

LogoutCard.defaultProps = {
  logoutClick: null,
};
LogoutCard.propTypes = {
  logoutClick: PropTypes.func,
};
