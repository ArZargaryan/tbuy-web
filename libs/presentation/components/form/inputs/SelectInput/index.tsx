import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControl, FormControlProps, InputLabel, MenuItem, TextFieldProps } from "@mui/material";

import MuiSelect from "@mui/material/Select";
import React from "react";
import styles from "./select-input.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

interface Props extends FormControlProps {
  name: string;
  label?: React.ReactNode;
  control?: Control<FieldValues> | undefined;
  defaultValue?: string | number;
  items: Array<{ id: number | string; value: string } | string>;
  inputProps?: TextFieldProps;
}

export const SelectInput = React.forwardRef(
  ({ name, control, label, className, placeholder, items, defaultValue, ...props }: Props, ref) => {
    const { Arrows } = ImgExporter;
    return (
      <div className={`${className} ${styles.container} select-container`}>
        {label && <InputLabel className={styles.label}>{label}:</InputLabel>}
        <FormControl {...props} className={styles.form}>
          {placeholder && <InputLabel style={{ marginTop: -3 }}>{placeholder}</InputLabel>}
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue || null}
            render={({ field: { onChange, onBlur, value } }) => (
              <MuiSelect
                className={styles.select}
                label={placeholder}
                value={value || ""}
                inputRef={ref}
                inputProps={{
                  ref: ref
                }}
                IconComponent={() => <Arrows.Down_blue className={styles.arrow} />}
                onBlur={onBlur}
                onChange={(e, child) => onChange(e, child)}
                onClick={(e) =>
                  e.target instanceof HTMLElement &&
                  e.target?.dataset.value == value &&
                  onChange(null)
                }
                MenuProps={{
                  className: styles.select_menu
                }}
              >
                {items.map((item, index) => (
                  <MenuItem
                    key={`${item}_${index}`}
                    value={typeof item !== "string" ? item.id : item}
                  >
                    {typeof item !== "string" ? item.value : item}
                    <div className={"circle"} />
                  </MenuItem>
                ))}
              </MuiSelect>
            )}
          ></Controller>
        </FormControl>
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput";
