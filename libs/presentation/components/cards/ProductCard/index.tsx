import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import classNames from "classnames";
import Link from "next/link";

import { ImgExporter } from "@core/helpers/ImgExporter";

import { Product } from "@libs/domain/model/product";

import styles from "./product-card.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    addedToCompare
  } = product;

  const cls = classNames(styles.product_card, {
    [styles.withButton]: extraType !== "short" && price,
    [styles[extraType]]: !!extraType.length
  });

  const { Icons } = ImgExporter;

  const images: string[] = [
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
      <div className={styles.image_section}>
        <Swiper
          slidesPerView={1}
          pagination={true}
          modules={[Pagination]}
          className={styles.product_card__slider}
        >
          {images.map((imageSrc: string, idx: number) => (
            <SwiperSlide key={`${imageSrc}_${idx}`}>
              <Link href={`/products/${id}`}>
                <div className={styles.slide_container}>
                  {/* <BlurImage
                    src={imageSrc.original}
                    alt={imageSrc.original}
                    blurHash={imageSrc.blurHash}
                    width={300}
                    height={486}
                    className={styles.slide_img_blur}
                  /> */}
                  <img src={imageSrc} alt={imageSrc} className={styles.slide_img} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.discount_badge}>
          <p className={styles.discount_text}>-10%</p>
        </div>
      </div>
      <div className={styles.info_section}>
        <Link href={`/products/${id}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>

        <div className={styles.price_section}>
          {!!price && (
            <h4 className={`${discountPrice ? styles.current_price : styles.last_price}`}>
              {price} ֏
            </h4>
          )}
          {!discountPrice && <span className={styles.current_price}>{500} ֏</span>}
        </div>

        <div className={styles.footer}>
          <div className={styles.company}>
            <Link href={`/legal_partner`}>
              <Icons.LogoExample />
            </Link>
            {/* <Shimmer height={32} width={400} className={styles.shimmer} /> */}
          </div>

          <div className={styles.action_buttons}>
            <button type="button" className={styles.button}>
              <Icons.Compare
                className={`${styles.icon} ${styles.icon_compare} ${
                  addedToCompare ? styles.icon_compare_active : ""
                }`}
              />
            </button>
            <button type="button" className={styles.button}>
              <Icons.Heart
                className={`${styles.icon} ${styles.icon_heart} ${
                  addedToFavorite ? styles.icon_heart_active : ""
                }`}
              />
            </button>
            <button type="button" className={`${styles.button} ${styles.cart_button}`}>
              <Icons.CartWhite className={`${styles.icon} ${styles.cart_icon}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
