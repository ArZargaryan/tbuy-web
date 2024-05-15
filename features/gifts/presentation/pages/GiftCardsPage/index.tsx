import React, { useEffect, useState } from "react";
import DefaultLayout from "@layouts/default";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import GiftCardCategoriesSlider from "@features/gifts/presentation/pages/GiftCardsPage/components/GiftCardCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import CardsList from "@libs/presentation/components/cards/CardsList";
import { useAppSelector } from "@core/store";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";

import CardSlider from "@libs/presentation/components/cards/CardsSlider";
import { useTranslation } from "next-i18next";

import styles from "./gift-card.module.scss";
import MobileFilter from "@core/mobileFilter/mobileFilter";

function GiftCardsPage() {
  const { items, services } = useAppSelector((state) => state.gift_cards);

  const { t } = useTranslation(["catalog/servicespage", "common"]);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <DefaultLayout>
      <div className="container">
        <section className={styles.services_section}>
          <TitleWithSort
            sort_items={[
              { id: 0, value: "Գինը ըստ նվազման" },
              { id: 1, value: "Գինը ըստ նվազման" },
              { id: 2, value: "Գինը ըստ նվազման" }
            ]}
          >
            ՆՎԵՐ ՔԱՐՏ
          </TitleWithSort>

          {screenWidth && screenWidth > 500 ? <GiftCardCategoriesSlider /> : <MobileFilter />}

          <FiltersList
            filters={[{ value: "Ականջակալներ" }, { value: "1000 - 5000 AMD" }, { value: "ZIGZAG" }]}
          />

          <CardsList cards={items} loading={false} />
          <TbuyPagination count={5} />
        </section>

        <section className={styles.services_section}>
          <CardSlider title={`${t("requirements_categories")}`} cards={services} />
        </section>
      </div>
    </DefaultLayout>
  );
}

export default GiftCardsPage;
