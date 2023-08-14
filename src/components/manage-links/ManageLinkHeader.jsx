import Button from "@elements/Button";
import PropTypes from "prop-types";
import { AiOutlineAppstoreAdd, AiOutlineLink } from "react-icons/ai";
export default function ManageLinkHeader({ children, onClick }) {
  return (
    <>
      <div className="flex justify-between items-center py-4 border-b mb-4">
        <div className="flex  items-center text-gray-600 dark:text-gray-200 font-bold text-lg gap-1">
          Manage Links <AiOutlineLink size={24} />
        </div>
        <div>
          <Button
            btnClass="bg-gray-200 dark:bg-gray-200 !text-gray-600 p-2 gap-1"
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
