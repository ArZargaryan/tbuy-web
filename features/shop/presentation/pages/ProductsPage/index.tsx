import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { useAppSelector } from "@core/store";
import DefaultLayout from "@layouts/default";

import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";

import ProductCategoriesSlider from "@features/shop/presentation/pages/ProductsPage/components/ProductCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";

import styles from "./products-page.module.scss";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";

function ProductsPage() {
  const { t } = useTranslation(["catalog/productspage", "common"]);
  const { items } = useAppSelector((state) => state.shop_products);
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
      <div className={"container"}>
        <section className={styles.products_section}>
          {/* <ProductMainCategoriesSlider /> */}
          <TitleWithSort
            sortItems={[
              { id: 0, value: "Գինը ըստ նվազման" },
              { id: 1, value: "Գինը ըստ նվազման" }
            ]}
            selectLabel={"Գինը ըստ նվազման"}
          >
            {" "}
            {t("title")}
          </TitleWithSort>

          <ProductCategoriesSlider />
          <FiltersList
            filters={[{ value: "Արագածոտն" }, { value: "1000 - 5000 AMD" }, { value: "200մ" }]}
          />
          {/*mock loading*/}
          <InfiniteCard cards={itemss} loading={loading} loadMore={fetchMoreData} />
          {/* <TbuyPagination count={5} /> */}
        </section>

        {/* <section className={styles.products_section}>
          <CardSlider title={`${t("requirements_categories")}`} cards={items} isProducts />
          <Link href={"/"} className={`link ${styles.see_all}`}>
            {t("see_all", { ns: "common" })}
          </Link>
        </section>

        <CardSlider title={`${t("related_products")}`} cards={items} isProducts /> */}
      </div>
    </DefaultLayout>
  );
}

export default ProductsPage;
