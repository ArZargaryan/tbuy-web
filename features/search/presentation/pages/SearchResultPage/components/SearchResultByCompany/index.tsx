import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchLayout from "@layouts/search";
import { useAppSelector } from "@core/store";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import CardsList from "@libs/presentation/components/cards/CardsList";
import ResultFiltersSlider from "@features/search/presentation/pages/SearchResultPage/components/ResultFiltersSlider";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import CardSlider from "@libs/presentation/components/cards/CardsSlider";

import styles from "../../search-result.module.scss";
import { Shimmer } from "react-shimmer";
import MobileFilter from "@core/mobileFilter/mobileFilter";

function SearchResultByCompanyPage() {
  const router = useRouter();
  const { q, company } = router.query;
  const { items } = useAppSelector((state) => state.search_result);
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
    <SearchLayout q={q as string}>
      <div className="container">
        <TitleWithSort
          sort_items={[
            { id: 0, value: "Գինը ըստ նվազման" },
            { id: 1, value: "asd" },
            { id: 2, value: "asd" }
          ]}
          select_label="Գինը ըստ նվազման"
          defaultValue={1}
        >
          <div className={styles.title_company}>
            <div className={styles.title_company__logo}>
              <img
                src={"https://tbuy.am/imgs/partnersimg/10014d8.png"}
                alt=""
                onLoad={(event) => event.currentTarget.classList.add(styles.loaded_image)}
              />
              <Shimmer height={32} width={400} className={styles.shimmer} />
            </div>
            <p className={"title"}> Որոնում &quot;{company}&quot;</p>
          </div>
        </TitleWithSort>

        {screenWidth && screenWidth > 500 ? (
          <ResultFiltersSlider mode={"by_company"} />
        ) : (
          <MobileFilter />
        )}

        <FiltersList
          filters={[{ value: "Արագածոտն" }, { value: "1000 - 5000 AMD" }, { value: "200մ" }]}
        />

        {/*mock loading*/}
        <div className={styles.list_section}>
          <CardsList cards={items} loading={false} />
          <TbuyPagination count={5} />
        </div>

        <section className={styles.similar_products_slider}>
          <CardSlider title={`Համանման ապրանքներ`} cards={items} />
        </section>
      </div>
    </SearchLayout>
  );
}

export default SearchResultByCompanyPage;
