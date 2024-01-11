import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./title-with-link.module.scss";
import { Shimmer } from "react-shimmer";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  linkText?: string;
  linkPath?: string;
}

const TitleWithLink: FC<PropsWithChildren<Props>> = (props: Props) => {
  const { children, linkText = "", linkPath = "" } = props;

  const cls = classNames(styles.block, props.className);

  return (
    <div {...props} className={cls}>
      <h2 className={styles.title}>
        {children}
        {!children && <Shimmer height={32} width={400} />}
      </h2>
      <Link href={linkPath} className={styles.link}>
        {linkText}
      </Link>
      <Link href={linkPath} className={styles.mobile_link}>
        {children}
        {!children && <Shimmer height={32} width={400} />}
      </Link>
    </div>
  );
};

export default TitleWithLink;
