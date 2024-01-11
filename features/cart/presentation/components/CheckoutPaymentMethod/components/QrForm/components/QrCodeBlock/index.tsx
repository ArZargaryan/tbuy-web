import React from "react";
import styles from "./qr_code.module.scss";

type Props = {
  QrSvg: React.ElementType;
};

function QrCodeBlock({ QrSvg }: Props) {
  return (
    <div className={styles.qr_code_block}>
      <QrSvg className={styles.qr_code_block__img} />
      <p className={styles.qr_code_block__text}>SCAN ME</p>
    </div>
  );
}

export default QrCodeBlock;
