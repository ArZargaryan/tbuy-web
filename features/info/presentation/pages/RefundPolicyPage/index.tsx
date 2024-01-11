import React from "react";
import DefaultLayout from "@layouts/default";
import RefundImg from "@public/pictures/info_module/refund/refund.png";

import styles from "../styles/easy-info-page.module.scss";
import Link from "next/link";

function RefundPolicyPage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={`${styles.refund} ${styles["easy-info-page"]}`}>
            <div className="container">
              <h1 className={`title ${styles["easy-info-page__title"]}`}>
                14 ՕՐՎԱ ՎԵՐԱԴԱՐՁԻ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ
              </h1>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                <Link href="/" className={`${styles["easy-info-page__link"]}`}>
                  www.Tbuy.am
                </Link>{" "}
                հարթակից գնված ապրանքը գնորդին առաքվելուց հետո 14 օրվա ընթացքում (ապառիկ գնման
                դեպքում 7 օրվա ընթացքում) կարող է վերադարձվել կամ փոխարինվել` բացառությամբ հատուկ
                պատվիրված ապրանքների։
              </p>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                Ապրանքը փոխարինելու կամ վերադարձնելու մասին գնորդի պահանջը բավարարվում է, եթե
                ապրանքը չի օգտագործվել, պահպանված են դրա սպառողական հատկանիշները և առկա են ապրանքը
                հենց այդ վաճառողից ձեռք բերելու մասին ապացույցներ: <br /> Սահմանված ժամկետում
                ապրանքի վերադարձման պարագայում, գնորդի ստացման հասցե առաքելու նպատակով Ընկերության
                կողմից կրած առաքման ծախսերի գումարը` սկզբնական անվճար առաքման ծառայության ծախսերը
                հոգում է գնորդը` անհատույց: Վճարման ենթակա կլինի փաստացի ճանապարհածախսը՝ 1կմ-200
                դրամ հաշվարկով:
                <br /> Առաքված ապրանքի վերադարձը իրականացվում է Գնորդի կողմից:
              </p>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                Վերադարձի պայմանների նկատմամբ կիրառելի են ՀՀ օրենսդրությամբ սահմանված նորմերը:
              </p>
              <div className={styles["easy-info-page__img"]}>
                <img src={RefundImg.src} alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default RefundPolicyPage;
