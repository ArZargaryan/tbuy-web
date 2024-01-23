import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAppSelector } from "@core/store";

import SearchLayout from "@layouts/search";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import CardsList from "@libs/presentation/components/cards/CardsList";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import CardSlider from "@libs/presentation/components/cards/CardsSlider";

import ResultFiltersSlider from "@features/search/presentation/pages/SearchResultPage/components/ResultFiltersSlider";
import ResultCategoriesSlider from "@features/search/presentation/pages/SearchResultPage/components/ResultCategoriesSlider";
import SearchResultByCompanyPage from "@features/search/presentation/pages/SearchResultPage/components/SearchResultByCompany";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";

import styles from "./search-result.module.scss";
import MobileFilter from "@core/mobileFilter/mobileFilter";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";

function SearchResultPage() {
  const router = useRouter();
  const { q } = router.query;
  const { items } = useAppSelector((state) => state.search_result);
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

  if (router.query?.company) {
    return <SearchResultByCompanyPage />;
  }

  const fetchMoreData = async () => {
    setLoading(true);
    setTimeout(() => {
      setItemss((prevItems) => [...prevItems, ...prevItems]);
    }, 3000);
    setLoading(false);
  };

  return (
    <SearchLayout q={q as string}>
      <div className={"container"}>
        <ResultCategoriesSlider />
        <TitleWithSort
          sortItems={[
            { id: 0, value: "Գինը ըստ նվազման" },
            { id: 1, value: "asd" },
            { id: 2, value: "asd" }
          ]}
          selectLabel={"Գինը ըստ նվազման"}
          defaultValue={1}
          className={styles.title}
        />
        <div className={styles.categories_flex}>
          <FiltersList
            filters={[{ value: "Արագածոտն" }, { value: "1000 - 5000 AMD" }, { value: "200մ" }]}
            className={styles.filters_list}
          />
          {screenWidth && screenWidth > 500 ? <ResultFiltersSlider /> : <MobileFilter />}
        </div>

        <div className={styles.search_section}>
          <CardSlider title={``} cards={items} extraType={"short"} />
        </div>

        {/*mock loading*/}
        <div className={styles.list_section}>
          <InfiniteCard cards={itemss} loading={loading} loadMore={fetchMoreData} />
          {/* <TbuyPagination count={5} /> */}
        </div>

      </div>
    </SearchLayout>
  );
}

export default SearchResultPage;
