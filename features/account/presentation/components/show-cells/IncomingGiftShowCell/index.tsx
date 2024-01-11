import React from "react";
import { GiftCard } from "@libs/domain/model/giftCard";
import { Avatar } from "@mui/material";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { AccountProductTableRowData } from "@features/account/domain/account_product_table_row_data";
import styles from "./gift-show-cell.module.scss";

type Props = Pick<AccountProductTableRowData<GiftCard>, "product">;

const { blob } = ImgExporter;

function IncomingGiftShowCell(props: Props) {
  const { product } = props;

  return (
    <div className={styles.gift}>
      <div className={styles.gift__info}>
        <div className={styles.info__content}>
          <div className={styles.content__image}>
            <img src={product.images[0].original} alt="" />
          </div>
          <div className={styles.content__text}>
            <h4 className={styles.text__title}>{product.title}</h4>
            <h4 className={styles.text__price}>
              <strong>Գին</strong> <span>{product.price} AMD</span>
            </h4>
          </div>
        </div>
        <div className={styles.info__actions}>
          <button className={`blue_text ${styles.actions__gift_card}`}>ՏԵՍՆԵԼ QR</button>
        </div>
      </div>
      <div className={styles.gift__comments}>
        <div className={styles.comments__item}>
          <div className={styles.item__head}>
            <Avatar alt={`avatar`} src={blob.avatar.src} sx={{ width: 50, height: 50 }} />
            <p className={styles.head__name}>John Redman</p>
          </div>
          <h4 className={styles.item__title}>Մաղթանք</h4>
          <p className={styles.item__text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry`s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type. ummy text ever since.
          </p>
        </div>
        <div className={styles.comments__item}>
          <div className={styles.item__head}>
            <Avatar alt={`avatar`} src={blob.avatar.src} sx={{ width: 50, height: 50 }} />
            <p className={styles.head__name}>Ես</p>
          </div>
          <h4 className={styles.item__title}>Պատասխան</h4>
          <p className={styles.item__text}>Lorem Ipsum is simply dummy.</p>
        </div>
      </div>
    </div>
  );
}

export default IncomingGiftShowCell;
