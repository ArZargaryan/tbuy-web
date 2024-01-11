import React from "react";
import styles from "@features/cart/presentation/components/CartProductsTable/cart-products-table.module.scss";
import classNames from "classnames";
import { Product } from "@libs/domain/model/product";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { GiftCard } from "@libs/domain/model/giftCard";

type Props = {
  rows: Product[];
};

const { Icons } = ImgExporter;

function MobileTable(props: Props) {
  const { rows = [] } = props;
  const tableCls = classNames(styles.table_container, styles.table_container_mobile);

  if (rows[0] instanceof GiftCard) {
    return (
      <div className={tableCls}>
        {rows.map((item) => (
          <div key={item.id} className={styles.mobile_item}>
            <div className={styles.mobile_item__info}>
              <div className={styles.info__head}>
                <img src={item.images[0].original} alt="" className={styles.head__img} />
                <p className={styles.head__title}>{item.title}</p>
                <button type={"button"} className={styles.head__delete}>
                  <Icons.Delete />
                </button>
              </div>
              <div className={`${styles.info__row} ${styles.info__row_bold}`}>
                <div className={styles.row__col}>Գին</div>
                <div className={styles.row__col}>88.000 AMD</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={tableCls}>
      {rows.map((item) => (
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
                <div className={styles.count_cell__content}>
                  <button type={"button"} style={{ marginTop: -5 }}>
                    <Icons.Minus />
                  </button>

                  <p>1</p>

                  <button type={"button"}>
                    <Icons.Plus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.info__row}>
              <div className={styles.row__col}>Գին</div>
              <div className={styles.row__col}>88.000 AMD</div>
            </div>
            <div className={styles.info__row}>
              <div className={styles.row__col}>Տեղադրում</div>
              <div className={styles.row__col}>
                <Icons.CancleCircle className={styles.cancel_circle} /> 3.000 AMD
              </div>
            </div>
            <div className={`${styles.info__row} ${styles.info__row_bold}`}>
              <div className={styles.row__col}>Գին</div>
              <div className={styles.row__col}>88.000 AMD</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobileTable;
