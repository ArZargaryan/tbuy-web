import React from "react";
import Link from "next/link";
import { DayNotification } from "@features/account/presentation/store/notificationsPageSlice";
import classNames from "classnames";
import styles from "./notification.module.scss";

interface Props {
  notification: DayNotification;
}

function Notification({ notification }: Props) {
  const { title, description, date, dateUrl, viewed } = notification;

  const cls = classNames(styles.notification, {
    [styles.not_viewed]: !viewed
  });

  return (
    <div className={cls}>
      <div className={styles.notification__info}>
        <h3 className={styles.info__title}>{title}</h3>
        <p className={styles.info__description}>{description}</p>
        <p className={styles.info__date}>{date}</p>
      </div>

      <div className={styles.notification__link}>
        <Link href={`/account/notifications/${dateUrl}/`} className={"blue_text"}>
          ՏԵՍՆԵԼ ԱՎԵԼԻՆ
        </Link>
      </div>
    </div>
  );
}

export default Notification;
