import React from "react";
import DefaultLayout from "@layouts/default";
import DeliveryImg from "@public/pictures/info_module/delivery/delivery.png";

import styles from "../styles/easy-info-page.module.scss";

function DeliveryPage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={`${styles.delivery} ${styles["easy-info-page"]}`}>
            <div className={"container"}>
              <h1 className={`title ${styles["easy-info-page__title"]}`}>ԱՆՎՃԱՐ ԱՌԱՔՈՒՄ</h1>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                Առաքումն իրականացվում է Հայաստանի Հանրապետության և Արցախի ամբողջ տարածքում: Երևանում
                և Երևանից 30կմ հեռավորությամբ առաքումն անվճար է, եթե մատակարարի կողմից այլ առաքման
                պայմաններ նշված չեն: Այնուհետև հաշվարկվում է առաքման գումար՝ յուրաքանչյուր
                կիլոմետրը՝ 100 (հարյուր) դրամ:
              </p>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                Մինչև 5000 (հինգ հազար) դրամ արժողությամբ պատվերի առաքման արժեքը կազմում է 500(հինգ
                հարյուր) դրամ։ Առաքումն իրականացվում է գործարքի հաստատման պահից Երևան +30 կմ 24
                ժամվա ընթացքում, եթե այլ ժամկետ նշված չէ գնորդի կամ մատակարարի կողմից: Այլ մարզեր,
                կախված տեղանքից,գործում է ծրագրի ավտոմատացված հաշվարկ։
              </p>
              <div className={styles["easy-info-page__img"]}>
                <img src={DeliveryImg.src} alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default DeliveryPage;
