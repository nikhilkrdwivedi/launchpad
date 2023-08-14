import Input from "@elements/Input";
import TextArea from "@elements/TextArea";

import PropTypes from "prop-types";
export default function ManageLinkModalBody({ data, error, onChange }) {
  console.log({ data, error, onChange });
  return (
    <div>
      <Input
        label="Your Link*"
        placeholder="please paste your link "
        value={data?.link || ""}
        error={error?.link || ""}
        onChange={(e) => onChange(e.target.value, "link")}
        classNames="!my-2"
      />
      <TextArea
        label="Quick Note*"
        placeholder="please add quick note"
        value={data?.quickNote || ""}
        error={error?.quickNote || ""}
        name="quickNote"
        onChange={(e) => onChange(e.target.value, "quickNote")}
        classNames="!my-2"
      />
    </div>
  );
}

ManageLinkModalBody.propTypes = {
  data: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.func,
};

ManageLinkModalBody.defaultProps = {
  data: {},
  error: {},
  onChange: null,
};
