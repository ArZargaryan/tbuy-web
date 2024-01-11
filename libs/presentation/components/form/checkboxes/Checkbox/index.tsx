import { Control, Controller, FieldValues } from "react-hook-form";
import { CheckboxProps, FormControl, FormControlProps } from "@mui/material";

import MuiCheckbox from "@mui/material/Checkbox";
import React from "react";
import styles from "./checkbox.module.scss";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";

interface Props extends Omit<FormControlProps, "variant"> {
  variant?:
    | "primary"
    | "primary_filled"
    | "secondary_filled"
    | "secondary_outlined"
    | "circle"
    | "circle_secondary";
  name?: string;
  label?: React.ReactNode;
  control?: Control<FieldValues> | undefined;
  defaultValue?: string;
  inputProps?: CheckboxProps;
  inputChecked?: string | boolean;
}

const { Icons } = ImgExporter;

export const Checkbox = ({
  variant = "primary",
  name,
  control,
  label,
  defaultValue,
  inputChecked,
  ...props
}: Props) => {
  const checkboxLabelCls = classNames(styles.container, styles[`variant_${variant}`], {
    [styles.disabled]: props?.disabled
  });
  const checkboxCls = classNames(styles.container, styles.checkbox);

  return (
    <FormControl {...props}>
      {(control && (
        <Controller
          name={name || ""}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <label className={checkboxLabelCls}>
              <MuiCheckbox
                className={checkboxCls}
                onChange={onChange}
                onBlur={onBlur}
                checked={(typeof inputChecked === "undefined" && !!value) || !!inputChecked}
                inputRef={ref}
                checkedIcon={
                  <div className={styles.checked}>
                    <Icons.Check />
                  </div>
                }
              />
              {label && <span className={styles.label}>{label}</span>}
            </label>
          )}
        />
      )) || (
        <label className={checkboxLabelCls}>
          <MuiCheckbox
            className={checkboxCls}
            {...props.inputProps}
            checkedIcon={
              <div className={styles.checked}>
                <Icons.Check />
              </div>
            }
          />
          {label && <span className={styles.label}>{label}</span>}
        </label>
      )}
    </FormControl>
  );
};
