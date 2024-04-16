import React, { HTMLAttributes, MouseEventHandler } from "react";
import { Button, FormControl, FormControlProps } from "@mui/material";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Control, Controller, FieldValues } from "react-hook-form";
import classNames from "classnames";

import styles from "./upload_file.module.scss";
import PrimaryButton from "@core/button/primary";

const { Icons } = ImgExporter;

interface Props extends FormControlProps {
  inputProps?: HTMLAttributes<HTMLInputElement>;
  label: string;
  onClickQuestion?: MouseEventHandler<HTMLButtonElement>;
  listClassName?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  withStar?: boolean;
}

const blobFunc = () => null;

const UploadFile = React.forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { onClickQuestion = blobFunc, withStar = true } = props;

  const inputCls = classNames(styles.file_input, props?.className);

  return (
    <div className={styles.upload_file}>
      <div className={styles.upload_file__info}>
        {props?.label}
        {withStar && <span className={styles.info__star}>*</span>}
        {withStar && (
          <PrimaryButton
            className={styles.info__question}
            onClick={onClickQuestion}
            buttonStyle="outline"
          >
            <Icons.QuestionCircle />
          </PrimaryButton>
        )}
      </div>
      <FormControl {...props} className={styles.upload_file__control}>
        <Controller
          name={props.name}
          control={props.control}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-expect-error
          ref={ref}
          render={({ field: { onChange } }) => (
            <PrimaryButton className={`${styles.upload_btn}`} buttonStyle="outline">
              <Icons.Attach />
              ԿՑԵԼ
              <input
                accept="image/*"
                hidden
                multiple
                type="file"
                {...props?.inputProps}
                className={inputCls}
                onChange={onChange}
                style={{ display: "none" }}
              />
            </PrimaryButton>
          )}
        />
      </FormControl>
    </div>
  );
});

UploadFile.displayName = "UploadFile";

export default UploadFile;
