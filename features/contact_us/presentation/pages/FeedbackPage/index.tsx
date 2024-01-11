import React from "react";
import DefaultLayout from "@layouts/default";
import styles from "./feedback.module.scss";
import TitleWithLink from "@libs/presentation/components/titles/TitleWithLink";
import { FieldValues, useForm } from "react-hook-form";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import Captcha from "@libs/presentation/components/elements/Captcha";
import { ImgExporter } from "@core/helpers/ImgExporter";
import Link from "next/link";
import PrimaryButton from "@core/button/primary";

function FeedbackPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
    // setError,
    // setValue
  } = useForm();
  const { t } = useTranslation(["common"]);

  const submitHandler = (values: FieldValues) => {
    console.log(values);
  };

  const { Phone, Mail } = ImgExporter.Icons;
  const { Logos } = ImgExporter;

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <TitleWithLink linkText={""} linkPath={""}>
            ՀԵՏԱԴԱՐՁ ԿԱՊ
          </TitleWithLink>
          <div className={styles.content__body}>
            <form className={styles.body__form} onSubmit={handleSubmit(submitHandler)}>
              <div className={styles.form__content}>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      placeholder: `Անուն`
                    }}
                    {...register("firstName", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />

                  <FormError errors={errors} name={"firstName"} />
                </div>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      placeholder: `Ազգանուն`
                    }}
                    {...register("lastName", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />

                  <FormError errors={errors} name={"lastName"} />
                </div>

                <div className={styles.form__item}>
                  <PhoneInput control={control} />

                  <FormError errors={errors} name={"phone"} />
                </div>
                <div className={styles.form__item}>
                  <TextInput
                    control={control}
                    inputProps={{
                      type: "email",
                      placeholder: `Էլ. հասցե`
                    }}
                    {...register("email", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />

                  <FormError errors={errors} name={"email"} />
                </div>

                <div className={`${styles.form__item} ${styles.form__item_100}`}>
                  <Captcha />

                  <FormError errors={errors} name={"captcha"} />
                </div>

                <div className={`${styles.form__item} ${styles.form__item_100}`}>
                  <TextInput
                    control={control}
                    inputProps={{
                      placeholder: `Հաղորդագրություն`,
                      multiline: true,
                      rows: 4
                    }}
                    {...register("message", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                  />

                  <FormError errors={errors} name={"message"} />
                </div>
              </div>
              <PrimaryButton>ՈՒՂԱՐԿԵԼ</PrimaryButton>
            </form>
            <div className={styles.body__contacts}>
              <div className={styles.contacts__item}>
                <p className={styles.item__title}>Հաճախորդների սպասարկում</p>
                <div className={styles.item__info}>
                  <div className={styles.info__item}>
                    <Phone />
                    <span>+374 12 600 600</span>
                  </div>
                  <div className={styles.info__item}>
                    <Mail />
                    <a href={"mailto:info@tbuy.am"}>info@tbuy.am</a>
                  </div>
                </div>
              </div>
              <div className={styles.contacts__item}>
                <p className={styles.item__title}>Հաճախորդների սպասարկում</p>
                <div className={styles.item__info}>
                  <div className={styles.info__item}>
                    <Phone />
                    <span>+374 12 600 600</span>
                  </div>
                  <div className={styles.info__item}>
                    <Mail />
                    <a href={"mailto:info@tbuy.am"}>info@tbuy.am</a>
                  </div>
                </div>
              </div>
              <div className={styles.contacts__item}>
                <p className={`${styles.item__title} ${styles.item__title_normal}`}>
                  We`re on social
                </p>
                <div className={styles.item__socials}>
                  <Link href="/" className={styles.socials__link}>
                    <Logos.instagram />
                  </Link>
                  <Link href="/" className={styles.socials__link}>
                    <Logos.facebook />
                  </Link>
                  <Link href="/" className={styles.socials__link}>
                    <Logos.linked_in />
                  </Link>
                  <Link href="/">
                    <Logos.youtube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default FeedbackPage;
