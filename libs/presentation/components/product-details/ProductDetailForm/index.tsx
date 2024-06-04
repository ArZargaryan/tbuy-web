import React, { useEffect, useState } from "react";
import _ from "lodash";
import styles from "./product-detail-form.module.scss";
import { ParameterEntity, ParameterValueEntity } from "@features/shop/domain/model/DetailedProduct";
import { useTranslation } from "next-i18next";
import { ImgExporter } from "@core/helpers/ImgExporter";
import NewSelect from "../../form/selects/NewSelect";

interface Props {
  companyType: string;
  data: ParameterEntity[];
  displayLabel: "numbers" | "letters" | "all";
}

function ProductDetailForm({ companyType, data, displayLabel }: Props) {
  const { t } = useTranslation(["catalog/productspage"]);
  const [sizes, setSizes] = useState<ParameterEntity | null>(null);
  const [selectedSize, setSelectedSize] = useState<ParameterValueEntity | null>(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const sizes = data?.filter((item) => item.type === "size");

    if (!_.isEmpty(sizes)) {
      setSizes(sizes[0]);
    }
  }, [data]);

  useEffect(() => {
    return () => console.log("Closing page");
  }, []);

  const incrementCount = () => setCount((prev) => ++prev);
  const decrementCount = () => {
    return count > 0 && setCount((prev) => --prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <div className={styles.product_amount}>
          <p className={styles.amount}>{count}</p>

          <div className={styles.actions}>
            <button onClick={incrementCount}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_1703_87959)">
                  <path
                    d="M9.375 6L9.375 12.75M6 9.375H12.75"
                    stroke="#6E00E5"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1703_87959">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <button onClick={decrementCount}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6 9.375H12.75"
                  stroke="#6E00E5"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.product_select}>
          <NewSelect
            isSearchable={false}
            defaultValue={{ value: "pc", label: "Հատ " }}
            options={[
              { value: "pc", label: "Հատ " },
              { value: "kg", label: "Կգ" }
            ]}
          />
        </div>
      </div>

      {companyType === "legal" && !!sizes && !_.isEmpty(sizes.values) && (
        <div className={styles.form_block}>
          {/*<p className={styles.label}>Չափ</p>*/}

          <div className={styles.choose_size}>
            {_.map(sizes.values, (size, index) => (
              <label key={`${size}_${index}`}>
                <div
                  className={`${styles.size_item} ${
                    selectedSize?.value === size.value ? styles.active : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  <input
                    type="radio"
                    name={"size"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedSize(size);
                      }
                    }}
                  />

                  {displayLabel === "all" && (
                    <>
                      {size.label}
                      <span className={styles.number_label}>{size.numberLabel}</span>
                    </>
                  )}

                  {displayLabel === "numbers" && size.numberLabel}

                  {displayLabel === "letters" && size.label}
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailForm;
