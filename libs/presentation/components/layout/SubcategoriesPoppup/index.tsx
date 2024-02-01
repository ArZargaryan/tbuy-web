import React, { useState } from "react";
import styles from "./subcategories-poppup.module.scss";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Category } from "@libs/domain/model/category";
import Link from "next/link";
import { Shimmer } from "react-shimmer";

type Props = {
  active: boolean;
  items: Category[];
  mobileItems: Category[];
  onSubClick: (id: number) => void;
  loading: boolean;
  inNavbar?: boolean;
};

function SubcategoriesPoppup({ active, items, mobileItems, onSubClick, loading, inNavbar }: Props) {
  const cls = classNames(styles.assortment, {
    [styles.active]: active,
    [styles.menu_assortment]: inNavbar
  });

  const [categoryIds, setCategoryIds] = useState<[number, number, number, number]>([0, 0, 0, 0]);

  const changeCategory = (id: number, colId: number) => {
    setCategoryIds((prev) => {
      const newCategories = prev;
      newCategories[colId] = id;
      return newCategories;
    });
  };

  const { Arrows } = ImgExporter;

  const renderItems = (items: Category[], colId: number): React.ReactNode => {
    return items?.map((listItem, i) => {
      const newCol = colId + 1;
      return (
        <li
          key={`${listItem.label}_${i}`}
          className={`${styles.list__item} ${
            categoryIds.includes(listItem.id) ? styles.list__item_active : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            changeCategory(listItem.id, colId);
          }}
        >
          <Link
            href={listItem.numberOfSubcategories ? "" : `/products?category=${listItem.id}`}
            className={`${styles.list__link}`}
            onClick={() => onSubClick(listItem.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={listItem.icon as string} alt="" className={styles.list__link_icon} />
            <span className={styles.list__link_txt}>{listItem.label}</span>
            {!!listItem.numberOfSubcategories && (
              <span className={styles.arrow}>
                <Arrows.Down className={styles.list__link_icon} />
              </span>
            )}
          </Link>

          {!!listItem.subcategories?.length && categoryIds.includes(listItem.id) && (
            <ul className={`${styles.list__sub}`}>{renderItems(listItem.subcategories, newCol)}</ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className={cls}>
      <div className={styles.assortment_content}>
        <ul className={styles.list}>{renderItems(items, 0)}</ul>
      </div>

      <div className={styles.mobile_assortment}>
        {loading && <Shimmer height={500} width={1600} duration={2000} />}
        <ul className={styles.mobile_assortment__list}>
          {!loading &&
            mobileItems?.map((listItem, i) => (
              <li key={`${listItem.label}_${i}`} className={styles.list__li}>
                <Link
                  href={listItem.numberOfSubcategories ? "" : `/products?category=${listItem.id}`}
                  onClick={() => onSubClick(listItem.id)}
                  className={styles.li__link}
                >
                  <div className={styles.li__link_icon}>
                    <img src={ImgExporter.Icons.categoryIcon.src} alt="" />
                  </div>
                  <span className={styles.li__link_txt}>{listItem.label}</span>
                  {!!listItem.numberOfSubcategories && (
                    <span className={styles.arrow}>
                      <Arrows.Down className={styles.li__link_icon} />
                    </span>
                  )}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default SubcategoriesPoppup;
