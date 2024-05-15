import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./select-custom.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = React.HTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    active_select: boolean;
  };

function SelectAssortment(props: Props) {
  const { active_select, children } = props;

  const cls = classNames(styles.select, {
    [styles.active]: active_select
  });
  const imgCls = classNames({
    [styles.rotate]: active_select
  });

  const { Arrows } = ImgExporter;

  return (
    <button {...props} className={cls}>
      {children}
      <Arrows.Down_blue className={imgCls} />
    </button>
  );
}

export default SelectAssortment;
