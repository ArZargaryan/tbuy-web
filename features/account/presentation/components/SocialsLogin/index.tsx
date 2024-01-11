import React from "react";
// import Link from "next/link";
import { ImgExporter } from "@core/helpers/ImgExporter";
import styles from "./socials-login.module.scss";
import { useTranslation } from "next-i18next";

function SocialsLogin() {
  const { t } = useTranslation("account/auth");

  const { Logos } = ImgExporter;

  return (
    <>
      <span className={styles.form_or}>{t("or")}</span>

      <div className={styles.form_social}>
        <span className={styles.form_social_link}>
          <Logos.facebookBlue className={styles.form_social_icon} />
          <span className={styles.form_social_text}>FACEBOOK</span>
        </span>

        <span className={styles.form_social_link}>
          <Logos.google className={styles.form_social_icon} />
          <span className={styles.form_social_text}>GOOGLE</span>
        </span>

        <span className={`${styles.form_social_link}`}>
          <Logos.apple className={styles.form_social_icon} />

          <span className={styles.form_social_text}>APPLE ID</span>
        </span>
      </div>
    </>
  );
}

export default SocialsLogin;
