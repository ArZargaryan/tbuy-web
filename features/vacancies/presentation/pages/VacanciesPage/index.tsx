import React, { useEffect, useState } from "react";
import DefaultLayout from "@layouts/default";
import TitleWithLink from "@libs/presentation/components/titles/TitleWithLink";
import VacancyCategoriesSlider from "@features/vacancies/presentation/pages/VacanciesPage/components/VacancyCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";

import styles from "./vacancies-page.module.scss";
import CardsList from "@libs/presentation/components/cards/CardsList";
import { useAppSelector } from "@core/store";
import MobileFilter from "@core/mobileFilter/mobileFilter";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";

function VacanciesPage() {
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
      <div className={"container"}>
        <TitleWithLink
          linkText={"Ստեղծել օնլայն ռեզյումե"}
          linkPath={""}
          className={`page_title ${styles.page_title}`}
        >
          ԹԱՓՈՒՐ ԱՇԽԱՏԱՏԵՂԵՐ
        </TitleWithLink>
        <h2 className={`${styles.mobile_page_title}`}>ԹԱՓՈՒՐ ԱՇԽԱՏԱՏԵՂԵՐ</h2>

        {screenWidth && screenWidth > 500 ? <VacancyCategoriesSlider /> : <MobileFilter />}
        <FiltersList
          filters={[{ value: "Ականջակալներ" }, { value: "1000 - 5000 AMD" }, { value: "ZIGZAG" }]}
        />

        <p className={`${styles.mobile_page_title_link}`}>Ստեղծել օնլայն ռեզյումե</p>

        <InfiniteCard cards={itemss} loading={loading} loadMore={fetchMoreData} />
      </div>
    </DefaultLayout>
  );
}

export default VacanciesPage;
