import React from "react";
import DefaultLayout from "@layouts/default";

import styles from "./not-found.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import Link from "next/link";

function NotFoundPage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.content__title}>PAGE NOT FOUND</h1>
          <img src={ImgExporter.notFound.src} className={styles.content__image} alt="" />
          <p className={styles.content__text}>
            We`re sorry, the page you request could not be fount. Please go back to the homepage or
            contact us at <a href={"mailto: loremipsumhelp@gmail.com"}>loremipsumhelp@gmail.com</a>
          </p>
          <Link href={"/"}>
            <button className={`btn blue_btn ${styles.content__btn}`}>GO BACK HOME</button>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default NotFoundPage;
