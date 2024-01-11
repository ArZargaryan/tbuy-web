import React, { useState } from "react";
import styles from "./organizations-slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ShortCompany } from "@libs/domain/model/company";
import { Shimmer } from "react-shimmer";

interface Props {
  companies: ShortCompany[];
  loading: boolean;
}

function CompaniesSlider({ companies, loading }: Props) {
  const [shimmers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <Swiper
      spaceBetween={28}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={styles.organizations_slider}
      breakpoints={{
        320: {
          slidesPerView: 2.3,
          spaceBetween: 15
        },
        400: {
          slidesPerView: 2.8,
          spaceBetween: 18
        },
        550: {
          slidesPerView: 3.5,
          spaceBetween: 18
        },
        800: {
          slidesPerView: 5,
          spaceBetween: 18
        },
        1100: {
          slidesPerView: 7
        },
        1300: {
          slidesPerView: 9
        }
      }}
    >
      {!loading &&
        companies?.map((company, i) => (
          <SwiperSlide key={`${company.id}_${i}`}>
            <div className={styles.organizations_slider__item}>
              <img src={company.logo} alt="" />
            </div>
          </SwiperSlide>
        ))}
      {loading &&
        shimmers.map((shimmer) => (
          <SwiperSlide key={shimmer}>
            <div className={styles.organizations_slider__item}>
              <Shimmer width={400} height={400} />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default CompaniesSlider;
