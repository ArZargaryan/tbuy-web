import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./product-detail-slider.module.scss";

// Import Swiper styles
import "swiper/css";
import { Image } from "@libs/domain/model/image";
import { Navigation, Pagination } from "swiper";
import Video from "../../elements/Video";

type Video = {
  url: string;
};

interface Props {
  images: Image[];
  videos?: Video[];
  withoutSmall?: boolean;
}

function ProductDetailSlider({ images, videos, withoutSmall }: Props) {
  const [bigSliderControl, setBigSliderControl] = useState<any>();
  const [smallSliderControl, setSmallSliderControl] = useState<any>();

  const [smallSliderActive, setSmallSliderActive] = useState(0);

  const miniPrevBtn = useRef<null | HTMLButtonElement>(null);
  const miniNextBtn = useRef<null | HTMLButtonElement>(null);
  const paginationRef = useRef<null | HTMLDivElement>(null);
  const bigPrevBtn = useRef<null | HTMLButtonElement>(null);
  const bigNextBtn = useRef<null | HTMLButtonElement>(null);

  if (!images?.length) {
    return <div></div>;
  }

  return (
    <>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: bigPrevBtn.current, nextEl: bigNextBtn.current }}
          pagination={{ el: paginationRef.current, clickable: true }}
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

          {videos?.map((video, i) => (
            <SwiperSlide key={i} className={styles.big_slider__slide}>
              <div>
                <Video
                  url={video.url}
                  controls
                  light
                  playIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="66"
                      height="66"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <g opacity="0.7" clipPath="url(#clip0_1389_75528)">
                        <path
                          d="M17.9773 0.195312C8.15653 0.195312 0.195312 8.15653 0.195312 17.9773C0.195312 27.7982 8.15653 35.7594 17.9773 35.7594C27.7982 35.7594 35.7594 27.7982 35.7594 17.9773C35.7594 8.15653 27.7982 0.195312 17.9773 0.195312ZM24.7942 18.6226L15.1279 24.2034C14.6308 24.4903 14.01 24.1319 14.01 23.5581V12.3966C14.01 11.8228 14.6312 11.464 15.1279 11.7509L24.7938 17.3317C25.2909 17.6185 25.2909 18.3358 24.7942 18.6226Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1389_75528">
                          <rect width="36" height="36" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />
              </div>
            </SwiperSlide>
          ))}

          <button className={styles.big_prev_btn} ref={bigPrevBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.06286 2.04519C7.83155 1.8064 7.71814 1.4973 7.72262 1.1882C7.7271 0.879095 7.84797 0.572922 8.08673 0.339996L8.10464 0.322418C8.34042 0.102676 8.64186 -0.00426483 8.9418 0.0001297C9.24175 0.00452423 9.5402 0.120256 9.77001 0.347322C12.4054 2.93441 15.0124 5.56398 17.6313 8.17011C17.6417 8.17744 17.6507 8.18476 17.6596 8.19355C17.8909 8.43233 18.0043 8.74437 17.9999 9.05347C17.9954 9.36257 17.873 9.67021 17.6343 9.90314L17.594 9.94123C14.987 12.5107 12.383 15.089 9.76852 17.6541C9.5402 17.8797 9.24175 17.9955 8.9418 17.9999C8.64186 18.0043 8.34042 17.8973 8.10464 17.6761L8.08226 17.6541C7.84797 17.4227 7.7271 17.118 7.72262 16.8103C7.71814 16.5027 7.83155 16.1921 8.06286 15.9533L15.1093 9.02857L8.06286 2.04519ZM0.337382 2.33818C0.107572 2.10086 -0.00434768 1.79175 0.000129128 1.48412C0.00460593 1.17501 0.12548 0.868841 0.364243 0.635916L0.38215 0.618336C0.616436 0.398594 0.919367 0.291655 1.21931 0.294584C1.51926 0.298979 1.8192 0.414709 2.04752 0.641775C4.62765 3.17466 7.29285 5.66506 9.9073 8.16718C9.91775 8.17451 9.92819 8.1833 9.93864 8.19209C10.1699 8.43087 10.2834 8.7429 10.2789 9.052C10.2744 9.36111 10.152 9.66875 9.91327 9.90167C7.30329 12.3847 4.67988 14.859 2.06394 17.3392L2.04603 17.3582C1.81771 17.5838 1.51926 17.6981 1.21931 17.7025C0.919367 17.7069 0.617928 17.5999 0.38215 17.3802L0.359766 17.3582C0.12548 17.1268 0.00460593 16.8206 0.000129128 16.5144C-0.00434768 16.2068 0.109065 15.8962 0.340366 15.6574L7.38089 9.03003L0.337382 2.33818Z"
                fill="#1D1D1D"
              />
            </svg>
          </button>
          <button className={styles.big_next_btn} ref={bigNextBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.06286 2.04519C7.83155 1.8064 7.71814 1.4973 7.72262 1.1882C7.7271 0.879095 7.84797 0.572922 8.08673 0.339996L8.10464 0.322418C8.34042 0.102676 8.64186 -0.00426483 8.9418 0.0001297C9.24175 0.00452423 9.5402 0.120256 9.77001 0.347322C12.4054 2.93441 15.0124 5.56398 17.6313 8.17011C17.6417 8.17744 17.6507 8.18476 17.6596 8.19355C17.8909 8.43233 18.0043 8.74437 17.9999 9.05347C17.9954 9.36257 17.873 9.67021 17.6343 9.90314L17.594 9.94123C14.987 12.5107 12.383 15.089 9.76852 17.6541C9.5402 17.8797 9.24175 17.9955 8.9418 17.9999C8.64186 18.0043 8.34042 17.8973 8.10464 17.6761L8.08226 17.6541C7.84797 17.4227 7.7271 17.118 7.72262 16.8103C7.71814 16.5027 7.83155 16.1921 8.06286 15.9533L15.1093 9.02857L8.06286 2.04519ZM0.337382 2.33818C0.107572 2.10086 -0.00434768 1.79175 0.000129128 1.48412C0.00460593 1.17501 0.12548 0.868841 0.364243 0.635916L0.38215 0.618336C0.616436 0.398594 0.919367 0.291655 1.21931 0.294584C1.51926 0.298979 1.8192 0.414709 2.04752 0.641775C4.62765 3.17466 7.29285 5.66506 9.9073 8.16718C9.91775 8.17451 9.92819 8.1833 9.93864 8.19209C10.1699 8.43087 10.2834 8.7429 10.2789 9.052C10.2744 9.36111 10.152 9.66875 9.91327 9.90167C7.30329 12.3847 4.67988 14.859 2.06394 17.3392L2.04603 17.3582C1.81771 17.5838 1.51926 17.6981 1.21931 17.7025C0.919367 17.7069 0.617928 17.5999 0.38215 17.3802L0.359766 17.3582C0.12548 17.1268 0.00460593 16.8206 0.000129128 16.5144C-0.00434768 16.2068 0.109065 15.8962 0.340366 15.6574L7.38089 9.03003L0.337382 2.33818Z"
                fill="#1D1D1D"
              />
            </svg>
          </button>
        </Swiper>

        {!withoutSmall && (
          <Swiper
            slidesPerView={4}
            spaceBetween={32}
            className={styles.small_slider}
            onSwiper={setSmallSliderControl}
            slideToClickedSlide={true}
            watchOverflow={false}
            modules={[Navigation]}
            navigation={{ prevEl: miniPrevBtn.current, nextEl: miniNextBtn.current }}
          >
            {images.map((image, i) => (
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
            ))}

            {videos?.map((video, i) => (
              <SwiperSlide
                key={i}
                className={`${styles.small_slider__slide} ${
                  smallSliderActive == i + images.length ? styles.small_slider__slide_active : ""
                }`}
                onClick={() => {
                  bigSliderControl.slideTo(i + images.length);
                  smallSliderControl.slideTo(i + images.length);
                  setSmallSliderActive(i + images.length);
                }}
              >
                <div className={styles.none_clickable}>
                  <Video
                    url={video.url}
                    width="100%"
                    height="100%"
                    controls
                    light
                    playIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <g opacity="0.7" clipPath="url(#clip0_1389_75528)">
                          <path
                            d="M17.9773 0.195312C8.15653 0.195312 0.195312 8.15653 0.195312 17.9773C0.195312 27.7982 8.15653 35.7594 17.9773 35.7594C27.7982 35.7594 35.7594 27.7982 35.7594 17.9773C35.7594 8.15653 27.7982 0.195312 17.9773 0.195312ZM24.7942 18.6226L15.1279 24.2034C14.6308 24.4903 14.01 24.1319 14.01 23.5581V12.3966C14.01 11.8228 14.6312 11.464 15.1279 11.7509L24.7938 17.3317C25.2909 17.6185 25.2909 18.3358 24.7942 18.6226Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1389_75528">
                            <rect width="36" height="36" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                  />
                </div>
              </SwiperSlide>
            ))}

            <button className={styles.prev_btn} ref={miniPrevBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.06286 2.04519C7.83155 1.8064 7.71814 1.4973 7.72262 1.1882C7.7271 0.879095 7.84797 0.572922 8.08673 0.339996L8.10464 0.322418C8.34042 0.102676 8.64186 -0.00426483 8.9418 0.0001297C9.24175 0.00452423 9.5402 0.120256 9.77001 0.347322C12.4054 2.93441 15.0124 5.56398 17.6313 8.17011C17.6417 8.17744 17.6507 8.18476 17.6596 8.19355C17.8909 8.43233 18.0043 8.74437 17.9999 9.05347C17.9954 9.36257 17.873 9.67021 17.6343 9.90314L17.594 9.94123C14.987 12.5107 12.383 15.089 9.76852 17.6541C9.5402 17.8797 9.24175 17.9955 8.9418 17.9999C8.64186 18.0043 8.34042 17.8973 8.10464 17.6761L8.08226 17.6541C7.84797 17.4227 7.7271 17.118 7.72262 16.8103C7.71814 16.5027 7.83155 16.1921 8.06286 15.9533L15.1093 9.02857L8.06286 2.04519ZM0.337382 2.33818C0.107572 2.10086 -0.00434768 1.79175 0.000129128 1.48412C0.00460593 1.17501 0.12548 0.868841 0.364243 0.635916L0.38215 0.618336C0.616436 0.398594 0.919367 0.291655 1.21931 0.294584C1.51926 0.298979 1.8192 0.414709 2.04752 0.641775C4.62765 3.17466 7.29285 5.66506 9.9073 8.16718C9.91775 8.17451 9.92819 8.1833 9.93864 8.19209C10.1699 8.43087 10.2834 8.7429 10.2789 9.052C10.2744 9.36111 10.152 9.66875 9.91327 9.90167C7.30329 12.3847 4.67988 14.859 2.06394 17.3392L2.04603 17.3582C1.81771 17.5838 1.51926 17.6981 1.21931 17.7025C0.919367 17.7069 0.617928 17.5999 0.38215 17.3802L0.359766 17.3582C0.12548 17.1268 0.00460593 16.8206 0.000129128 16.5144C-0.00434768 16.2068 0.109065 15.8962 0.340366 15.6574L7.38089 9.03003L0.337382 2.33818Z"
                  fill="#1D1D1D"
                />
              </svg>
            </button>
            <button className={styles.next_btn} ref={miniNextBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.06286 2.04519C7.83155 1.8064 7.71814 1.4973 7.72262 1.1882C7.7271 0.879095 7.84797 0.572922 8.08673 0.339996L8.10464 0.322418C8.34042 0.102676 8.64186 -0.00426483 8.9418 0.0001297C9.24175 0.00452423 9.5402 0.120256 9.77001 0.347322C12.4054 2.93441 15.0124 5.56398 17.6313 8.17011C17.6417 8.17744 17.6507 8.18476 17.6596 8.19355C17.8909 8.43233 18.0043 8.74437 17.9999 9.05347C17.9954 9.36257 17.873 9.67021 17.6343 9.90314L17.594 9.94123C14.987 12.5107 12.383 15.089 9.76852 17.6541C9.5402 17.8797 9.24175 17.9955 8.9418 17.9999C8.64186 18.0043 8.34042 17.8973 8.10464 17.6761L8.08226 17.6541C7.84797 17.4227 7.7271 17.118 7.72262 16.8103C7.71814 16.5027 7.83155 16.1921 8.06286 15.9533L15.1093 9.02857L8.06286 2.04519ZM0.337382 2.33818C0.107572 2.10086 -0.00434768 1.79175 0.000129128 1.48412C0.00460593 1.17501 0.12548 0.868841 0.364243 0.635916L0.38215 0.618336C0.616436 0.398594 0.919367 0.291655 1.21931 0.294584C1.51926 0.298979 1.8192 0.414709 2.04752 0.641775C4.62765 3.17466 7.29285 5.66506 9.9073 8.16718C9.91775 8.17451 9.92819 8.1833 9.93864 8.19209C10.1699 8.43087 10.2834 8.7429 10.2789 9.052C10.2744 9.36111 10.152 9.66875 9.91327 9.90167C7.30329 12.3847 4.67988 14.859 2.06394 17.3392L2.04603 17.3582C1.81771 17.5838 1.51926 17.6981 1.21931 17.7025C0.919367 17.7069 0.617928 17.5999 0.38215 17.3802L0.359766 17.3582C0.12548 17.1268 0.00460593 16.8206 0.000129128 16.5144C-0.00434768 16.2068 0.109065 15.8962 0.340366 15.6574L7.38089 9.03003L0.337382 2.33818Z"
                  fill="#1D1D1D"
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
