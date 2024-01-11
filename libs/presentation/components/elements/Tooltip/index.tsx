import React, { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { PopperProps } from "@mui/material/Popper/Popper";
import classNames from "classnames";

import styles from "./tooltip.module.scss";

type Props = Partial<PopperProps> & {
  label?: React.ReactNode;
} & PropsWithChildren;

function Tooltip(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const cls = classNames(styles.select_range, props.className);

  const showSelect = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={showSelect} className={styles.label}>
        {props.label}
      </button>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        className={cls}
        placement={"bottom-start"}
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
