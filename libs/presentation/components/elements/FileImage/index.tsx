import React, { MouseEventHandler, useEffect, useState } from "react";
import { getBase64 } from "@core/helpers/getBase64";

import styles from "./file-image.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

interface Props extends Partial<HTMLImageElement> {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  file: File;
}

const { Icons } = ImgExporter;

function FileImage(props: Props) {
  const { file, onCancel } = props;

  const [imgSrc, setImgSrc] = useState("");

  const getFile = async () => {
    const asd = await getBase64(file);
    setImgSrc(asd as string);
  };

  useEffect(() => {
    if (file) {
      getFile();
    }
  }, [file]);

  if (!file) return null;

  return (
    <div className={styles.file_image}>
      <button type={"button"} className={styles.file_image__cancel} onClick={onCancel}>
        <Icons.CancleCircle />
      </button>
      <div>
        <img src={imgSrc} />
      </div>
    </div>
  );
}

export default FileImage;
