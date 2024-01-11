import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Product } from "@libs/domain/model/product";

import styles from "./cart-products-table.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import MobileTable from "@features/cart/presentation/components/CartProductsTable/components/MobileTable";
import { GiftCard } from "@libs/domain/model/giftCard";

type Props = {
  rows: GiftCard[] | Product[];
};

const { Icons } = ImgExporter;

function CartProductsTable(props: Props) {
  const { rows = [] } = props;

  const isGiftCards = rows[0] instanceof GiftCard;

  return (
    <>
      <TableContainer>
        <Table aria-label="simple table" className={styles.table_container}>
          <TableHead>
            <TableRow>
              {rows[0] instanceof Product && <TableCell>&nbsp;</TableCell>}
              <TableCell style={{ maxWidth: 104 }}>Նկար</TableCell>
              <TableCell style={{ maxWidth: 240 }}>Անուն</TableCell>
              <TableCell style={{ maxWidth: 240 }}>Գին</TableCell>
              <TableCell className={styles.count_head}>{!isGiftCards && "Քանակ"}</TableCell>
              <TableCell style={{ maxWidth: 240 }}>{!isGiftCards && "Ընդհանուր"}</TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {row instanceof Product && (
                  <TableCell>
                    <Checkbox variant={"secondary_filled"} />
                  </TableCell>
                )}
                <TableCell component="th" scope="row">
                  <img src={row.images[0].original} alt="" />
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ maxWidth: 240 }}
                  className={styles.title_cell}
                >
                  <p className={styles.title_cell__text}>{row.title}</p>
                  {!isGiftCards && (
                    <div className={styles.title_cell__price}>
                      <p>
                        Տեղադրում: <strong>3 000 AMD</strong>
                      </p>
                      <Icons.CancleCircle />
                    </div>
                  )}
                </TableCell>

                <TableCell style={{ maxWidth: 240 }}>{row.price} AMD</TableCell>

                <TableCell className={styles.count_cell}>
                  {!isGiftCards && (
                    <div className={styles.count_cell__content}>
                      <button type={"button"} style={{ marginTop: -5 }}>
                        <Icons.Minus />
                      </button>

                      <p>1</p>

                      <button type={"button"}>
                        <Icons.Plus />
                      </button>
                    </div>
                  )}
                </TableCell>

                <TableCell style={{ maxWidth: 240 }}>
                  {!isGiftCards && `${row.price} AMD`}
                </TableCell>

                {/*<TableCell align="right">{row.carbs}</TableCell>*/}
                <TableCell align="right" className={styles.delete_cell}>
                  <button type={"button"}>
                    <Icons.Delete />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <MobileTable rows={rows} />
    </>
  );
}

export default CartProductsTable;
