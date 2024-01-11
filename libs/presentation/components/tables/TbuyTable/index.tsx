import React from "react";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import classNames from "classnames";

import styles from "./tbuy-table.module.scss";

type Props = DataGridProps;

function TbuyTable(props: Props) {
  const cls = classNames(styles.tbuy_table, props.className);

  return (
    <DataGrid
      hideFooter
      disableColumnFilter={true}
      disableColumnSelector={true}
      disableColumnMenu={true}
      disableDensitySelector={true}
      disableRowSelectionOnClick={true}
      density={"comfortable"}
      {...props}
      className={cls}
    />
  );
}

export default TbuyTable;
