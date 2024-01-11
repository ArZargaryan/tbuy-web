import React from "react";
import CreditImg from "@public/pictures/info_module/credit/credit.png";
import DefaultLayout from "@layouts/default";

import styles from "@features/info/presentation/pages/styles/easy-info-page.module.scss";
import Link from "next/link";

function CreditPage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={`${styles.credit} ${styles["easy-info-page"]}`}>
            <div className={"container"}>
              <h1 className={`title ${styles["easy-info-page__title"]}`}>ԱՊԱՌԻԿ ԱՌՑԱՆՑ</h1>
              <p className={`${styles.px} ${styles["easy-info-page__text"]}`}>
                <Link href="/" className={styles["easy-info-page__link"]}>
                  www.Tbuy.am
                </Link>{" "}
                օնլայն հարթակում ապառիկ գնումներ կարող են կատարել ՀՀ ռեզիդենտ 18-70 տարեկան
                ֆիզիկական անձիք` բացասական վարկային պատմության բացակայության դեպքում։ Անհրաժեշտ
                փաստաթղթերն են՝ անձնագիր և սոցիալական քարտ կամ նույնականացման քարտ: Ապառիկը
                տրամադրվում է մեր գործընկեր բանկերի միջոցով։ Մենք համագործակցում ենք Յունիբանկ,
                Ակբա-Կրեդիտ Ագրիկոլ Բանկ, Ինեկոբանկ և Էվոկաբանկ բանկերի հետ։ Ապառիկի տրամադրման
                պայմանագիրը ստորագրվում է առաքման պահին` Գնորդի նույնականացումն իրականացնելուց հետո:
                Առաքանին պետք է ընդունի Գնորդը անձամբ՝ ներկայացնելով անձնագիր և սոցիալական քարտ կամ
                նույնականացման քարտ: Վարկային հայտի վերաբերյալ որոշումը կայացվում է 15 րոպեի
                ընթացքում։
                <br />
                {"\nԱպառիկ վարկի տրամադրման պայմաններն են՝" +
                  "\n" +
                  "                · Վարկի գումար՝ 50 000-2 000 000 ՀՀ դրամ\n" +
                  "                · Վարկի ժամկետ՝ 3-36 ամիս\n" +
                  "                · Կանխավճար սկսած՝ 0%\n" +
                  "                · Տարեկան փաստացի տոկոսադրույք՝ 0-11%\n" +
                  "                · Վարկառուից գանձվող միջնորդավճար՝ տրամադրված գումարի 0-1% ամսական\n" +
                  "                · Սպասարկման վճար՝ վարկի գումարի 0-0.50% ամսական\n" +
                  "                · Տույժեր՝ ժամկետանց գումարի 0.13%-ի չափով` յուրաքանչյուր ժամկետանց օրվա համար:"}
              </p>
              <p className={styles.last_text}>
                *Ապառիկ վարկավորման հայտը կարող է ընդունվել միայն նույնականացված հաճախորդի կողմից`
                ԱՔՌԱ համաձայնագիրն ակցեպտավորելուց հետո։ Այլ անձի անունից ԱՔՌԱ համաձայնագիր
                ակցեպտավորելու դեպքում ակցեպտավորող անձը կենթարկվի պատասխանատվության ՀՀ գործող
                օրենսդրության համաձայն։{" "}
              </p>
              <div className={styles["easy-info-page__img"]}>
                <img src={CreditImg.src} alt="" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default CreditPage;
