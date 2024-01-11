import React from "react";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";

import styles from "./download_modal.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = Omit<ModalProps, "children">;

const { MobileAppQr } = ImgExporter;

function DownloadAppModal(props: Props) {
  return (
    <Modal {...props} withCloseBtn contentClassName={styles.download_modal}>
      <>
        <h2 className={styles.download_modal__title}>Download</h2>
        <p className={styles.download_modal__text}>
          To proceed with downloading the app, verification is required.
        </p>
        <div className={styles.hi}>
          <div className={styles.bye}>
            <p className={styles.download_modal__text}>Android</p>
            <MobileAppQr className={styles.download_modal__qr_image} />
          </div>

          <div className={styles.bye}>
            <p className={styles.download_modal__text}>IOS</p>
            <MobileAppQr className={styles.download_modal__qr_image} />
          </div>
        </div>
        {/* <button
          className={`${styles.download_modal__btn} blue_btn`}
          onClick={(e) => !!props?.onClose && props?.onClose(e, "backdropClick")}
        >
          ՓԱԿԵԼ
        </button> */}
      </>
    </Modal>
  );
}

export default DownloadAppModal;
