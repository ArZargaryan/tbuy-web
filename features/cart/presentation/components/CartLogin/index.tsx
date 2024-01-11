import React from "react";
import styles from "./cart-login.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import { useAppSelector } from "@core/store";
import { FieldValues, useForm } from "react-hook-form";
import { trimField } from "@core/helpers/form/trimField";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import { ImgExporter } from "@core/helpers/ImgExporter";

const { Logos } = ImgExporter;

function CartLogin() {
  const { similar_products } = useAppSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    // setError,
    // watch,
    setValue
    // getValues
  } = useForm();

  const { t } = useTranslation(["common"]);

  const submitHandler = async (data: FieldValues) => {
    try {
      delete data.remember_me;
      console.log(data);
    } catch (error: unknown) {}
  };

  return (
    <div className={styles.cart_login}>
      <h3 className={styles.cart_suptitle}>Մուտք անձնական էջ</h3>

      <form className={styles.cart_login__form} onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.form__input}>
          <TextInput
            control={control}
            {...register("login", {
              required: `${t("form.required_field", { ns: "common" })}`,
              ...trimField({ name: "login", setValue })
            })}
            inputProps={{
              placeholder: "Էլ. փոստ կամ հեռախոսահամար"
            }}
          />
          <FormError errors={errors} name={"login"} />
        </div>

        <div className={styles.form__input}>
          <TextInput
            control={control}
            {...register("password", {
              required: `${t("form.required_field", { ns: "common" })}`,
              ...trimField({ name: "password", setValue })
            })}
            inputProps={{
              type: "password",
              placeholder: "Գաղտնաբառ"
            }}
          />

          <FormError errors={errors} name={"password"} />

          <p className={styles.input__forgot_password}>Մոռացել եմ գաղտնաբառը</p>
        </div>

        <div className={`${styles.form__btn}`}>
          <button className={"blue_btn"} type={"submit"}>
            ՄՈՒՏՔ
          </button>
        </div>
      </form>

      <div className={styles.or}>Կամ</div>
      <hr className={styles.or_line} />

      <div className={styles.cart_login__socials}>
        <span className={styles.form_social_link}>
          <Logos.facebookBlue className={styles.form_social_icon} />
          <span className={styles.form_social_text}>FACEBOOK</span>
        </span>

        <span className={styles.form_social_link}>
          <Logos.google className={styles.form_social_icon} />
          <span className={styles.form_social_text}>GOOGLE</span>
        </span>

        <span className={`${styles.form_social_link}`}>
          <Logos.apple className={styles.form_social_icon} />

          <span className={styles.form_social_text}>APPLE ID</span>
        </span>
      </div>
    </div>
  );
}

export default CartLogin;
