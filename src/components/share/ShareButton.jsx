import Button from "@elements/Button";
import PropTypes from "prop-types";

export default function ShareButton({
  icon,
  iconSize,
  onClick,
  title,
  iconClass,
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Button
        btnClass={"text-blue-600  !w-auto !p-0.5 !m-0 "}
        //   title={}
        onClick={onClick}
        Icon={icon}
        IconSize={iconSize}
        iconClass={iconClass}
      />
      <div className="text-gray-600 dark:text-gray-200">{title}</div>
    </div>
  );
}

ShareButton.propTypes = {
  icon: PropTypes.node,
  iconSize: PropTypes.number,
  onClick: PropTypes.func,
  title: PropTypes.string,
  iconClass: PropTypes.string,
};

ShareButton.defaultProps = {
  icon: null,
  iconSize: 24,
  onClick: null,
  title: "",
  iconClass: "",
};
