import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import styles from "./transfer_form.module.scss";

type Props = {
  variant: string;
};

function TransferForm({ variant }: Props) {
  const { register, handleSubmit, control } = useForm();

  const submitHandler = (data: FieldValues) => {
    console.log(data);
  };

  if (variant === "transfer") {
    return (
      <form className={styles.transfer_form} onSubmit={handleSubmit(submitHandler)}>
        <TextInput
          control={control}
          {...register("tranfer", {})}
          inputProps={{ placeholder: "Անձնագրի սերիա *" }}
        />
      </form>
    );
  }

  return null;
}

export default TransferForm;
