import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styles from "../../summary-creating-page.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { useDispatch } from "react-redux";
import { setBaseInfo, setStep } from "@features/vacancies/presentation/store/summaryCreatingSlice";
import { useWindow } from "@core/hooks/useWindow";
import PrimaryButton from "@core/button/primary";

function BaseForm() {
  const { t } = useTranslation(["account/auth", "common"]);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const isDesktop = useWindow();

  const submitHandler = async (data: FieldValues) => {
    try {
      dispatch(setBaseInfo(data));
      dispatch(setStep(2));
    } catch (error: unknown) {}
  };

  const cancelHandler = () => dispatch(setStep(1));

  return (
    <>
      <h1 className={"title"}>Ստեղծել օնլայն ռեզյումե</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.form}>
          <div className={styles.form__col}>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `Name Surname`) || ""
                }}
                label={"Name Surname"}
                {...register("name", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.name?.message}
              />
              <FormError errors={errors} name={"name"} />
            </div>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `Address`) || ""
                }}
                label={"Address"}
                {...register("address", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.address?.message}
              />
              <FormError errors={errors} name={"address"} />
            </div>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `City`) || ""
                }}
                label={"City"}
                {...register("city", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.city?.message}
              />
              <FormError errors={errors} name={"city"} />
            </div>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `State`) || ""
                }}
                label={"State"}
                {...register("state", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.state?.message}
              />
              <FormError errors={errors} name={"state"} />
            </div>
          </div>

          <div className={styles.form__col}>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `ZIP`) || ""
                }}
                label={"ZIP"}
                {...register("zip", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.zip?.message}
              />
              <FormError errors={errors} name={"zip"} />
            </div>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  type: "email",
                  placeholder: (!isDesktop && `Email`) || ""
                }}
                label={"Email"}
                {...register("email", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.email?.message}
              />
              <FormError errors={errors} name={"email"} />
            </div>
            <div className={styles.col__item}>
              <PhoneInput
                control={control}
                label={"Phone number"}
                className={`${!!errors.phone?.message ? styles.error_input : ""}`}
              />
              <FormError errors={errors} name={"phone"} />
            </div>
          </div>
        </div>
        <div className={styles.single_select}>
          <Checkbox control={control} name={"show_country"} label={`Show country`} />
        </div>
        <div className={styles.form_buttons}>
          <PrimaryButton buttonStyle="outline" onClick={cancelHandler}>
            Cancel
          </PrimaryButton>
          <PrimaryButton>
            CONTINUE
          </PrimaryButton>
        </div>
      </form>
    </>
  );
}

export default BaseForm;
