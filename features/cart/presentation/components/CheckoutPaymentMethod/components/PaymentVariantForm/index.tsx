import React, { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import { useTranslation } from "next-i18next";
import styles from "./payment_variant.module.scss";

import FileImage from "@libs/presentation/components/elements/FileImage";
import FormError from "@libs/presentation/components/form/FormError";
import UploadFile from "@libs/presentation/components/form/upload/UploadFile";
import PassportModal from "@libs/presentation/components/modals/PassportModal";

interface Props {
  variant: string;
}

function PaymentVariantForm(props: Props) {
  const { t } = useTranslation("utils");
  const {
    register,
    handleSubmit,
    control,
    reset,
    resetField,
    watch,
    setValue,
    formState: { errors }
  } = useForm();

  const [openPassportModal, setOpenPassportModal] = useState(false);
  const changePassportModalVisibility = () => setOpenPassportModal((prev) => !prev);

  useEffect(() => {
    reset();
  }, [props.variant]);

  const submitHandler = async (data: FieldValues) => {
    try {
      console.log(data);
    } catch (error: unknown) {
      console.log(data);
    }
  };

  if (props.variant === "evocabank") {
    return (
      <form className={styles.evocabank_form} onSubmit={handleSubmit(submitHandler)}>
        <TextInput
          control={control}
          {...register("evobankInput", {})}
          inputProps={{ placeholder: "Անձնագրի սերիա *" }}
        />
      </form>
    );
  }

  if (props.variant === "rassrochka") {
    const watchPassport = watch("passport_file");
    const watchPassportWithFace = watch("passport_with_face_file");

    return (
      <>
        <form className={styles.rassrochka_form} onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.policy}>
            <p>
              Ստորև աքցեպտավորելով՝ ես հաստատում եմ, որ իմ կողմից նշված բոլոր տեղեկությունները
              լիարժեք են և արժանահավատ: Գիտակցում եմ, որ սույն դիմումում կեղծ տեղեկություններ նշելու
              դեպքում Բանկը կհրաժարվի սպառողական վարկ տրամադրել՝ անկախ տրված համաձայնությունից և
              կնքված պայմանագրից: Չունեմ ընթացիկ ժամկետանց պարտավորություններ և սույնով տալիս եմ իմ
              համաձայնությունը, որ.
            </p>
            <p>
              • “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ն և/կամ “ՅՈՒՆԻԲԱՆԿ” ԲԲԸ-ն հարցումներ կատարի “ԱՔՌԱ
              Քրեդիտ Ռեփորթինգ” ՓԲԸ-ին և վերջինիս խնդրում եմ “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ին և/կամ
              “ՅՈՒՆԻԲԱՆԿ” ԲԲԸ-ին տրամադրել իմ ներկա և անցյալ ֆինանսական պարտավորությունների
              վերաբերյալ տեղեկություններ, ինչպես նաև այլ տվյալներ, որոնք “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ”
              ՓԲԸ-ի և/կամ “ՅՈՒՆԻԲԱՆԿ” ԲԲԸ-ի կողմից կարող են հաշվի առնվել ինձ հետ վարկային
              (փոխառության և այլն) պայմանագիր կնքելու վերաբերյալ որոշում կայացնելիս:
            </p>
            <p>
              • “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ի և/կամ “ՅՈՒՆԻԲԱՆԿ” ԲԲԸ-ի կողմից վարկային
              (փոխառության և այլն) պայմանագիր կնքելու դեպքում տվյալ վարկային(փոխառության և այլն)
              պայմանագրի գործողության ողջ ընթացքում ցանկացած պահին առանց ինձ նախապես տեղյակ պահելու
              “ԱՔՌԱ Քրեդիտ Ռեփորթինգ” ՓԲԸ-ն “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ին և/կամ “ՅՈՒՆԻԲԱՆԿ”
              ԲԲԸ-ին տրամադրի իմ ապագա ֆինանսական պարտավորությունների վերաբերյալ տեղեկություններ,
              ինչպես նաև այլ տվյալներ:
            </p>
            <p>
              • “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ն սեփականության կամ ընդհանուր սեփականության
              իրավունքով ինձ պատկանող գույքերի վերաբերյալ հարցում կատարի ՀՀ ԿԱ Անշարժ գույքի
              կադաստրի պետական կոմիտե և ստանա սպառիչ տեղեկատվություն իմ գույքային իրավունքների, այդ
              թվում` դրանց ծագման հիմքերի վերաբերյալ, ինչպես նաև կադաստրային գործից ստանա
              սեփականության իրավունքի վկայականի, հատակագծի և այլ անհրաժեշտ փաստաթղթերի պատճենները`
              մինչև իմ վարկային (փոխառության և այլն) պարտավորության լրիվ կատարումը:
            </p>
            <p>
              • “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ն սեփականության կամ ընդհանուր սեփականության
              իրավունքով ինձ պատկանող տրանսպորտային միջոցների վերաբերյալ հարցում կատարի ՀՀ
              Ճանապարհային ոստիկանություն և ստանա սպառիչ տեղեկատվություն տրանսպորտային միջոցների
              նկատմամբ իմ գույքային իրավունքների, այդ թվում` դրանց ծագման հիմքերի վերաբերյալ, ինչպես
              նաև ստանա սեփականության իրավունքի վկայականի և այլ անհրաժեշտ փաստաթղթերի պատճենները`
              մինչև իմ վարկային (փոխառության և այլն) պարտավորության լրիվ կատարումը:
            </p>
            <p>
              • “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ն հարցում կատարի “Հայաստանի ավտոապահովագրողների
              բյուրո” ԻԱՄ-ին և ապահովագրական ընկերություններին և ստանա ցանկացած տեղեկատվություն ինձ
              սեփականության իրավունքով պատկանող տրանսպորտային միջոցների ապահովագրության վերաբերյալ
              (այդ թվում՝ ապահովադրի և շահառուների վերաբերյալ տեղեկություններ)` մինչև իմ վարկային
              (փոխառության և այլն) պարտավորության լրիվ կատարումը:
            </p>
            <p>
              • “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ն հարցում կատարի “Նորք” սոցիալական ծառայությունների
              տեխնոլոգիական և իրազեկման կենտրոն հիմնադրամին և խնդրում եմ վերջինիս տրամադրել իմ
              վերաբերյալ ցանկացած տեղեկատվություն, որը կարող է կիրառվել Բանկի կողմից:
            </p>
            <p>
              • “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ կողմից ինձ ուղարկվեն ծանուցումներ` “ԱԿԲԱ-ԿՐԵԴԻՏ
              ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ի կողմից մատուցվող ծառայությունների հետ կապված ցանկացած
              տեղեկատվության վերաբերյալ:
            </p>
            <p>
              • Սույնով ծանուցվում եմ, ինչպես նաև տալիս եմ իմ համաձայնությունը, որ “Անձնական
              տվյալների պաշտպանության մասին” ՀՀ օրենքի համաձայն՝ “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ն
              (ՀՀ, ք. Երևան, Արամի 82-84) 50 տարվա ընթացքում հարցումներ կատարի “Էլեկտրոնային
              կառավարման ենթակառուցվածքների ներդրման գրասենյակ” ՓԲԸ-ին (ԷԿԵՆԳ) ՀՀ Ոստիկանության
              բնակչության պետական ռեգիստրի, ՀՀ Արդարադատության նախարարության քաղաքացիական կացության
              ակտերի գրանցման գործակալության, ՀՀ Ոստիկանության ճանապարհային ոստիկանության, ՀՀ ԱՆ
              Իրավաբանական անձանց պետական ռեգիստրի և ՀՀ Արդարադատության նախարարության հարկադիր
              կատարման ծառայության, ՀՀ ԿԱ Պետական եկամուտների կոմիտեի, ՀՀ անշարժ գույքի կադաստրի
              կոմիտեի տվյալներից իմ վերաբերյալ ցանկացած տեղեկատվություն ստանալու նպատակով, որն
              օգտագործվելու և ուսումնասիրվելու է ծառայությունների մատուցման հետ կապված ցանկացած
              գործընթացում, ինչպես նաև իմ անձնական տվյալները “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ի կողմից
              փոխանցվի “ԱՔՌԱ Քրեդիտ Ռեփորթինգ” ՓԲԸ, ՀՀ կենտրոնական բանկ, պետական իրավասու մարմիններ
              և այն իրավաբանական անձանց, որոնց կանոնադրական կապիտալում “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ”
              ՓԲԸ-ն ունի ուղղակի կամ անուղղակի մասնակցություն: Համաձայնությունը/անձնական տվյալները
              կարող են հետ կանչվել, ուղղվել, ոչնչացվել, իսկ տվյալների մշակումը՝ դադարեցվել իմ գրավոր
              դիմումի հիման վրա:
            </p>
            <p>
              Գիտակցում եմ, որ տրամադրված տեղեկությունները և տվյալները, կախված դրանց
              բովանդակությունից կարող են ազդել “ԱԿԲԱ-ԿՐԵԴԻՏ ԱԳՐԻԿՈԼ ԲԱՆԿ” ՓԲԸ-ի և/կամ “ՅՈՒՆԻԲԱՆԿ”
              ԲԲԸ-ի կողմից կայացված համապատասխան որոշման վրա: Սույն համաձայնությունը կարդացել եմ և
              հավաստում եմ, որ այն ինձ համար ամբողջությամբ հասկանալի և ընդունելի է:
            </p>
          </div>

          <div className={styles.form__agreement}>
            <Checkbox
              variant={"primary_filled"}
              control={control}
              {...register("agreement", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              label={"Հաստատել *"}
            />
            <FormError errors={errors} name={"agreement"} />
          </div>
          <div className={styles.form__row}>
            <div className={styles.row__col}>
              <TextInput
                control={control}
                {...register("passport", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                inputProps={{
                  placeholder: "Անձնագիր/Նույնականացման քարտ *"
                }}
              />
              <FormError errors={errors} name={"passport"} />
            </div>
            <div className={styles.row__col}>
              <TextInput
                control={control}
                {...register("social_card")}
                inputProps={{
                  placeholder: "Սոց. քարտ"
                }}
              />
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.row__col}>
              <UploadFile
                control={control}
                {...register("passport_file", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  e.target?.files &&
                  e.target.files.length &&
                  setValue("passport_file", e.target?.files[0])
                }
                onClickQuestion={changePassportModalVisibility}
                label={"Կցել անձնագրի պատճեն"}
              />
              <FormError errors={errors} name={"passport_file"} />
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.row__col}>
              <UploadFile
                control={control}
                {...register("passport_with_face_file", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  e.target?.files &&
                  e.target.files.length &&
                  setValue("passport_with_face_file", e.target?.files[0])
                }
                label={"Կցել անձնագրի հետ սելֆի"}
              />
              <FormError errors={errors} name={"passport_with_face_file"} />
            </div>
          </div>

          <div className={styles.form__images}>
            <FileImage file={watchPassport} onCancel={() => resetField("passport_file")} />
            <FileImage
              file={watchPassportWithFace}
              onCancel={() => resetField("passport_with_face_file")}
            />
          </div>
        </form>

        <PassportModal open={openPassportModal} onClose={changePassportModalVisibility} />
      </>
    );
  }

  return null;
}

export default PaymentVariantForm;
