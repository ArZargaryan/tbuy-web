import React from "react";
import Input from "react-phone-number-input/react-hook-form";

import styles from "./phone-input.module.scss";
import "react-phone-number-input/style.css";
import { Control, FieldValues } from "react-hook-form";
import { DefaultInputComponentProps } from "react-phone-number-input/index";
import classNames from "classnames";

type Props = {
  control: Control<FieldValues> | undefined;
  label?: React.ReactNode;
  className?: string;
  name?: string;
} & DefaultInputComponentProps;

function PhoneInput(props: Props) {
  const { control, label, name } = props;

  const cls = classNames(styles.phone_input, props.className);

  return (
    <>
      {!!label && <label className={styles.phone_input_label}>{label}</label>}
      <div className={cls}>
        <Input
          international
          {...props}
          className={""}
          name={name || "phone"}
          label={""}
          placeholder="Կոնտակտային հեռախոսահամար"
          defaultCountry={"AM"}
          control={control}
          limitMaxLength={true}
        />
      </div>
    </>
  );
}

export default PhoneInput;
