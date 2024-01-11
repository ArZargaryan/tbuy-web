import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import styles from "./qr_form.module.scss";
import QrCodeBlock from "@features/cart/presentation/components/CheckoutPaymentMethod/components/QrForm/components/QrCodeBlock";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = {
  variant: string;
  check: string;
};

const { MobileAppQr } = ImgExporter;

function QrForm({ variant, check }: Props) {
  const { register, handleSubmit, control } = useForm();

  const submitHandler = (data: FieldValues) => {
    console.log(data);
  };

  if (variant === "idram" && check === variant) {
    return (
      <form className={styles.qr_form} onSubmit={handleSubmit(submitHandler)}>
        <QrCodeBlock QrSvg={MobileAppQr} />
      </form>
    );
  }

  if (variant === "inecopay" && check === variant) {
    return (
      <form className={styles.qr_form} onSubmit={handleSubmit(submitHandler)}>
        <QrCodeBlock QrSvg={MobileAppQr} />
      </form>
    );
  }

  if (variant === "credit" && check === variant) {
    return (
      <form className={styles.qr_form} onSubmit={handleSubmit(submitHandler)}>
        <p className={styles.qr_form__text}>Ներբեռնեք հավելվածը ապառիկ գնման համար</p>
        <QrCodeBlock QrSvg={MobileAppQr} />
      </form>
    );
  }

  return null;
}

export default QrForm;
