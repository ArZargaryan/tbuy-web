import React, { useState } from "react";
import styles from "./assortment.module.scss";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Category } from "@libs/domain/model/category";
import Link from "next/link";
import { Shimmer } from "react-shimmer";

type Props = {
  active: boolean;
  items: Category[];
  mobileItems: Category[];
  onSubClick?: (id: number) => void;
  loading: boolean;
  inNavbar?: boolean;
  closePoppup?: () => void;
};

const blob = () => {
  return;
};

function AssortmentPoppup({
  active,
  items,
  mobileItems,
  onSubClick = blob,
  loading,
  inNavbar,
  closePoppup
}: Props) {
  const cls = classNames(styles.assortment, {
    [styles.active]: active,
    [styles.menu_assortment]: inNavbar
  });

  const [categoryIds, setCategoryIds] = useState<[number, number, number, number]>([0, 0, 0, 0]);

  const changeCategory = (id: number, colId: number) => {
    setCategoryIds((prev) => {
      const newCategories = prev;
      newCategories[colId] = id;
      newCategories[++colId] = 0;
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
            onSubClick(listItem.id);
          }}
        >
          <Link
            href={listItem.numberOfSubcategories ? "" : `/products?category=${listItem.id}`}
            className={`${styles.list__link}`}
            style={{
              cursor: "pointer",
              pointerEvents: listItem.numberOfSubcategories ? "none" : "initial"
            }}
          >
            <img src={listItem.icon} alt="" className={styles.list__link_icon} />
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

  const getWidth = () => {
    if (categoryIds.filter((num) => num !== 0).length == 0) {
      return {
        containerWidth: "25%",
        itemWidth: "100%"
      };
    } else if (categoryIds.filter((num) => num !== 0).length == 1) {
      return {
        containerWidth: "50%",
        itemWidth: "50%"
      };
    } else if (categoryIds.filter((num) => num !== 0).length == 2) {
      return {
        containerWidth: "75%",
        itemWidth: "33.333%"
      };
    }
    return {
      containerWidth: "100%",
      itemWidth: "25%"
    };
  };

  return (
    <>
      <div className={cls}>
        <div className={styles.assortment_content}>
          {active && closePoppup && (
            <div
              className={`${styles.bg_overflow_blur} ${styles.bg_overflow_blur_close}`}
              onClick={closePoppup}
            ></div>
          )}
          <div
            className={styles.assortment_content_wrapper}
            style={{ width: getWidth().containerWidth }}
          >
            <ul className={styles.list} style={{ width: getWidth().itemWidth }}>
              {renderItems(items, 0)}
            </ul>
          </div>
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
                      <img src={ImgExporter.blob.categoryIcon.src} alt="" />
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
      {active && closePoppup && (
        <div className={styles.bg_overflow_blur} onClick={closePoppup}></div>
      )}
      {active && closePoppup && (
        <div
          className={`${styles.bg_overflow_blur} ${styles.bg_overflow_blur_white}`}
          onClick={closePoppup}
        ></div>
      )}
    </>
  );
}
export default AssortmentPoppup;
