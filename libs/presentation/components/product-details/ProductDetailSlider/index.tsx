import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./product-detail-slider.module.scss";

// Import Swiper styles
import "swiper/css";
import { Image } from "@libs/domain/model/image";
import BlurImage from "@libs/presentation/components/elements/BlurImage";
import { Navigation, Pagination } from "swiper";

interface Props {
  images: Image[];
  withoutSmall?: boolean;
}

function ProductDetailSlider({ images, withoutSmall }: Props) {
  const [bigSliderControl, setBigSliderControl] = useState<any>();
  const [smallSliderControl, setSmallSliderControl] = useState<any>();

  const [smallSliderActive, setSmallSliderActive] = useState(0);

  const prevBtn = useRef<null | HTMLButtonElement>(null);
  const nextBtn = useRef<null | HTMLButtonElement>(null);
  const paginationRef = useRef<null | HTMLDivElement>(null);

  const changeBigSlider = (swiper: any) => {
    bigSliderControl?.slideTo(swiper.activeIndex);
  };

  if (!images?.length) {
    return <div></div>;
  }

  return (
    <>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: prevBtn.current, nextEl: nextBtn.current }}
          pagination={{ el: paginationRef.current }}
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
            <SwiperSlide key={i} className={styles.big_slider__slide}>
              <div>
                {/* <BlurImage
                  src={image.original}
                  alt={"blur_image"}
                  blurHash={image.blurHash}
                  width={400}
                  height={400}
                /> */}
                <img src={image.original} alt="Hi" />
              </div>
            </SwiperSlide>
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
          >
            {images.map((image, i) => (
              <>
                <SwiperSlide
                  key={i}
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
            <button className={styles.prev_btn} ref={prevBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.06286 2.04519C7.83155 1.8064 7.71814 1.4973 7.72262 1.1882C7.7271 0.879095 7.84797 0.572922 8.08673 0.339996L8.10464 0.322418C8.34042 0.102676 8.64186 -0.00426483 8.9418 0.0001297C9.24175 0.00452423 9.5402 0.120256 9.77001 0.347322C12.4054 2.93441 15.0124 5.56398 17.6313 8.17011C17.6417 8.17744 17.6507 8.18476 17.6596 8.19355C17.8909 8.43233 18.0043 8.74437 17.9999 9.05347C17.9954 9.36257 17.873 9.67021 17.6343 9.90314L17.594 9.94123C14.987 12.5107 12.383 15.089 9.76852 17.6541C9.5402 17.8797 9.24175 17.9955 8.9418 17.9999C8.64186 18.0043 8.34042 17.8973 8.10464 17.6761L8.08226 17.6541C7.84797 17.4227 7.7271 17.118 7.72262 16.8103C7.71814 16.5027 7.83155 16.1921 8.06286 15.9533L15.1093 9.02857L8.06286 2.04519ZM0.337382 2.33818C0.107572 2.10086 -0.00434768 1.79175 0.000129128 1.48412C0.00460593 1.17501 0.12548 0.868841 0.364243 0.635916L0.38215 0.618336C0.616436 0.398594 0.919367 0.291655 1.21931 0.294584C1.51926 0.298979 1.8192 0.414709 2.04752 0.641775C4.62765 3.17466 7.29285 5.66506 9.9073 8.16718C9.91775 8.17451 9.92819 8.1833 9.93864 8.19209C10.1699 8.43087 10.2834 8.7429 10.2789 9.052C10.2744 9.36111 10.152 9.66875 9.91327 9.90167C7.30329 12.3847 4.67988 14.859 2.06394 17.3392L2.04603 17.3582C1.81771 17.5838 1.51926 17.6981 1.21931 17.7025C0.919367 17.7069 0.617928 17.5999 0.38215 17.3802L0.359766 17.3582C0.12548 17.1268 0.00460593 16.8206 0.000129128 16.5144C-0.00434768 16.2068 0.109065 15.8962 0.340366 15.6574L7.38089 9.03003L0.337382 2.33818Z"
                  fill="#6E00E5"
                />
              </svg>
            </button>
            <button className={styles.next_btn} ref={nextBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.06286 2.04519C7.83155 1.8064 7.71814 1.4973 7.72262 1.1882C7.7271 0.879095 7.84797 0.572922 8.08673 0.339996L8.10464 0.322418C8.34042 0.102676 8.64186 -0.00426483 8.9418 0.0001297C9.24175 0.00452423 9.5402 0.120256 9.77001 0.347322C12.4054 2.93441 15.0124 5.56398 17.6313 8.17011C17.6417 8.17744 17.6507 8.18476 17.6596 8.19355C17.8909 8.43233 18.0043 8.74437 17.9999 9.05347C17.9954 9.36257 17.873 9.67021 17.6343 9.90314L17.594 9.94123C14.987 12.5107 12.383 15.089 9.76852 17.6541C9.5402 17.8797 9.24175 17.9955 8.9418 17.9999C8.64186 18.0043 8.34042 17.8973 8.10464 17.6761L8.08226 17.6541C7.84797 17.4227 7.7271 17.118 7.72262 16.8103C7.71814 16.5027 7.83155 16.1921 8.06286 15.9533L15.1093 9.02857L8.06286 2.04519ZM0.337382 2.33818C0.107572 2.10086 -0.00434768 1.79175 0.000129128 1.48412C0.00460593 1.17501 0.12548 0.868841 0.364243 0.635916L0.38215 0.618336C0.616436 0.398594 0.919367 0.291655 1.21931 0.294584C1.51926 0.298979 1.8192 0.414709 2.04752 0.641775C4.62765 3.17466 7.29285 5.66506 9.9073 8.16718C9.91775 8.17451 9.92819 8.1833 9.93864 8.19209C10.1699 8.43087 10.2834 8.7429 10.2789 9.052C10.2744 9.36111 10.152 9.66875 9.91327 9.90167C7.30329 12.3847 4.67988 14.859 2.06394 17.3392L2.04603 17.3582C1.81771 17.5838 1.51926 17.6981 1.21931 17.7025C0.919367 17.7069 0.617928 17.5999 0.38215 17.3802L0.359766 17.3582C0.12548 17.1268 0.00460593 16.8206 0.000129128 16.5144C-0.00434768 16.2068 0.109065 15.8962 0.340366 15.6574L7.38089 9.03003L0.337382 2.33818Z"
                  fill="#6E00E5"
                />
              </svg>
            </button>
          </Swiper>
        )}
        <div className={styles.pagination} ref={paginationRef}></div>
      </div>
    </>
  );
}

export default ProductDetailSlider;
