import React from "react";
import { SwiperSlide } from "swiper/react";

import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";

import styles from "@features/shop/presentation/pages/OrganizationsPage/organizations.module.scss";

function OrganizationsCategorySlider() {
  return (
    <div style={{ position: "relative" }}>
      <SelectsSlider
        className={styles.organizations__slider}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          501: {
            slidesPerView: "auto"
          }
        }}
      >
        <SwiperSlide className={styles.desktop_item}>
          <SelectCheckbox
            label={`Ծառայություններ`}
            items={[
              { id: 1, value: "Խանութներ" },
              { id: 2, value: "ռեստորաններ" },
              { id: 3, value: "ռեստորաններ" },
              { id: 4, value: "Խանութներ" },
              { id: 5, value: "ռեստորաններ" },
              { id: 6, value: "ռեստորաններ" },
              { id: 7, value: "Խանութներ" },
              { id: 8, value: "Խանութներ" },
              { id: 9, value: "ռեստորաններ" },
              { id: 10, value: "Խանութներ" }
            ]}
          />
        </SwiperSlide>

        <SwiperSlide className={styles.slider__mobile_slide}>
          <SelectCheckbox
            label={`Գտնվելու վայր`}
            className={styles.mobile_slide__checkbox}
            poppupItemClassName={styles.mobile_slide__checkbox__item}
            items={[
              { id: 1, value: "Մոխրագույն" },
              { id: 2, value: "Ոսկեգույն" },
              { id: 3, value: "Սև" }
            ]}
          />
        </SwiperSlide>
      </SelectsSlider>
    </div>
  );
}

export default OrganizationsCategorySlider;
