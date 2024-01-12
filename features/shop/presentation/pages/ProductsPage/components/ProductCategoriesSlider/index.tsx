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

function ProductCategoriesSlider() {
  const { t } = useTranslation(["catalog/productspage"]);
  const { Icons } = ImgExporter;
  const [assortmentActive, setAssortmentActive] = useState(false);
  const [mobileFiltersActive, setMobileFiltersActive] = useState(false);
  const [selectedMobileFilters, setSelectedMobileFilters] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleMobileFilters = (title: string) => {
    setSelectedMobileFilters((prev) => {
      const newState = { ...prev, [title]: !prev[title] };
      return newState;
    });
  };

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
      <div className={styles.mobile__icon} onClick={() => setMobileFiltersActive((prev) => !prev)}>
        <Icons.Filter />
      </div>

      {/* Mobile Filters Menu */}
      {mobileFiltersActive && (
        <div className={styles.mobile__menu}>
          <div className={styles.mobile__filterMenu}>
            <h1 className={styles.mobile__textStyle}>Filter</h1>
            <button onClick={() => setMobileFiltersActive((prev) => !prev)}>X</button>
          </div>
          <ul>
            {mobileFiltersData.map((filter, index) => (
              <li key={index}>
                <div
                  className={styles.mobile__filterData}
                  onClick={() => toggleMobileFilters(filter.title)}
                >
                  {filter.title}
                  {selectedMobileFilters[filter.title] ? <Icons.MinusSign /> : <Icons.SumSign />}
                </div>
                {selectedMobileFilters[filter.title] && (
                  <div>
                    <div className={styles.mobile__filterTitle}>{filter.content}</div>
                  </div>
                )}
              </li>
            ))}
            <div className={styles.btn_box}>
              <button className={styles.btn_cancel}>Update</button>
              <button className={styles.btn_approve}>Confirm</button>
            </div>
          </ul>
        </div>
      )}
      <div className={styles.slider}>
        <SelectsSlider        >
          <Swiper navigation>
            <SwiperSlide style={{ paddingLeft: 30}}>
              <SelectCustom
                activeSelect={assortmentActive}
                onClick={() => setAssortmentActive((prev) => !prev)}
              >
                {t("filters.sections.title")}
              </SelectCustom>
            </SwiperSlide>

            <SwiperSlide>
              <SelectRange label={`${t("filters.priceAmd")}`} />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.brand")}`}
                checkBoxCircle={true}
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

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.color")}`}
                checkBoxCircle={true}
                items={[
                  { id: 1, value: "Մոխրագույն" },
                  { id: 2, value: "Ոսկեգույն" },
                  { id: 3, value: "Սև" }
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.condition")}`}
                checkBoxCircle={true}
                items={[
                  { id: 1, value: "Նոր" },
                  { id: 2, value: "Օգտագործված" }
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.country")}`}
                checkBoxCircle={true}
                items={[
                  { id: 1, value: "Հայաստան" },
                  { id: 2, value: "Այլ" }
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCustom
                activeSelect={assortmentActive}
                onClick={() => setAssortmentActive((prev) => !prev)}
              >
                {t("filters.sections.title")}
              </SelectCustom>
            </SwiperSlide>

            <SwiperSlide>
              <SelectRange label={`${t("filters.priceAmd")}`} />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.brand")}`}
                checkBoxCircle={true}
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

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.color")}`}
                checkBoxCircle={true}
                items={[
                  { id: 1, value: "Մոխրագույն" },
                  { id: 2, value: "Ոսկեգույն" },
                  { id: 3, value: "Սև" }
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.condition")}`}
                checkBoxCircle={true}
                items={[
                  { id: 1, value: "Նոր" },
                  { id: 2, value: "Օգտագործված" }
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <SelectCheckbox
                label={`${t("filters.country")}`}
                checkBoxCircle={true}
                items={[
                  { id: 1, value: "Հայաստան" },
                  { id: 2, value: "Այլ" }
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

export default ProductCategoriesSlider;
