import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { FieldValues, useForm } from "react-hook-form";

import DefaultLayout from "@layouts/default";

import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { SelectInput } from "@libs/presentation/components/form/inputs/SelectInput";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import Captcha from "@libs/presentation/components/elements/Captcha";

import styles from "./become-partner.module.scss";
import FileInput from "@libs/presentation/components/form/inputs/FileInput";
import { ImgExporter } from "@core/helpers/ImgExporter";
import SupportContactsModal from "@features/contact_us/presentation/components/SupportContactsModal";
import PrimaryButton from "@core/button/primary";

function BecomePartnerPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
    // setError,
    // setValue
  } = useForm();

  const { t } = useTranslation(["common"]);
  const { QuestionCircle } = ImgExporter.Icons;

  const submitHandler = async (data: FieldValues) => {
    return console.log(data);
  };

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.content__container}>
            <h2 className={styles.content__title}>ԴԱՌՆԱԼ ԳՈՐԾԸՆԿԵՐ</h2>
            <p className={styles.content__text}>Գրանցել կազմակերպություն</p>

            <form onSubmit={handleSubmit(submitHandler)}>
              <div className={styles.content__form}>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      placeholder: `Ընկերության անվանում`
                    }}
                    {...register("companyName", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />
                  <FormError errors={errors} name={"companyName"} />
                </div>
                <div className={styles.form__item}>
                  <SelectInput
                    control={control}
                    items={[
                      { id: 1, value: "Առևտուր" },
                      { id: 2, value: "Ծառայություններ" }
                    ]}
                    placeholder={"Գործունեության տեսակ"}
                    {...register("activityField", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    style={{ marginTop: 5 }}
                  />
                  <FormError errors={errors} name={"activityField"} />
                </div>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      placeholder: `Տնօրենի անուն`
                    }}
                    {...register("directorName", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />
                  <FormError errors={errors} name={"directorName"} />
                </div>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      placeholder: `Տնօրենի ազգանուն`
                    }}
                    {...register("directorLastname", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />
                  <FormError errors={errors} name={"directorLastname"} />
                </div>
                <div className={styles.form__item}>
                  <PhoneInput control={control} />
                </div>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      type: "email",
                      placeholder: `Կոնտակտային Էլ. հասցե`
                    }}
                    {...register("email", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />
                  <FormError errors={errors} name={"email"} />
                </div>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      placeholder: `ՀՎՀՀ`
                    }}
                    {...register("avk", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />
                  <FormError errors={errors} name={"avk"} />
                </div>
                <div className={styles.form__item}>
                  <FileInput
                    control={control}
                    {...register("files")}
                    inputProps={{
                      placeholder: "Կցել փասթաթուղթ"
                    }}
                  />
                </div>
              </div>
              <Captcha size={"invisible"} />
              <PrimaryButton className={styles.form__submit}>ԳՐԱՆՑՈՒՄ</PrimaryButton>
              <button
                type={"button"}
                className={`${styles.form__modal_btn}`}
                onClick={() => setModalOpen(true)}
              >
                ՕԳՆՈւԹՅՈւՆ <QuestionCircle />
              </button>
            </form>
          </div>
        </div>
      </div>

      <SupportContactsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </DefaultLayout>
  );
}

export default BecomePartnerPage;
