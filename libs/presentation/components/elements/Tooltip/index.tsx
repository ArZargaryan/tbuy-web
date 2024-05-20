import React, { PropsWithChildren, useRef } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { PopperProps } from "@mui/material/Popper/Popper";
import classNames from "classnames";

import styles from "./tooltip.module.scss";
import useOutsideClick from "@core/hooks/useOutsideClick";

type Props = Partial<PopperProps> & {
  label?: React.ReactNode;
  close_on_click: boolean;
} & PropsWithChildren;

function Tooltip(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const tooltipRef = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(false);
  };

  useOutsideClick(tooltipRef, handleClick);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const cls = classNames(styles.select_range, props.className);

  const showSelect = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (props.close_on_click) setOpen(false);
  };

  return (
    <div ref={tooltipRef}>
      <button aria-describedby={id} type="button" onClick={showSelect} className={styles.label}>
        {props.label}
      </button>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        className={cls}
        placement="bottom-start"
        onClick={onClickHandler}
        {...props}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box>{props.children}</Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default Tooltip;
