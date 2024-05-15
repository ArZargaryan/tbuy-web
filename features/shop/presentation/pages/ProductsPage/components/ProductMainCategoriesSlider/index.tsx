import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "@core/store";

import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import SelectRange from "@libs/presentation/components/form/selects/SelectRange";
import SelectCompany from "@libs/presentation/components/form/selects/SelectCompany";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";
import SelectCustom from "@libs/presentation/components/form/selects/SelectCustom";
import AssortmentPoppup from "@libs/presentation/components/layout/AssortmentPoppup";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import styles from "../../products-page.module.scss";

function ProductMainCategoriesSlider() {
  const { t } = useTranslation(["catalog/productspage"]);
  const { Icons } = ImgExporter;
  const [assortmentActive, setAssortmentActive] = useState(false);

  const { items, currSubcategory } = useAppSelector((state) => state.libs_categories.categories);

  const itemss = {
    array1: [
      { id: 1, value: "ADS" },
      { id: 2, value: "AILIANG" },
      { id: 3, value: "GEEPAS" },
      { id: 4, value: "GOLDY" },
      { id: 5, value: "JBL" },
      { id: 6, value: "KEDIBO" },
      { id: 7, value: "LIGE" },
      { id: 8, value: "LUNAR" },
      { id: 9, value: "SONASHI" },
      { id: 10, value: "SONY" }
    ],
    array2: [
      { id: 1, value: "ADS" },
      { id: 2, value: "AILIANG" },
      { id: 3, value: "GEEPAS" },
      { id: 4, value: "GOLDY" },
      { id: 5, value: "JBL" },
      { id: 6, value: "KEDIBO" },
      { id: 7, value: "LIGE" },
      { id: 8, value: "LUNAR" },
      { id: 9, value: "SONASHI" },
      { id: 10, value: "SONY" }
    ]
  };

  const mobileFiltersData = [
    {
      title: t("filters.brand"),
      content: itemss.array1.map((item) => (
        <div style={{ marginBottom: "10px" }}>
          <Checkbox key={item.id} label={item.value} />
        </div>
      ))
    },
    {
      title: t("filters.sections.title"),
      content: itemss.array2.map((item) => (
        <div style={{ marginBottom: "10px" }}>
          <Checkbox key={item.id} label={item.value} />
        </div>
      ))
    }
  ];

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.slider}>
        <SelectsSlider>
          <Swiper navigation>
            <SwiperSlide>
              <SelectCustom
                active_select={assortmentActive}
                onClick={() => setAssortmentActive((prev) => !prev)}
              >
                <h1 style={{ fontSize: 24, color: "#6E00E5" }}> {t("filters.sections.title")}</h1>
              </SelectCustom>
            </SwiperSlide>

            <SwiperSlide>
              <SelectRange label={`${t("filters.priceAmd")}`} />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.brand")}`}
                check_box_circle
                items={[
                  { id: 1, value: "ADS" },
                  { id: 2, value: "AILIANG" },
                  { id: 3, value: "GEEPAS" },
                  { id: 4, value: "GOLDY" },
                  { id: 5, value: "JBL" },
                  { id: 6, value: "KEDIBO" },
                  { id: 7, value: "LIGE" },
                  { id: 8, value: "LUNAR" },
                  { id: 9, value: "SONASHI" },
                  { id: 10, value: "SONY" }
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCompany
                label={`${t("filters.partners.title")}`}
                items={[
                  {
                    id: 1,
                    image: "https://1000logos.net/wp-content/uploads/2020/07/AliExpress-Logo.jpg",
                    value: "V & V Computers Electronics"
                  },
                  {
                    id: 2,
                    image: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
                    value: "Pixel"
                  },
                  {
                    id: 3,
                    image: "https://1000logos.net/wp-content/uploads/2020/07/AliExpress-Logo.jpg",
                    value: "Pixel"
                  },
                  {
                    id: 4,
                    image: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
                    value: "Pixel"
                  },
                  {
                    id: 5,
                    image: "https://1000logos.net/wp-content/uploads/2020/07/AliExpress-Logo.jpg",
                    value: "Pixel"
                  },
                  {
                    id: 6,
                    image: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
                    value: "Pixel"
                  },
                  {
                    id: 7,
                    image: "https://1000logos.net/wp-content/uploads/2020/07/AliExpress-Logo.jpg",
                    value: "Pixel"
                  },
                  {
                    id: 8,
                    image: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
                    value: "Pixel"
                  },
                  {
                    id: 9,
                    image: "https://1000logos.net/wp-content/uploads/2020/07/AliExpress-Logo.jpg",
                    value: "Pixel"
                  }
                ]}
              />
            </SwiperSlide>
          </Swiper>
        </SelectsSlider>
      </div>

      <AssortmentPoppup
        active={assortmentActive}
        items={items}
        mobileItems={currSubcategory}
        loading={false}
      />
    </div>
  );
}

export default ProductMainCategoriesSlider;
