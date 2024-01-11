import React from "react";
import { GiftCard } from "@libs/domain/model/giftCard";
import styles from "./gift-show-cell.module.scss";
import { AccountProductTableRowData } from "@features/account/domain/account_product_table_row_data";

type Props = Pick<AccountProductTableRowData<GiftCard>, "product">;

function OutgoingGiftShowCell(props: Props) {
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

          <div className={styles.content__payment_type}>
            <div>Ծանուցման տեսակ</div>
            <div>Էլ. փոստ</div>
          </div>
        </div>

        <div className={styles.info__mobile_content}>
          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Գնված է</div>
            <div className={`${styles.item__text} ${styles.item__text_underlined}`}>ZIGZAG</div>
          </div>
          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Գին</div>
            <div className={`${styles.item__text}`}>{product.price} AMD</div>
          </div>
          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Ծանուցման Տեսակ</div>
            <div className={`${styles.item__text}`}>Էլ. փոստ</div>
          </div>
          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Total</div>
            <div className={`${styles.item__text} ${styles.item__text_bold}`}>
              {product.price} AMD
            </div>
          </div>
        </div>

        <div className={styles.info__actions}>
          <button className={`blue_text ${styles.actions__gift_card}`}>Ծանուցել նորից</button>
        </div>
      </div>
    </div>
  );
}

export default OutgoingGiftShowCell;
