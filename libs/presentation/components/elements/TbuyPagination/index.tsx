import React from "react";
import Pagination, { PaginationProps } from "@mui/material/Pagination";
import styles from "./pagination.module.scss";

function TbuyPagination(props: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <Pagination {...props} shape="rounded" />
    </div>
  );
}

export default TbuyPagination;
