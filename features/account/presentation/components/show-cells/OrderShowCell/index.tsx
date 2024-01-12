import React from "react";
import { AccountProductTableRowData } from "@features/account/domain/account_product_table_row_data";
import { ProductInfo } from "@features/account/domain/product_info";
import styles from "./order-show-cell.module.scss";
import {
  showConfirmModal,
  showRemoveModal
} from "@features/account/presentation/store/ordersSlice";
import { useAppDispatch } from "@core/store";

type Props = AccountProductTableRowData<ProductInfo>;

function OrderShowCell(props: Props) {
  const dispatch = useAppDispatch();
  const { product, orderInfo } = props;

  return (
    <div className={styles.order}>
      <div className={styles.order__info}>
        <div className={styles.info__content}>
          <div className={styles.content__image}>
            <img src={product.images[0].original} alt="" />
          </div>
          <div className={styles.content__text}>
            <h4 className={styles.text__title}>{product.title}</h4>
            <h4 className={styles.text__price}>{product.count} հատ</h4>
          </div>
        </div>

        <div className={styles.info__mobile_content}>
          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Գնված է</div>
            <div className={`${styles.item__text} ${styles.item__text_underlined}`}>
              {orderInfo.company}
            </div>
          </div>

          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Վճարման եղանակ</div>
            <div className={`${styles.item__text}`}>{orderInfo.paymentType}</div>
          </div>

          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Առաքման Հասցե</div>
            <div className={`${styles.item__text}`}>{product.address}</div>
          </div>

          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Առաքիչ</div>
            <div className={`${styles.item__text}`}>
              <button className={styles.actions__confirm_btn} disabled={product.courierConfirmed}>
                {product.courierConfirmed ? "Հաստատված է" : "Հաստատել ստացումը"}
              </button>
            </div>
          </div>
          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Գնորդ</div>
            <div className={`${styles.item__text}`}>
              <button
                className={styles.actions__confirm_btn}
                disabled={product.buyerConfirmed}
                onClick={() => dispatch(showConfirmModal())}
              >
                {product.buyerConfirmed ? "Հաստատված է" : "Հաստատել ստացումը"}
              </button>
            </div>
          </div>

          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Գին</div>
            <div className={`${styles.item__text}`}>{product.price} AMD</div>
          </div>

          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Քանակ</div>
            <div className={`${styles.item__text}`}>{product.count} հատ</div>
          </div>

          <div className={styles.mobile_content__item}>
            <div className={styles.item__title}>Total</div>
            <div className={`${styles.item__text} ${styles.item__text_bold}`}>
              {product.price} AMD
            </div>
          </div>
        </div>

        <div className={styles.info__price}>
          <div className={styles.info_block}>
            <span>Գին</span>
            <span>{product.price}</span>
          </div>
          <div className={styles.info_block}>
            <span>Ընդհանուր</span>
            <span>{orderInfo.totalPrice}</span>
          </div>
        </div>
        <div className={styles.info__payment_type}>
          <div className={styles.info_block}>
            <span>Հասցե</span>
            <span>{product.address}</span>
          </div>
          <div className={styles.info_block}>
            <span>Վճարման եղանակ</span>
            <span>{product.paymentType}</span>
          </div>
        </div>

        <div className={styles.info__actions}>
          <div className={styles.actions__confirmations}>
            <div className={styles.info_block}>
              <span>Առաքիչ</span>
              <button className={styles.actions__confirm_btn} disabled={product.courierConfirmed}>
                {product.courierConfirmed ? "Հաստատված է" : "Հաստատել ստացումը"}
              </button>
            </div>
            <div className={styles.info_block}>
              <span>Գնորդ</span>
              <button
                className={styles.actions__confirm_btn}
                disabled={product.buyerConfirmed}
                onClick={() => dispatch(showConfirmModal())}
              >
                {product.buyerConfirmed ? "Հաստատված է" : "Հաստատել ստացումը"}
              </button>
            </div>
          </div>
          {product.buyerConfirmed ? (
            <a href="/">
              <button className={`blue_text ${styles.actions__btn}`}>Ծանուցել նորից</button>
            </a>
          ) : (
            <button
              className={`blue_text ${styles.actions__btn} ${styles.actions__btn_cancel}`}
              onClick={() => dispatch(showRemoveModal())}
            >
              ՉԵՂԱՐԿԵԼ ՊԱՏՎԵՐԸ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderShowCell;
