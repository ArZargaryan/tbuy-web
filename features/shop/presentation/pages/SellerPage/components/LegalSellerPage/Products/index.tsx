import { useState } from "react";
import cl from "./products.module.scss";
import { MenuDepth1 } from "./MenuDepth1";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductSlider from "./ProductSlider";
import Tooltip from "@libs/presentation/components/elements/Tooltip";
import CardsList from "@libs/presentation/components/cards/CardsList";
import { useAppSelector } from "@core/store";
import Checkbox from "@libs/presentation/components/form/checkbox";

// -----------------------------------------------------------------------------------------------------------------------------

const sidebarFilters: filterType[] = [
  {
    title: "Կահույք",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Կատեգորիա2",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Կատեգորիա3",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Կատեգորիա4",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Կատեգորիա5",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Կատեգորիա6",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Կատեգորիա7",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Կատեգորիա8",
    subcategories: [
      {
        title: "subcategory 1",
        subcategories: [
          {
            title: "subcategory 2",
            subcategories: [
              { title: "subcategory 3" },
              { title: "subcategory 3" },
              { title: "subcategory 3" }
            ]
          }
        ]
      }
    ]
  }
];

// -----------------------------------------------------------------------------------------------------------------------------

export type Depth_3 = {
  title: string;
};

export type Depth_2 = {
  title: string;
  subcategories: Depth_3[];
};

export type Depth_1 = {
  title: string;
  subcategories: Depth_2[];
};

export type filterType = {
  title: string;
  subcategories: Depth_1[];
};

// -----------------------------------------------------------------------------------------------------------------------------

const Products = () => {
  const [subcategoriesIsShow, setSubcategoriesIsShow] = useState([false]);

  const getClassName = (className: string, idx: number) => {
    if (subcategoriesIsShow[idx]) {
      return `${className} ${cl.open}`;
    }
    return className;
  };

  const changeSubcategoriesIsShow = (idx: number) => {
    const newArr = [...subcategoriesIsShow];

    newArr[idx] = !newArr[idx];

    setSubcategoriesIsShow(newArr);
  };

  const { products } = useAppSelector((state) => state.account_last_viewed_pages);

  return (
    <section className={cl.products}>
      <div className={cl.header}>
        <div className={cl.title}>
          Դյուրակիր ակուստիկաներ
          <ArrowDownIcon />
        </div>

        <div className={cl.stripe}></div>

        <div className={cl.slider}>
          <ProductSlider>
            <SwiperSlide className={cl.slide}>
              Գին
              <ArrowDownIcon />
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
              Վիճակ
              <ArrowDownIcon />
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
              Ապրանքանիշ
              <ArrowDownIcon />
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
              Ապրանքանիշ
              <ArrowDownIcon />
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
              Ապրանքանիշ
              <ArrowDownIcon />
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
              Ապրանքանիշ
              <ArrowDownIcon />
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
              Ապրանքանիշ
              <ArrowDownIcon />
            </SwiperSlide>
            <SwiperSlide className={cl.slide}>
              Ապրանքանիշ
              <ArrowDownIcon />
            </SwiperSlide>
          </ProductSlider>
        </div>
      </div>

      <section className={cl.categories}>
        <Tooltip
          label={
            <div className={cl.categories__favorite}>
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
              <div className={cl.categories__favorite_counter}>20</div>
            </div>
          }
        >
          <div className={cl.tooltip}>
            <div className={cl.tooltip__label}>
              Դյուրակիր ակուստիկաներ
              <Close />
            </div>
            <div className={cl.tooltip__label}>
              Xiaomi
              <Close />
            </div>
            <div className={cl.tooltip__label}>
              Xiaomi
              <Close />
            </div>
            <div className={cl.tooltip__label}>
              10.000-20.000 AMD
              <Close />
            </div>
            <div className={`${cl.tooltip__label} ${cl.tooltip__color_label}`}>
              <span className={cl.tooltip__color}></span>
              Կարմիր
              <Close />
            </div>
          </div>
        </Tooltip>

        <div className={cl.stripe} />

        <div className={cl.slider}>
          <ProductSlider>
            <SwiperSlide>
              <Tooltip
                label={
                  <button className={cl.categories__button}>
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
                  </button>
                }
              >
                <div className={cl.tooltip}>
                  <button className={cl.tooltip__reload}>
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
                  <div className={cl.tooltip__checkboxes}>
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
              <button className={cl.categories__button}>
                Գույն
                <GrayArrowDownIcon />
              </button>
            </SwiperSlide>

            <SwiperSlide>
              <button className={cl.categories__button}>
                -Ընտրել-
                <GrayArrowDownIcon />
              </button>
            </SwiperSlide>

            <SwiperSlide>
              <button className={cl.categories__button}>
                -Ընտրել-
                <GrayArrowDownIcon />
              </button>
            </SwiperSlide>
          </ProductSlider>
        </div>
      </section>

      <div className={cl.main}>
        <aside className={cl.sidebar}>
          <div className={cl.sidebar__title}>Ֆիլտր</div>
          {sidebarFilters.map((el, idx) => (
            <div key={idx} className={cl.sidebar__category}>
              <div
                className={getClassName(cl.sidebar__panel, idx)}
                onClick={() => changeSubcategoriesIsShow(idx)}
              >
                {el.title}
                <ArrowIcon />
              </div>

              {el.subcategories.map((el, idx) => (
                <MenuDepth1 el={el} key={idx} idx={idx} />
              ))}
            </div>
          ))}
        </aside>

        <div className={cl.content}>
          <div className={cl.content__header}>
            <h2 className={cl.content__title}>Դյուրակիր կապույր հեռակառավարվող ակուստիկաներ</h2>
            <button className={cl.content__action}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M23 26.1V5" stroke="#6E00E5" strokeWidth="1.6" strokeMiterlimit="10" />
                <path d="M20 8L4 8" stroke="#6E00E5" strokeWidth="1.6" strokeMiterlimit="10" />
                <path
                  d="M20 13.332L8 13.332"
                  stroke="#6E00E5"
                  strokeWidth="1.6"
                  strokeMiterlimit="10"
                />
                <path
                  d="M20 18.668L12 18.668"
                  stroke="#6E00E5"
                  strokeWidth="1.6"
                  strokeMiterlimit="10"
                />
                <path
                  d="M18.6992 21.8008L22.9992 26.1008L27.2992 21.8008"
                  stroke="#6E00E5"
                  strokeWidth="1.6"
                  strokeMiterlimit="10"
                />
              </svg>
            </button>
            <button className={cl.content__action}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_334_54902)">
                  <path d="M23 26.1V5" stroke="#6E00E5" strokeWidth="1.6" strokeMiterlimit="10" />
                  <path
                    d="M18.6992 21.8008L22.9992 26.1008L27.2992 21.8008"
                    stroke="#6E00E5"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M12 15V14L9.1 6H8.9L6 14V15"
                    stroke="#6E00E5"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                  />
                  <path d="M6 12H12" stroke="#6E00E5" strokeWidth="1.6" strokeMiterlimit="10" />
                  <path
                    d="M5 18H12V19L6 25V26H13"
                    stroke="#6E00E5"
                    strokeWidth="1.6"
                    strokeMiterlimit="10"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_334_54902">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <p className={cl.content__info}>Գտնվել է 72 ապրանք</p>

          <CardsList
            cards={products}
            loading={false}
            extra_type="account"
            className={cl.content__cards}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;

// -----------------------------------------------------------------------------------------------------------------------------

const ArrowIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g clipPath="url(#clip0_269_47625)">
        <path
          d="M6 7.5L9 10.5L12 7.5"
          stroke="#1D1D1D"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_269_47625">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ArrowDownIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <g clipPath="url(#clip0_269_46901)">
        <path
          d="M10.6654 13.3327L15.9987 18.666L21.332 13.3327"
          stroke="#1D1D1D"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_269_46901">
          <rect width="32" height="32" fill="white" />
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
