import React from "react";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import styles from "../../user-info.module.scss";
import PrimaryButton from "@core/button/primary";

function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError
    // reset
  } = useForm();

  const { t } = useTranslation(["common"]);

  const submitHandler = (data: FieldValues) => {
    if (data.password !== data.repeat_password) {
      setError("repeat_password", { type: "custom", message: "Գաղտնաբառերը չեն համընկնում" });
    }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.info_block}>
      <h1 className={`title title_account ${styles.block__title}`}>Փոխել գաղտնաբառը</h1>

      <div className={styles.block__field}>
        <TextInput
          control={control}
          {...register("password", {
            required: `${t("form.required_field", { ns: "common" })}`
          })}
          inputProps={{
            type: "password",
            placeholder: `Գաղտնաբառ`
          }}
          error={!!errors?.password}
        />

        <FormError errors={errors} name={"password"} />
      </div>
      <div className={styles.block__field}>
        <TextInput
          control={control}
          {...register("repeat_password", {
            required: `${t("form.required_field", { ns: "common" })}`
          })}
          inputProps={{
            type: "password",
            placeholder: `Կրկնեք գաղտնաբառը`
          }}
          error={!!errors?.repeat_password}
        />

        <FormError errors={errors} name={"repeat_password"} />
        <p className={styles.text}>Ոչ պակաս քան 8 սիմվոլ</p>
      </div>

      <PrimaryButton>ՓՈՓՈԽԵԼ</PrimaryButton>
    </form>
  );
}

export default ChangePasswordForm;
