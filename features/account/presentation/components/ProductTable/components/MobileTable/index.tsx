import React, { FC, useState } from "react";

import { GiftCard } from "@libs/domain/model/giftCard";
import { Product } from "@libs/domain/model/product";

import { changeRowVisibility } from "@features/account/presentation/components/ProductTable/model/changeRowVisibility";
import { AccountProductTableRowData } from "@features/account/domain/account_product_table_row_data";
import styles from "../../product-table.module.scss";
import { ProductInfo } from "@features/account/domain/product_info";

type TProduct = GiftCard | Product | ProductInfo;

interface Props<T extends TProduct> {
  rows: AccountProductTableRowData<T>[];
  ChildComponent: FC<AccountProductTableRowData<T>>;
  variant?: "default" | "outgoing_gift_cards" | "orders";
}

function MobileTable<T extends TProduct>(props: Props<T>) {
  const [activeColumn, setActiveColumn] = useState<string | null>(null);
  const { rows, ChildComponent, variant } = props;

  return (
    <div className={styles.mobile_table}>
      {rows.map((row) => {
        const { orderInfo, product } = row;
        const isActiveColumn = activeColumn === orderInfo.id;
        return (
          <div key={orderInfo.id} className={styles.mobile_table__row}>
            <div className={styles.row__top}>
              <div className={styles.top__date}>{orderInfo.date}</div>
              <div className={styles.top__info}>
                <p className={styles.info__id}>#{orderInfo.id}</p>
                <p>{orderInfo.state}</p>
              </div>
            </div>
            <div className={styles.row__bottom}>
              <div className={styles.bottom__image}>
                <img src={product.images[0].original} alt="" />
              </div>
              <div className={styles.bottom__info}>
                {product.title}{" "}
                {row.product instanceof ProductInfo && `| ${row.product?.count} հատ`}
              </div>
            </div>

            <div
              className={`${styles.mobile_child} ${isActiveColumn && styles.mobile_child_active}`}
            >
              <ChildComponent {...row} />
            </div>

            <div className={styles.row__actions}>
              <button
                className={"blue_text"}
                onClick={() => changeRowVisibility(orderInfo.id, activeColumn, setActiveColumn)}
              >
                {isActiveColumn ? "ՓԱԿԵԼ" : "ՏԵՍՆԵԼ ԱՎԵԼԻՆ"}
              </button>
              <button
                style={{
                  color: "red",
                  fontWeight: "bolder",
                  display: variant === "outgoing_gift_cards" ? "inline-block" : "none"
                }}
                disabled={!orderInfo.active}
              >
                ՆՎԵՐԵԼ
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobileTable;
