import React, { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormControlProps,
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps
} from "@mui/material";

import classNames from "classnames";
import styles from "./text-input.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

interface Props extends FormControlProps {
  name: string;
  label?: React.ReactNode;
  control?: Control<FieldValues> | undefined;
  defaultValue?: string;
  inputProps?: TextFieldProps;
  icon?: React.ReactNode;
}

export const TextInput = React.forwardRef(
  ({ name, label, control, defaultValue, inputProps, icon, ...props }: Props, ref) => {
    const [inputType, setInputType] = useState(
      inputProps && inputProps.type ? inputProps.type : "text"
    );
    const textFieldClasses = classNames(
      {
        [styles.text_field]: true,
        [styles.text_field_error]: props.error
      },
      props.className
    );

    function showPassword() {
      if (inputType !== "text") {
        setInputType("text");
      } else {
        setInputType("password");
      }
    }

    const { Icons } = ImgExporter;

    return (
      <div className={styles.container}>
        <FormControl {...props} className={styles.control}>
          {label && <label>{label}</label>}
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                {...inputProps}
                className={textFieldClasses}
                onChange={onChange}
                value={value || ""}
                onBlur={onBlur}
                inputRef={ref}
                InputProps={{
                  ref: ref,
                  type: inputType,
                  className: styles.input,
                  endAdornment: inputProps && (
                    <InputAdornment position="end">
                      {inputProps.type === "password" && (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={showPassword}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          <Icons.eye />
                        </IconButton>
                      )}
                      {icon && <IconButton>{icon}</IconButton>}
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </FormControl>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
