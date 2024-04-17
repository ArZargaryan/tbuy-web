import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { useTranslation } from "next-i18next";
import { getFooterLinks } from "@libs/presentation/components/layout/Footer/model/links";
import styles from "./footer.module.scss";
import { join } from "path";
import FooterSelect from "@libs/presentation/components/layout/Footer/components/DesktopFooter/components/FooterSelect";

type Props = {
  pageWithMobileBar?: boolean;
};

function Index({ pageWithMobileBar = false }: Props) {
  const [accordions, setAccordions] = useState({
    map: false,
    info: false,
    terms: false
  });

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);

  const mb = pageWithMobileBar ? styles.mb : "";

  const { t } = useTranslation(["layout/footer", "common"]);

  const links = useMemo(() => getFooterLinks(t), [t]);

  const { Arrows } = ImgExporter;

  const changeAccordions = (name: "map" | "info" | "terms") => {
    setAccordions((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const footerClassName = [styles.footer, mb, !scrolledDown ? styles.footerHidden : ""].join(" ");

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
    <footer className={footerClassName}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <FooterSelect label={t("citeMap.title")} className={styles.popper}>
            {links.citeMap.map((link) => (
              <div key={`${link.route}_${link.text}`} className={styles.select__item}>
                <Link href={link.route}>{link.text}</Link>
              </div>
            ))}
          </FooterSelect>

          <FooterSelect label={t("info.title")} className={styles.popper}>
            {links.info.map((link) => (
              <div key={`${link.route}_${link.text}`} className={styles.select__item}>
                <Link href={link.route}>{link.text}</Link>
              </div>
            ))}
          </FooterSelect>

          <FooterSelect label={t("terms.title")} className={styles.popper}>
            {links.terms.map((link) => (
              <div key={`${link.route}_${link.text}`} className={styles.select__item}>
                <Link href={link.route}>{link.text}</Link>
              </div>
            ))}
          </FooterSelect>

          <FooterSelect label={t("subscribe")} className={styles.popper}>
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
        <div className={styles.footer__social}>
          <p className={styles.footer__social_create}>TBUY © {dayjs().year()}</p>
          <div className={styles.footer__social_links}>
            <Link href={""} className={styles.footer__social_links_link}>
              <ImgExporter.Logos.telegram className={styles.footer__social_links_link_icon} />
            </Link>
            <Link
              href={""}
              className={`${styles.footer__social_links_link} ${styles.footer__social_links_yt}`}
            >
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
