import React, { FC, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import { Product } from "@libs/domain/model/product";

import styles from "../../cart-products-table.module.scss";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { GiftCard } from "@libs/domain/model/giftCard";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { table } from "console";

type Props = {
  row: GiftCard | Product;
};

const { Icons } = ImgExporter;

export const Row: FC<Props> = ({ row }) => {
  const isGiftCards = row instanceof GiftCard;

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
    <div className={`${styles.table__row} ${styles.table__row_body}`}>
      <div className={styles.table__checkbox}>
        <Checkbox variant={"secondary_filled"} />
      </div>

      <div className={`${isGiftCards ? styles.table__img_gift : styles.table__img}`}>
        <img src={row.images[0].original} alt="" />
      </div>

      <div className={styles.table__name}>
        <div className={styles.table__name_title}>{row.title}</div>
        <div className={styles.table__name_price}>
          <p>
            Տեղադրում: <strong>3 000 AMD</strong>
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Прямоугольник_148526"
                  data-name="Прямоугольник 148526"
                  width="24"
                  height="24"
                  transform="translate(0.1)"
                  fill="#fff"
                />
              </clipPath>
            </defs>
            <g id="cancel" transform="translate(-0.1)" clip-path="url(#clip-path)">
              <g id="close_1_" data-name="close (1)" transform="translate(2.471 2.471)">
                <path
                  id="Контур_8299"
                  data-name="Контур 8299"
                  d="M9.529,19.059a9.529,9.529,0,1,1,9.529-9.529A9.54,9.54,0,0,1,9.529,19.059Zm0-17.7A8.168,8.168,0,1,0,17.7,9.529,8.177,8.177,0,0,0,9.529,1.361Zm0,0"
                />
                <path
                  id="Контур_8300"
                  data-name="Контур 8300"
                  d="M153.774,154.456a.678.678,0,0,1-.481-.2l-6.807-6.807a.681.681,0,1,1,.962-.962l6.807,6.807a.681.681,0,0,1-.481,1.162Zm0,0"
                  transform="translate(-140.842 -140.843)"
                />
                <path
                  id="Контур_8301"
                  data-name="Контур 8301"
                  d="M146.966,154.455a.681.681,0,0,1-.481-1.162l3.254-3.254,3.553-3.553a.681.681,0,1,1,.962.962l-6.807,6.807A.678.678,0,0,1,146.966,154.455Zm0,0"
                  transform="translate(-140.841 -140.841)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className={styles.table__price}>{row.price} AMD</div>

      {!isGiftCards && (
        <div className={styles.table__сount}>
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
      )}

      {!isGiftCards && (
        <div className={styles.table__total_price}>{row.price * productsCount} AMD</div>
      )}

      <div className={styles.table__trash}>
        <button type="button">
          <Icons.Delete />
        </button>
      </div>
    </div>
  );
};

export default Row;
