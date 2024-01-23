import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { useTranslation } from "next-i18next";
import DownloadAppModal from "@libs/presentation/components/modals/DownloadAppModal";

function Header() {
  const [showDowloadModal, setShowDownloadModal] = useState(false);
  const { t } = useTranslation(["layout/header", "common"]);

  const { Icons } = ImgExporter;

  return (
    <div>
      <div className={styles.navbar__menu}>
        <div className={`container ${styles.navbar__menu_content}`}>
          <ul className={styles.navbar__menu_list}>
            <li className={styles.list__item_1100}>
              <Link href={"/seller"} className={styles.navbar__menu_list_link}>
                {t("sell_on")}
              </Link>
            </li>
            <li className={styles.list__item_900}>
              <button
                type="button"
                className={styles.navbar__menu_list_downloadApp}
                onClick={() => setShowDownloadModal(true)}
              >
                {t("download_app", { ns: "common" })}
              </button>
            </li>
          </ul>
          <Link href={"/gift_cards"} className={styles.navbar__menu_giftCard}>
            <span className={styles.navbar__menu_giftCard_txt}>{t("give")}</span>
            <Icons.GiftCard className={styles.navbar__menu_giftCard_icon} />

            <span className={styles.navbar__menu_giftCard_txt}>{t("give_card")}</span>
          </Link>
          <Link href={"/vacancies"} className={styles.navbar__menu_vacancies}>
            <Icons.Bag className={styles.navbar__menu_vacancies_icon} />
            <span className={styles.navbar__menu_vacancies_txt}>
              {t("vacancies", { ns: "common" })}
            </span>
          </Link>
          <div className={styles.navbar__menu_sets}>
            <Link href={"/en/compare_products/"} className={styles.navbar__menu_sets_phone}>
              <Icons.Compare className={styles.navbar__menu_sets_phone_icon} />
              <span className={styles.navbar__menu_sets_phone_txt}>Համեմատել (2)</span>
            </Link>
            <Link href={"/account/favorite/"} className={styles.navbar__menu_sets_phone}>
              <Icons.Heart className={styles.navbar__menu_sets_phone_icon} />
              <span className={styles.navbar__menu_sets_phone_txt}>Հավանածներ (12)</span>
            </Link>
            <LanguageSelect />
          </div>
        </div>
      </div>

      <DownloadAppModal open={showDowloadModal} onClose={() => setShowDownloadModal(false)} />
    </div>
  );
}

export default Header;
