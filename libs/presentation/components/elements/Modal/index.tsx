import React from "react";
import Box from "@mui/material/Box";
import { Modal, ModalProps } from "@mui/material";
import styles from "./modal.module.scss";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = ModalProps & {
  withCloseBtn?: boolean;
  contentClassName?: string;
};

function TbuyModal(props: Props) {
  const { withCloseBtn, contentClassName = "" } = props;

  const cls = classNames(styles.modal, props.className);
  const contentCls = classNames(styles.modal__content, contentClassName);

  const { Close } = ImgExporter.Icons;

  return (
    <Modal
      {...props}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={cls}
    >
      <Box className={contentCls}>
        {withCloseBtn && (
          <button
            onClick={(e) => {
              !!props?.onClose && props?.onClose(e, "backdropClick");
            }}
            className={styles.close_btn}
          >
            <Close />
          </button>
        )}

        {props.children}
      </Box>
    </Modal>
  );
}

export default TbuyModal;
