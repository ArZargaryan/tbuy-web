import React from "react";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import { FieldValues, useForm } from "react-hook-form";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";

import styles from "./checkout_form.module.scss";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import { SelectInput } from "@libs/presentation/components/form/inputs/SelectInput";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    // setError,
    watch
    // setValue,
    // getValues
  } = useForm();

  const { t } = useTranslation(["common"]);
  const wantSignup = watch("want_signup", false);

  const submitHandler = async (data: FieldValues) => {
    try {
      delete data.remember_me;
      console.log(data);
    } catch (error: unknown) {}
  };

  return (
    <form className={styles.checkout_form} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.checkout_form__row}>
        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <div className={styles.checkout_form__col__item}>
              <TextInput
                control={control}
                {...register("email", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                inputProps={{
                  type: "email",
                  placeholder: "Էլ. փոստ *"
                }}
              />
              <FormError errors={errors} name={"email"} />
            </div>
            <TextInput
              control={control}
              {...register("firstName", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                placeholder: "Անուն *"
              }}
            />
            <FormError errors={errors} name={"firstName"} />
          </div>
          <div className={styles.checkout_form__col__item}>
            <TextInput
              control={control}
              {...register("lastName", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                placeholder: "Ազգանուն *"
              }}
            />
            <FormError errors={errors} name={"lastName"} />
          </div>
          <div
            className={`${styles.checkout_form__col__item} ${styles.checkout_form__col__item_select}`}
          >
            <SelectInput
              control={control}
              {...register("state", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              items={[
                { id: 1, value: "Item 1" },
                { id: 2, value: "Item 2" },
                { id: 3, value: "Item 3" }
              ]}
              placeholder="Մարզ *"
            />
            <FormError errors={errors} name={"state"} />
          </div>
          <div
            className={`${styles.checkout_form__col__item} ${styles.checkout_form__col__item_select}`}
          >
            <SelectInput
              control={control}
              {...register("residence", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              items={[
                { id: 1, value: "Item 1" },
                { id: 2, value: "Item 2" },
                { id: 3, value: "Item 3" }
              ]}
              placeholder="Բնակավայր *"
            />
            <FormError errors={errors} name={"residence"} />
          </div>
        </div>

        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <PhoneInput control={control} />
          </div>
          <div className={styles.checkout_form__col__item}>
            <PhoneInput control={control} name={"second_phone"} />
          </div>
          {/*<div className={styles.checkout_form__col__item}>*/}
          {/*  <TextInput*/}
          {/*    control={control}*/}
          {/*    {...register("address", {*/}
          {/*      required: `${t("form.required_field", { ns: "common" })}`*/}
          {/*    })}*/}
          {/*    inputProps={{*/}
          {/*      placeholder: "Առաքման հասցե *"*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <FormError errors={errors} name={"address"} />*/}
          {/*</div>*/}
        </div>
      </div>
      <div className={styles.checkout_form__row}>
        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <TextInput
              control={control}
              {...register("extra", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                multiline: true,
                rows: 2,
                placeholder: "Հատուկ նշումներ *"
              }}
            />
            <FormError errors={errors} name={"extra"} />
          </div>
        </div>
      </div>

      {/*<div className={styles.checkout_form__row}>*/}
      {/*  <div className={styles.checkout_form__col}>*/}
      {/*    <div*/}
      {/*      className={`${styles.checkout_form__col__item} ${styles.checkout_form__col__item_checkbox}`}*/}
      {/*    >*/}
      {/*      <Checkbox*/}
      {/*        control={control}*/}
      {/*        {...register("want_signup", {*/}
      {/*          required: `${t("form.required_field", { ns: "common" })}`*/}
      {/*        })}*/}
      {/*        variant={"primary_filled"}*/}
      {/*        label={"Գրանցվել և ստանալ հավելյալ հնարավորություններ"}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*{wantSignup && (*/}
      {/*  <div className={styles.checkout_form__row}>*/}
      {/*    <div className={styles.checkout_form__col}>*/}
      {/*      <div className={styles.checkout_form__col__item}>*/}
      {/*        <TextInput*/}
      {/*          control={control}*/}
      {/*          {...register("want_signup_password", {*/}
      {/*            required: `${t("form.required_field", { ns: "common" })}`*/}
      {/*          })}*/}
      {/*          inputProps={{*/}
      {/*            type: "password",*/}
      {/*            placeholder: "Գաղտնաբառ"*/}
      {/*          }}*/}
      {/*        />*/}
      {/*        <FormError errors={errors} name={"want_signup_password"} />*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className={styles.checkout_form__col}>*/}
      {/*      <div className={styles.checkout_form__col__item}>*/}
      {/*        <TextInput*/}
      {/*          control={control}*/}
      {/*          {...register("want_signup_repeat_password", {*/}
      {/*            required: `${t("form.required_field", { ns: "common" })}`*/}
      {/*          })}*/}
      {/*          inputProps={{*/}
      {/*            type: "password",*/}
      {/*            placeholder: "Կրկնեք գաղտնաբառը"*/}
      {/*          }}*/}
      {/*        />*/}
      {/*        <FormError errors={errors} name={"want_signup_repeat_password"} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </form>
  );
}

export default CheckoutForm;
