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
import Checkbox from "@libs/presentation/components/form/checkbox";

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

        <section className={styles.categories}>
          <Tooltip
            label={
              <div className={styles.categories__favorite}>
                Ընտրվածներ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10.6654 6.66732L7.9987 9.33398L5.33203 6.66732"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className={styles.categories__favorite_counter}>20</div>
              </div>
            }
          >
            <div className={styles.tooltip}>
              <div className={styles.tooltip__label}>
                Արագածոտն
                <Close />
              </div>
              <div className={styles.tooltip__label}>
                1000 - 5000 AMD
                <Close />
              </div>
              <div className={styles.tooltip__label}>
                200մ
                <Close />
              </div>
            </div>
          </Tooltip>

          <div className={styles.stripe} />

          <div className={styles.slider}>
            <FilterSlider>
              <SwiperSlide>
                <Tooltip
                  label={
                    <div className={styles.categories__button}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.6289 14.75C21.6289 15.64 21.3789 16.48 20.9389 17.2C20.1189 18.58 18.6089 19.5 16.8789 19.5C15.1489 19.5 13.6389 18.57 12.8189 17.2C12.3789 16.49 12.1289 15.64 12.1289 14.75C12.1289 12.13 14.2589 10 16.8789 10C19.4989 10 21.6289 12.13 21.6289 14.75Z"
                          stroke="#6B718D"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.6594 14.7305H15.1094"
                          stroke="#6B718D"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.8789 13V16.55"
                          stroke="#6B718D"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.6886 4.02002V6.23999C20.6886 7.04999 20.1786 8.06001 19.6786 8.57001L17.9186 10.12C17.5886 10.04 17.2386 10 16.8786 10C14.2586 10 12.1286 12.13 12.1286 14.75C12.1286 15.64 12.3786 16.48 12.8186 17.2C13.1886 17.82 13.6986 18.35 14.3186 18.73V19.07C14.3186 19.68 13.9186 20.49 13.4086 20.79L11.9986 21.7C10.6886 22.51 8.86859 21.6 8.86859 19.98V14.63C8.86859 13.92 8.45859 13.01 8.05859 12.51L4.21859 8.46997C3.71859 7.95997 3.30859 7.05001 3.30859 6.45001V4.12C3.30859 2.91 4.21859 2 5.32859 2H18.6686C19.7786 2 20.6886 2.91002 20.6886 4.02002Z"
                          stroke="#6B718D"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Այլ
                      <GrayArrowDownIcon />
                    </div>
                  }
                >
                  <div className={styles.tooltip}>
                    <button className={styles.tooltip__reload}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44"
                          stroke="#6E00E5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 12C2 17.52 6.48 22 12 22"
                          stroke="#6E00E5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-dasharray="3 3"
                        />
                      </svg>
                      <span>Զրոյացնել</span>
                    </button>
                    <div className={styles.tooltip__checkboxes}>
                      <Checkbox text="Դյուրակիր" />
                      <Checkbox text="Հեռակառավարվող" />
                      <Checkbox text="Դյուրակիր" />
                      <Checkbox text="Հեռակառավարվող" />
                      <Checkbox text="Դյուրակիր" />
                      <Checkbox text="Հեռակառավարվող" />
                      <Checkbox text="Դյուրակիր" />
                      <Checkbox text="Հեռակառավարվող" />
                    </div>
                  </div>
                </Tooltip>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categories__button}>
                  Վիճակ
                  <GrayArrowDownIcon />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categories__button}>
                  Արտադրման երկիր
                  <GrayArrowDownIcon />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.categories__button}>
                  Արտադրման երկիր Վաճառող
                  <GrayArrowDownIcon />
                </div>
              </SwiperSlide>
            </FilterSlider>
          </div>
        </section>

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
      <g clipPath="url(#clip0_269_46901)">
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

const GrayArrowDownIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_269_46607)">
        <path
          d="M5.33464 6.66732L8.0013 9.33398L10.668 6.66732"
          stroke="#6B718D"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_269_46607">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Close = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_2100_17881)">
        <path
          d="M11.682 5.3187L5.31802 11.6827M5.31802 5.3187L11.682 11.6827"
          stroke="#1D1D1D"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2100_17881">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
