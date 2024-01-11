import React from "react";
import { useTranslation } from "next-i18next";
import { FieldValues, useForm } from "react-hook-form";

import DefaultLayout from "@layouts/default";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";

import styles from "./forgot-password.module.scss";
export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
    // setError,
    // setValue
  } = useForm();

  const { t } = useTranslation(["account/auth", "common"]);

  const submitHandler = async (data: FieldValues) => {
    try {
      console.log(data);
    } catch (error: unknown) {}
  };

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles.forgotPassword}>
          <h2 className={styles.forgotPassword__title}>{t("forgot_password")}</h2>
          <p className={styles.forgotPassword__text}>{t("forgot_password_text")}</p>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className={styles.forgotPassword__form}>
              <div className={styles.logIn__form_label}>
                <TextInput
                  control={control}
                  inputProps={{
                    placeholder: `${t("email")}`
                  }}
                  {...register("email", {
                    required: `${t("form.required_field", { ns: "common" })}`
                  })}
                />

                <FormError errors={errors} name={"email"} />
              </div>

              <button className={"blue_btn"} type="submit">
                {`${t("form.send", { ns: "common" })}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
