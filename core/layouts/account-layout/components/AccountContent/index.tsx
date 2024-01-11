import React, { HTMLAttributes } from "react";
import styles from "./account-content.module.scss";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLDivElement>;

function AccountContent(props: Props) {
  const cls = classNames(styles.account_content, props.className);

  return (
    <div {...props} className={cls}>
      {props.children}
    </div>
  );
}

export default AccountContent;
