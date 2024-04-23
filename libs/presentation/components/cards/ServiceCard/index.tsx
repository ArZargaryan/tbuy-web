import React, { useEffect, useState } from "react";
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

// TODO temp --------------------------------------------------------------------------------------------------------------------
const images: string[] = [
  "https://bookdirtbusters.com/wp-content/uploads/2020/10/house-cleaning-service.jpeg",
  "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/09/cleaning-windows.jpeg-e1694410991244.jpg",
  "https://wecleanthesprings.com/wp-content/uploads/2022/04/cheyenne-mountain-cleaning-services-product-2.jpg",
  "https://pennstatehealthnews.org/wp-content/uploads/2019/05/050119-spring-clean.jpg",
  "https://insights.workwave.com/wp-content/uploads/2020/05/cleaning-lady-with-a-bucket-and-cleaning-products-picture-id870219332.jpg",
  "https://www.shutterstock.com/image-photo/cleaning-home-table-sanitizing-kitchen-600nw-1695842029.jpg"
];

let serviceCounter = 0;

function getImages() {
  if (serviceCounter > images.length - 1) {
    serviceCounter = 0;
  }
  const serviceImages = [images[serviceCounter], ...images.filter((img, idx) => idx > 1)];
  serviceCounter++;

  return serviceImages;
}

// ------------------------------------------------------------------------------------------------------------------------------

function ServiceCard({ service }: { service: Service | GiftCard }) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (service instanceof GiftCard) {
      setImages(service.images.map((image) => image.original));
    } else {
      setImages(getImages());
    }
  }, []);

  const { title } = service;

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
                <img src={imageSrc} className={styles.slide_img} />
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
