import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./product-detail-slider.module.scss";

// Import Swiper styles
import "swiper/css";
import { Image } from "@libs/domain/model/image";
import BlurImage from "@libs/presentation/components/elements/BlurImage";

interface Props {
  images: Image[];
  withoutSmall?: boolean;
}

function ProductDetailSlider({ images, withoutSmall }: Props) {
  const [bigSliderControl, setBigSliderControl] = useState<any>();
  const [smallSliderControl, setSmallSliderControl] = useState<any>();

  const [smallSliderActive, setSmallSliderActive] = useState(0);

  const changeBigSlider = (swiper: any) => {
    bigSliderControl?.slideTo(swiper.activeIndex);
  };

  if (!images?.length) {
    return <div></div>;
  }

  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={1}
        className={styles.big_slider}
        onSwiper={setBigSliderControl}
        onSlideChange={(swiper) => {
          if (withoutSmall) return false;
          smallSliderControl.slideTo(swiper.activeIndex);
          setSmallSliderActive(swiper.activeIndex);
        }}
      >
        {images.map((image, i) => (
          <>
            <SwiperSlide key={`${image.original}_${i}`} className={styles.big_slider__slide}>
              <div>
                {/* <BlurImage
                  src={image.original}
                  alt={"blur_image"}
                  blurHash={image.blurHash}
                  width={400}
                  height={400}
                /> */}
                <img style={{ aspectRatio: 1, objectFit: "cover" }} src={image.original} alt="Hi" />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      {!withoutSmall && (
        <Swiper
          slidesPerView={4}
          spaceBetween={32}
          className={styles.small_slider}
          onSwiper={setSmallSliderControl}
          slideToClickedSlide={true}
          onSlideChange={(swiper) => {
            changeBigSlider(swiper);
          }}
          watchOverflow={false}
          draggable={false}
          allowTouchMove={false}
        >
          {images.map((image, i) => (
            <>
              <SwiperSlide
                className={`${styles.small_slider__slide} ${
                  smallSliderActive == i ? styles.small_slider__slide_active : ""
                }`}
                onClick={() => {
                  bigSliderControl.slideTo(i);
                  smallSliderControl.slideTo(i);
                  setSmallSliderActive(i);
                }}
              >
                <div className={styles.slide_div}>
                  {/* <BlurImage
                    src={image.original}
                    alt={"blur_image"}
                    blurHash={image.blurHash}
                    width={400}
                    height={400}
                  /> */}
                  <img src={image.original} />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default ProductDetailSlider;
