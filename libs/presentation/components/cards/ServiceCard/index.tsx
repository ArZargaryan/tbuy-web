import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import classNames from "classnames";
import Link from "next/link";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./service-card.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Service } from "@libs/domain/model/service";
import BlurImage from "@libs/presentation/components/elements/BlurImage";
import { Shimmer } from "react-shimmer";
import { GiftCard } from "@libs/domain/model/giftCard";

function ServiceCard({ service }: { service: Service | GiftCard }) {
  const { images, title, company } = service;

  const cls = classNames(styles.serviceCard, styles.serviceCard__slider);

  const { Icons } = ImgExporter;

  const url = service instanceof Service ? "/services/123" : "/gift_cards/123";

  return (
    <div className={cls}>
      <Swiper slidesPerView={1} pagination={true} modules={[Pagination]}>
        {images.map((imageSrc, i) => (
          <SwiperSlide key={`${imageSrc}_${i}`}>
            <Link href={url}>
              <div className={styles.slide_img}>
                <img
                  src={"https://web.tbuy.am/_next/static/media/gift_card.51b44087.png"}
                  alt={imageSrc.original}
                  // blurHash={'Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6'}
                  // width={333}
                  height={233}
                  className={styles.slide_img_blur}
                  style={{ position: "relative", objectFit: 'contain' }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.serviceCard__desc}>
        <Link href={url}>
          <h3 className={styles.serviceCard__desc_title}>{title}</h3>
        </Link>

        <div
          className={`${styles.serviceCard__desc_btns} ${styles.serviceCard__desc_btns_service}`}
        >
          <button type="button" className={styles.serviceCard__desc_btns_btn}>
            <Icons.Heart
              className={`${styles.serviceCard__desc_btns_btn_icon} ${
                styles.serviceCard__desc_btns_btn_icon_heart
              } ${
                service.addedToFavorite ? styles.serviceCard__desc_btns_btn_icon_heart_active : ""
              }`}
            />
          </button>
          <button type="button" className={styles.serviceCard__desc_btns_btn}>
            <Icons.Compare
              className={`${styles.serviceCard__desc_btns_btn_icon} ${
                styles.serviceCard__desc_btns_btn_icon_compare
              } ${
                service.addedToCompare ? styles.serviceCard__desc_btns_btn_icon_compare_active : ""
              }`}
            />
          </button>
        </div>

        <div className={styles.serviceCard__desc_footer}>
          <p className={styles.serviceCard__desc_footer_credit}></p>
          <div className={styles.serviceCard__desc_footer_manufacturer}>
            <Icons.LogoExample />
            {/* <Shimmer height={32} width={400} className={styles.shimmer} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
