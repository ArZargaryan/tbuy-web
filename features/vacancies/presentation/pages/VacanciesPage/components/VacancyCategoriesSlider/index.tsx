import React from "react";
import { SwiperSlide } from "swiper/react";

import SelectCheckbox from "@libs/presentation/components/form/selects/SelectCheckbox";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";
import SelectRange from "@libs/presentation/components/form/selects/SelectRange";

function VacancyCategoriesSlider() {
  return (
    <div style={{ position: "relative" }}>
      <SelectsSlider>
        <SwiperSlide>
          <SelectCheckbox
            label={`Գտնվելու վայր `}
            items={[
              { id: 1, value: "Բոլորը" },
              { id: 2, value: "Ագարակավան" },
              { id: 3, value: "Ագարակավան" },
              { id: 4, value: "Ագարակավան" },
              { id: 5, value: "Ագարակավան" },
              { id: 6, value: "Ագարակավան" },
              { id: 7, value: "Ագարակավան" },
              { id: 8, value: "Ագարակավան" },
              { id: 9, value: "Ագարակավան" },
              { id: 10, value: "Ագարակավան" },
              { id: 11, value: "Ագարակավան" },
              { id: 12, value: "Ագարակավան" },
              { id: 13, value: "Ագարակավան" },
              { id: 14, value: "Ագարակավան" },
              { id: 15, value: "Ագարակավան" },
              { id: 16, value: "Ագարակավան" }
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SelectCheckbox
            label={`Ոլորտ`}
            items={[
              { id: 1, value: "Software development (400)" },
              { id: 2, value: "Quality Assurance /Control (81)" },
              { id: 3, value: "UI/UX/Graphic Design (54)" },
              { id: 4, value: "Product/Project Management (52)" },
              { id: 5, value: "Hardware design (8)" },
              { id: 6, value: "Other IT (89)" },
              { id: 7, value: "Sales/service management (188)" }
            ]}
          />
        </SwiperSlide>

        <SwiperSlide>
          <SelectRange label={`Աշխատավարձի չափ`} />
        </SwiperSlide>
      </SelectsSlider>
    </div>
  );
}

export default VacancyCategoriesSlider;
