import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { useAppSelector } from "@core/store";
import DefaultLayout from "@layouts/default";

import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";

import ProductCategoriesSlider from "@features/shop/presentation/pages/ProductsPage/components/ProductCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";

import styles from "./products-page.module.scss";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";
import FilterSlider from "@libs/presentation/components/elements/FilterSlider";
import { SwiperSlide } from "swiper/react";
import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import Tooltip from "@libs/presentation/components/elements/Tooltip";

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
      <div className="container">
        <section className={styles.products_section}>
          {/* <ProductMainCategoriesSlider /> */}
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

          <ProductCategoriesSlider />

          <FiltersList
            filters={[{ value: "Արագածոտն" }, { value: "1000 - 5000 AMD" }, { value: "200մ" }]}
          />

          <div className={styles.title}>Դյուրակիր կապույր հեռակառավարվող ակուստիկ նվագ... </div>
          {/*mock loading*/}
          <InfiniteCard cards={itemss} loading={loading} loadMore={fetchMoreData} />
          {/* <TbuyPagination count={5} /> */}
        </section>

        {/* <section className={styles.products_section}>
          <CardSlider title={`${t("requirements_categories")}`} cards={items} isProducts />
          <Link href={"/"} className={`link ${styles.see_all}`}>
            {t("actions.see_all", { ns: "common" })}
          </Link>
        </section>

        <CardSlider title={`${t("related_products")}`} cards={items} isProducts /> */}
      </div>
    </DefaultLayout>
  );
}

export default ProductsPage;

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
