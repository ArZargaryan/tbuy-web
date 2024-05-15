import React, { useEffect, useState } from "react";
import _ from "lodash";
import styles from "./styles.module.scss";
import { ParameterEntity, ParameterValueEntity } from "@features/shop/domain/model/DetailedProduct";

interface Props {
  data: ParameterEntity[];
  companyType: string;
}

function ProductDetailColor({ data, companyType }: Props) {
  const [colors, setColors] = useState<ParameterEntity | null>(null);
  const [selectedColor, setSelectedColor] = useState<ParameterValueEntity | null>(null);

  useEffect(() => {
    const colors = data?.filter((item) => item.type === "color");

    if (!_.isEmpty(colors)) {
      setColors(colors[0]);

      if (colors[0].values.length > 0) {
        setSelectedColor(colors[0].values[0]);
      }
    }
  }, [data]);

  return (
    <>
      {companyType === "legal" && (
        <div className={styles.wrapper}>
          {!!colors && !_.isEmpty(colors.values) && (
            <div className={styles.form_block}>
              <p className={styles.label}>Ապրանքի գույն</p>

              <div className={styles.choose_color}>
                {_.map(colors.values, (color, i) => (
                  <div className={styles.color__block} key={i}>
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
        </div>
      )}
    </>
  );
}

export default ProductDetailColor;
