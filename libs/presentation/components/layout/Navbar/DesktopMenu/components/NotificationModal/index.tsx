import React from "react";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import { ImgExporter } from "@core/helpers/ImgExporter";
import FormError from "@libs/presentation/components/form/FormError";
import { useTranslation } from "next-i18next";
import { useModal } from "@core/hooks/useModal";
import GratitudeModal from "@libs/presentation/components/modals/GratitudeModal";
import styles from "./notification.module.scss";

type Props = Omit<ModalProps, "children">;

const { blob } = ImgExporter;

function NotificationModal(props: Props) {
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
    changeOpenModal();
  };

  const closeAll = (e: MouseEvent) => {
    !!props?.onClose && props?.onClose(e, "backdropClick");
    changeOpenModal();
  };

  const [openModal, changeOpenModal] = useModal(false);

  return (
    <>
      <Modal {...props} contentClassName={styles.modal} withCloseBtn>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <div className="modal-content modalContentCard">
            <div className="title modal-content__title">LOREM IPSUM</div>
            <div className="modal-content__card">
              <div className="card__img">
                <img src={blob.GiftCard.src} alt="" />
              </div>
              <div className="card__info">
                <b className="info__name">Apple նվեր քարտ</b>
                <div className="info__price">
                  Գին<span className="price__count"> 123.000 AMD</span>
                </div>
              </div>
            </div>
            <div className="modal-content__user">
              <div className="user__avatar">
                <img src={blob.avatar.src} alt="" />
              </div>
              <div className="user__name p">John Redman</div>
            </div>
            <p className="modal-content__text px">
              Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային
              տեքստ է:
            </p>
            <b className="modal-content__answer px">Պատասխանել</b>

            <TextInput
              control={control}
              {...register("response", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                multiline: true,
                rows: 3
              }}
            />
            <FormError errors={errors} name={"response"} />

            <div className={`${styles.buttons} modal-content__buttons`}>
              <div className="modal-content__button-container">
                <button
                  type={"button"}
                  className="modal-content__button outlined_btn"
                  onClick={(e) => !!props?.onClose && props?.onClose(e, "backdropClick")}
                >
                  ՉԵՂԱՐԿԵԼ
                </button>
              </div>
              <div className="modal-content__button-container">
                <button className="modal-content__button blue_btn">ՀԱՍՏԱՏԵԼ</button>
              </div>
            </div>
          </div>
        </form>
      </Modal>

      <GratitudeModal open={openModal} onClose={closeAll} />
    </>
  );
}

export default NotificationModal;
