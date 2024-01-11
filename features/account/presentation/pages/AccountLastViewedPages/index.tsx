import React from "react";
import AccountLayout from "@layouts/account-layout";
import IntervalDatePicker from "@libs/presentation/components/form/date-pickers/IntervalDatePicker";
import ViewedPagesTabs from "@features/account/presentation/pages/AccountLastViewedPages/components/ViewedPagesTabs";
import { useAppSelector } from "@core/store";
import styles from "./last-viewed-pages.module.scss";

function AccountLastViewedPages() {
  const { products, services } = useAppSelector((state) => state.account_last_viewed_pages);

  return (
    <AccountLayout contentClassName={styles.last_viewed_content}>
      <div className={`${styles.last_viewed} account_content`}>
        <div className={styles.last_viewed__head}>
          <h2 className={"title title_account"}>Վերջին դիտված էջերը</h2>
          <IntervalDatePicker />
        </div>

        <div className={styles.last_viewed__content}>
          <ViewedPagesTabs products={products} services={services} />
        </div>
      </div>
    </AccountLayout>
  );
}

export default AccountLastViewedPages;
