import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Link from "next/link";

import DefaultLayout from "@layouts/default";

import TbuyModal from "@libs/presentation/components/elements/Modal";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import FormError from "@libs/presentation/components/form/FormError";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";

import SocialsLogin from "@features/account/presentation/components/SocialsLogin";

import { useTranslation } from "next-i18next";

import styles from "./register.module.scss";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    reset
    // setValue
  } = useForm();

  const { t } = useTranslation(["account/auth", "common"]);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const submitHandler = async (data: FieldValues) => {
    try {
      if (data.password !== data.confirm_password) {
        return setError("confirm_password", {
          type: "custom",
          message: `${t("passwords_not_equal")}`
        });
      }

      delete data.agreement;
      delete data.confirm_password;

      console.log(data);
      setShowSuccessModal(true);
    } catch (error: unknown) {}
  };

  const closeSuccessModal = () => {
    reset();
    setShowSuccessModal(false);
  };

  return (
    <DefaultLayout>
      <>
        <div className={styles.wrapper}>
          <div className={styles.register}>
            <div className={styles.register__links}>
              <span className={styles.register__links_registr}>{t("registration")}</span>
            </div>

            <form onSubmit={handleSubmit(submitHandler)}>
              <div className={styles.register__form}>
                <div className={styles.register__form_label}>
                  <TextInput
                    control={control}
                    {...register("firstName", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    inputProps={{
                      placeholder: `${t("firstName")}`
                    }}
                  />

                  <FormError errors={errors} name={"firstName"} />
                </div>

                <div className={styles.register__form_label}>
                  <TextInput
                    control={control}
                    {...register("lastName", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    inputProps={{
                      placeholder: `${t("lastName")}`
                    }}
                  />

                  <FormError errors={errors} name={"lastName"} />
                </div>

                <div className={styles.register__form_label}>
                  <TextInput
                    control={control}
                    {...register("email", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    inputProps={{
                      placeholder: `${t("email")}`
                    }}
                  />

                  <FormError errors={errors} name={"email"} />
                </div>

                <div className={styles.register__form_label}>
                  <TextInput
                    control={control}
                    {...register("password", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    inputProps={{
                      type: "password",
                      placeholder: `${t("password")}`
                    }}
                  />

                  <FormError errors={errors} name={"password"} />
                </div>

                <div className={styles.register__form_label}>
                  <TextInput
                    control={control}
                    {...register("confirm_password", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    inputProps={{
                      type: "password",
                      placeholder: `${t("confirm_password")}`
                    }}
                  />

                  <FormError errors={errors} name={"confirm_password"} />
                </div>

                <div className={styles.logIn__form_checked}>
                  <Checkbox
                    control={control}
                    {...register("agreement", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    label={
                      <>
                        {t("agree")}
                        <Link href={"/agreement"} className={styles.logIn__form_forgotPassword}>
                          {t("terms")}
                        </Link>
                      </>
                    }
                  />

                  <FormError errors={errors} name={"agreement"} />
                </div>

                <button className={`blue_btn ${styles.register__form_btn}`} type="submit">
                  {t("register")}
                </button>

                <SocialsLogin />

                <div className={styles.login_or_register}>
                  <span>{t("have_account")} </span>
                  <Link href={"/login"}>{t("login")}</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>

      <TbuyModal open={showSuccessModal} onClose={closeSuccessModal}>
        <div className={styles.register_success}>
          <h3 className={styles.register_success__title}>{t("registration_confirm_title")}</h3>
          <p className={styles.register_success__text}>{t("registration_confirm_text")}</p>
          <button className={"blue_btn"} style={{ width: 116 }} onClick={closeSuccessModal}>
            {t("ok", { ns: "common" })}
          </button>
        </div>
      </TbuyModal>
    </DefaultLayout>
  );
}

export default RegisterPage;
