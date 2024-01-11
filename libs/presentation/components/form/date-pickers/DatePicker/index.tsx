import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";

import styles from "./date-picker.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

const { Icons } = ImgExporter;

type Props<T> = DatePickerProps<T>;

function TbuyDatePicker<T>(props: Props<T>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={styles.date_picker}
        {...props}
        components={{
          OpenPickerIcon: Icons.Calendar
        }}
      />
    </LocalizationProvider>
  );
}

export default TbuyDatePicker;
