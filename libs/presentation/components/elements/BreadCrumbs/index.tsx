import React from "react";
import styles from "./bread-crumbs.module.scss";
import Link from "next/link";

interface Item {
  value: string;
  link: string;
}

interface Props {
  items: Item[];
}

function BreadCrumbs({ items }: Props) {
  return (
    <div className={styles.bread_crumbs}>
      {items.map((item, idx) => (
        <Link href={item.link} key={`${item.link}_${idx}`} className={styles.bread_crumbs__item}>
          {item.value + (idx === items.length - 1 ? "" : " ")}
        </Link>
      ))}
    </div>
  );
}

export default BreadCrumbs;
