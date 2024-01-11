import React from "react";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import AboutSellerCategoriesSlider from "@features/shop/presentation/pages/SellerPage/components/ProductCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import CardsList from "@libs/presentation/components/cards/CardsList";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import { useAppSelector } from "@core/store";
import CardsSlider from "@libs/presentation/components/cards/CardsSlider";

import styles from "../../about-seller.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import { map } from "lodash";
import VacancySlider from "@libs/presentation/components/cards/VacancySlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import dynamic from "next/dynamic";
import MessageModal from "@libs/presentation/components/modals/MessageModal";
import { useModal } from "@core/hooks/useModal";
import PrimaryButton from "@core/button/primary";
const Video = dynamic(() => import("@libs/presentation/components/elements/Video"), { ssr: false });

const { blob, Logos, Icons, Arrows } = ImgExporter;

//TODO: разбить ВСЁ на компоненты

function LegalSellerPage() {
  const { products, services, vacancies } = useAppSelector((state) => state.shop_about_seller);
  const [openMessageModal, changeMessageModal] = useModal(false);

  return (
    <div className={styles.legal_partner}>
      <section className={styles.company}>
        <div className={styles.container}>
          <div className={styles.company__container}>
            <div className={styles.company__header}>
              <div className={styles.header__content}>
                <div className={styles.content__flexbox}>
                  <div className={styles.flexbox__avatar}>
                    <img src={blob.avatar.src} alt="" />
                  </div>
                  <div className={styles.flexbox__info}>
                    <h1 className={`${styles.info__name} title title_account`}>Alpine</h1>
                    <div className={styles.info__stars}>
                      <StarsRating defaultValue={4} readOnly />
                    </div>
                    <div className={styles.info__mail}>
                      <div className={styles.mail__icon}>
                        <Icons.Mail />
                      </div>
                      <span>testuser@gmail.com</span>
                    </div>
                    <div className={styles.info__links}>
                      <a href="" className={styles.links__link}>
                        <Logos.instagram />
                      </a>
                      <a href="" className={styles.links__link}>
                        <Logos.facebook />
                      </a>
                      <a href="" className={styles.links__link}>
                        <Logos.telegram />
                      </a>
                    </div>
                  </div>
                </div>
                <PrimaryButton className={`${styles.content__subscribe}`}>
                  <span className={styles.subscribe__span}>ՀԵՏԵՎԵL</span>
                  <Icons.Followers className={styles.subscribe__icon} />
                  <span className={styles.subscribe__counter}>236</span>
                </PrimaryButton>
                <div className={styles.content__info}>
                  <span className={styles.info__text}>
                    Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
                    ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է
                    բառերը...
                  </span>
                  <b className={styles.info__readMore}>ԿԱՐԴԱԼ ԱՎԵԼԻՆ</b>
                </div>
                <div className={styles.content__buttons}>
                  <PrimaryButton
                    className={`${styles.buttons__button}`}
                    buttonStyle="outline"
                    onClick={changeMessageModal}
                  >
                    <Icons.Chat className={styles.button__icon} />
                    ԳՐԵԼ ՎԱՃԱՌՈՂԻՆ
                  </PrimaryButton>
                  <PrimaryButton className={`${styles.buttons__button}`} buttonStyle="outline">ԲՈՂՈՔԵԼ</PrimaryButton>
                </div>
              </div>
              {/*//Тут слайдер*/}
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                className={styles.header__swiper}
                navigation={{
                  nextEl: ".seller_header_swiper_next",
                  prevEl: ".seller_header_swiper_prev"
                }}
              >
                <SwiperSlide>
                  <img src={blob.Promotion.src} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blob.Promotion.src} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blob.Promotion.src} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={blob.Promotion.src} />
                </SwiperSlide>

                <div className={styles.swiper__buttons}>
                  <button className={`${styles.buttons__prevButton} seller_header_swiper_prev`}>
                    <Arrows.Down />
                  </button>
                  <button className={`${styles.buttons__nextButton} seller_header_swiper_next`}>
                    <Arrows.Down />
                  </button>
                </div>
              </Swiper>
            </div>

            <div className={styles.company__tabs}>
              <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
                freeMode
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className={`${styles.tabs__tab} ${styles.active}`}>
                  Մասնաճյուղեր
                </SwiperSlide>
                <SwiperSlide className={styles.tabs__tab}>Թափուր աշխատատեղեր</SwiperSlide>
                <SwiperSlide className={styles.tabs__tab}>Տեսադարան</SwiperSlide>
                <SwiperSlide className={styles.tabs__tab}>Վիդեոդարան</SwiperSlide>
                <SwiperSlide className={styles.tabs__tab}>Տեսականի</SwiperSlide>
              </Swiper>
            </div>

            <div className={styles.company__body}>
              <div className={styles.body__content}>
                <div className={styles.content__showBranches}>
                  <div className={styles.showBranches__box}>
                    <div className={`${styles.showBranches__title} title title_account`}>
                      Ցույց տալ բոլոր մասնաճյուղերը
                    </div>
                    <p className={styles.showBranches__text}>
                      Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ
                      տեքստի ձևավորման վրա:
                    </p>
                  </div>
                  <button
                    className={`${styles.showBranches__button} ${styles.showBranches__button_active}`}
                  >
                    <Arrows.Down />
                  </button>
                </div>

                <button className={`${styles.body__showMap} outlined_btn`}>
                  <div className={styles.showMap__icon}>
                    <Icons.Pin />
                  </div>
                  <span>ՑՈՒՅՑ ՏԱԼ ՔԱՐՏԵԶԻ ՎՐԱ</span>
                </button>

                <div className={styles.content__addresses}>
                  {map([1, 2], (item) => (
                    <div key={item} className={styles.addresses__item}>
                      <h2 className={styles.item__title}>«Երևան Մոլ» վաճառասրահ</h2>
                      <div className={styles.item__address}>
                        <Icons.Pin className={styles.address__icon} />
                        Արշակունյաց պող., 34/3 շենք
                      </div>
                      <div className={styles.item__branchNumber}>
                        Մասնաճյուղի հեռախոսահամար
                        <div className={styles.branchNumber__number}>
                          <Icons.Phone className={styles.number__icon} />
                          <span className={styles.number__text}>+374 (01) 02 03 04</span>
                          <a href="" className={styles.number__link}>
                            {" "}
                            <Logos.WhatsApp />
                          </a>
                        </div>
                      </div>
                      <div className={styles.item__marketingNumber}>
                        Մարկետինգի բաժնի հեռախոսահամար
                        <div className={styles.marketingNumber__number}>
                          <Icons.Phone className={styles.number__icon} />
                          <span className={styles.number__text}>+374 (01) 02 03 04</span>
                        </div>
                      </div>
                      <div className={styles.item__time}>
                        <Icons.Time className={styles.time__icon} />
                        <span className={styles.time__weekDays}>Երկ. - Ուրբ.</span>
                        <span className={styles.time__clock}>09:00 - 22:00</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.body__map}></div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.legal_partner_vacancies}>
        <h3 className={"title"}>ԹԱՓՈՒՐ ԱՇԽԱՏԱՏԵՂԵՐ</h3>
        <VacancySlider vacancies={vacancies || []} />
      </div>
      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.gallery__flexbox}>
            <div className={styles.flexbox__photo}>
              <div className={`${styles.photo__header}`}>
                <div className={"title"}>Տեսադարան</div>
                <div className={styles.header__buttons}>
                  <button
                    className={`${styles.buttons__button} ${styles.buttons__prevButton} seller_body_photos_swiper_prev`}
                  >
                    <Arrows.ArrowRight />
                  </button>
                  <button
                    className={`${styles.buttons__button} ${styles.buttons__nextButton} seller_body_photos_swiper_next`}
                  >
                    <Arrows.ArrowRight />
                  </button>
                </div>
              </div>
              <Swiper
                modules={[Navigation]}
                spaceBetween={32}
                slidesPerView={3}
                freeMode
                onSwiper={(swiper) => console.log(swiper)}
                className={styles.photo__items}
                navigation={{
                  nextEl: ".seller_body_photos_swiper_next",
                  prevEl: ".seller_body_photos_swiper_prev"
                }}
              >
                {map([1, 2, 3, 4, 5, 6], (item) => (
                  <SwiperSlide key={item}>
                    <img src={blob.Promotion.src} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={styles.flexbox__video}>
              <div className={styles.video__header}>
                <div className={"title"}>Վիդեոդարան</div>
                <div className={styles.header__buttons}>
                  <button
                    className={`${styles.buttons__button} ${styles.buttons__prevButton} seller_body_videos_swiper_prev`}
                  >
                    <Arrows.ArrowRight />
                  </button>
                  <button
                    className={`${styles.buttons__button} ${styles.buttons__nextButton} seller_body_videos_swiper_next`}
                  >
                    <Arrows.ArrowRight />
                  </button>
                </div>
              </div>
              <Swiper
                modules={[Navigation]}
                spaceBetween={32}
                slidesPerView={2}
                freeMode
                onSwiper={(swiper) => console.log(swiper)}
                className={styles.video__items}
                navigation={{
                  nextEl: ".seller_body_videos_swiper_next",
                  prevEl: ".seller_body_videos_swiper_prev"
                }}
              >
                {map([1, 2, 3, 4, 5], (item) => (
                  <SwiperSlide key={item}>
                    <Video
                      url={"https://www.youtube.com/watch?v=LXb3EKWsInQ"}
                      width={"100%"}
                      height={"100%"}
                      controls
                      light
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.legal_partner_products}>
        <TitleWithSort
          sortItems={[
            { id: 0, value: "Գինը ըստ նվազման" },
            { id: 1, value: "Գինը ըստ նվազման" }
          ]}
          selectLabel={"Գինը ըստ նվազման"}
        >
          {/*{t("title")}*/}Տեսականի
        </TitleWithSort>
        <AboutSellerCategoriesSlider />
        <FiltersList
          filters={[{ value: "Ականջակալներ" }, { value: "1000 - 5000 AMD" }, { value: "ZIGZAG" }]}
        />
        {/*mock loading*/}
        <CardsList cards={products} loading={false} />
        <TbuyPagination count={5} />
      </div>

      <div className={styles.legal_partner_services}>
        <CardsSlider
          cards={services || []}
          title={"ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ"}
          titleClassName={styles.slider_title_left}
        />
      </div>

      <MessageModal
        recipient={{ name: "Alpine" }}
        open={openMessageModal}
        onClose={changeMessageModal}
      />
    </div>
  );
}

export default LegalSellerPage;
