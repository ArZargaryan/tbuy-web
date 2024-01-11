import React, { useId, useState } from "react";
import {
  FormControl,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps
} from "@mui/material";
import styles from "./select-checkbox.module.scss";
import classNames from "classnames";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { isArray } from "lodash";
import { Checkbox } from "@libs/presentation/components/form/checkboxes/Checkbox";

interface SelectItem {
  id: number;
  value: React.ReactNode;
}

type Props = {
  label?: string;
  handleChange?: () => void;
  items: SelectItem[];
  checkBoxCircle?: boolean;
  poppupItemClassName?: string;
} & SelectProps<number[]>;

function SelectCheckbox(props: Props) {
  const { label = "", items, handleChange } = props;
  const [open, setOpen] = useState(false);
  const [choosedItems, setChoosedItems] = React.useState<number[]>([]);

  const id = useId();

  const { Arrows } = ImgExporter;

  const changeSelect = (event: SelectChangeEvent<number[]>) => {
    setChoosedItems(() =>
      isArray(event.target.value) ? (event.target.value as number[]) : [+event.target.value]
    );

    if (handleChange) {
      handleChange();
    }
  };

  const cls = classNames(styles.select);
  const checboxCls = classNames(
    styles.menu_item,
    {
      [styles.checkboxCircle]: props.checkBoxCircle
    },
    props.poppupItemClassName
  );
  const imgCls = classNames({
    [styles.rotate_image]: open
  });

  const showSelection = () => {
    setOpen((prev) => !prev);
  };

  return (
    <FormControl className={`${styles.form} ${props?.className}`}>
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
        IconComponent={() => <Arrows.Down_blue className={imgCls} />}
        MenuProps={{ classes: { paper: styles.menu_paper } }}
      >
        {items.map((item, i) => (
          <MenuItem key={`${item.id}_${i}`} value={item.id} className={checboxCls}>
            <Checkbox
              variant={props.checkBoxCircle ? "circle" : "primary_filled"}
              inputProps={{
                checked: !!choosedItems.find((choosed) => choosed === item.id)
              }}
            />
            <ListItemText primary={item.value} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectCheckbox;