import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./select-custom.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

type Props = React.HTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    activeSelect: boolean;
  };

function SelectAssortment(props: Props) {
  const { activeSelect, children } = props;

  const cls = classNames(styles.select, {
    [styles.active]: activeSelect
  });
  const imgCls = classNames({
    [styles.rotate]: activeSelect
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
