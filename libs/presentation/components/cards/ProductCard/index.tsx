import React, { useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import classNames from "classnames";
import { Shimmer } from "react-shimmer";
import Link from "next/link";

import { ImgExporter } from "@core/helpers/ImgExporter";

import { Product } from "@libs/domain/model/product";
import BlurImage from "@libs/presentation/components/elements/BlurImage";

import styles from "./product-card.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useRouterPrefetch from "@core/helpers/routerUtils";

function ProductCard({
  product,
  extraType = ""
}: {
  product: Product;
  extraType?: "" | "short" | "short_550";
}) {
  const {
    // images,
    title,
    discount,
    price,
    discountPrice,
    id,
    addedToFavorite,
    addedToCompare,
    company
  } = product;

  const cls = classNames(styles.productCard, styles.productCard__slider, {
    [styles.withButton]: extraType !== "short" && price,
    [styles[extraType]]: !!extraType.length
  });

  const { Icons } = ImgExporter;

  const router = useRouterPrefetch();

  const images: any = [
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGNofGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGNofGVufDB8fDB8fHww"
  ];

  return (
    <div className={cls}>
      {!!discount && <div className={styles.discount}>{discount}%</div>}
      {(extraType === "short" || extraType === "short_550") && (
        <div className={styles.short_btns}>
          <button className={`${styles.short_btns__item} ${styles.short_btns__item_repost}`}>
            <Icons.Repost />
          </button>
          <button className={`${styles.short_btns__item} ${styles.short_btns__item_like}`}>
            <Icons.Like />
          </button>
        </div>
      )}
      <Swiper slidesPerView={1} pagination={true} modules={[Pagination]}>
        {images.map((imageSrc: string, i: string) => (
          <SwiperSlide key={`${imageSrc}_${i}`}>
            <Link href={`/products/${id}`}>
              <div className={styles.slide_img}>
                {/* <BlurImage
                  src={imageSrc.original}
                  alt={imageSrc.original}
                  blurHash={imageSrc.blurHash}
                  width={300}
                  height={486}
                  className={styles.slide_img_blur}
                /> */}
                <img
                  src={imageSrc
                  }
                  alt={imageSrc}
                  className={styles.slide_img}
                />
                <div className={styles.discount}>
                  <h1 style={{ color: "white" }}>-10%</h1>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.productCard__desc}>
        <Link href={`/products/${id}`}>
          <h3 className={styles.productCard__desc_title}>{title}</h3>
        </Link>

        <div className={`${styles.productCard__desc_btns}`}>
          {!!price && (
            <h4
              className={`${
                !discountPrice
                  ? styles.productCard__desc_footer_price_last
                  : styles.productCard__desc_footer_price_current
              }`}
            >
              {price} ֏
            </h4>
          )}
          {!discountPrice && (
            <span className={styles.productCard__desc_footer_price_current}>{500} ֏</span>
          )}
        </div>

        <div className={styles.productCard__desc_footer}>
          <div className={styles.productCard__desc_footer_manufacturer}>
            <Link href={`/legal_partner`}>
              <Icons.LogoExample />
            </Link>
            {/* <Shimmer height={32} width={400} className={styles.shimmer} /> */}
          </div>
          <p className={styles.productCard__desc_footer_credit}></p>

          <div className={styles.productCard__desc_footer_price}>
            <button type="button" className={styles.productCard__desc_btns_btn}>
              <Icons.Compare
                className={`${styles.productCard__desc_btns_btn_icon} ${
                  styles.productCard__desc_btns_btn_icon_compare
                } ${addedToCompare ? styles.productCard__desc_btns_btn_icon_compare_active : ""}`}
              />
            </button>
            <button type="button" className={styles.productCard__desc_btns_btn}>
              <Icons.Heart
                className={`${styles.productCard__desc_btns_btn_icon} ${
                  styles.productCard__desc_btns_btn_icon_heart
                } ${addedToFavorite ? styles.productCard__desc_btns_btn_icon_heart_active : ""}`}
              />
            </button>
            <button type="button" className={styles.productCard__desc_btns_btn}>
              <div style={{ background: "#2463BF", padding: 9 }}>
                <Icons.CartWhite
                  className={`${styles.productCard__desc_btns_btn_icon} ${
                    styles.productCard__desc_btns_btn_icon
                  } ${
                    addedToCompare ? styles.productCard__desc_btns_btn_icon_compare_active1 : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* <button type="button" className={styles.productCard__btn}>
          <Icons.CartWhite className={styles.productCard__btn_icon} />
          <span className={styles.productCard__btn_text}>ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ</span>
        </button> */}
      </div>
    </div>
  );
}

export default ProductCard;
