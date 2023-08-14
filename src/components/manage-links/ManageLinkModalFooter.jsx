import Button from "@elements/Button";
import PropTypes from "prop-types";
export default function ManageLinkModalFooter({
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
          btnClass="bg-green-600 dark:bg-gray-200 text-gray-100 dark:text-gray-600 w-24 px-2 py-1"
          title="Save"
          onClick={actionClick}
        />
      )}
    </div>
  );
}

ManageLinkModalFooter.propTypes = {
  actionClick: PropTypes.func,
  cancelClick: PropTypes.func,
  showActionBtn: PropTypes.string,
  showCancelBtn: PropTypes.string,
};

ManageLinkModalFooter.defaultProps = {
  actionClick: null,
  cancelClick: null,
  showActionBtn: true,
  showCancelBtn: false,
};
