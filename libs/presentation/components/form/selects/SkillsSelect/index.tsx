import { Control, Controller, FieldValues } from "react-hook-form";
import { FormControl, FormControlProps, InputLabel } from "@mui/material";

import React from "react";
import styles from "./skills_select.module.scss";
// import classNames from "classnames";
import Select, { Props } from "react-select";
import classNames from "classnames";

interface SkillsSelectProps extends FormControlProps {
  name: string;
  items: Array<{ value: string | string; label: string }>;
  label?: React.ReactNode;
  control?: Control<FieldValues> | undefined;
  defaultValue?: string | number;
  selectProps?: Props;
}

export const SkillsSelect = React.forwardRef(
  ({
    name,
    control,
    label,
    className,
    items,
    defaultValue,
    selectProps,
    ...props
  }: SkillsSelectProps) => {
    // const textFieldClasses = classNames({
    //   [styles.text_field]: true,
    //   [styles.text_field_error]: props.error
    // });

    const selectCls = classNames(styles.select, selectProps?.className);

    return (
      <div className={`${className} ${styles.container} select-container`}>
        {label && <InputLabel className={styles.label}>{label}:</InputLabel>}
        <FormControl {...props} className={styles.control}>
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue || null}
            render={({ field: { onChange, value } }) => (
              <Select
                value={value}
                onChange={onChange}
                options={items}
                {...selectProps}
                className={selectCls}
              />
            )}
          ></Controller>
        </FormControl>
      </div>
    );
  }
);

SkillsSelect.displayName = "AutoCompleteSelect";
