import React from "react";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { closeModals } from "@features/account/presentation/store/ordersSlice";
import { useAppDispatch } from "@core/store";
import { ImgExporter } from "@core/helpers/ImgExporter";
import styles from "./message-modal.module.scss";

interface Props extends Omit<ModalProps, "children"> {
  recipient: {
    name: string;
  };
}

const { blob } = ImgExporter;

function MessageModal(props: Props) {
  const { recipient } = props;

  const dispatch = useAppDispatch();

  const {
    control,
    register,
    formState: { errors },
    // setError,
    // resetField,
    handleSubmit
  } = useForm();

  const { t } = useTranslation(["common"]);

  const submitHandler = (data: FieldValues) => {
    console.log(data);
    dispatch(closeModals());
  };

  return (
    <>
      <Modal {...props} contentClassName={styles.modal} withCloseBtn>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className={`modal-content ${styles.modalContentLetter}`}>
            <div className={styles.modalContentLetter__header}>
              <div className="p header__title">Ուղարկել նամակ</div>
            </div>

            <div className={styles.form__body}>
              <div className={styles.modalContentLetter__user}>
                <div className="user__avatar">
                  <img src={"https://tbuy.am/imgs/partners_imgs/496.jpeg"} alt="" />
                </div>
                <div className="user__name p">{recipient.name}</div>
                <div className="user__info">Պատասխանում է մի քանի ժամվա ընթացքում</div>
              </div>

              <TextInput
                control={control}
                {...register("message", {
                  required: `${t("form.required_field", { ns: "common" })}`
                })}
                inputProps={{
                  multiline: true,
                  rows: 3,
                  placeholder: "Ձեր հաղորդագրությունը"
                }}
              />
              <FormError errors={errors} name={"message"} />

              <div className="modal-content__button-container">
                <button className="modal-content__button blue_btn">ՈՒՂԱՐԿԵԼ</button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default MessageModal;
