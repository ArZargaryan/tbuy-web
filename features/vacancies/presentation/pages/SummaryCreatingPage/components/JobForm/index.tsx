import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styles from "../../summary-creating-page.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { useDispatch } from "react-redux";
import {
  addWork,
  setBaseInfo,
  setStep
} from "@features/vacancies/presentation/store/summaryCreatingSlice";
import { SelectInput } from "@libs/presentation/components/form/inputs/SelectInput";
import {
  months,
  years
} from "@features/vacancies/presentation/pages/SummaryCreatingPage/model/monthYearSelectData";
import { ImgExporter } from "@core/helpers/ImgExporter";
import PrimaryButton from "@core/button/primary";

function JobForm() {
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
      dispatch(addWork(data));
      dispatch(setStep(3));
    } catch (error: unknown) {}
  };

  const cancelHandler = () => dispatch(setStep(1));

  const addAnother = () => {
    if (Object.keys(errors).length) {
      return;
    }
    setStep(2);
    dispatch(addWork(getValues()));
    console.log(getValues());
    reset();
  };

  return (
    <>
      <h1 className={"title"}>Ստեղծել օնլայն ռեզյումե</h1>
      <h3 className={styles.subtitle}>Job Detail</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.form}>
          <div className={styles.form__col}>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `Job title`) || ""
                }}
                label={"Job title"}
                {...register("job_title", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.job_title?.message}
              />
              <FormError errors={errors} name={"job_title"} />
            </div>
            <div className={styles.col__item}>
              <TextInput
                control={control}
                inputProps={{
                  placeholder: (!isDesktop && `Employer`) || ""
                }}
                label={"Employer"}
                {...register("employer", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                error={!!errors.employer?.message}
              />
              <FormError errors={errors} name={"employer"} />
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
          </div>

          <div className={styles.form__col}>
            <div className={styles.col__item}>
              <label className={styles.item__label}>Start date</label>
              <div className={styles.item__selects}>
                <div className={styles.selects__select}>
                  <SelectInput
                    control={control}
                    items={months}
                    {...register("startMonth", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    placeholder={"Month"}
                  />
                  <FormError errors={errors} name={"startMonth"} />
                </div>

                <div className={styles.selects__select}>
                  <SelectInput
                    control={control}
                    items={years}
                    {...register("startYear", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    placeholder={"Years"}
                  />
                  <FormError errors={errors} name={"startYear"} />
                </div>
              </div>
            </div>

            <div className={styles.col__item}>
              <label className={styles.item__label}>End date</label>
              <div className={styles.item__selects}>
                <div className={styles.selects__select}>
                  <SelectInput
                    control={control}
                    items={months}
                    {...register("endMonth", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    placeholder={"Month"}
                  />
                  <FormError errors={errors} name={"endMonth"} />
                </div>

                <div className={styles.selects__select}>
                  <SelectInput
                    control={control}
                    items={years}
                    {...register("endYear", {
                      required: `${t("form.required_field", { ns: "common" })}`
                    })}
                    placeholder={"Years"}
                  />
                  <FormError errors={errors} name={"endYear"} />
                </div>
              </div>
              <div className={styles.single_select}>
                <Checkbox
                  control={control}
                  name={"currently_work"}
                  label={`I currently work here`}
                />
              </div>
              <button type={"submit"} className={styles.add_another} onClick={addAnother}>
                {" "}
                <Plus /> Add ANOTHER POSITION
              </button>
            </div>
          </div>
        </div>
        <div className={styles.single_select}>
          <Checkbox control={control} name={"show_country"} label={`Show country`} />
        </div>

        <div className={styles.big_textarea}>
          <TextInput
            control={control}
            inputProps={{
              multiline: true,
              rows: 3,
              placeholder: (!isDesktop && `What are/were you responsible for at this job?`) || "",
              type: "text"
            }}
            label={"What are/were you responsible for at this job?"}
            {...register("job_details", {
              required: `${t("form.required_field", { ns: "common" })}`
            })}
            error={!!errors.job_details?.message}
          />
          <FormError errors={errors} name={"job_details"} />
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

export default JobForm;
