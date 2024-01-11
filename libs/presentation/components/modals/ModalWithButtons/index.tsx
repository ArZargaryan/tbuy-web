import React from "react";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import classNames from "classnames";

import styles from "./modal_with_buttons.module.scss";

interface Props extends Omit<ModalProps, "children"> {
  title: string;
  text: React.ReactNode;
  textMode?: "default" | "custom";
  footer: React.ReactNode;
  contentClassName?: string;
}

function ModalWithButtons(props: Props) {
  const { title, textMode = "default", footer, text, contentClassName } = props;

  const cls = classNames(styles.modal, contentClassName);

  return (
    <Modal {...props} contentClassName={cls} withCloseBtn>
      <div className="modal-content modalLoading">
        <h2 className={styles.modal__title}>{title}</h2>

        {textMode === "default" && <p className={styles.modal__text}>{text}</p>}
        {textMode === "custom" && text}

        <div className={styles.modal__btns}>{footer}</div>
      </div>
    </Modal>
  );
}

export default ModalWithButtons;
