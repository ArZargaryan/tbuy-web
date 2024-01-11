import React from "react";
import Link from "next/link";
import { DayDetailsNotification } from "@features/account/presentation/store/notificationsPageSlice";
import classNames from "classnames";
import styles from "./notification.module.scss";

interface Props {
  notification: DayDetailsNotification;
  date?: string;
}

function Notification({ notification, date }: Props) {
  const { title, id, allPrice, price, count, image, viewed } = notification;

  const cls = classNames(styles.notification, {
    [styles.not_viewed]: !viewed
  });

  return (
    <div className={cls}>
      <div className={styles.notification__info}>
        <div className={styles.info__image}>
          <img src={image} alt="" />
        </div>
        <div>
          <h3 className={styles.info__title}>{title}</h3>
          <p className={styles.info__description}>{count} հատ</p>
        </div>
      </div>

      <div className={styles.notification__price}>
        <div className={styles.price__item}>
          <div className={styles.item__title}>Գին</div>
          <div className={styles.item__text}>{price}</div>
        </div>
        <div className={styles.price__item}>
          <div className={styles.item__title}>Ընդհանուր</div>
          <div className={styles.item__text}>{allPrice}</div>
        </div>
      </div>

      <div className={styles.notification__link}>
        <Link href={`/account/write_review/${id}`} className={"blue_text"}>
          ԹՈՂՆԵԼ ԿԱՐԾԻՔ
        </Link>
      </div>
    </div>
  );
}

export default Notification;
