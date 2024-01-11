import React, { useId, useState } from "react";
import {
  FormControl,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps
} from "@mui/material";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";
import styles from "./select-company.module.scss";

interface SelectItem {
  id: number;
  image: string; //временно, возможно будет FormData
  value: React.ReactNode;
}

type Props = {
  label?: string;
  handleChange?: () => void;
  items: SelectItem[];
} & SelectProps<number[]>;

function SelectCompany(props: Props) {
  const { label = "", items, handleChange } = props;
  const [open, setOpen] = useState(false);
  const [choosedItems, setChoosedItems] = React.useState<number[]>([]);

  const id = useId();

  const { Arrows } = ImgExporter;

  const changeSelect = (event: SelectChangeEvent<number[]>) => {
    setChoosedItems(event.target.value as number[]);

    if (handleChange) {
      handleChange();
    }
  };

  const cls = classNames(styles.select, props.className);

  const showSelection = () => {
    setOpen((prev) => !prev);
  };

  return (
    <FormControl className={styles.form}>
      <label onClick={showSelection}>
        {label}
        {!!choosedItems.length && <sup className={styles.label_sup}>{choosedItems.length}</sup>}
      </label>
      <Select
        open={open}
        onOpen={showSelection}
        onClose={showSelection}
        multiple
        value={choosedItems}
        onChange={changeSelect}
        renderValue={() => <></>}
        {...props}
        id={id}
        className={cls}
        placeholder={label}
        MenuProps={{ classes: { paper: styles.menu_paper, list: styles.menu_list } }}
        IconComponent={() => (
          <Arrows.Down_blue style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
        )}
      >
        {items.map((item, i) => (
          <MenuItem key={`${item.id}_${i}`} value={item.id} className={styles.menu_item}>
            <div
              className={`${styles.menu_item_image} ${
                choosedItems.find((choosed) => choosed === item.id)
                  ? styles.menu_item_image_choosed
                  : ""
              }`}
            >
              <img src={item.image} />
            </div>
            <div className={styles.menu_item_text}>
              <ListItemText primary={item.value} />
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectCompany;
