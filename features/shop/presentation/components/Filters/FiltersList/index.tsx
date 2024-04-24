import React, { HTMLAttributes } from "react";
import FiltersItem, {
  FiltersItemProps
} from "@features/shop/presentation/components/Filters/FiltersItem";

import styles from "./filters-list.module.scss";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

interface Props extends HTMLAttributes<HTMLDivElement> {
  filters: FiltersItemProps[];
}

function FiltersList(props: Props) {
  const { t } = useTranslation(["common"]);
  const { filters = [] } = props;
  const divProps = {
    ...props,
    filters: null
  };

  const cls = classNames(styles.filters_list, props?.className);

  return (
    <div {...divProps} className={cls}>
      {filters?.map(({ value }, i) => (
        <FiltersItem key={`${value}_${i}`} value={value} className={styles.filters_list__item} />
      ))}

      <button className={styles.filters_reset}>
        {t("actions.reset_filters", { ns: "common" })}
      </button>
    </div>
  );
}

export default FiltersList;
