import React, { FC, useState } from "react";
import { Table, TableCell, TableRow } from "@mui/material";
import { GiftCard } from "@libs/domain/model/giftCard";
import { Product } from "@libs/domain/model/product";
import { changeRowVisibility } from "@features/account/presentation/components/ProductTable/model/changeRowVisibility";
import MobileTable from "@features/account/presentation/components/ProductTable/components/MobileTable";
import { AccountProductTableRowData } from "@features/account/domain/account_product_table_row_data";
import styles from "./product-table.module.scss";
import classNames from "classnames";
import { ProductInfo } from "@features/account/domain/product_info";
import { ImgExporter } from "@core/helpers/ImgExporter";

type TProduct = GiftCard | Product | ProductInfo;

interface Props<T extends TProduct> {
  rows: AccountProductTableRowData<T>[];
  ChildComponent: FC<AccountProductTableRowData<T>>;
  variant?: "default" | "outgoing_gift_cards" | "orders";
  withChat?: boolean;
  onChatClick?: (info: { name: string }) => void;
}

const { Icons } = ImgExporter;

function ProductTable<T extends TProduct>(props: Props<T>) {
  const [activeColumn, setActiveColumn] = useState<string | null>(null);
  const {
    rows,
    ChildComponent,
    variant = "default",
    withChat,
    onChatClick = () => console.log("")
  } = props;

  const cls = classNames(styles.table_container, {
    [styles[`variant-${variant}`]]: variant
  });

  return (
    <div className={styles.table_wrapper}>
      <Table aria-label="simple table" className={cls}>
        <thead className={styles.table_head}>
          <TableRow>
            <TableCell>Պատվերի համար</TableCell>
            <TableCell>Ամսաթիվ</TableCell>
            <TableCell>Կարգավիճակ</TableCell>
            <TableCell>Գնված է</TableCell>
            {variant === "orders" && <TableCell>Վաճառող</TableCell>}
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
            <TableCell
              style={{ display: variant === "outgoing_gift_cards" ? "block" : "none" }}
            ></TableCell>
          </TableRow>
        </thead>

        <tbody className={styles.table_body}>
          {rows.map((row) => {
            const { orderInfo } = row;
            const isActiveColumn = activeColumn === orderInfo.id;
            return (
              <>
                <TableRow
                  key={row.orderInfo.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>#{orderInfo.id}</TableCell>
                  <TableCell>{orderInfo.date}</TableCell>
                  <TableCell>{orderInfo.state}</TableCell>
                  <TableCell className={styles.chat_cell}>
                    {orderInfo.paymentType}{" "}
                    {withChat && (
                      <Icons.Chat onClick={() => onChatClick({ name: orderInfo.paymentType })} />
                    )}
                  </TableCell>
                  {variant === "orders" && (
                    <TableCell style={{ textDecoration: "underline" }}>
                      {orderInfo.company}
                    </TableCell>
                  )}
                  <TableCell>{orderInfo.totalPrice}</TableCell>

                  <TableCell>
                    <button
                      className={"blue_text"}
                      style={{ fontSize: 16 }}
                      onClick={() =>
                        changeRowVisibility(orderInfo.id, activeColumn, setActiveColumn)
                      }
                    >
                      {isActiveColumn ? "ՓԱԿԵԼ" : "ՏԵՍՆԵԼ ԱՎԵԼԻՆ"}
                    </button>
                  </TableCell>
                  <TableCell
                    style={{ display: variant === "outgoing_gift_cards" ? "block" : "none" }}
                  >
                    <button
                      style={{
                        color: "red",
                        fontWeight: "bold"
                      }}
                      disabled={!orderInfo.active}
                    >
                      ՆՎիՐԵԼ
                    </button>
                  </TableCell>
                </TableRow>

                <tr style={{ display: isActiveColumn ? "block" : "none" }}>
                  <td className={styles.child_td}>
                    <ChildComponent {...row} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <MobileTable {...props} />
    </div>
  );
}

export default ProductTable;
