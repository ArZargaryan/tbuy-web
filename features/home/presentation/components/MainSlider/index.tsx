import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { Shimmer } from "react-shimmer";
import { HomeBanner } from "@features/home/domain/model/home_banner";
import { HomeSlides } from "@features/home/domain/model/home_slider";

import styles from "./main-slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  banners: HomeBanner[];
  slides: HomeSlides[];
  loading: boolean;
}

function MainSlider({ banners, slides, loading }: Props) {
  const [shimmers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className={styles.header}>
      <div className={styles.header__pictures}>
        {!loading &&
          !!banners?.length &&
          banners.slice(0, 2).map((banner, i) => (
            <div
              key={`${banner.id}_${i}`}
              className={`${styles.header__pictures_item} ${styles.header__pictures_item_banner}`}
            >
              <Link href={banner.url}>
                {/* <BlurImage
                  src={banner.image.currentImage}
                  alt={banner.image.currentImage}
                  blurHash={banner.image.blurHash}
                  width={512}
                  height={248}
                  imageClassName={styles.header__pictures_item_img}
                  loading="eager"
                /> */}
                <img src={banner.image.currentImage} className={styles.header__pictures_item_img}></img>
              </Link>
            </div>
          ))}

        {loading &&
          shimmers.slice(0, 2).map((shimmer) => (
            <div
              key={shimmer}
              className={`${styles.header__pictures_item} ${styles.header__pictures_item_banner}`}
            >
              <div className={styles.header__pictures_item_shimmer}>
                <Shimmer width={100} height={240} />
              </div>
            </div>
          ))}
      </div>
      <div className={styles.header__slider}>
        <div style={{ color: "#fff", fontSize: 1 }}>12</div>
        {!loading && !!slides?.length && (
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            speed={1500}
            pagination={{
              el: `.${styles.pagination}`,
              clickable: true
            }}
            className={styles.header__slider_swiper}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={`${slide}_${i}`}>
                <Link href={slide.url} className={styles.header__slider_item}>
                  {/* <BlurImage
                    src={slide.image.desktop}
                    alt={slide.image.desktop}
                    width={1050}
                    height={600}
                    className={styles.header__slider_item}
                    imageClassName={styles.header__pictures_item_img}
                    loading="eager"
                    blurHash={slide.image.blurHash}
                  /> */}
                  <img src={slide.image.currentImage} className={styles.header__slider_item}></img>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {loading && <Shimmer width={400} height={700} className={styles.header__slider_item} />}

        <div className={styles.pagination}>
          <span className={styles["eader-dot"]}></span>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
