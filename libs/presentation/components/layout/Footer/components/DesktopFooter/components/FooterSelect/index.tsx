import React, { PropsWithChildren, useEffect } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { PopperProps } from "@mui/material/Popper/Popper";
import classNames from "classnames";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./footer-select.module.scss";

type Props = Partial<PopperProps> & {
  label: string;
} & PropsWithChildren;

function FooterSelect(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const popperRef = React.useRef<HTMLDivElement>(null);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const cls = classNames(styles.select_range, props.className);
  const imgCls = classNames(styles.arrow, {
    [styles.rotate_image]: open
  });

  const showSelect = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const { Arrows } = ImgExporter;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popperRef.current && !popperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={popperRef}>
      <button aria-describedby={id} type="button" onClick={showSelect} className={styles.label}>
        <span className={styles.label__text}>{props.label}</span>
        <Arrows.Down_blue className={imgCls} />
      </button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        className={cls}
        placement={"top-start"}
        {...props}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box className={styles.select_box}>{props.children}</Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default FooterSelect;
