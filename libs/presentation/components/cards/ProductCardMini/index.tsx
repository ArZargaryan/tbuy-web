import React, { useMemo } from "react";
import { Product } from "@libs/domain/model/product";

import Link from "next/link";
import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./product-card-mini.module.scss";
import { Service } from "@libs/domain/model/service";
import { GiftCard } from "@libs/domain/model/giftCard";

function ProductCardMini({ product }: { product: Product | Service | GiftCard }) {
  const { images, title } = product;

  const { Icons } = ImgExporter;

  const getLink = useMemo(() => {
    if (product instanceof Product) {
      return `/products/${product?.id}`;
    } else if (product instanceof Service) {
      return `/services/${product?.id}`;
    } else {
      return `/gift_cards/${product?.id}`;
    }
  }, []);

  return (
    <div className={styles.product}>
      <div className={styles.product_image}>
        {product instanceof Product && product.discount && (
          <span className={styles.product_image__discount}>10%</span>
        )}
        {/* <img src={images[0]?.original} alt="" /> */}
        <img
          src={
            "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg"
          }
          alt=""
        />
        <div className={styles.product_image__discount}>10%</div>
        <button className={styles.product_image__to_cart}>
          <div>
            <Icons.Compare />
          </div>
        </button>
      </div>

      <div className={styles.product_info}>
        <Link href={getLink} className={styles.info__title}>
          {title}
        </Link>

        <div className={styles.info__price}>
          <div className={styles.purchase__price}>
            {/* {product instanceof Product && !!product.price && (
              <h4 className={`${product.discount ? styles.price__grey : styles.price}`}>
                {product.price} AMD
              </h4>
            )}
            {product instanceof Product && !!product.discount && (
              <span className={styles.price}>{product.discount} AMD</span>
            )} */}
            <h4 className={`${styles.price__grey}`}>{300} ֏</h4>
            <span className={styles.price}>{599} ֏</span>
          </div>

          <div className={styles.purchase__company}>
            <img
              src={
                "https://cdn.vox-cdn.com/thumbor/ln4IHgPYpvNoIWpJ2Y1_c9msxXA=/0x0:2012x1341/2000x1333/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardMini;
