import React, { useEffect } from "react";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./product-nav.module.scss";
import { IDetailedProduct } from "@features/shop/domain/model/DetailedProduct";
import { IDetailedGiftCard } from "@features/gifts/domain/model/DetailedGiftCard";
import PrimaryButton from "@core/button/primary";
import { useTranslation } from "next-i18next";
import { useInView } from "react-hook-inview";

interface Props {
  product: IDetailedProduct | IDetailedGiftCard;
  withoutFooter?: boolean;
}

export default function ProductNav({ product, withoutFooter }: Props) {
  const { t } = useTranslation(["common"]);

  const { Icons } = ImgExporter;

  const navClassName = [
    styles.product_bar,
    styles.z,
    !withoutFooter ? styles.navWithFooter : ""
  ].join(" ");

  return (
    <div className={navClassName}>
      <div className={styles.product_bar__content}>
        <div className={`${styles.content__info} container`}>
          <div className={styles.info__left}>
            {!!product?.images?.length && <img src={product?.images[0].original} />}
            <p>{product.title}</p>
            <span className={styles.mobile_price}>
              {product?.price?.price} {product?.price?.currency}
            </span>
          </div>

          <div className={styles.info__right}>
            <div className={styles.right__price}>
              <p className={styles.price__single}>
                {product?.price?.price} {product?.price?.currency}
              </p>
              {/*<p className={styles.price__month}>36 ամիս / 4.647AMD</p>*/}
            </div>

            <PrimaryButton className={`${styles.right__btn}`}>
              {<Icons.CartWhite />}
              <span>
                {product.company.type === "individual"
                  ? t("actions.buy_now", { ns: "common" })
                  : t("actions.add_to_cart", { ns: "common" })}
              </span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
