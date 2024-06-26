import React, { useState } from "react";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";

import { trimField } from "@core/helpers/form/trimField";
import DefaultLayout from "@layouts/default";

import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import FormError from "@libs/presentation/components/form/FormError";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";

import SocialsLogin from "@features/account/presentation/components/SocialsLogin";
import BecomeSeller from "features/account/presentation/pages/SellerPage/BecomeSeller";

import styles from "./login.module.scss";

function LoginPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    // setError,
    setValue
  } = useForm();

  const { t } = useTranslation(["account/auth", "common"]);

  // ВРЕМЕННО, вместо этого будет взаимодействие с localStorage после логина...
  const [secondStep, setSecondStep] = useState(false);

  const submitHandler = async (data: FieldValues) => {
    try {
      delete data.remember_me;
      console.log(data);
      setSecondStep(true);
    } catch (error: unknown) {}
  };

  return (
    <DefaultLayout>
      <>
        {secondStep ? (
          <BecomeSeller />
        ) : (
          <>
            <div className={styles.wrapper}>
              <div className={styles.logIn}>
                <div className={styles.logIn__links}>
                  <span className={styles["logIn__links_log-in"]}>{t("login")}</span>
                </div>

                <form
                  onSubmit={handleSubmit(submitHandler)}
                  style={{ display: secondStep ? "none" : "block" }}
                >
                  <div className={styles.logIn__form}>
                    <div className={styles.logIn__form_label}>
                      <TextInput
                        control={control}
                        inputProps={{
                          type: "email",
                          placeholder: `${t("email")}`
                        }}
                        {...register("email", {
                          required: `${t("form.required_field", { ns: "common" })}`
                        })}
                      />

                      <FormError errors={errors} name={"email"} />
                    </div>

                    <div className={styles.logIn__form_label}>
                      <TextInput
                        control={control}
                        inputProps={{
                          type: "password",
                          placeholder: `${t("password")}`
                        }}
                        {...register("password", {
                          required: `${t("form.required_field", { ns: "common" })}`,
                          minLength: {
                            value: 6,
                            message: "Գաղտնաբառի նվազագույն երկարությունը - 6 նիշ"
                          },
                          maxLength: {
                            value: 40,
                            message: "Գաղտնաբառի առավելագույն երկարությունը՝ 40 նիշ"
                          },
                          ...trimField({ name: "password", setValue })
                        })}
                      />

                      <FormError errors={errors} name={"password"} />
                    </div>

                    <div className={styles.logIn__form_checked}>
                      <div>
                        <Checkbox
                          control={control}
                          name={"remember_me"}
                          label={`${t("remember_me")}`}
                        />
                      </div>
                      <Link href={"/forgot_password"} className={styles.logIn__form_forgotPassword}>
                        {t("forgot_password")}
                      </Link>
                    </div>

                    <button className={"blue_btn"} style={{ marginBottom: 36 }} type="submit">
                      {t("login")}
                    </button>

                    <SocialsLogin />

                    <div className={styles.login_or_register}>
                      <span>{t("not_account")} </span>
                      <Link href={"/register"}>{t("register")}</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </>
    </DefaultLayout>
  );
}

export default LoginPage;
