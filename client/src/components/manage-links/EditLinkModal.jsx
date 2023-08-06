/* eslint-disable react/prop-types */
import Modal from "@elements/Modal";
// import MyModal from "@elements/Modal";
// import React from "react";

export default function EditLinkModal({
  isOpen = true,
  closeModal,
  openModal,
  footer,
  body,
  title,
}) {
  return (
    <div>
      <Modal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
        title={title}
        body={body}
        footer={footer}
      />
    </div>
  );
}
