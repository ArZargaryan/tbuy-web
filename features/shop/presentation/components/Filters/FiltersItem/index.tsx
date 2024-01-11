import React from "react";
import { ImgExporter } from "@core/helpers/ImgExporter";
import styles from "./filters-item.module.scss";
import classNames from "classnames";

export interface FiltersItemProps {
  className?: string;
  value: string;
}

function FiltersItem(props: FiltersItemProps) {
  const { value, className } = props;
  const cls = classNames(styles.filter, className);
  const { Icons } = ImgExporter;
  return (
    <div className={cls}>
      <p>{value}</p>
      <button>
        <Icons.Cross />
      </button>
    </div>
  );
}

export default FiltersItem;
