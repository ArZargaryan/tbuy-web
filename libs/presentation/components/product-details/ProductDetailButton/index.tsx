import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";

interface Props {
  companyType: string;
}

export const ProductDetailButton = ({ companyType }: Props) => {
  const { t } = useTranslation(["catalog/productspage"]);

  return (
    <div className={styles.product_amount_wrapper}>
      {companyType === "individual" ? (
        <button className={`${styles.submit_button} blue_btn`}>
          {t("actions.buy_now", { ns: "common" })}
        </button>
      ) : (
        <button className={`${styles.submit_button} blue_btn`}>
          {t("actions.add_to_cart", { ns: "common" })}
        </button>
      )}
    </div>
  );
};
