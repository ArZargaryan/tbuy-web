import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";

import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import SelectRange from "@libs/presentation/components/form/selects/SelectRange";
import SelectCompany from "@libs/presentation/components/form/selects/SelectCompany";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";
import SelectCustom from "@libs/presentation/components/form/selects/SelectCustom";
import AssortmentPoppup from "@libs/presentation/components/layout/AssortmentPoppup";
import { useAppSelector } from "@core/store";

function AboutSellerCategoriesSlider() {
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
          <SelectCheckbox
            label={`${t("filters.color")}`}
            check_box_circle
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
            check_box_circle
            items={[
              { id: 1, value: "Նոր" },
              { id: 2, value: "Օգտագործված" }
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SelectCheckbox
            label={`${t("filters.country")}`}
            check_box_circle
            items={[
              { id: 1, value: "Հայաստան" },
              { id: 2, value: "Այլ" }
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

export default AboutSellerCategoriesSlider;
