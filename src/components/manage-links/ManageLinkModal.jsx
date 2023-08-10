/* eslint-disable react/prop-types */
import Modal from "@elements/Modal";
import ManageLinkModalBody from "./ManageLinkModalBody";
import ManageLinkModalFooter from "./ManageLinkModalFooter";
// import MyModal from "@elements/Modal";
// import React from "react";

export default function ManageLinkModal({
  isOpen = true,
  closeModal,
  openModal,
  footer,
  body,
  title,
  data,
  onChange,
  actionClick,
}) {
  // console.log({datadata: data})
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
