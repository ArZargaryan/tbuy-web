import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { useAppSelector } from "@core/store";

import Link from "next/link";
import CardSlider from "@libs/presentation/components/cards/CardsSlider";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import ServiceCategoriesSlider from "./components/ServiceCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import DefaultLayout from "@layouts/default";

import styles from "./services-page.module.scss";
import CardsList from "@libs/presentation/components/cards/CardsList";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";

function ServicesPage() {
  const { t } = useTranslation(["catalog/servicespage", "common"]);
  const { items } = useAppSelector((state) => state.services);
  const [itemss, setItemss] = useState(items);
  const [loading, setLoading] = useState(false);

  const fetchMoreData = async () => {
    setLoading(true);
    setTimeout(() => {
      setItemss((prevItems) => [...prevItems, ...prevItems]);
    }, 3000);
    setLoading(false);
  };

  return (
    <DefaultLayout>
      <div className="container">
        <section className={styles.services_section}>
          <TitleWithSort
            sortItems={[
              { id: 0, value: "Գինը ըստ նվազման" },
              { id: 1, value: "Գինը ըստ նվազման" }
            ]}
            selectLabel={"Գինը ըստ նվազման"}
          >
            {t("title")}
          </TitleWithSort>

          <ServiceCategoriesSlider />
          <FiltersList
            filters={[{ value: "Ականջակալներ" }, { value: "1000 - 5000 AMD" }, { value: "ZIGZAG" }]}
          />
          {/*mock loading*/}
          <InfiniteCard cards={itemss} loading={loading} loadMore={fetchMoreData} />
          {/* <TbuyPagination count={5} /> */}
        </section>

        {/* <section className={styles.services_section}>
          <CardSlider title={`${t("requirements_categories")}`} cards={items} />
          <Link href={"/"} className={`link ${styles.see_all}`}>
            {t("actions.see_all", { ns: "common" })}
          </Link>
        </section>

        <CardSlider title={`${t("related_products")}`} cards={items} /> */}
      </div>
    </DefaultLayout>
  );
}

export default ServicesPage;
