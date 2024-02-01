import React, { FC, PropsWithChildren, useState } from "react";
import classNames from "classnames";
import { ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./title-with-sort.module.scss";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import SelectCheckbox from "../../form/selects/SelectCheckbox";
import SelectCustom from "../../form/selects/SelectCustom";
import SelectsSlider from "../../form/selects/SelectsSlider";

interface SelectItem {
  id: number;
  value: React.ReactNode;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  selectLabel?: string;
  sortItems: SelectItem[];
}

const TitleWithSort: FC<PropsWithChildren<Props>> = (props: Props) => {
  const { children, sortItems } = props;
  const [open, setOpen] = useState(false);
  const [chosenItem, setChosenItem] = React.useState<number>(0);
  const cls = classNames(styles.block, props.className);
  const changeSelect = (event: SelectChangeEvent<number>) => {
    setChosenItem(+event.target.value);
  };
  const showSelection = () => {
    setOpen((prev) => !prev);
  };

  const imgCls = classNames({
    [styles.rotate_image]: open
  });

  const { Arrows } = ImgExporter;

  return (
    <div {...props} className={cls}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {/* <h2 className={styles.title}>{children}</h2>
        <h2 className={styles.subtitle}>{"Տեսակ"}</h2> */}
        <SelectCheckbox
          label={`Տեսակ`}
          checkBoxCircle={true}
          labelStyle={{ fontSize: "24px", fontWeight: "bold", color: "black" }}
          items={[
            { id: 1, value: "ADS" },
            { id: 2, value: "AILIANG" },
            { id: 3, value: "GEEPAS" },
            { id: 4, value: "GOLDY" },
            { id: 5, value: "JBL" },
            { id: 6, value: "KEDIBO" },
            { id: 7, value: "LIGE" },
            { id: 8, value: "LUNAR" },
            { id: 9, value: "SONASHI" },
            { id: 10, value: "SONY" }
          ]}
        />
        {/* <Select
          open={open}
          onOpen={showSelection}
          onClose={showSelection}
          value={chosenItem}
          onChange={changeSelect}
          className={styles.select}
          IconComponent={() => <Arrows.Down onClick={showSelection} className={imgCls} />}
          defaultValue={0}
        >
          {sortItems.map((item, i) => (
            <MenuItem key={`${item.id}_${i}`} value={item.id} className={styles.menu_item}>
              <ListItemText primary={item.value} />
            </MenuItem>
          ))}
        </Select> */}
      </div>

      <div className={styles.form}>
        <Select
          open={open}
          onOpen={showSelection}
          onClose={showSelection}
          value={chosenItem}
          onChange={changeSelect}
          className={styles.select}
          IconComponent={() => <Arrows.Down onClick={showSelection} className={imgCls} />}
          defaultValue={0}
        >
          {sortItems.map((item, i) => (
            <MenuItem key={`${item.id}_${i}`} value={item.id} className={styles.menu_item}>
              <ListItemText primary={item.value} />
            </MenuItem>
          ))}
        </Select>
      </div>

      <button className={styles.mobile_sort}>
        <svg
          id="Path"
          xmlns="http://www.w3.org/2000/svg"
          width="15.031"
          height="13.664"
          viewBox="0 0 15.031 13.664"
        >
          <path
            id="Контур_12632"
            data-name="Контур 12632"
            d="M19,11.081a.683.683,0,0,0-.966,0l-2.25,2.25V2.683a.683.683,0,1,0-1.366,0V13.331l-2.25-2.25a.683.683,0,1,0-.966.966l3.416,3.416a.683.683,0,0,0,.967,0L19,12.047a.683.683,0,0,0,0-.966Z"
            transform="translate(-4.167 -2)"
            fill="#2463bf"
          />
          <path
            id="Контур_12633"
            data-name="Контур 12633"
            d="M9,5.616,5.581,2.2a.676.676,0,0,0-.223-.148.683.683,0,0,0-.522,0,.676.676,0,0,0-.223.148L1.2,5.616a.684.684,0,1,0,.967.966l2.25-2.25V14.98a.683.683,0,0,0,1.366,0V4.332l2.25,2.25A.683.683,0,1,0,9,5.616Z"
            transform="translate(-0.998 -2)"
            fill="#2463bf"
          />
        </svg>
      </button>
    </div>
  );
};

export default TitleWithSort;
