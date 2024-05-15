import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import SelectRange from "@libs/presentation/components/form/selects/SelectRange";
import SelectCompany from "@libs/presentation/components/form/selects/SelectCompany";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";
import { useTranslation } from "next-i18next";
import SelectCustom from "@libs/presentation/components/form/selects/SelectCustom";
import { useAppSelector } from "@core/store";
import AssortmentPoppup from "@libs/presentation/components/layout/AssortmentPoppup";

function GiftCardCategoriesSlider() {
  const { t } = useTranslation(["catalog/productspage"]);
  const [assortmentActive, setAssortmentActive] = useState(false);

  const { items, currSubcategory } = useAppSelector((state) => state.libs_categories.categories);

  return (
    <div style={{ position: "relative" }}>
      <SelectsSlider>
        <SwiperSlide>
          <SelectCustom
            active_select={assortmentActive}
            onClick={() => setAssortmentActive((prev) => !prev)}
          >
            {t("filters.sections.title")}
          </SelectCustom>
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
          <SelectRange label={`${t("filters.priceAmd")}`} />
        </SwiperSlide>
      </SelectsSlider>

      <AssortmentPoppup
        active={assortmentActive}
        items={items}
        mobileItems={currSubcategory}
        loading={false}
      />
    </div>
  );
}

export default GiftCardCategoriesSlider;
