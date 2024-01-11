import React, { DetailedHTMLProps, ImgHTMLAttributes, useState } from "react";
import styles from "./blur-image.module.scss";
import { BlurhashCanvas } from "react-blurhash";
import classNames from "classnames";

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  blurHash: string;
  imageClassName?: string;
  withoutDiv?: boolean;
};

function BlurImage(props: Props) {
  const [closeBlur, setCloseBlur] = useState(false);

  const cls = classNames(styles.blur_image, props.className);
  const imgCls = classNames(styles.blur_image_img, props.imageClassName);

  const renderImgs = () => (
    <>
      <img {...props} className={imgCls} onLoad={() => setCloseBlur(true)} alt={"asd"} />
      {/* temporary check for local images */}
      {props?.src?.slice(0, 4) === "http" && (
        <BlurhashCanvas
          hash={props.blurHash}
          width={32}
          height={32}
          punch={1}
          className={`${closeBlur ? styles.blurClosed : ""}`}
        />
      )}
    </>
  );

  return <>{props.withoutDiv ? renderImgs() : <div className={cls}>{renderImgs()}</div>}</>;
}

export default BlurImage;
