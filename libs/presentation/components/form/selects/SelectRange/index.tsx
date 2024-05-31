import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import styles from "./select-range.module.scss";
import { PopperProps } from "@mui/material/Popper/Popper";
import classNames from "classnames";
import { Slider, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ImgExporter } from "@core/helpers/ImgExporter";
import useOutsideClick from "@core/hooks/useOutsideClick";

type Props = Partial<PopperProps> & {
  range?: [number, number];
  label: string;
};

function SelectRange(props: Props) {
  const { range = [0, 500000], label = "" } = props;
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [rangeValue, setRangeValue] = useState(range);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const cls = classNames(styles.select_range, props.className);
  const imgCls = classNames({
    [styles.rotate_image]: open
  });

  const showSelect = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const changeRange = (event: Event, newValue: number | number[]) => {
    setRangeValue(newValue as [number, number]);
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, i: number) => {
    const { value } = event.target;
    if (+value > range[1] || +value < range[0]) {
      return;
    }
    if ((i === 0 && +value > range[1]) || (i === 1 && +value < range[0])) {
      return;
    }
    const newRange = rangeValue;
    newRange[i] = +value;
    setRangeValue([...newRange]);
  };

  const { Arrows } = ImgExporter;

  const tooltipRef = React.useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(false);
  };

  useOutsideClick(tooltipRef, handleClick);

  return (
    <div ref={tooltipRef}>
      <button
        aria-describedby={id}
        type="button"
        onClick={showSelect}
        className={styles.range_label}
      >
        {label}
        <Arrows.Down_blue className={imgCls} />
      </button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        className={cls}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box className={styles.select_range__box}>
              <Box className={styles.box__inputs}>
                <TextField
                  type={"number"}
                  value={rangeValue[0]}
                  onChange={(e) => changeInput(e, 0)}
                />
                <TextField
                  type={"number"}
                  value={rangeValue[1]}
                  onChange={(e) => changeInput(e, 1)}
                />
              </Box>
              <Slider
                value={rangeValue}
                onChange={changeRange}
                valueLabelDisplay="off"
                min={range[0]}
                max={range[1]}
              />
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default SelectRange;
