import React from "react";
import Modal from "@libs/presentation/components/elements/Modal";
import { ModalProps } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { SelectInput } from "@libs/presentation/components/form/inputs/SelectInput";
import FormError from "@libs/presentation/components/form/FormError";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import styles from "./address-modal.module.scss";
import { addAddress } from "@features/account/presentation/store/userInfoPageSlice";
import { useAppDispatch } from "@core/store";

type Props = Omit<ModalProps, "children">;

function AddAddressModal(props: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
    // setError,
    // watch
    // setValue,
    // getValues
  } = useForm();
  const dispatch = useAppDispatch();

  const { t } = useTranslation(["common"]);

  const submitHandler = async (data: FieldValues) => {
    try {
      console.log(data);
      dispatch(addAddress({ ...data, isDefault: false }));
      !!props?.onClose && props?.onClose(data, "backdropClick");
    } catch (error: unknown) {}
  };

  return (
    <Modal {...props} contentClassName={styles.modal} withCloseBtn>
      <div className="modal-content">
        <div className="title modal-content__title modal-content__title_big">
          ԱՎԵԼԱՑՆԵԼ ՆՈՐ ՀԱՍՑԵ
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <div className={styles.form__item}>
            <SelectInput
              control={control}
              {...register("region", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              items={[
                { id: "Կոտայք", value: "Կոտայք" },
                { id: "Կոտայք", value: "Կոտայք" },
                { id: "Կոտայք", value: "Կոտայք" }
              ]}
              placeholder="Մարզ"
            />
            <FormError errors={errors} name={"region"} />
          </div>
          <div className={styles.form__item}>
            <SelectInput
              control={control}
              {...register("city", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              items={[
                { id: "Հրազդան", value: "Հրազդան" },
                { id: "Հրազդան", value: "Հրազդան" },
                { id: "Հրազդան", value: "Հրազդան" }
              ]}
              placeholder="Բնակավայր"
            />
            <FormError errors={errors} name={"city"} />
          </div>

          <div className={styles.form__item}>
            <TextInput
              control={control}
              {...register("address", {
                required: `${t("form.required_field", { ns: "common" })}`
              })}
              inputProps={{
                placeholder: "Հասցե"
              }}
            />
            <FormError errors={errors} name={"address"} />
          </div>

          <div className={styles.buttons}>
            <button
              type={"button"}
              className={"outlined_btn"}
              onClick={(e) => !!props?.onClose && props?.onClose(e, "backdropClick")}
            >
              ՉԵՂԱՐԿԵԼ
            </button>
            <button className={"blue_btn"}>ԱՎԵԼԱՑՆԵԼ</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddAddressModal;
