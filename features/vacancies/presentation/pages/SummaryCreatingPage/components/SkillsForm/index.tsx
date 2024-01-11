import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styles from "../../summary-creating-page.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { addSkill, setStep } from "@features/vacancies/presentation/store/summaryCreatingSlice";
import { SelectInput } from "@libs/presentation/components/form/inputs/SelectInput";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { SkillsSelect } from "@libs/presentation/components/form/selects/SkillsSelect";
import { proficiencies } from "@features/vacancies/presentation/pages/SummaryCreatingPage/model/proficiencies";
import PrimaryButton from "@core/button/primary";

function SkillsForm() {
  const { t } = useTranslation(["account/auth", "common"]);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    getValues
  } = useForm();

  const [isDesktop, setIsDesktop] = useState(true);

  const {
    Icons: { Plus }
  } = ImgExporter;

  useEffect(() => {
    const showPlacehoders = () => {
      if (window?.innerWidth <= 501) {
        return setIsDesktop(false);
      }
      setIsDesktop(true);
    };
    showPlacehoders();
    window.addEventListener("resize", showPlacehoders);
    return () => window.removeEventListener("resize", showPlacehoders);
  }, []);

  const submitHandler = async (data: FieldValues) => {
    try {
      dispatch(addSkill(data));
      dispatch(setStep(5));
    } catch (error: unknown) {}
  };

  const cancelHandler = () => dispatch(setStep(2));

  const addAnother = () => {
    if (Object.keys(errors).length) {
      return;
    }
    setStep(4);
    dispatch(addSkill(getValues()));
    reset({ skills: getValues().skills });
  };

  return (
    <>
      <h1 className={"title"}>Ստեղծել օնլայն ռեզյումե</h1>
      <h3 className={styles.subtitle}>Skills & languages</h3>
      <br />
      <form onSubmit={handleSubmit(submitHandler)}>
        <SkillsSelect
          control={control}
          label={"Let's find 6-8 of your top skills to highlight"}
          error={!!errors.skills?.message}
          items={[
            { value: "1", label: "React" },
            { value: "12", label: "Redux" },
            { value: "13", label: "Management" },
            { value: "14", label: "MobX" },
            { value: "15", label: "NodeJs" },
            { value: "16", label: "Recoil" },
            { value: "17", label: "NestJs" },
            { value: "18", label: "PHP" }
          ]}
          {...register("skills", {
            required: `${t("form.required_field", { ns: "common" })}`
          })}
          selectProps={{
            isMulti: true,
            placeholder: (!isDesktop && `Let's find 6-8 of your top skills to highlight`) || ""
          }}
        />
        <FormError errors={errors} name={"skills"} />
        <br />

        <div className={styles.flex_items}>
          <div className={styles.flex_items__field}>
            <TextInput
              control={control}
              inputProps={{
                placeholder: (!isDesktop && `Language`) || ""
              }}
              label={"Language"}
              {...register("language", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              error={!!errors.skills?.message}
            />
            <FormError errors={errors} name={"language"} />
          </div>

          <div className={styles.flex_items__field}>
            <label className={styles.field__label}>Proficiency</label>
            <SelectInput
              control={control}
              items={proficiencies}
              {...register("proficiency", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              placeholder={"Select level"}
            />
            <FormError errors={errors} name={"proficiency"} />
          </div>
        </div>

        <br />
        <div className={styles.big_textarea}>
          <TextInput
            control={control}
            inputProps={{
              placeholder: (!isDesktop && `Additional info (optional)`) || ""
            }}
            label={"Additional info (optional)"}
            {...register("additional_info")}
            error={!!errors.additional_info?.message}
          />
          <br />
          <button type={"submit"} className={styles.add_another} onClick={addAnother}>
            {" "}
            <Plus /> Add A LANGUAGE
          </button>
        </div>

        <div className={styles.form_buttons}>
          <PrimaryButton buttonStyle="outline" onClick={cancelHandler}>
            Cancel
          </PrimaryButton>
          <PrimaryButton>PREVIEW</PrimaryButton>
        </div>
      </form>
    </>
  );
}

export default SkillsForm;
