import { ImgExporter } from "@core/helpers/ImgExporter";
import styles from "@libs/presentation/components/layout/Navbar/navbar.module.scss";
import Link from "next/link";
import React from "react";

export function DefaultMobileMenu() {
  const { Icons } = ImgExporter;
  return (
    <div className={styles.mobile_menu}>
      <div>
        <Icons.SearchWithList className={`${styles.mobile_menu__item} ${styles.prompt}`} />
      </div>
      <Link href={"/vacancies"} className={`${styles.mobile_menu__item} ${styles.prompt}`}>
        <Icons.BagOutlined />
      </Link>
      <Link href={"/gift_cards"} className={`${styles.mobile_menu__item} ${styles.prompt}`}>
        <Icons.GiftCardOutlined />
      </Link>
    </div>
  );
}
