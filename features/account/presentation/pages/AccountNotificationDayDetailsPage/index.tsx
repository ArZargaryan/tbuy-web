import React from "react";
import AccountLayout from "@layouts/account-layout";
import { useRouter } from "next/router";

import { map } from "lodash";
import Notification from "@features/account/presentation/pages/AccountNotificationDayDetailsPage/components/Notification";
import { useAppSelector } from "@core/store";
import styles from "./notification-day-details.module.scss";

function NotificationDayDetailsPage() {
  const router = useRouter();
  const { date } = router.query;
  const { notificationsByDateDetails } = useAppSelector((state) => state.account_notifications);

  return (
    <AccountLayout desktopBack={{ back: false, customLink: `/account/notifications/` }}>
      <div className={styles.notifications_head}>
        <h2 className={`title ${styles.notifications_head__title}`}>Ծանուցում</h2>
        <div className={styles.notifications_head__date}>{date}</div>
      </div>
      {map(notificationsByDateDetails, (notification) => (
        <Notification notification={notification} />
      ))}
    </AccountLayout>
  );
}

export default NotificationDayDetailsPage;
