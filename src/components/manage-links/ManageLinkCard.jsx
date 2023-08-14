import PropTypes from "prop-types";
import { BsTrash3 } from "react-icons/bs";
import { FiExternalLink, FiEdit, FiShare2 } from "react-icons/fi";
import Button from "@elements/Button";
import Link from "@elements/Link";
import Input from "@elements/Input";

export default function ManageLinkCard({ data, onClick }) {
  return (
    <div className="col-span-1 py-4 px-4 md:p-4  rounded-md shadow-md dark:shadow-gray-600 shadow-gray-300 dark:bg-gray-800 bg-gray-100">
      <div className="flex flex-col justify-between h-42 gap-4 overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-4">
            <Link
              Icon={FiExternalLink}
              target="blank"
              href={data.link}
              IconSize={32}
              btnClass="text-orange-400 dark:text-orange-300 text-sm"
            />
            <Button
              Icon={FiEdit}
              onClick={() => onClick(data, "EDIT")}
              IconSize={26}
              btnClass="!p-0 !m-0 !w-auto text-gray-400 dark:text-gray-200"
            />
            <Button
              Icon={FiShare2}
              onClick={() => onClick(data, "SHARE")}
              IconSize={28}
              btnClass="!p-0 !m-0 !w-auto text-green-600"
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <Button
              Icon={BsTrash3}
              onClick={() => onClick(data, "DELETE")}
              IconSize={24}
              btnClass="!p-0 !m-0 !w-auto text-red-400"
            />
          </div>
        </div>
        <div>
          <Input
            type="clipboard"
            placeholder={data.link}
            value={data.link}
            readOnly
            // className="z-10"
          />
          <p className="text-gray-600 dark:text-gray-200 font-normal text-sm">
            {" "}
            <span className="font-bold text-base">Quick Note: </span>
            {data.quickNote}
          </p>
          {/* <p className="text-gray-600 dark:text-gray-200 font-bold text-md">
  {item.title}
</p> */}
        </div>
      </div>
    </div>
  );
}

ManageLinkCard.propTypes = {
  data: PropTypes.any,
  onClick: PropTypes.func,
};

ManageLinkCard.defaultProps = {
  data: {},
  onClick: null,
};
