import React, { FC, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import { Product } from "@libs/domain/model/product";

import styles from "../../cart-products-table.module.scss";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { GiftCard } from "@libs/domain/model/giftCard";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = {
  item: GiftCard | Product;
};

export const MobileCounter: FC<Props> = ({ item }) => {
  const { Icons } = ImgExporter;

  const [productsCount, setProductsCount] = useState(1);

  function getProductCount(action: "plus" | "minus") {
    if (action === "plus") {
      setProductsCount((old) => old + 1);
    }
    if (action === "minus" && productsCount > 1) {
      setProductsCount((old) => old - 1);
    }
  }

  return (
    <div key={item.id} className={styles.mobile_item}>
      <div>
        <Checkbox variant={"secondary_filled"} />
      </div>
      <div className={styles.mobile_item__info}>
        <div className={styles.info__head}>
          <img src={item.images[0].original} alt="" className={styles.head__img} />
          <p className={styles.head__title}>{item.title}</p>
          <button type={"button"} className={styles.head__delete}>
            <Icons.Delete />
          </button>
        </div>
        <div className={styles.info__row}>
          <div className={styles.row__col}>Քանակ</div>
          <div className={styles.row__col}>
            <div className={styles.table__сount_item}>
              <button type="button" onClick={() => getProductCount("minus")}>
                <Icons.Minus />
              </button>

              <p>{productsCount}</p>

              <button type="button" onClick={() => getProductCount("plus")}>
                <Icons.Plus />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.info__row}>
          <div className={styles.row__col}>Գին</div>
          <div className={styles.row__col}>{item.price} AMD</div>
        </div>
        <div className={styles.info__row}>
          <div className={styles.row__col}>Տեղադրում</div>
          <div className={styles.row__col}>
            <Icons.CancleCircle className={styles.cancel_circle} /> 3.000 AMD
          </div>
        </div>
        <div className={`${styles.info__row} ${styles.info__row_bold}`}>
          <div className={styles.row__col}>Գին</div>
          <div className={styles.row__col}>{item.price * productsCount} AMD</div>
        </div>
      </div>
    </div>
  );
};

export default MobileCounter;
