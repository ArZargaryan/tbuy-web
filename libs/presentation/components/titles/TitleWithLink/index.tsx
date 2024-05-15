import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./title-with-link.module.scss";
import { Shimmer } from "react-shimmer";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  link_text?: string;
  link_path?: string;
}

const TitleWithLink: FC<PropsWithChildren<Props>> = (props: Props) => {
  const { children, link_text = "", link_path = "" } = props;

  const cls = classNames(styles.block, props.className);

  return (
    <div {...props} className={cls}>
      <h2 className={styles.title}>
        {children}
        {!children && <Shimmer height={32} width={400} />}
      </h2>
      <Link href={link_path} className={styles.link}>
        {link_text}
      </Link>
      <Link href={link_path} className={styles.mobile_link}>
        {children}
        {!children && <Shimmer height={32} width={400} />}
      </Link>
    </div>
  );
};

export default TitleWithLink;
