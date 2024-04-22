import React from "react";
import DefaultLayout from "@layouts/default";
import styles from "@features/shop/presentation/pages/ProductsPage/products-page.module.scss";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import ProductCategoriesSlider from "@features/shop/presentation/pages/ProductsPage/components/ProductCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import CardsList from "@libs/presentation/components/cards/CardsList";
// import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import CardSlider from "@libs/presentation/components/cards/CardsSlider";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "@core/store";

function FavoritePage() {
  const { t } = useTranslation(["catalog/productspage", "common"]);
  const { items } = useAppSelector((state) => state.account_favorite);
  return (
    <DefaultLayout>
      <div className="container">
        <section className={styles.products_section}>
          <TitleWithSort
            sortItems={[
              { id: 0, value: "Գինը ըստ նվազման" },
              { id: 1, value: "Գինը ըստ նվազման" }
            ]}
            selectLabel={"Գինը ըստ նվազման"}
          >
            ՆԱԽԸՆՏՐԱԾՆԵՐ
          </TitleWithSort>

          <ProductCategoriesSlider />
          <FiltersList
            filters={[{ value: "Ականջակալներ" }, { value: "1000 - 5000 AMD" }, { value: "ZIGZAG" }]}
          />
          {/*mock loading*/}
          <CardsList cards={items} loading={false} />
          {/*<TbuyPagination count={5} />*/}
        </section>

        <section className={styles.products_section}>
          <CardSlider title={`Համանման ապրանքներ`} cards={items} />
          {/* <Link href={"/"} className={`link ${styles.see_all}`}>
            {t("see_all", { ns: "common" })}
          </Link> */}
        </section>

        <section className={styles.products_section}>
          <CardSlider title={`ՀԱՏՈՒԿ ԱՌԱՋԱՐԿՆԵՐ`} cards={items} />
        </section>
      </div>
    </DefaultLayout>
  );
}

export default FavoritePage;
