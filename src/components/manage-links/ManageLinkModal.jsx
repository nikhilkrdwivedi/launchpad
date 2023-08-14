/* eslint-disable react/prop-types */
import Modal from "@elements/Modal";
import ManageLinkModalBody from "@components/manage-links/ManageLinkModalBody";
import ManageLinkModalFooter from "@components/manage-links/ManageLinkModalFooter";
import PropTypes from "prop-types";
export default function ManageLinkModal({
  isOpen = true,
  closeModal,
  openModal,
  title,
  data,
  onChange,
  actionClick,
  error,
}) {
  return (
    <div>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        title={title}
        body={
          <ManageLinkModalBody
            data={data}
            error={error}
            onChange={(value, key) => onChange(value, key)}
          />
        }
        footer={
          <ManageLinkModalFooter
            cancelClick={closeModal}
            actionClick={actionClick}
          />
        }
      />
    </div>
  );
}

ManageLinkModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.any,
  onChange: PropTypes.func,
  actionClick: PropTypes.func,
  error: PropTypes.any,
};

ManageLinkModal.defaultProps = {
  isOpen: true,
  closeModal: null,
  openModal: null,
  title: "",
  data: {},
  onChange: null,
  actionClick: null,
  error: {},
};
