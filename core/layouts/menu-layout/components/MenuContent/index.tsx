import React, { HTMLAttributes } from "react";
import styles from "./menu-content.module.scss";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLDivElement>;

function MenuContent(props: Props) {
  const cls = classNames(styles.menu_content, props.className);

  return (
    <div {...props} className={cls}>
      {props.children}
    </div>
  );
}

export default MenuContent;
