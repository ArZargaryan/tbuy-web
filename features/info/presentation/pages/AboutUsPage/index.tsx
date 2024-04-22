import React from "react";
import DefaultLayout from "@layouts/default";
import AboutUsImgFirst from "@public/pictures/info_module/about_us/about-1.png";
import AboutUsImgSecond from "@public/pictures/info_module/about_us/about-2.png";

import styles from "./about-us.module.scss";

function AboutUsPage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={styles.about}>
            <div className="container">
              <h1 className={`title ${styles.about__title}`}>ՄԵՐ ՄԱՍԻՆ</h1>
              <div className={styles.about__body}>
                <div className={styles.body__item}>
                  <div className={styles.item__text}>
                    <p className={`${styles.p} ${styles.text__p} ${styles.text__p_bold}`}>
                      Ողջույն, Դուք Tbuy-ում եք։ Մի փոքր մեր մասին՝ ինչ է Tbuy-ը և որն է մեր
                      առաքելությունը
                    </p>
                    <p className={`${styles.p} ${styles.text__p}`}>
                      Մենք եկել ենք ՀՀ օնլայն առևտրի շուկա նոր և հեղափոխական մոտեցումներով, հզոր
                      գործիքակազմով և բավականին պարզ, հեշտ ընկալվող ինտերֆեյսով։ Մեր հարթակի
                      ուղղություններից առանցքայինը ՀՀ սպառման շուկայի խոշոր խաղացողներին մեկ տանիքի
                      տակ հավաքելն է, որը հնարավորություն կտա վերջնական սպառողին կատարել գնումներ
                      մաքսիմալ ցածր գնով,իսկ վաճառողներին խուսափել օնլայն տիրույթում սեփական խանութը
                      ունենալու թանկարժեք ծախսերից։ Արդեն այսօր մեր տանիքի տակ են մեկտեղվել բազմաթիվ
                      վաճառող-մատակարաներ, իսկ կայքի այցելուներ-օգտվողների թիվը օրեցօր ավելանում է։
                      Մենք օնլայն առևտրի շուկա մտանք մեր սեփական մշակած պրոդուկտով՝ օնլայն ապառիկ
                      համակարգով։
                    </p>
                    <p className={`${styles.p} ${styles.text__p} ${styles.p__last}`}>
                      Կարող եք Ձեր զամբյուղում հավաքել տարբեր տեսակի և գնի ցանկացած ապրանքներ և
                      օնլայն ձևակերպել ամբողջ գնումը մեկ ապառիկի տեսքով։ Մեր առաքելությունն է Tbuy-ը
                      հանել միջազգային շուկա, դրանով օգնելով հայրենական արտադրողներին ներկայանալ այլ
                      պետություններում։
                    </p>
                  </div>
                  <div className={styles.item__img}>
                    <img src={AboutUsImgFirst.src} alt="" />
                  </div>
                </div>
                <div className={styles.body__item}>
                  <div className={styles.item__text}>
                    <p className={`${styles.p} ${styles.text__p}`}>
                      TBuy-ը արդեն իսկ ձեռք է բերել բարի համբավ բազմահազար սպառողների և բազմաթիվ
                      գործընկերների կոմից, որոնց մասին կարող եք տեղեկանալ մեր սոցիալական ցանցերում
                      (Facebook,Instagram): Tbuy-ը առանձնահատուկ ուշադրություն է ցուցաբերում իր
                      գործընկերների հանդեպ և տրամադրում է մի շարք գործիքներ և ծառայություններ՝
                      խթանող վաճառք ունենալու համար, ինչը շատ մատչելի է, շահավետ և արագ:
                    </p>
                    <p className={`${styles.p} ${styles.text__p}`}>
                      Մեր նպատակն է Հայաստանի և Լեռնային Ղարաբաղի ողջ տարածքում հասանելի դարձնել
                      սպառող-մատակարար կապը, որի համար մեր թիմը մշտապես աշխատում է նորանոր
                      լուծումներ ստանալու համար:{" "}
                    </p>
                    <p className={`${styles.p} ${styles.text__p} ${styles.p__last}`}>
                      Եվ Սա Դեռ Սկիզբն Է….
                    </p>
                  </div>
                  <div className={styles.item__img}>
                    <img src={AboutUsImgSecond.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default AboutUsPage;
