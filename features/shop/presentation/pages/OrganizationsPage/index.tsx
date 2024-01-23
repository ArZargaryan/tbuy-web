import React, { useState } from "react";
import { useAppSelector } from "@core/store";
import DefaultLayout from "@layouts/default";

import TitleWithLink from "@libs/presentation/components/titles/TitleWithLink";
import OrganizationsCategorySlider from "@features/shop/presentation/pages/OrganizationsPage/components/OrganizationsCategorySlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import CardsList from "@libs/presentation/components/cards/CardsList";
import AlphabetFilter from "@libs/presentation/components/form/AlphabetFilter";

import styles from "./organizations.module.scss";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";

function OrganizationsPage() {
  const { items, loading } = useAppSelector((state) => state.shop_organizations);
  const [itemss, setItemss] = useState(items);
  const [loadings, setLoadings] = useState(loading);

  const fetchMoreData = async () => {
    setLoadings(true);
    setTimeout(() => {
      setItemss((prevItems) => [...prevItems, ...prevItems]);
    }, 3000);
    setLoadings(false);
  };

  return (
    <DefaultLayout>
      <div className={`${styles.organizations} container`}>
        <TitleWithLink className={styles.organizations__title}>ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐ</TitleWithLink>
        <OrganizationsCategorySlider />
        <FiltersList
          className={styles.desktop_item}
          filters={[{ value: "Ականջակալներ" }, { value: "1000 - 5000 AMD" }, { value: "ZIGZAG" }]}
        />

        <AlphabetFilter style={{ marginBottom: 30 }} />

        <InfiniteCard cards={itemss} loading={loadings} loadMore={fetchMoreData} />
      </div>
    </DefaultLayout>
  );
}

export default OrganizationsPage;
