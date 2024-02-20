import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./service-card.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Service } from "@libs/domain/model/service";
import { GiftCard } from "@libs/domain/model/giftCard";

function ServiceCard({ service }: { service: Service | GiftCard }) {
  const { images, title } = service;

  const { Icons } = ImgExporter;

  const url = service instanceof Service ? "/services/123" : "/gift_cards/123";

  return (
    <div className={styles.service_card}>
      <Swiper
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        className={styles.service_card__slider}
      >
        {images.map((imageSrc, i) => (
          <SwiperSlide key={`${imageSrc}_${i}`}>
            <Link href={url}>
              <div className={styles.slide_container}>
                <img src={imageSrc.original} alt={imageSrc.original} className={styles.slide_img} />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.info_section}>
        <Link href={url}>
          <h3 className={styles.title}>{title}</h3>
        </Link>

        <div className={styles.footer}>
          <div className={styles.company}>
            <Icons.LogoExample />
            {/* <Shimmer height={32} width={400} className={styles.shimmer} /> */}
          </div>

          <div className={styles.action_buttons}>
            <button type="button" className={styles.button}>
              <Icons.Compare
                className={`${styles.icon} ${styles.icon_compare} ${
                  service.addedToCompare ? styles.icon_compare_active : ""
                }`}
              />
            </button>
            <button type="button" className={styles.button}>
              <Icons.Heart
                className={`${styles.icon} ${styles.icon_heart} ${
                  service.addedToFavorite ? styles.icon_heart_active : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
