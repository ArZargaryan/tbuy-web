import React, { ChangeEvent, useState } from "react";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";

import styles from "./send_summary.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { FieldValues, useForm } from "react-hook-form";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import GratitudeModal from "@libs/presentation/components/modals/GratitudeModal";
import { useTranslation } from "next-i18next";
import PrimaryButton from "@core/button/primary";

type Props = Omit<ModalProps, "children">;

const { Icons } = ImgExporter;

function SendSummaryModal(props: Props) {
  const [showGratitudeModal, setShowGratitudeModal] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch
    // setError,
    // resetField
  } = useForm();
  const watchFile = watch("summary_file");
  // const { t } = useTranslation(["common"]);

  const changeGratitudeVisibility = () => setShowGratitudeModal((prev) => !prev);

  const submitHandler = (data: FieldValues) => {
    // if (!data.summary_file) {
    //   console.log(data);
    //
    //   return setError("summary_file", {
    //     type: "custom",
    //     message: `${t("form.required_field", { ns: "common" })}`
    //   });
    // }

    console.log(data);
    changeGratitudeVisibility();
  };

  return (
    <>
      <Modal {...props} contentClassName={styles.modal}>
        <div className="modal-content">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="h1 modal-content__title modal-content__title_big">ԴԻՄԵԼ</div>
            <p className={`modal-content__text modal-content__text_center ${styles.modal__text}`}>
              Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի
              ձևավորման վրա 5 օր:
            </p>
            <div className="modal-content__input-text">
              <TextInput
                control={control}
                {...register("comment")}
                inputProps={{ placeholder: "Վերնագիր" }}
              />
            </div>
            <div className="modal-content__input-file px">
              {watchFile && (
                <>
                  <div className="input-file__file-image">
                    <Icons.Summary />
                  </div>
                  <div className="input-file__file-name">{watchFile.name}</div>
                </>
              )}
              <label className="input-file__label">
                <input
                  accept={
                    "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n" +
                    "text/plain, application/pdf"
                  }
                  type="file"
                  className="label__input"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    e.target?.files &&
                    e.target.files.length &&
                    setValue("summary_file", e.target?.files[0])
                  }
                />
                <div className="label__text">Փոփոխել</div>
              </label>
            </div>
            {/*<div style={{ marginTop: "-20px", marginBottom: "20px" }}>*/}
            {/*  <FormError errors={errors} name={"summary_file"} />*/}
            {/*</div>*/}
            <div className="modal-content__buttons">
              <div className="modal-content__button-container">
                <PrimaryButton
                  buttonStyle="outline"
                  onClick={(e) => !!props?.onClose && props?.onClose(e, "backdropClick")}
                >
                  ՉԵՂԱՐԿԵԼ
                </PrimaryButton>
              </div>
              <div className="modal-content__button-container">
                <PrimaryButton>ԴԻՄԵԼ</PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <GratitudeModal open={showGratitudeModal} onClose={changeGratitudeVisibility} />
    </>
  );
}

export default SendSummaryModal;
