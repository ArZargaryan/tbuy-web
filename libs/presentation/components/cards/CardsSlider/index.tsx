import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Scrollbar, Autoplay } from "swiper";
import { v4 as uuidv4 } from "uuid";

import { ImgExporter } from "@core/helpers/ImgExporter";

import ProductCard from "@libs/presentation/components/cards/ProductCard";
import { Product } from "@libs/domain/model/product";
import { Service } from "@libs/domain/model/service";
import ServiceCard from "@libs/presentation/components/cards/ServiceCard";

import styles from "./product-card-slider.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import { GiftCard } from "@libs/domain/model/giftCard";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  cards: Product[] | Service[] | GiftCard[];
  title?: string;
  titleClassName?: string;
  extraType?: "" | "short" | "short_550";
}

function ProductCardSlider(props: Props) {
  const { cards, title, extraType = "" } = props;

  const [prevArrowId, setPrevArrowId] = useState("");
  const [nextArrowId, setNextArrowId] = useState("");

  const cls = classNames(styles.slider_container, props.className, {
    [styles[extraType]]: !!extraType.length
  });

  const titleCls = classNames(styles.slider_title, props?.titleClassName);

  const sliderCls = classNames(styles.slider);

  const { Arrows } = ImgExporter;

  useEffect(() => {
    setPrevArrowId(uuidv4().replace(/-|[0-9]/g, ""));
    setNextArrowId(uuidv4().replace(/-|[0-9]/g, ""));
  }, []);

  return (
    <div {...props} className={cls}>
      {!!title && <h3 className={titleCls}>{title}</h3>}
      {prevArrowId && nextArrowId && (
        <>
          <Swiper
            slidesPerView={5}
            speed={600}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Navigation, FreeMode, Scrollbar, Autoplay]}
            navigation={{
              prevEl: `#${prevArrowId}`,
              nextEl: `#${nextArrowId}`
            }}
            className={sliderCls}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1150: {
                slidesPerView: 4,
                spaceBetween: 14
              },
              1535: {
                slidesPerView: 5,
                spaceBetween: 14
              }
            }}
            scrollbar={{
              draggable: true
            }}
          >
            {cards?.map((card, i) => {
              return (
                <SwiperSlide key={`${card.id}_${card.title}_${i}`}>
                  {card instanceof Service && <ServiceCard service={card} />}
                  {card instanceof Product && <ProductCard product={card} />}
                  {card instanceof GiftCard && <ServiceCard service={card} />}
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

export default ProductCardSlider;
