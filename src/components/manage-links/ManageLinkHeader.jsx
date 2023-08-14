import Button from "@elements/Button";
import PropTypes from "prop-types";
import { AiOutlineAppstoreAdd, AiOutlineLink } from "react-icons/ai";
export default function ManageLinkHeader({ children, onClick }) {
  return (
    <>
      <div className="flex justify-between items-center py-4 border-b dark:border-gray-600 mb-4">
        <div className="flex  items-center text-gray-600 dark:text-gray-200 font-bold text-lg gap-1">
          Manage Links <AiOutlineLink size={24} />
        </div>
        <div>
          <Button
            btnClass="!w-auto bg-green-500 p-2 gap-1 text-white font-semibold text-md"
            title="New Link"
            Icon={AiOutlineAppstoreAdd}
            onClick={onClick}
          />
        </div>
      </div>
      {children}
    </>
  );
}

ManageLinkHeader.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

ManageLinkHeader.defaultProps = {
  children: null,
  onClick: null,
};
