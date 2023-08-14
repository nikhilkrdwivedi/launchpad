import PropTypes from "prop-types";
import Modal from "@elements/Modal";
import DeleteLinkModalBody from "@components/manage-links/DeleteLinkModalBody";
import DeleteLinkModalFooter from "@components/manage-links/DeleteLinkModalFooter";
export default function DeleteLinkModal({
  isOpen = true,
  closeModal,
  openModal,
  title,
  actionClick,
}) {
  return (
    <Modal
      modalSizeCss="w-4/5 md:w-2/3 lg:w-1/3"
      openModal={openModal}
      closeModal={closeModal}
      isOpen={isOpen}
      title={title}
      body={<DeleteLinkModalBody />}
      footer={
        <DeleteLinkModalFooter
          cancelClick={closeModal}
          actionClick={actionClick}
        />
      }
    />
  );
}

DeleteLinkModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  openModal: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.any,
  onChange: PropTypes.func,
  actionClick: PropTypes.func,
};

DeleteLinkModal.defaultProps = {
  isOpen: true,
  closeModal: null,
  openModal: null,
  title: "",
  data: {},
  onChange: null,
  actionClick: null,
};
