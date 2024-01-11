import React from "react";
import styles from "./gift-card-modal.module.scss";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import PhoneInput from "@libs/presentation/components/form/inputs/PhoneInput";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import TbuyDatePicker from "@libs/presentation/components/form/date-pickers/DatePicker";
import TbuyTimePicker from "@libs/presentation/components/form/date-pickers/TimePicker";
import ModalWithButtons from "@libs/presentation/components/modals/ModalWithButtons";
import { useModal } from "@core/hooks/useModal";

function GiftCardModal(props: Omit<ModalProps, "children">) {
  const {
    control,
    register,
    setValue,
    formState: { errors },
    watch,
    // setError,
    // resetField,
    handleSubmit
  } = useForm();
  const watchNotificationType = watch("notification_type");

  const { t } = useTranslation(["common"]);

  const [successModalOpen, successChangeModalVisibility] = useModal(false);

  const submitHandler = (data: FieldValues) => {
    console.log(data);
    successChangeModalVisibility();
  };

  return (
    <>
      <Modal {...props} contentClassName={styles.modal} withCloseBtn>
        <div className="modal-content modalLoading">
          <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
            <h2 className="title modal-content__title modal-content__title_big">Apple նվեր քարտ</h2>
            <p className={`modal-content__text modal-content__text_center ${styles.modal__text}`}>
              Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության ։
            </p>

            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <TextInput
                  control={control}
                  {...register("firstName", {
                    required: `${t("form.required_field", { ns: "common" })}`
                  })}
                  inputProps={{
                    placeholder: "Անուն"
                  }}
                />
                <FormError errors={errors} name={"firstName"} />
              </div>
              <div className={styles.form__col}>
                <TextInput
                  control={control}
                  {...register("lastName", {
                    required: `${t("form.required_field", { ns: "common" })}`
                  })}
                  inputProps={{
                    placeholder: "Ազգանուն"
                  }}
                />
                <FormError errors={errors} name={"lastName"} />
              </div>
            </div>

            <div className={styles.form__row}>
              <div className={styles.form__col}>
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
              <div className={styles.form__col}>
                <PhoneInput control={control} />
                <FormError errors={errors} name={"phone"} />
              </div>
            </div>

            <div className={styles.form__row}>
              <TextInput
                control={control}
                {...register("comment", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                inputProps={{
                  multiline: true,
                  rows: 4,
                  placeholder: "Մաղթանք"
                }}
              />
            </div>

            <div className={styles.form__row}>
              <div className={styles.form__col}>
                <h2 className={styles.suptitle}>Ծանուցման տեսակ</h2>
                <div className={styles.col__radios}>
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
              </div>

              <div className={styles.form__col}>
                <h2 className={styles.suptitle}>Պլանավորված ծանուցում</h2>
                <div className={styles.col__pickers}>
                  <div className={styles.pickers__item}>
                    <TbuyDatePicker label={"Ամսաթիվ"} />
                  </div>
                  <div className={styles.pickers__item}>
                    <TbuyTimePicker label={"Ժամ"} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.form__row} ${styles.form__row_center}`}>
              <Checkbox
                variant={"primary_filled"}
                control={control}
                {...register("anonimous")}
                label={"Նվիրել անանուն"}
              />
            </div>

            <div
              className="modal-content__buttons"
              style={{ margin: "0 auto", marginTop: "30px", maxWidth: 376 }}
            >
              <button
                type={"button"}
                className={"outlined_btn"}
                onClick={(e) => !!props?.onClose && props?.onClose(e, "backdropClick")}
              >
                ՉԵՂԱՐԿԵԼ
              </button>
              <button className={"blue_btn"}>ՈՒՂԱՐԿԵԼ</button>
            </div>
          </form>
        </div>
      </Modal>

      <ModalWithButtons
        title={"Success message"}
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        footer={
          <button
            className={`${styles.success_btn} blue_btn`}
            onClick={successChangeModalVisibility}
          >
            ԼԱՎ
          </button>
        }
        open={successModalOpen}
        onClose={successChangeModalVisibility}
      />
    </>
  );
}

export default GiftCardModal;
