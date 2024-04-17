import React, { useState } from "react";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import AboutSellerCategoriesSlider from "@features/shop/presentation/pages/SellerPage/components/ProductCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import CardsList from "@libs/presentation/components/cards/CardsList";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import { useAppSelector } from "@core/store";
import CardsSlider from "@libs/presentation/components/cards/CardsSlider";
import { Link } from "react-scroll";

import styles from "../../about-seller.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import { map } from "lodash";
import VacancySlider from "@libs/presentation/components/cards/VacancySlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import dynamic from "next/dynamic";
import MessageModal from "@libs/presentation/components/modals/MessageModal";
import { useModal } from "@core/hooks/useModal";
import PrimaryButton from "@core/button/primary";
import Contacts from "../Contacts";
import { Contact } from "@features/shop/presentation/store/aboutSellerPageSlice";
import ModalWithButtons from "@libs/presentation/components/modals/ModalWithButtons";
const Video = dynamic(() => import("@libs/presentation/components/elements/Video"), { ssr: false });

const { blob, Logos, Icons, Arrows } = ImgExporter;

//TODO: разбить ВСЁ на компоненты

function LegalSellerPage() {
  const contacts: Contact[] = [
    {
      type: "email",
      value: "barev_qqqqqqфывфывqqqqqqqqqaqцйуцйуqq@gmail.com"
    },
    {
      type: "phone",
      value: "+3741234567"
    },
    {
      type: "viber",
      value: "+3741234567"
    },
    {
      type: "whatsapp",
      value: "+3741234567"
    }
  ];
  const [showBranchesIsActive, setShowBranchesIsActive] = useState(false);

  const { products, services, vacancies } = useAppSelector((state) => state.shop_about_seller);
  const [openMessageModal, changeMessageModal] = useModal(false);
  const [openPhotoModal, changePhotoModal] = useModal(false);
  const [openVideoModal, changeVideoModal] = useModal(false);
  const [openTextModal, changeTextModal] = useModal(false);

  const showBranchesButtonClassName = `
		${styles.showBranches__button}
		${showBranchesIsActive ? styles.showBranches__button_active : null}
	`;

  const branchesClassName = `
		${styles.content__addresses}
		${showBranchesIsActive ? styles.show : null}
	`;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.legal_partner}>
      <section className={styles.company}>
        <div className={styles.container}>
          <div className={styles.company__container}>
            <div className={styles.company__header}>
              <div className={styles.header__content}>
                <div className={styles.content__flexbox}>
                  <div className={styles.flexbox__avatar}>
                    <img
                      src={
                        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305"
                      }
                      alt=""
                    />
                  </div>
                  <div className={styles.flexbox__info}>
                    <h1 className={`${styles.info__name} title title_account`}>Alpine</h1>
                    <div className={styles.info__stars}>
                      <StarsRating defaultValue={4} readOnly />
                    </div>
                    <div className={styles.info__mail}>
                      <Contacts contacts={contacts} className={styles.contacts__info} />
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
                  <b className={styles.info__readMore} onClick={changeTextModal}>
                    ԿԱՐԴԱԼ ԱՎԵԼԻՆ
                  </b>
                  <b className={styles.info__readMore} onClick={changePhotoModal}>
                    ՏԵՍԱԴԱՐԱՆ
                  </b>
                  <b className={styles.info__readMore} onClick={changeVideoModal}>
                    ՎԻԴԵՈԴԱՐԱՆ
                  </b>
                </div>
                <div className={styles.content__buttons}>
                  <PrimaryButton
                    className={`${styles.buttons__button}`}
                    buttonStyle="outline"
                    onClick={changeMessageModal}
                  >
                    <Icons.Chat className={styles.button__icon} />
                    <span>ԳՐԵԼ ՎԱՃԱՌՈՂԻՆ</span>
                  </PrimaryButton>
                  <PrimaryButton className={`${styles.buttons__button}`} buttonStyle="outline">
                    ԲՈՂՈՔԵԼ
                  </PrimaryButton>
                </div>
              </div>
              {/*//Тут слайдер*/}
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={50}
                speed={1500}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                pagination={{
                  el: `.${styles.pagination}`,
                  clickable: true
                }}
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

                {/* <div className={styles.swiper__buttons}>
                  <button className={`${styles.buttons__prevButton} seller_header_swiper_prev`}>
                    <Arrows.Down />
                  </button>
                  <button className={`${styles.buttons__nextButton} seller_header_swiper_next`}>
                    <Arrows.Down />
                  </button>
                </div> */}
              </Swiper>
            </div>

            <div className={styles.company__tabs}>
              <Swiper
                spaceBetween={30}
                slidesPerView={"auto"}
                freeMode
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide
                  className={`${styles.tabs__tab} ${styles.active}`}
                  onClick={() => scrollToSection("collection")}
                >
                  <Link to="collection" spy={true} smooth={true} offset={-150} duration={500}>
                    Ապրանքներ
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className={styles.tabs__tab}
                  onClick={() => scrollToSection("services")}
                >
                  <Link to="services" spy={true} smooth={true} offset={-150} duration={500}>
                    Ծառայություններ
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className={styles.tabs__tab}
                  onClick={() => scrollToSection("openJobs")}
                >
                  {" "}
                  <Link to="openJobs" spy={true} smooth={true} offset={-150} duration={500}>
                    Թափուր աշխատատեղեր
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  className={styles.tabs__tab}
                  onClick={() => scrollToSection("branches")}
                >
                  <Link to="branches" spy={true} smooth={true} offset={-150} duration={500}>
                    Մասնաճյուղեր
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.legal_partner_products} id="collection">
        <CardsSlider
          cards={products || []}
          title={"Ապրանքներ"}
          titleClassName={styles.slider_title_left}
        />
      </div>

      <div className={styles.legal_partner_services} id="services">
        <CardsSlider
          cards={services || []}
          title={"ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ"}
          titleClassName={styles.slider_title_left}
        />
      </div>

      <div className={styles.legal_partner_vacancies} id="openJobs">
        <h3 className={"title"}>ԹԱՓՈՒՐ ԱՇԽԱՏԱՏԵՂԵՐ</h3>
        <VacancySlider vacancies={vacancies || []} />
      </div>

      <div className={styles.branches_wrapper} id="branches">
        <h3 className={`title ${styles.branches_title}`}>Մասնաճյուղեր</h3>
        <section className={styles.branches}>
          <div className={styles.branches__content}>
            <div className={styles.content__showBranches} id="showBranches">
              <div className={styles.showBranches__box}>
                <div className={`${styles.showBranches__title} title title_account`}>
                  Ցույց տալ բոլոր մասնաճյուղերը
                </div>
                <p className={styles.showBranches__text}>
                  Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
                  ձևավորման վրա:
                </p>
              </div>
              <button
                className={showBranchesButtonClassName}
                onClick={(_) => setShowBranchesIsActive((prevState) => !prevState)}
              >
                <Arrows.Down />
              </button>
            </div>

            <button className={`${styles.branches__showMap} outlined_btn`}>
              <div className={styles.showMap__icon}>
                <Icons.Pin />
              </div>
              <span>ՑՈՒՅՑ ՏԱԼ ՔԱՐՏԵԶԻ ՎՐԱ</span>
            </button>

            <div className={branchesClassName}>
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
          <div className={styles.branches__map}>
            <img src="https://www.tuttotech.net/wp-content/uploads/2022/12/mappa.jpg" alt="" />
          </div>
        </section>
      </div>

      <MessageModal
        recipient={{ name: "Alpine" }}
        open={openMessageModal}
        onClose={changeMessageModal}
      />

      <ModalWithButtons
        contentClassName={styles.modal}
        title="ՎԻԴԵՈԴԱՐԱՆ"
        text={null}
        footer={null}
        open={openVideoModal}
        onClose={changeVideoModal}
      >
        <div className={styles.gallery}>
          {map([1, 2, 3, 4, 5, 6, 7, 8, 9], (item) => (
            <div className={styles.gallery__item} key={item}>
              <Video
                url={"https://www.youtube.com/watch?v=LXb3EKWsInQ"}
                width={"100%"}
                height={"100%"}
                controls
                light
              />
            </div>
          ))}
        </div>
      </ModalWithButtons>

      <ModalWithButtons
        contentClassName={styles.modal}
        title="ՏԵՍԱԴԱՐԱՆ"
        text={null}
        footer={null}
        open={openPhotoModal}
        onClose={changePhotoModal}
      >
        <div className={styles.gallery}>
          {map([1, 2, 3, 4, 5, 6, 7, 8, 9], (item) => (
            <div className={styles.gallery__item} key={item}>
              <img src={blob.Promotion.src} />
            </div>
          ))}
        </div>
      </ModalWithButtons>

      <ModalWithButtons
        contentClassName={styles.modal}
        title="ԿԱՐԴԱԼ ԱՎԵԼԻՆ"
        text="Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը բացատրվում է նրանով, որ այն բաշխում է բառերը..."
        footer={null}
        open={openTextModal}
        onClose={changeTextModal}
      />
    </div>
  );
}

export default LegalSellerPage;
