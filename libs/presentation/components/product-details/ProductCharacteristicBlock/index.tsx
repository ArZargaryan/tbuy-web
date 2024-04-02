import React from "react";
import styles from "./prod-char.module.scss";

interface Characteristic {
  label: string;
  value: string | number;
}

interface Props {
  title: string;
  characteristics: Characteristic[];
}

function ProductCharacteristicBlock({ title, characteristics }: Props) {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.char_items_wrapper}>
        {characteristics?.map((char, i) => (
          <div key={`${char.label}_${i}`} className={styles.chat_item}>
            <p>
              <strong>{char.label}:</strong> {char.value}
            </p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default ProductCharacteristicBlock;
