import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";

import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import styles from "./gift_card.module.scss";
import TbuyDatePicker from "@libs/presentation/components/form/date-pickers/DatePicker";
import TbuyTimePicker from "@libs/presentation/components/form/date-pickers/TimePicker";

function GiftCardForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm();
  const watchNotificationType = watch("notification_type");

  const { t } = useTranslation(["common"]);

  const submitHandler = async (data: FieldValues) => {
    try {
      console.log(data);
    } catch (error: unknown) {}
  };

  return (
    <form className={styles.checkout_form} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.checkout_form__row}>
        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <TextInput
              control={control}
              {...register("fullName", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                placeholder: "Անուն Ազգանուն"
              }}
            />
            <FormError errors={errors} name={"fullName"} />
          </div>
        </div>
      </div>
      <div className={styles.checkout_form__row}>
        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <TextInput
              control={control}
              {...register("email", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                type: "email",
                placeholder: "Էլ. հասցե"
              }}
            />
            <FormError errors={errors} name={"email"} />
          </div>
        </div>

        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <PhoneInput control={control} />
          </div>
        </div>
      </div>
      <div className={styles.checkout_form__row}>
        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <TextInput
              control={control}
              {...register("comment")}
              inputProps={{
                multiline: true,
                rows: 3,
                placeholder: "Մաղթանք"
              }}
            />
            <FormError errors={errors} name={"comment"} />
          </div>
        </div>
      </div>

      <h3 className={styles.cart_suptitle}>Ծանուցման տեսակ</h3>
      <div className={styles.checkout_form__notification_type}>
        <Checkbox
          variant={"circle_secondary"}
          control={control}
          {...register("notification_type", {
            onChange: () => {
              setValue("notification_type", "email");
            }
          })}
          onChange={() => {
            setValue("notification_type", "email");
          }}
          inputChecked={watchNotificationType === "email"}
          label={"Էլ. փոստ"}
        />

        <Checkbox
          variant={"circle_secondary"}
          control={control}
          {...register("notification_type", {
            onChange: () => {
              setValue("notification_type", "sms");
            }
          })}
          inputChecked={watchNotificationType === "sms"}
          label={"SMS"}
        />
      </div>

      <br />

      <h3 className={styles.cart_suptitle}>Պլանավորված ծանուցում</h3>

      <div className={styles.checkout_form__row}>
        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <TbuyDatePicker label={"Ծանուցման ամսաթիվ"} />
          </div>
        </div>
        <div className={styles.checkout_form__col}>
          <div className={styles.checkout_form__col__item}>
            <TbuyTimePicker label={"Ծանուցման ժամ"} />
          </div>
        </div>
      </div>

      <div className={styles.checkout_form__row}>
        <div className={styles.checkout_form__col}>
          <div
            className={`${styles.checkout_form__col__item} ${styles.checkout_form__col__item_checkbox}`}
          >
            <Checkbox
              control={control}
              {...register("anonymous")}
              variant={"primary_filled"}
              label={"Նվիրել անանուն"}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default GiftCardForm;
