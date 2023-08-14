import Button from "@elements/Button";
import PropTypes from "prop-types";

export default function DeleteLinkModalFooter({
  actionClick,
  cancelClick,
  showActionBtn,
  showCancelBtn,
}) {
  return (
    <div className="flex justify-end items-center gap-2">
      {showCancelBtn && (
        <Button
          btnClass="bg-gray-400 dark:bg-gray-600 text-gray-100 dark:text-gray-200  w-24 px-2 py-1"
          title="Cancel"
          onClick={cancelClick}
        />
      )}
      {showActionBtn && (
        <Button
          btnClass="bg-red-600 text-white w-24 px-2 py-1"
          title="Delete"
          onClick={actionClick}
        />
      )}
    </div>
  );
}

DeleteLinkModalFooter.propTypes = {
  actionClick: PropTypes.func,
  cancelClick: PropTypes.func,
  showActionBtn: PropTypes.string,
  showCancelBtn: PropTypes.string,
};

DeleteLinkModalFooter.defaultProps = {
  actionClick: null,
  cancelClick: null,
  showActionBtn: true,
  showCancelBtn: false,
};
