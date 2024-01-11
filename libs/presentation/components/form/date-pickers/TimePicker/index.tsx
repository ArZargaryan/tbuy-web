import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker, TimePickerProps } from "@mui/x-date-pickers";
import "dayjs/locale/de";
import styles from "./time-picker.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

const { Icons } = ImgExporter;

type Props<T> = TimePickerProps<T>;

function TbuyTimePicker<T>(props: Props<T>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <TimePicker
        className={styles.time_picker}
        {...props}
        components={{
          OpenPickerIcon: Icons.Time
        }}
        views={["hours", "minutes"]}
      />
    </LocalizationProvider>
  );
}

export default TbuyTimePicker;
