import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Category } from "@libs/domain/model/category";

import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "@core/store";

import { useRouter } from "next/router";
import { Lang } from "@core/store/global";
import SubcategoriesPoppup from "@libs/presentation/components/layout/SubcategoriesPoppup";

import styles from "./category-bar.module.scss";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import { getCategories, setCurrSubcategory } from "@libs/presentation/store/categoriesSlice";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  categories: Category[];
};

function CategoryBar(props: Props) {
  const { t } = useTranslation(["catalog/homepage", "catalog/categories", "common"]);
  // const { items, currSubcategory, loading } = useAppSelector(
  //   (state) => state.libs_categories.categories
  // );
  const navigationNextRef = React.useRef(null);

  const [currentCategory, setCurrentCategory] = useState<number>();

  const [currentId, setCurrentId] = useState<number>();
  const [poppupOpened, setPoppupOpened] = useState(false);

  const dispatch = useAppDispatch();
  const { locale } = useRouter();

  const { Arrows } = ImgExporter;

  const getSubcategories = async (id: number) => {
    dispatch(getCategories({ id, lang: locale as Lang }));
  };

  const changeCategory = async (id: number) => {
    setCurrentCategory(id);
    // openPoppup(id);
  };

  const openPoppup = async (id: number) => {
    // if (id !== currentId) {
    //   if (!items.find((item) => id === item.id)?.subcategories?.length) {
    //     await getSubcategories(id);
    //   }
    //   if (items.find((item) => id === item.id)?.subcategories?.length) {
    //     dispatch(setCurrSubcategory(items.find((item) => id === item.id)?.subcategories));
    //   }
    //   setCurrentId(id);
    //   setPoppupOpened(true);
    // } else {
    //   if (id === currentCategory) {
    //     setPoppupOpened((prev) => !prev);
    //   }
    // }
  };

  useEffect(() => {
    dispatch(getCategories({ lang: locale as Lang }));
  }, [dispatch, locale]);

  // props.categpires should be changed to items

  return (
    <div {...props} className={styles.category_bar}>
      <div className={`container ${styles.category_bar__content}`}>
        <Link href={""} className={styles.content__services}>
          {t("services")}
        </Link>
        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={4}
          slidesPerView={"auto"}
          className={`${styles.menu}`}
          navigation={{
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper: any) => {
            swiper!.params!.navigation!.nextEl = navigationNextRef.current;
          }}
        >
          {props.categories?.map((category, i) => (
            <SwiperSlide key={`${category.label}_${i}`}>
              <button
                type="button"
                className={styles.menu__btn}
                onClick={() => changeCategory(category.id)}
              >
                {category?.icon && (
                  <img src={category.icon} alt="" className={styles.menu__btn_icon} />
                )}
                <span
                  className={`${styles.menu__btn_txt} ${
                    currentCategory === category.id && poppupOpened
                      ? styles.menu__btn_txt_opened
                      : ""
                  }`}
                >
                  {category.label}
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={navigationNextRef} className={"swiper-button-next"}>
          <div className={"swiper-button-next_img"}>
            <Arrows.DoubleRight />
          </div>
        </div>

        <button type="button" className={styles.assortment__scrollBtn} data-scroll="scrollMenu">
          <img src="" alt="" className={styles.assortment__scrollBtn_icon} />
        </button>

        {props.categories.find((item) => item.id === currentCategory)?.subcategories && (
          <SubcategoriesPoppup
            active={poppupOpened}
            items={props.categories.find((item) => item.id === currentCategory)?.subcategories || []}
            mobileItems={props.categories}
            onSubClick={openPoppup}
            loading={false}
          />
        )}
      </div>
    </div>
  );
}

export default CategoryBar;