import React, { useMemo, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { useTranslation } from "next-i18next";
import { getFooterLinks } from "@libs/presentation/components/layout/Footer/model/links";
import styles from "./footer.module.scss";

type Props = {
  pageWithMobileBar?: boolean;
};

function Index({ pageWithMobileBar = false }: Props) {
  const [accordions, setAccordions] = useState({
    map: false,
    info: false,
    terms: false
  });
  const mb = pageWithMobileBar ? styles.mb : "";

  const { t } = useTranslation(["layout/footer", "common"]);

  const links = useMemo(() => getFooterLinks(t), [t]);

  const { Arrows } = ImgExporter;

  const changeAccordions = (name: "map" | "info" | "terms") => {
    setAccordions((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <footer className={`${styles.footer} ${mb}`}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__item}>
            <h3
              className={`${styles.footer__item_title} ${
                accordions.map ? styles.footer__item_title_active : ""
              }`}
              onClick={() => changeAccordions("map")}
            >
              {t("citeMap.title")}
              <span>
                <Arrows.Down />
              </span>
            </h3>
            <ul
              className={`${styles.footer__item_menu} ${
                accordions.map ? styles.footer__item_menu_active : ""
              }`}
            >
              {links.citeMap.map((link) => (
                <li key={`${link.route}_${link.text}`}>
                  <Link href={link.route} className={styles.footer__item_menu_link}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__item}>
            <h3
              className={`${styles.footer__item_title} ${
                accordions.info ? styles.footer__item_title_active : ""
              }`}
              onClick={() => changeAccordions("info")}
            >
              {t("info.title")}
              <span>
                <Arrows.Down />
              </span>
            </h3>
            <ul
              className={`${styles.footer__item_menu} ${
                accordions.info ? styles.footer__item_menu_active : ""
              }`}
            >
              {links.info.map((link) => (
                <li key={`${link.route}_${link.text}`}>
                  <Link href={link.route} className={styles.footer__item_menu_link}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__item}>
            <h3
              className={`${styles.footer__item_title} ${
                accordions.terms ? styles.footer__item_title_active : ""
              }`}
              onClick={() => changeAccordions("terms")}
            >
              {t("terms.title")}
              <span>
                <Arrows.Down />
              </span>
            </h3>
            <ul
              className={`${styles.footer__item_menu} ${
                accordions.terms ? styles.footer__item_menu_active : ""
              }`}
            >
              {links.terms.map((link) => (
                <li key={`${link.route}_${link.text}`}>
                  <Link href={link.route} className={styles.footer__item_menu_link}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__item}>
            <div className={styles.footer__capabilities_form}>
              <form action="">
                <h3 className={styles.footer__capabilities_form_title}>{t("subscribe")}</h3>
                <label htmlFor="" className={styles.footer__capabilities_form_lab}>
                  <input
                    type="text"
                    name=""
                    id=""
                    className={styles.footer__capabilities_form_lab_inp}
                    placeholder={`${t("your_email")}`}
                  />
                  <button type="button" className={styles.footer__capabilities_form_lab_btn}>
                    <Arrows.Submit className={styles.footer__capabilities_form_lab_btn_icon} />
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
        <button className={`blue_btn ${styles.download_btn}`}>{t("download_app")}</button>
        <div className={styles.footer__social}>
          <p className={styles.footer__social_create}>TBUY © {dayjs().year()}</p>
          <div className={styles.footer__social_links}>
            <Link href={""} className={styles.footer__social_links_link}>
              <ImgExporter.Logos.telegram className={styles.footer__social_links_link_icon} />
            </Link>
            <Link href={""} className={styles.footer__social_links_link}>
              <ImgExporter.Logos.youtube className={styles.footer__social_links_link_icon} />
            </Link>
            <Link href={""} className={styles.footer__social_links_link}>
              <ImgExporter.Logos.instagram className={styles.footer__social_links_link_icon} />
            </Link>
            <Link href={""} className={styles.footer__social_links_link}>
              <ImgExporter.Logos.facebook
                className={styles.footer__social_links_link_icon}
                style={{ width: 24 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
