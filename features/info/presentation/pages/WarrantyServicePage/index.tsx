import React from "react";
import DefaultLayout from "@layouts/default";
import ServiceImg from "@public/pictures/info_module/service/service.png";

import styles from "../styles/easy-info-page.module.scss";
import Link from "next/link";

function WarrantyServicePage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={`${styles.refund} ${styles["easy-info-page"]}`}>
            <div className="container">
              <h1 className={`title ${styles["easy-info-page__title"]}`}>ԵՐԱՇԽԻՔԱՅԻՆ ՍՊԱՍԱՐԿՈՒՄ</h1>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                <Link href="/" className={`${styles["easy-info-page__link"]}`}>
                  www.Tbuy.am
                </Link>{" "}
                հարթակից ձեռք բերված յուրաքանչյուր ապրանքի երաշխիքի ժամկետների և պայմանների մասին
                նշված է տվյալ ապրանքի նկարագիր հատվածում:
              </p>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                Ապրանքը ստանալու պահին Գնորդը տեղում ստուգում է այն և ստորագրում հանձնման-ընդունման
                արձանագրությունը առաքված ապրանքի պատշաճ որակի մասին, որից հետո նրան տրամադրվում է
                <br />
                երաշխիքի կտրոն (նախատեսված լինելու դեպքում):Երաշխիքային սպասարկումն իրականացվում է
                տվյալ ապրանքի մատակարարի կողմից:
              </p>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                Երաշխիքային պայմանների նկատմամբ կիրառելի են ՀՀ օրենսդրությամբ սահմանված նորմերը։
              </p>
              <div className={styles["easy-info-page__img"]}>
                <img src={ServiceImg.src} alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default WarrantyServicePage;
