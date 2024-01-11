import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { DeepRequired, FieldErrorsImpl, FieldValues, GlobalError } from "react-hook-form";

interface Props {
  errors: Partial<FieldErrorsImpl<DeepRequired<FieldValues>>> & {
    root?: Record<string, GlobalError>;
  };
  name: string;
}

function FormError({ errors, name }: Props) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }: { message: string }) => <p className={"form_error"}>{message}</p>}
    />
  );
}

export default FormError;
