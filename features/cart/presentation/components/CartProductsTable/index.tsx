import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Product } from "@libs/domain/model/product";

import styles from "./cart-products-table.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import MobileTable from "@features/cart/presentation/components/CartProductsTable/components/MobileTable";
import { GiftCard } from "@libs/domain/model/giftCard";
import Row from "./components/Row";

type Props = {
  rows: GiftCard[] | Product[];
};

const { Icons } = ImgExporter;

function CartProductsTable(props: Props) {
  const { rows = [] } = props;
  const isGiftCards = rows[0] instanceof GiftCard;

  return (
    <>
      <MobileTable rows={rows} />

      <div className={styles.table}>
        <div className={`${styles.table__row} ${styles.table__row_head}`}>
          <div className={styles.table__checkbox}></div>
          <div className={`${isGiftCards ? styles.table__img_gift : styles.table__img}`}>Նկար</div>
          <div className={styles.table__name}>Անուն </div>
          <div className={styles.table__price}>Գին</div>
          {!isGiftCards && <div className={styles.table__сount}>Քանակ</div>}
          {!isGiftCards && <div className={styles.table__total_price}>Ընդհանուր</div>}
          <div className={styles.table__trash}></div>
        </div>

        {rows.map((row) => (
          <Row key={row.id} row={row} />
        ))}
      </div>
    </>
  );
}

export default CartProductsTable;
