import React from "react";
import styles from "./remove_order.module.scss";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import FormError from "@libs/presentation/components/form/FormError";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";
import { closeModals } from "@features/account/presentation/store/ordersSlice";
import { useAppDispatch } from "@core/store";
import { useWindow } from "@core/hooks/useWindow";
import PrimaryButton from "@core/button/primary";

type Props = Omit<ModalProps, "children">;

function RemoveOrderModal(props: Props) {
  const dispatch = useAppDispatch();

  const {
    control,
    register,
    formState: { errors },
    // setError,
    // resetField,
    handleSubmit
  } = useForm();
  const isDesktop = useWindow();

  const { t } = useTranslation(["common"]);

  const submitHandler = (data: FieldValues) => {
    console.log(data);
    dispatch(closeModals());
  };

  return (
    <>
      <Modal {...props} contentClassName={styles.modal} withCloseBtn>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="title modal-content__title modal-content__title_big">
            ՊԱՏՎԵՐԻ ՉԵՂԱՐԿՈՒՄ
          </div>
          <p className={`modal-content__text modal-content__text_center ${styles.modal__text}`}>
            Payment method used does not allow for an automatic refund, Cancel this order results in
            an amount owed and required your 20000 AMD.
          </p>

          <div>
            <TextInput
              control={control}
              {...register("email", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                placeholder: (!isDesktop && "Cancel Reason") || ""
              }}
              label={"Cancel Reason"}
            />
            <FormError errors={errors} name={"email"} />
          </div>
          <div className={styles.checkbox}>
            <Checkbox
              control={control}
              variant={"secondary_outlined"}
              name={"notify_me"}
              label={`Notify me of order cancellation via email`}
            />
          </div>

          <div className={styles.buttons}>
            <PrimaryButton
              buttonStyle="outline"
              onClick={(e) => !!props?.onClose && props?.onClose(e, "backdropClick")}
            >
              CANCEL
            </PrimaryButton>
            <PrimaryButton>CanCEL ORDER</PrimaryButton>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default RemoveOrderModal;
