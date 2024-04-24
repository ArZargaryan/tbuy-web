import React, { useEffect, useState } from "react";
import DefaultLayout from "@layouts/default";
import TitleWithLink from "@libs/presentation/components/titles/TitleWithLink";
import VacancyCategoriesSlider from "@features/vacancies/presentation/pages/VacanciesPage/components/VacancyCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";

import styles from "./vacancies-page.module.scss";
import { useAppSelector } from "@core/store";
import MobileFilter from "@core/mobileFilter/mobileFilter";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";
import { useTranslation } from "next-i18next";

function VacanciesPage() {
  const { t } = useTranslation(["catalog/vacancies-page"]);
  const { items } = useAppSelector((state) => state.vacancies);
  const [itemss, setItemss] = useState(items);
  const [loading, setLoading] = useState(false);

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
        <TitleWithLink
          linkText={t<string>("create_online_cv", { ns: "catalog/vacancies-page" })}
          linkPath={""}
          className={`page_title ${styles.page_title}`}
        >
          {t("vacancies", { ns: "catalog/vacancies-page" })}
        </TitleWithLink>
        <h2 className={`${styles.mobile_page_title}`}>
          {t("vacancies", { ns: "catalog/vacancies-page" })}
        </h2>

        {screenWidth && screenWidth > 500 ? <VacancyCategoriesSlider /> : <MobileFilter />}
        <FiltersList
          filters={[
            { value: "Հաշվապահություն" },
            { value: "1000 - 5000 AMD" },
            { value: "ZIGZAG" }
          ]}
        />

        <p className={`${styles.mobile_page_title_link}`}>
          {t("create_online_cv", { ns: "catalog/services-list" })}
        </p>

        <InfiniteCard cards={itemss} loading={loading} loadMore={fetchMoreData} />
      </div>
    </DefaultLayout>
  );
}

export default VacanciesPage;
