import React, { useEffect, useState } from "react";
import _ from "lodash";
import styles from "./product-detail-form.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { ParameterEntity, ParameterValueEntity } from "@features/shop/domain/model/DetailedProduct";

interface Props {
  companyType: string;
  data: ParameterEntity[];
}

function ProductDetailForm({ companyType, data }: Props) {
  const [count, setCount] = useState(1);
  const [colors, setColors] = useState<ParameterEntity | null>(null);
  const [sizes, setSizes] = useState<ParameterEntity | null>(null);
  const [selectedColor, setSelectedColor] = useState<ParameterValueEntity | null>(null);
  const [selectedSize, setSelectedSize] = useState<ParameterValueEntity | null>(null);

  useEffect(() => {
    const colors = data?.filter((item) => item.type === "color");
    const sizes = data?.filter((item) => item.type === "size");

    if (!_.isEmpty(colors)) {
      setColors(colors[0]);

      if (colors[0].values.length > 0) {
        setSelectedColor(colors[0].values[0]);
      }
    }
    if (!_.isEmpty(sizes)) {
      setSizes(sizes[0]);
    }
  }, [data]);

  const incrementCount = () => setCount((prev) => ++prev);
  const decrementCount = () => {
    return count > 0 && setCount((prev) => --prev);
  };

  const { Icons } = ImgExporter;

  return (
    <div>
      {!!colors && !_.isEmpty(colors.values) && (
        <div className={styles.form_block}>
          <p className={styles.label}>Ապրանքի գույն</p>

          <div className={styles.choose_color}>
            {_.map(colors.values, (color, i) => (
              <div className={styles.color__block}>
                <label key={`${color.value}_${i}`}>
                  <input
                    type="radio"
                    name={"color"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelectedColor(color);
                      }
                    }}
                  />
                  <div
                    className={` ${styles.color_item_wrapper} ${
                      (selectedColor?.value == color.value && styles.active) || ""
                    }`}
                  >
                    <div
                      key={`${color}_${i}`}
                      className={styles.color_item}
                      style={{
                        background: color.value.match(/^[0-9, ]+$/)
                          ? `rgb(${color.value})`
                          : color.value
                      }}
                    ></div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {!!sizes && !_.isEmpty(sizes.values) && (
        <div className={styles.form_block}>
          <p className={styles.label}>Չափ</p>

          <div className={styles.choose_size}>
            {_.map(sizes.values, (size, index) => (
              <label>
                <div
                  key={`${size}_${index}`}
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

      <div className={styles.check_product_availability}>
        <svg
          id="Сгруппировать_3583"
          data-name="Сгруппировать 3583"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          style={{ marginRight: 8 }}
        >
          <path
            id="Контур_4107"
            data-name="Контур 4107"
            d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.688A8.688,8.688,0,1,1,18.688,10,8.7,8.7,0,0,1,10,18.688Z"
            fill="$grey-2"
          />
          <g
            id="Сгруппировать_10875"
            data-name="Сгруппировать 10875"
            transform="translate(0.125 1.407)"
          >
            <g
              id="Сгруппировать_10873"
              data-name="Сгруппировать 10873"
              transform="translate(9.125 4.164)"
            >
              <g id="Сгруппировать_10869" data-name="Сгруппировать 10869">
                <path
                  id="Контур_6658"
                  data-name="Контур 6658"
                  d="M235.511,125.018a.722.722,0,0,0-.75.766v5.851a.75.75,0,0,0,1.5,0v-5.851A.722.722,0,0,0,235.511,125.018Z"
                  transform="translate(-234.761 -125.909)"
                  fill="$grey-2"
                />
              </g>
            </g>
            <g
              id="Сгруппировать_10874"
              data-name="Сгруппировать 10874"
              transform="translate(9.125 12.414)"
            >
              <g id="Сгруппировать_10871" data-name="Сгруппировать 10871">
                <path
                  id="Контур_6659"
                  data-name="Контур 6659"
                  d="M236.2,341.749a.7.7,0,0,0-.158-.247.712.712,0,0,0-.12-.09.812.812,0,0,0-.27-.112.749.749,0,0,0-.674.2.7.7,0,0,0-.157.247.706.706,0,0,0,0,.57.676.676,0,0,0,.4.4.7.7,0,0,0,.569,0,.876.876,0,0,0,.247-.157.866.866,0,0,0,.158-.247.706.706,0,0,0,0-.57Z"
                  transform="translate(-234.762 -341.284)"
                  fill="$grey-2"
                />
              </g>
            </g>
          </g>
        </svg>
        <span>Ճշտել ապրանքի առկայությունը</span>
      </div>

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

        {companyType === "legal" ? (
          <button className={`${styles.submit_button} blue_btn`}>ԳՆԵԼ ՀԻՄԱ</button>
        ) : (
          <button className={`${styles.submit_button} blue_btn`}>Ավելացնել զամբյուղ</button>
        )}
      </div>
    </div>
  );
}

export default ProductDetailForm;
