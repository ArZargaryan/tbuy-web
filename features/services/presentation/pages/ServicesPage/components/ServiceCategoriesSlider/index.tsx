import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";

import { useAppSelector } from "@core/store";

import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import SelectRange from "@libs/presentation/components/form/selects/SelectRange";
import SelectCompany from "@libs/presentation/components/form/selects/SelectCompany";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";
import SelectCustom from "@libs/presentation/components/form/selects/SelectCustom";
import AssortmentPoppup from "@libs/presentation/components/layout/AssortmentPoppup";
import StarsRating from "@libs/presentation/components/elements/StarsRating";

function ServiceCategoriesSlider() {
  const { t } = useTranslation(["catalog/servicespage"]);
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
          <SelectCheckbox
            label={`${t("filters.geo.title")}`}
            items={[
              { id: 1, value: "Ըստ իմ ընթացիկ գեոլոկացիայի" },
              { id: 2, value: "Բոլորը" },
              { id: 3, value: "Արագածոտն" },
              { id: 4, value: "Գեղարքունիք" },
              { id: 5, value: "Լոռի" }
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
          <SelectRange label={`${t("filters.priceAmd")}`} />
        </SwiperSlide>

        <SwiperSlide>
          <SelectCheckbox
            label={`${t("filters.rating")}`}
            items={[
              { id: 222, value: <StarsRating defaultValue={0} readOnly /> },
              { id: 1, value: <StarsRating defaultValue={1} readOnly /> },
              { id: 2, value: <StarsRating defaultValue={2} readOnly /> },
              { id: 3, value: <StarsRating defaultValue={3} readOnly /> },
              { id: 4, value: <StarsRating defaultValue={4} readOnly /> },
              { id: 5, value: <StarsRating defaultValue={5} readOnly /> }
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SelectCheckbox
            label={`${t("filters.seller.title")}`}
            check_box_circle
            items={[
              { id: 1, value: t("filters.seller.citizen") },
              { id: 2, value: t("filters.seller.physical_person") }
            ]}
          />
        </SwiperSlide>
      </SelectsSlider>

      <AssortmentPoppup
        active={assortmentActive}
        items={items}
        mobileItems={currSubcategory}
        loading={false}
        onSubClick={() => {}}
      />
    </div>
  );
}

export default ServiceCategoriesSlider;
