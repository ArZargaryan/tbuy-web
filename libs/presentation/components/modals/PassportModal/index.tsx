import React from "react";
import styles from "./passport.module.scss";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import { ImgExporter } from "@core/helpers/ImgExporter";

const { PassportTemplate } = ImgExporter;

function PassportModal(props: Omit<ModalProps, "children">) {
  return (
    <Modal {...props} contentClassName={styles.modal} withCloseBtn>
      <div className="modal-content modalLoading">
        <form action="#">
          <p className="modal-content__text modal-content__text_center">
            Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
            ձևավորման վրա:
          </p>
          <div className="modalLoading__img">
            <img src={PassportTemplate.src} alt="" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default PassportModal;
