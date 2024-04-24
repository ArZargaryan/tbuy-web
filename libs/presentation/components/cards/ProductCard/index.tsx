import React, { useEffect, useState } from "react";
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

// TODO temp --------------------------------------------------------------------------------------------------------------------
const images: string[] = [
  "https://static.tildacdn.com/tild6463-3365-4130-b031-383766386537/1612447656_68-p-chas.jpg",
  "https://www.cheapbellross.com/wp-content/uploads/2016/12/IW510301_opener-1200.jpg",
  "https://bgpics.ru/pictures/2560x1600/250-brendyi-Ulysse-Nardin-chasyi-2560x1600.jpg",
  "/pictures/temp/product/goodfon.jpg",
  "https://img.youscreen.ru/wall/14977401884047/14977401884047_1920x1200.jpg",
  "https://www.breguet.com/sites/default/files/actualites/1_56_2057ST92SW0_2067ST92SW0_lifestyle_03.png"
];

let productCounter = 0;

function getImages() {
  if (productCounter > images.length - 1) {
    productCounter = 0;
  }
  const productImages = [images[productCounter], ...images.filter((img, idx) => idx > 1)];
  productCounter++;

  return productImages;
}
// ------------------------------------------------------------------------------------------------------------------------------

function ProductCard({
  product,
  extraType = ""
}: {
  product: Product;
  extraType?: "" | "short" | "short_550";
}) {
  const { title, discount, price, discountPrice, id, addedToFavorite, addedToCompare } = product;

  const cls = classNames(styles.product_card, {
    [styles.withButton]: extraType !== "short" && price,
    [styles[extraType]]: !!extraType.length
  });

  const { Icons } = ImgExporter;

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(getImages());
  }, []);

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
