import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import styles from "./interval-date-picker.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import PrimaryButton from "@core/button/primary";

const { Icons } = ImgExporter;

function IntervalDatePicker() {
  return (
    <div className={styles.date_picker}>
      <div className={styles.date_picker__form}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(res) => console.log(res)}
            disableFuture
            components={{
              OpenPickerIcon: Icons.Calendar
            }}
          />
        </LocalizationProvider>
        <span className={styles.form__divider}>-</span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(res) => console.log(res)}
            disableFuture
            components={{
              OpenPickerIcon: Icons.Calendar
            }}
          />
        </LocalizationProvider>
      </div>
      <PrimaryButton className={`${styles.date_picker__search_btn}`}>
        <Icons.Search />
      </PrimaryButton>
    </div>
  );
}

export default IntervalDatePicker;
