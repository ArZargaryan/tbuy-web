import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./login-third-step.module.scss";
import itemImg1 from "@public/pictures/manager_signin/img1.png";
import itemImg2 from "@public/pictures/manager_signin/img3.png";
import SupportContactsModal from "@features/contact_us/presentation/components/SupportContactsModal";
import Captcha from "@libs/presentation/components/elements/Captcha";
import FormError from "@libs/presentation/components/form/FormError";
import FileInput from "@libs/presentation/components/form/inputs/FileInput";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import PrimaryButton from "@core/button/primary";

function LoginThirdStep() {
  const { t } = useTranslation(["account/auth"]);

  const [step, setStep] = useState(0);
  const router = useRouter();

  const handleNext = (event:any) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handleBack = (event:any) => {
    event.preventDefault();
    if (step === 0) {
      router.reload();
    } else {
      setStep(step - 1);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
    // setError,
    // setValue
  } = useForm();

  const { QuestionCircle } = ImgExporter.Icons;

  const submitHandler = async (data: FieldValues) => {
    return console.log(data);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.progress_container}>
          {[1, 2, 3].map((circle, index) => (
            <React.Fragment key={index}>
              {index !== 0 && (
                <div
                  className={`${styles.line} ${step >= index ? styles.activeLine : ""}`}
                  style={{ width: `${(100 / 2) * (index - 1)}%` }}
                ></div>
              )}
              <div className={`${styles.circle} ${step >= index ? styles.active : ""}`}>
                {step >= index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="61"
                    height="61"
                    viewBox="0 0 61 61"
                    fill="none"
                  >
                    <rect width="61" height="61" rx="30.5" fill="#2463BF" />
                    <path
                      d="M39.1423 24.8385L39.1409 24.8372C38.9154 24.6253 38.619 24.5051 38.3096 24.5002C38.0002 24.4952 37.7001 24.6058 37.468 24.8104L37.4618 24.8158L37.4559 24.8214L37.4401 24.8363L37.4389 24.8374L27.9416 33.717L24.54 30.5363L24.5346 30.5313L24.5291 30.5264C24.2969 30.3218 23.9968 30.2112 23.6874 30.2162C23.3781 30.2211 23.0816 30.3413 22.8562 30.5532L22.8559 30.5534C22.7435 30.6592 22.654 30.7868 22.5928 30.9284C22.5316 31.0701 22.5 31.2227 22.5 31.377C22.5 31.5313 22.5316 31.684 22.5928 31.8256C22.654 31.9673 22.7435 32.0949 22.8559 32.2006L22.8572 32.2019L27.1002 36.1669L27.1001 36.1669L27.1051 36.1714C27.3339 36.3796 27.6322 36.4949 27.9415 36.4949C28.2509 36.4949 28.5492 36.3796 28.778 36.1714L28.778 36.1714L28.783 36.1668L39.1197 26.5019C39.2345 26.3989 39.3271 26.2735 39.3917 26.1334C39.4575 25.9908 39.4928 25.8361 39.4955 25.6792C39.4982 25.5222 39.4682 25.3664 39.4074 25.2216C39.3466 25.0769 39.2563 24.9464 39.1423 24.8385Z"
                      fill="white"
                      stroke="white"
                    />
                  </svg>
                ) : (
                  circle
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        <form id={`form${step + 1}`}>
          {step === 0 && (
            <div className={styles.landing__item}>
              <div className={styles.item__img}>
                <img src={itemImg1.src} alt="itemImage" />
              </div>
              <div className={styles.item__body}>
                <h1 className={styles.body__title}>ԴԱՌՆԱԼ ԳՈՐԾԸՆԿԵՐ</h1>
                <p className={styles.body__text}>
                  ԲԻԶՆԵՍԻ ԱՌԱՋԽԱՂԱՑՄԱՆ ՀԱՄԱՐ ՄԻԱԿ ՕԳՏԱԿԱՐ ՏԻՐՈՒՅԹԸ
                </p>
                <h2 className={`${styles.body__subtitle} ${styles.body__subtitle_first}`}>
                  ԲԱՐԻ ԳԱԼՈՒՍՏ ԱՌԱՋԻՆ ԲԻԶՆԵՍ-ՍՈՑԻԱԼԱԿԱՆ ՄԱՐՔԵԹՓԼԵՅՍ
                </h2>
                <p className={styles.body__text}>
                  Եթե ցանկանում եք իրապես զարգացնել Ձեր բրենդը օնլայն տիրույթում, առաջխաղացնել այն և
                  ունենալ մեծ հաջողություններ, ապա Դուք անցել եք երբևիցե ամենաճիշտ հղմամբ։ Նախ
                  հակիրճ ծանոթացեք հիմնական առավելություններին, որոնք տրվելու են Ձեզ TBUY
                  մարքեթփլեյսում
                </p>
              </div>
            </div>
          )}
          {step === 1 && (
            <>
              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg2.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h1 className={styles.body__title}>ԴԱՌՆԱԼ ԳՈՐԾԸՆԿԵՐ</h1>
                  <p className={styles.body__text}>
                    ԲԻԶՆԵՍԻ ԱՌԱՋԽԱՂԱՑՄԱՆ ՀԱՄԱՐ ՄԻԱԿ ՕԳՏԱԿԱՐ ՏԻՐՈՒՅԹԸ
                  </p>
                  <h2 className={`${styles.body__subtitle} ${styles.body__subtitle_first}`}>
                    ԲԱՐԻ ԳԱԼՈՒՍՏ ԱՌԱՋԻՆ ԲԻԶՆԵՍ-ՍՈՑԻԱԼԱԿԱՆ ՄԱՐՔԵԹՓԼԵՅՍ
                  </h2>
                  <p className={styles.body__text}>
                    Եթե ցանկանում եք իրապես զարգացնել Ձեր բրենդը օնլայն տիրույթում, առաջխաղացնել այն
                    և ունենալ մեծ հաջողություններ, ապա Դուք անցել եք երբևիցե ամենաճիշտ հղմամբ։ Նախ
                    հակիրճ ծանոթացեք հիմնական առավելություններին, որոնք տրվելու են Ձեզ TBUY
                    մարքեթփլեյսում
                  </p>
                </div>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <div className={styles.content__container}>
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
                      <PrimaryButton className={styles.btn_center}>
                        ԳՐԱՆՑՈՒՄ
                      </PrimaryButton>
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
            </>
          )}

          <div className={styles.btn_box}>
            {step >= 0 && (
              <PrimaryButton buttonStyle="outline" onClick={handleBack}>
                Back
              </PrimaryButton>
            )}
            {step < 2 && (
              <PrimaryButton
                onClick={handleNext}
                className={styles.btn_next}
              >
                Next
              </PrimaryButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginThirdStep;
