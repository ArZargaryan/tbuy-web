import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { v4 as uuidv4 } from "uuid";

import { ImgExporter } from "@core/helpers/ImgExporter";

import { VacancyShort } from "@libs/domain/model/vacancy";
import VacancyCard from "@libs/presentation/components/cards/VacancyCard";

import styles from "./vacancy-slider.module.scss";

import "swiper/css";
import "swiper/css/navigation";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  vacancies: VacancyShort[];
}

function VacancySlider(props: Props) {
  const { vacancies } = props;
  const [prevArrowId, setPrevArrowId] = useState("");
  const [nextArrowId, setNextArrowId] = useState("");

  const cls = classNames(styles.slider_container, props.className);

  useEffect(() => {
    setPrevArrowId(uuidv4().replace(/-|[0-9]/g, ""));
    setNextArrowId(uuidv4().replace(/-|[0-9]/g, ""));
  }, []);

  const { Arrows } = ImgExporter;

  return (
    <div {...props} className={cls}>
      {prevArrowId && nextArrowId && (
        <>
          <Swiper
            slidesPerView={4}
            loop={true}
            speed={600}
            modules={[Navigation]}
            navigation={{
              prevEl: `#${prevArrowId}`,
              nextEl: `#${nextArrowId}`
            }}
            className={styles.slider}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 16
              },
              400: {
                slidesPerView: 1.6,
                spaceBetween: 16
              },
              500: {
                slidesPerView: 1.8,
                spaceBetween: 16
              },
              600: {
                slidesPerView: 2.4,
                spaceBetween: 16
              },
              800: {
                slidesPerView: 2.8,
                spaceBetween: 16
              },
              1020: {
                slidesPerView: 3.3,
                spaceBetween: 16
              },
              1200: {
                slidesPerView: 3.7,
                spaceBetween: 16
              },
              1650: {
                spaceBetween: 40
              },
              1720: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }}
          >
            {vacancies?.map((vacancy, i) => {
              return (
                <SwiperSlide key={`${vacancy.id}_${i}`}>
                  <VacancyCard vacancy={vacancy} className={styles.slide} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button id={prevArrowId} className={`slider_arrow slider_arrow_prev slider_arrow_desc`}>
            <Arrows.ArrowRight />
          </button>
          <button id={nextArrowId} className={`slider_arrow slider_arrow_next slider_arrow_desc`}>
            <Arrows.ArrowRight />
          </button>
        </>
      )}
    </div>
  );
}

export default VacancySlider;
