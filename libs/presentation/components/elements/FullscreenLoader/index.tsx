import React from "react";
import classNames from "classnames";
import styles from "./fullscreen-loader.module.scss";
import Image from "next/image";
import { ImgExporter } from "@core/helpers/ImgExporter";

function FullscreenLoader({ open }: { open: boolean }) {
  const cls = classNames(styles.fullscreen, {
    [styles.open]: open
  });

  return (
    <div className={cls}>{/*<Image src={ImgExporter.logos.tbuy_white} alt={"Tbuy logo"} />*/}</div>
  );
}

export default FullscreenLoader;
