import React from "react";
import { Product } from "@libs/domain/model/product";
import styles from "./cart_conclusion_products.module.scss";

interface Props {
  products: Product[];
}

function CartConclusionProducts(props: Props) {
  const { products } = props;
  return (
    <div className={styles.table}>
      {products?.map((item) => (
        <div key={item.id} className={styles.table__row}>
          <div className={styles.table__row_id}>#{item.id}</div>
          <div className={styles.table__row_title}>{item.title}</div>
          <div className={styles.table__row_count}>1</div>
          <div className={styles.table__row_price}>{item.price} AMD</div>
        </div>
      ))}
    </div>
  );
}

export default CartConclusionProducts;
