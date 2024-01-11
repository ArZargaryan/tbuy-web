import React from "react";
import styles from "./result-categories-slider.module.scss";
import SelectsSlider from "@libs/presentation/components/form/selects/SelectsSlider";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";

const mockData = [
  { label: "Մանկական պարագաներ", count: "52" },
  { label: "Զենքեր", count: "52" },
  { label: "Հագուստ և աքսեսուարներ", count: "52" },
  { label: "Տրանսպորտ", count: "52" },
  { label: "Անվտանգության համակարգեր", count: "52" },
  { label: "Զենքեր", count: "52" },
  { label: "Տրանսպորտ", count: "52" },
  { label: "Մանկական պարագաներ", count: "52" },
  { label: "Զենքեր", count: "52" },
  { label: "Հագուստ և աքսեսուարներ", count: "52" },
  { label: "Տրանսպորտ", count: "52" },
  { label: "Անվտանգության համակարգեր", count: "52" },
  { label: "Զենքեր", count: "52" },
  { label: "Տրանսպորտ", count: "52" }
];

function ResultCategoriesSlider() {
  return (
    <div className={styles.categories_slider}>
      <SelectsSlider spaceBetween={30}>
        {mockData?.map((item, i) => (
          <SwiperSlide key={`${item.label}_${i}`}>
            <Link href={"/search/asd"}>
              {item.label} <sup>{item.count}</sup>
            </Link>
          </SwiperSlide>
        ))}
      </SelectsSlider>
    </div>
  );
}

export default ResultCategoriesSlider;
