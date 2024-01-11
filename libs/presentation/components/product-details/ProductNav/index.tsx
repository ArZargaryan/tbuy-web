import React from "react";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./product-nav.module.scss";
import { IDetailedProduct } from "@features/shop/domain/model/DetailedProduct";
import { IDetailedGiftCard } from "@features/gifts/domain/model/DetailedGiftCard";
import PrimaryButton from "@core/button/primary";

interface Props {
  product: IDetailedProduct | IDetailedGiftCard;
}

export default function ProductNav({ product }: Props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { Icons } = ImgExporter;

  return (
    <div className={`${styles.product_bar} ${scroll !== 0 && styles.z}`}>
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
              <Icons.CartWhite />
              <span>ԱՎԵԼԱՑՆԵԼ ԶԱՄԲՅՈՒՂ</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
