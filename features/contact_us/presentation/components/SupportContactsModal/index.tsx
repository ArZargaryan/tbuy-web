import React from "react";
import Modal from "@libs/presentation/components/elements/Modal";
import styles from "./support-contacts.module.scss";
import { ModalProps } from "@mui/material";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = Omit<ModalProps, "children">;

const boldText = classNames(styles.modal__text, styles.modal__text_bold);

const { WhatsApp, Viber } = ImgExporter.Logos;

function SupportContactsModal(props: Props) {
  return (
    <Modal {...props} contentClassName={styles.content} withCloseBtn>
      <div className={styles.modal}>
        <h3 className={styles.modal__title}>ՕԳՆՈւԹՅՈւՆ</h3>
        <p className={styles.modal__text}>Կոմերցիոն բաժնի հեռախոսահամար</p>
        <p className={boldText}>
          +374 77 065 065 <Viber /> <WhatsApp />
        </p>
        <br />
        <p className={styles.modal__text}>Էլ. հասցե</p>
        <p className={boldText}>Commerce@tbuy.am</p>
      </div>
    </Modal>
  );
}

export default SupportContactsModal;
