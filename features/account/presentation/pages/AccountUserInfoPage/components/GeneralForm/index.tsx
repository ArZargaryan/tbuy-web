import React, { ChangeEvent } from "react";
import styles from "../../user-info.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "@core/store";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import UploadFile from "@libs/presentation/components/form/upload/UploadFile";
import FileImage from "@libs/presentation/components/elements/FileImage";
import PrimaryButton from "@core/button/primary";

function GeneralForm() {
  const {
    general: { firstName, lastName, email, phone, socialCard }
  } = useAppSelector((state) => state.account_user_info);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    // setError,
    // reset
    setValue,
    watch,
    resetField
  } = useForm();

  const watchPassport = watch("passport");
  const watchPassportWithFace = watch("passport_with_face");

  const { t } = useTranslation(["common"]);

  const submitHandler = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.info_block}>
      <h1 className={`title title_account ${styles.block__title}`}>Անձնական տվյալներ</h1>

      <div className={styles.block__field}>
        <TextInput
          control={control}
          {...register("firstName", {
            required: `${t("form.required_field", { ns: "common" })}`
          })}
          inputProps={{
            placeholder: `Անուն`
          }}
          defaultValue={firstName}
          error={!!errors?.firstName}
        />

        <FormError errors={errors} name={"firstName"} />
      </div>
      <div className={styles.block__field}>
        <TextInput
          control={control}
          {...register("lastName", {
            required: `${t("form.required_field", { ns: "common" })}`
          })}
          inputProps={{
            placeholder: `Ազգանուն`
          }}
          defaultValue={lastName}
          error={!!errors?.lastName}
        />

        <FormError errors={errors} name={"lastName"} />
      </div>
      <div className={styles.block__field}>
        <PhoneInput control={control} defaultValue={phone} />
      </div>
      <div className={styles.block__field}>
        <TextInput
          control={control}
          {...register("email", {
            required: `${t("form.required_field", { ns: "common" })}`
          })}
          inputProps={{
            type: "email",
            placeholder: `Էլ. փոստ`
          }}
          error={!!errors?.email}
          defaultValue={email}
        />

        <FormError errors={errors} name={"email"} />
      </div>
      <div className={styles.block__field}>
        <UploadFile
          control={control}
          {...register("passport")}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            e.target?.files && e.target.files.length && setValue("passport", e.target?.files[0])
          }
          label={"Անձնագրի պատճեն"}
          withStar={false}
        />
        <FormError errors={errors} name={"passport"} />
      </div>
      <div className={styles.block__field}>
        <UploadFile
          control={control}
          {...register("passport_with_face")}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            e.target?.files &&
            e.target.files.length &&
            setValue("passport_with_face", e.target?.files[0])
          }
          label={"Անձնագրի հետ սելֆի"}
          withStar={false}
        />
        <FormError errors={errors} name={"passport_with_face"} />
      </div>
      <div className={styles.block__field}>
        <TextInput
          control={control}
          {...register("social_card")}
          inputProps={{
            placeholder: `Սոց. քարտ`
          }}
          defaultValue={socialCard}
        />

        <FormError errors={errors} name={"social_card"} />
      </div>
      {(watchPassport || watchPassportWithFace) && (
        <div className={styles.block__images}>
          <FileImage file={watchPassport} onCancel={() => resetField("passport")} />
          <FileImage
            file={watchPassportWithFace}
            onCancel={() => resetField("passport_with_face")}
          />
        </div>
      )}
      <PrimaryButton>ՓՈՓՈԽԵԼ</PrimaryButton>
    </form>
  );
}

export default GeneralForm;
