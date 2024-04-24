import { ImgExporter } from "@core/helpers/ImgExporter";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import styles from "./mobile-filter.module.scss";
import PrimaryButton from "@core/button/primary";

function mobileFilter() {
  const { Icons } = ImgExporter;
  const [mobileFiltersActive, setMobileFiltersActive] = useState(false);
  const [selectedMobileFilters, setSelectedMobileFilters] = useState<{ [key: string]: boolean }>(
    {}
  );
  const { t } = useTranslation(["catalog/productspage"]);

  const toggleMobileFilters = (title: string) => {
    setSelectedMobileFilters((prev) => {
      const newState = { ...prev, [title]: !prev[title] };
      return newState;
    });
  };

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
    <div>
      <div className={styles.mobile__icon} onClick={() => setMobileFiltersActive((prev) => !prev)}>
        <Icons.Filter />
      </div>

      {/* Mobile Filters Menu */}
      {mobileFiltersActive && (
        <div className={styles.mobile__menu}>
          <div className={styles.mobile__filterMenu}>
            <h1 className={styles.mobile__textStyle}>Filter</h1>
            <button className={styles.close_btn} onClick={() => setMobileFiltersActive((prev) => !prev)}>
              <Icons.Close />
            </button>
          </div>
          <ul>
            {mobileFiltersData.map((filter, index) => (
              <li key={index}>
                <div
                  className={styles.mobile__filterData}
                  onClick={() => toggleMobileFilters(filter.title)}
                >
                  {filter.title}
                  {selectedMobileFilters[filter.title] ? (
                    <Icons.MobileFilter />
                  ) : (
                    <Icons.DownArrow />
                  )}
                </div>
                {selectedMobileFilters[filter.title] && (
                  <div>
                    <div className={styles.mobile__filterTitle}>{filter.content}</div>
                  </div>
                )}
              </li>
            ))}
            <div className={styles.btn_box}>
              <PrimaryButton buttonStyle="outline">Update</PrimaryButton>
              <PrimaryButton>Confirm</PrimaryButton>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default mobileFilter;
