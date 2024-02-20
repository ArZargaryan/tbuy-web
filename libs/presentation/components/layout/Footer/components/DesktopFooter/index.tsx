import React, { useEffect, useMemo, useState } from "react";
import styles from "./desktop-footer.module.scss";
import FooterSelect from "@libs/presentation/components/layout/Footer/components/DesktopFooter/components/FooterSelect";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getFooterLinks } from "@libs/presentation/components/layout/Footer/model/links";
import { ImgExporter } from "@core/helpers/ImgExporter";
import dayjs from "dayjs";

const { Arrows, Logos } = ImgExporter;

function DesktopFooter() {
  const { t } = useTranslation(["layout/footer", "common"]);
  const links = useMemo(() => getFooterLinks(t), [t]);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolledDown = currentScrollY > prevScrollY;

      setPrevScrollY(currentScrollY);
      setScrolledDown(isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <footer className={`${styles.footer} ${!scrolledDown ? styles.footerHidden : ""}`}>
      <div className={`container ${styles.footer__content}`}>
        <div className={styles.content__routes}>
          <div className={styles.routes__select}>
            <FooterSelect label={t("citeMap.title")}>
              {links.citeMap.map((link) => (
                <div key={`${link.route}_${link.text}`} className={styles.select__item}>
                  <Link href={link.route}>{link.text}</Link>
                </div>
              ))}
            </FooterSelect>
          </div>

          <div className={styles.routes__select}>
            <FooterSelect label={t("info.title")}>
              {links.info.map((link) => (
                <div key={`${link.route}_${link.text}`} className={styles.select__item}>
                  <Link href={link.route}>{link.text}</Link>
                </div>
              ))}
            </FooterSelect>
          </div>

          <div className={styles.routes__select}>
            <FooterSelect label={t("terms.title")}>
              {links.terms.map((link) => (
                <div key={`${link.route}_${link.text}`} className={styles.select__item}>
                  <Link href={link.route}>{link.text}</Link>
                </div>
              ))}
            </FooterSelect>
          </div>

          <div className={styles.routes__select}>
            <FooterSelect label={t("subscribe")}>
              <div className={styles.footer__capabilities_form}>
                <form action="">
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
            </FooterSelect>
          </div>

          <Link href={"/"} className={styles.routes__select}>
            {t("download_app")}
          </Link>
        </div>
        <div className={styles.content__socials}>
          <div className={styles.socials__links}>
            <Link href={""} className={styles.links_link}>
              <Logos.telegram className={styles.footer__social_links_link_icon} />
            </Link>
            <Link href={""} className={styles.links_link}>
              <Logos.youtube className={styles.footer__social_links_link_icon} />
            </Link>
            <Link href={""} className={styles.links_link}>
              <Logos.instagram className={styles.footer__social_links_link_icon} />
            </Link>
            <Link href={""} className={styles.links_link}>
              <Logos.facebook
                className={styles.footer__social_links_link_icon}
                style={{ width: 24 }}
              />
            </Link>
          </div>
          <div className={styles.socials__copyright}>TBUY © {dayjs().year()}</div>
        </div>
      </div>
    </footer>
  );
}

export default DesktopFooter;
