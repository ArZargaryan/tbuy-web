import React, { useState } from "react";
import styles from "./prod-char.module.scss";
import { useTranslation } from "next-i18next";

interface Characteristic {
  label: string;
  value: string | number;
}

interface Props {
  title: string;
  characteristics: Characteristic[];
}

function ProductCharacteristicBlock({ title, characteristics }: Props) {
  const { t } = useTranslation();

  const [cropped, setCropped] = useState(true);
  const [croppedСharacteristics, setCroppedСharacteristics] = useState(
    characteristics.slice(0, 30)
  );

  function handleClick() {
    if (cropped) {
      setCropped((old) => !old);
      setCroppedСharacteristics(characteristics);
    } else {
      setCropped((old) => !old);
      setCroppedСharacteristics(characteristics.slice(0, 30));
    }
  }

  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.char_items_wrapper}>
        {croppedСharacteristics?.map((char, i) => (
          <div key={`${char.label}_${i}`} className={styles.chat_item}>
            <p>
              <strong>{char.label}:</strong> {char.value}
            </p>
          </div>
        ))}
      </ul>

      {characteristics.length > 30 && (
        <button onClick={handleClick} className={styles.show_more}>
          {cropped ? t("show_more", { ns: "shop/cart" }) : t("hide", { ns: "shop/cart" })}
        </button>
      )}
    </>
  );
}

export default ProductCharacteristicBlock;
