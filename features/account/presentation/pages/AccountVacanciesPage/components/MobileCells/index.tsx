import React from "react";
import { map } from "lodash";
import styles from "./mobile_cells.module.scss";

interface Props<T, U> {
  rows: T[];
  titles: U;
}

function MobileCells<
  T extends {
    [index: string]: string | number;
  } & { MobileExtraComponent?: () => JSX.Element },
  U extends {
    [index: string]: string;
  }
>({ rows, titles }: Props<T, U>) {
  return (
    <div>
      {map(rows, (row: T) => {
        const { MobileExtraComponent = () => <></> } = row;
        const rowsTitles = Object.keys(row);

        return (
          <div className={styles.mobile_block}>
            {map(rowsTitles, (cell) => {
              if (cell === "id" || !titles[`${cell}`]) return null;
              return (
                <div className={styles.mobile_cell}>
                  <div className={styles.mobile_cell__title}>{titles[`${cell}`]}</div>
                  <div className={styles.mobile_cell__text}>{row[`${cell}`]}</div>
                </div>
              );
            })}
            <MobileExtraComponent />
          </div>
        );
      })}
    </div>
  );
}

export default MobileCells;
