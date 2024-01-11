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
    <div className={styles.block}>
      <h4 className={styles.title}>{title}</h4>
      <ul>
        {characteristics?.map((char, i) => (
          <p key={`${char.label}_${i}`} className={styles.text}>
            <strong>{char.label}</strong> {char.value}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default ProductCharacteristicBlock;
