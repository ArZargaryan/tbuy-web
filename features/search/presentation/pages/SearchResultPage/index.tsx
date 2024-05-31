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
import Tooltip from "@libs/presentation/components/elements/Tooltip";
import FilterSlider from "@libs/presentation/components/elements/FilterSlider";
import { SwiperSlide } from "swiper/react";

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
    <SearchLayout q="">
      <div className="container">
        <div className={styles.header}>
          <Tooltip
            close_on_click
            label={
              <div className={styles.filter_title}>
                <span>Տեսակ ({72})</span>
                <ArrowDownIcon />
              </div>
            }
          >
            <div className={styles.filter_title_dropdown}>
              <div className={styles.filter_title_dropdown__text}>Անունով</div>
              <div className={styles.filter_title_dropdown__text}>Ըստ գնի</div>
              <div className={styles.filter_title_dropdown__text}>Հաշվի մեջ</div>
              <div className={styles.filter_title_dropdown__text}>Ըստ ամսաթվի</div>
            </div>
          </Tooltip>

          <div className={styles.stripe}></div>

          <div className={styles.filter_slider}>
            <FilterSlider>
              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Գին</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Վիճակ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.filter_item}>
                      <span>Ապրանքանիշ</span>
                      <ArrowDownIcon />
                    </div>
                  }
                ></Tooltip>
              </SwiperSlide>
            </FilterSlider>
          </div>
        </div>

        <div className={styles.categories_flex}>
          <FiltersList
            filters={[{ value: "Արագածոտն" }, { value: "1000 - 5000 AMD" }, { value: "200մ" }]}
            className={styles.filters_list}
          />
          {screenWidth && screenWidth > 500 && <ResultFiltersSlider />}
        </div>

        <div className={styles.search_section}>
          <CardSlider title={``} cards={items} extra_type="short" />
        </div>

        <div className={styles.title}>Դյուրակիր կապույր հեռակառավարվող ակուստիկ նվագ... </div>

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

const ArrowDownIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <g clip-path="url(#clip0_269_46901)">
        <path
          d="M10.6654 13.3327L15.9987 18.666L21.332 13.3327"
          stroke="#1D1D1D"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_269_46901">
          <rect width="32" height="32" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};
