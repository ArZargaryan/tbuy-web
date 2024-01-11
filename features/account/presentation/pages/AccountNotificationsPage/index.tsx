import React from "react";
import AccountLayout from "@layouts/account-layout";
import styles from "./notifications.module.scss";
import { useAppSelector } from "@core/store";
import { map } from "lodash";
import Notification from "@features/account/presentation/pages/AccountNotificationsPage/components/Notification";
import IntervalDatePicker from "@libs/presentation/components/form/date-pickers/IntervalDatePicker";

function NotificationsPage() {
  const { notificationsByDate } = useAppSelector((state) => state.account_notifications);

  return (
    <AccountLayout contentClassName={styles.content}>
      <div className={styles.notifications_head}>
        <h2 className={"title title_account"}>Ծանուցում</h2>
        <IntervalDatePicker />
      </div>
      {map(notificationsByDate, (notification) => (
        <Notification notification={notification} />
      ))}
    </AccountLayout>
  );
}

export default NotificationsPage;
