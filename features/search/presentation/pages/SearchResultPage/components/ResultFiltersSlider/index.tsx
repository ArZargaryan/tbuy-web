import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";
import styles from "../../search-result.module.scss";
import SelectCustom from "@libs/presentation/components/form/selects/SelectCustom";
import { useTranslation } from "next-i18next";
import AssortmentPoppup from "@libs/presentation/components/layout/AssortmentPoppup";
import { useAppSelector } from "@core/store";

interface Props {
  mode?: "by_company";
}

function ResultFiltersSlider(props: Props) {
  const { t } = useTranslation(["catalog/productspage"]);
  const [assortmentActive, setAssortmentActive] = useState(false);

  const { items, currSubcategory } = useAppSelector((state) => state.libs_categories.categories);

  return (
    <div style={{ position: "relative" }} className={styles.filters_slider}>
      <SelectsSlider>
        {props.mode === "by_company" && (
          <SwiperSlide>
            <SelectCustom
              activeSelect={assortmentActive}
              onClick={() => setAssortmentActive((prev) => !prev)}
            >
              {t("filters.sections.title")}
            </SelectCustom>
          </SwiperSlide>
        )}

        <SwiperSlide>
          <SelectCheckbox
            label={`Վիճակ`}
            checkBoxCircle={true}
            items={[
              { id: 1, value: "Նոր" },
              { id: 2, value: "Օգտագործված" }
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCheckbox
            label={`Արտադրման երկիր`}
            checkBoxCircle={true}
            items={[
              { id: 1, value: "Հայաստան" },
              { id: 2, value: "Այլ" }
            ]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SelectCheckbox
            label={`Վաճառող`}
            checkBoxCircle={true}
            items={[
              { id: 1, value: "Իրավաբանական անձ" },
              { id: 2, value: "Ֆիզիկական անձ" }
            ]}
          />
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

export default ResultFiltersSlider;
