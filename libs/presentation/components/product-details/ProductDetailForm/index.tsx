import React, { useEffect, useState } from "react";
import _ from "lodash";
import styles from "./product-detail-form.module.scss";
import { ParameterEntity, ParameterValueEntity } from "@features/shop/domain/model/DetailedProduct";
import { useTranslation } from "next-i18next";
import { ImgExporter } from "@core/helpers/ImgExporter";

interface Props {
  companyType: string;
  data: ParameterEntity[];
}

const { Icons } = ImgExporter;

function ProductDetailForm({ companyType, data }: Props) {
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
      <div className={styles.product_amount_wrapper}>
        <div className={styles.product_amount}>
          <button onClick={decrementCount}>
            <Icons.Minus />
          </button>

          <p className={styles.amount}>{count}</p>

          <button onClick={incrementCount}>
            <Icons.Plus />
          </button>
        </div>
      </div>

      {companyType === "legal" && !!sizes && !_.isEmpty(sizes.values) && (
        <div className={styles.form_block}>
          <p className={styles.label}>Չափ</p>

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
                  {size.label}
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
