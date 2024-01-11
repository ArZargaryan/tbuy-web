import React from "react";
import styles from "./gratitude_modal.module.scss";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";

function GratitudeModal(props: Omit<ModalProps, "children">) {
  return (
    <Modal {...props} contentClassName={styles.modal} withCloseBtn>
      <div className="modal-content">
        <div className="title modal-content__title modal-content__title_big">ՇՆՈՐՀԱԿԱՆՈՒԹՅՈՒՆ</div>
        <p className={`modal-content__text modal-content__text_center ${styles.modal__text}`}>
          Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման
          վրա:
        </p>
      </div>
    </Modal>
  );
}

export default GratitudeModal;
