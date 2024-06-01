import React, { PropsWithChildren } from "react";
import { FreeMode, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./selects-slider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classNames from "classnames";

function SelectsSlider(props: PropsWithChildren & SwiperProps) {
  const { children } = props;

  const navigationNextRef = React.useRef(null);
  const navigationPrevRef = React.useRef(null);
  const { Arrows } = ImgExporter;

  const cls = classNames(styles.slider, props?.className);

  return (
    <div>
      <Swiper
        modules={[Navigation, FreeMode, Scrollbar]}
        scrollbar={{
          draggable: true
        }}
        spaceBetween={20}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        watchOverflow={true}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current
        }}
        onBeforeInit={({ params: { navigation } }) => {
          if (navigation && typeof navigation !== "boolean") {
            navigation.nextEl = navigationNextRef.current;
          }
          if (navigation && typeof navigation !== "boolean") {
            navigation.prevEl = navigationPrevRef.current;
          }
        }}
        {...props}
        className={cls}
      >
        {children}
        <div ref={navigationPrevRef} className="swiper-button-prev">
          <div className="swiper-button-prev_img">
            <Arrows.DoubleLeftIcon />
          </div>
        </div>
        <div ref={navigationNextRef} className="swiper-button-next">
          <div className="swiper-button-next_img">
            <Arrows.DoubleRight />
          </div>
        </div>
      </Swiper>

      <button type="button" className={styles.assortment__scrollBtn} data-scroll="scrollMenu">
        <img src="" alt="" className={styles.assortment__scrollBtn_icon} />
      </button>
    </div>
  );
}

export default SelectsSlider;
