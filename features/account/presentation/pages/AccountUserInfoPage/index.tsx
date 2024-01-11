import React from "react";
import AccountLayout from "@layouts/account-layout";
import GeneralForm from "@features/account/presentation/pages/AccountUserInfoPage/components/GeneralForm";

import styles from "./user-info.module.scss";
import ChangePasswordForm from "@features/account/presentation/pages/AccountUserInfoPage/components/ChangePasswordForm";
import DeliveryAddresses from "@features/account/presentation/pages/AccountUserInfoPage/components/DeliveryAddresses";

function AccountUserDetailsPage() {
  return (
    <AccountLayout contentClassName={"account_content"}>
      <GeneralForm />
      <hr className={styles.line} />
      <ChangePasswordForm />
      <hr className={styles.line} />
      <DeliveryAddresses />
    </AccountLayout>
  );
}

export default AccountUserDetailsPage;
