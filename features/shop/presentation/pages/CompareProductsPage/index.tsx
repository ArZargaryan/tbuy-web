import React from "react";
import DefaultLayout from "@layouts/default";

import { ImgExporter } from "@core/helpers/ImgExporter";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./compare_products.module.scss";
import "swiper/css";
import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import PrimaryButton from "@core/button/primary";

const { Icons } = ImgExporter;

function CompareProductsPage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={styles.compare}>
            <div className={"container"}>
              <h1 className={`title ${styles.compare__title}`}>ՀԱՄԵՄԱՏԵԼ</h1>
              <div className={`${styles.compare__tabs} ${styles.px}`}>
                <div className={`${styles.tabs__tab} ${styles.active}`}>Հեռուստացույցներ (3)</div>
                <div className={styles.tabs__tab}>Սառնարաններ (4)</div>
              </div>
              {/*<select className={}>*/}
              {/*  <option className={styles.select__option} value="1" selected>*/}
              {/*    Հեռուստացույցներ (3)*/}
              {/*  </option>*/}
              {/*  <option className={styles.select__option} value="2">*/}
              {/*    Սառնարաններ (4)*/}
              {/*  </option>*/}
              {/*</select>*/}
              <div className={`${styles.compare__select} ${styles.px}`}>
                <SelectCheckbox
                  label={`Գտնվելու վայր`}
                  multiple={false}
                  checkBoxCircle={true}
                  className={styles.mobile_slide__checkbox}
                  poppupItemClassName={styles.mobile_slide__checkbox__item}
                  items={[
                    { id: 1, value: "Հեռուստացույցներ (3)" },
                    { id: 2, value: "Ոսկեգույն" },
                    { id: 3, value: "Սև" }
                  ]}
                />
              </div>
              <div className={styles.compare__items}>
                <Swiper
                  slidesPerView={"auto"}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <SwiperSlide key={item} className={styles.items__item}>
                      <div className={styles.item__product}>
                        <button className={styles.product__close}>
                          <Icons.Close />
                        </button>
                        <div className={styles.product__img}>
                          <img src="https://tbuy.run/imgs/prod_img/3203e90.webp" alt="" />
                        </div>
                        <div className={`${styles.product__model} ${styles.px}`}>
                          LED Հեռուստացույց HIESNSE 325487
                        </div>
                        <div className={`${styles.product__price} ${styles.px}`}>124.000 AMD</div>

                        <div className={styles.product__buttons}>
                          <a href="">
                            <PrimaryButton className={`${styles.buttons__buy} ${styles.px}`}>
                              <Icons.Cart />
                              ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ
                            </PrimaryButton>
                          </a>

                          <button className={styles.buttons__like}>
                            <Icons.Heart />
                          </button>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>Վիճակ</div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>Նոր</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Թվային հեռուստատեսության ընդունիչ
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>
                            DVB-T/T2/C
                          </div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Անալոգային հեռուստատեսության ընդունիչ
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>Այո</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Կետայնություն
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>
                            1366x768 պիքս.
                          </div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            USB 2.0 մուտք A տիպի
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>Այո</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Օպերացիոն համակարգ
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>
                            Android TV
                          </div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            HDMI մուտք
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>Այո</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Wi-Fi-ի հնարավորություն
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>Այո</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Wi-Fi-ի հնարավորություն
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>Այո</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>Տակդիր</div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>
                            Կոմպլեկտում
                          </div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>Արտադրող</div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>ERGO</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>Գույն</div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>Սև</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Դիմային բարձրախոսների հզորություն
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>2 x 6 Վտ</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            էներգիայի սպառում
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>65 Վտ</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Անկյունագիծ (դյույմ)
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>32</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Անկյունագիծ (սմ)
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>81 սմ</div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>
                            Չափսեր (առանց տակդիրի)
                          </div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>
                            72.8 x 42.8 x 7.6 սմ
                          </div>
                        </div>

                        <div className={styles.product__info}>
                          <div className={`${styles["info__param-q"]} ${styles.pxs}`}>Քաշ</div>
                          <div className={`${styles["info__param-a"]} ${styles.px}`}>5.2 կգ</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default CompareProductsPage;
