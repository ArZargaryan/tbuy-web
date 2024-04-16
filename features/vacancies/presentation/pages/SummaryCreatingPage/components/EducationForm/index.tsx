import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styles from "../../summary-creating-page.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { useDispatch } from "react-redux";
import {
  addEducation,
  setBaseInfo,
  setStep
} from "@features/vacancies/presentation/store/summaryCreatingSlice";
import { SelectInput } from "@libs/presentation/components/form/inputs/SelectInput";
import {
  months,
  years
} from "@features/vacancies/presentation/pages/SummaryCreatingPage/model/monthYearSelectData";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { degrees } from "@features/vacancies/presentation/pages/SummaryCreatingPage/model/degrees";
import { useWindow } from "@core/hooks/useWindow";
import PrimaryButton from "@core/button/primary";

function EducationForm() {
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

  const isDesktop = useWindow();

  const {
    Icons: { Plus }
  } = ImgExporter;

  const submitHandler = async (data: FieldValues) => {
    try {
      dispatch(addEducation(data));
      dispatch(setStep(4));
    } catch (error: unknown) {}
  };

  const cancelHandler = () => dispatch(setStep(2));

  const addAnother = () => {
    if (Object.keys(errors).length) {
      return;
    }
    setStep(3);
    dispatch(addEducation(getValues()));
    reset();
  };

  return (
    <>
      <h1 className={"title"}>Ստեղծել օնլայն ռեզյումե</h1>
      <h3 className={styles.subtitle}>Education</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.form}>
          <div className={styles.form__col}>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `School/University name`) || ""
                }}
                label={"School/University name"}
                {...register("university_name", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.university_name?.message}
              />
              <FormError errors={errors} name={"university_name"} />
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
            <div className={styles.single_select}>
              <Checkbox control={control} name={"show_country"} label={`Show country`} />
            </div>
          </div>

          <div className={styles.form__col}>
            <div className={styles.col__item}>
              <label className={styles.item__label}>Degree</label>
              <SelectInput
                control={control}
                items={degrees}
                {...register("degree", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                placeholder={"Select your degree"}
              />
              <FormError errors={errors} name={"degree"} />
            </div>

            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `Field of study`) || ""
                }}
                label={"Field of study"}
                {...register("study", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.study?.message}
              />
              <FormError errors={errors} name={"study"} />
            </div>

            <div className={styles.col__item}>
              <label className={styles.item__label}>Graduation date</label>
              <div className={styles.item__selects}>
                <div className={styles.selects__select}>
                  <SelectInput
                    control={control}
                    items={months}
                    {...register("graduationMonth", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    placeholder={"Month"}
                  />
                  <FormError errors={errors} name={"graduationMonth"} />
                </div>

                <div className={styles.selects__select}>
                  <SelectInput
                    control={control}
                    items={years}
                    {...register("graduationYear", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    placeholder={"Years"}
                  />
                  <FormError errors={errors} name={"graduationYear"} />
                </div>
              </div>
              <br />
              <button type={"submit"} className={styles.add_another} onClick={addAnother}>
                {" "}
                <Plus /> Add MORE EDUCATION
              </button>
              <br />
            </div>
          </div>
        </div>

        <div className={styles.form_buttons}>
          <PrimaryButton buttonStyle="outline" onClick={cancelHandler}>
            Cancel
          </PrimaryButton>
          <PrimaryButton>CONTINUE</PrimaryButton>
        </div>
      </form>
    </>
  );
}

export default EducationForm;
