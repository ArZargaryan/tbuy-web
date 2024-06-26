import React, { ChangeEvent, HTMLAttributes, useState } from "react";
import styles from "./file-input.module.scss";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { FormControl, FormControlProps } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props extends FormControlProps {
  inputProps?: HTMLAttributes<HTMLInputElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  listClassName?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
}

const {
  Icons: { Attach, File }
} = ImgExporter;

function FileInput(props: Props) {
  const [fileList, setFileList] = useState<string[]>([]);

  const labelCls = classNames(styles.file_input, props.labelProps?.className);
  const inputCls = classNames(styles.file_input, props?.className);
  const listCls = classNames(styles.file_list, props?.listClassName);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const changedFileList = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const file of e.target.files) {
      const { name } = file;
      changedFileList.push(name);
    }
    setFileList(changedFileList);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  const removeItem = (index: number) => {
    const newFileList = fileList.filter((file, i) => i !== index);
    setFileList(newFileList);
  };

  return (
    <div>
      <FormControl {...props} className={`${styles.control} ${props.className}`}>
        <Controller
          name={props.name}
          control={props.control}
          render={({ field: { onChange, value } }) => (
            <>
              <label className={labelCls}>
                {props?.inputProps?.placeholder}
                <input
                  accept="image/*"
                  hidden
                  multiple
                  type="file"
                  {...props?.inputProps}
                  value={value}
                  className={inputCls}
                  onChange={(e) => {
                    onChange(e);
                    changeHandler(e);
                  }}
                  style={{ display: "none" }}
                />
                <Attach />
              </label>
              <div className={listCls}>
                {fileList?.map((file, i) => {
                  return (
                    <p key={`${file}_${i}`} className={styles.file_list__item}>
                      <File />
                      {file}
                      <button onClick={() => removeItem(i)}>&times;</button>
                    </p>
                  );
                })}
              </div>
            </>
          )}
        ></Controller>
      </FormControl>
    </div>
  );
}

export default FileInput;
