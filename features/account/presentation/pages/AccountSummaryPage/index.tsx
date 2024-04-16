import React from "react";
import AccountLayout from "@layouts/account-layout";

import styles from "./summary.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import PrimaryButton from "@core/button/primary";

const { Icons } = ImgExporter;

function AccountSummaryPage() {
  return (
    <AccountLayout contentClassName={"account_content"}>
      <h1 className={`${styles.resumeContent__title} title`}>Իմ առցանց ռեզյումեն</h1>
      <div className={styles.resumeContent}>
        <form>
          <div className={styles.resumeContent__resume}>
            <div className={styles.resume__img}>
              <Icons.SummaryTemplate />
            </div>
            <div className={styles.resume__info}>
              <div className={styles.info__name}>Online resume.PDF</div>
              <div className={styles.info__date}>Creation date: 11.02.2022</div>
            </div>
          </div>
          <div className={styles.resumeContent__buttons}>
            <PrimaryButton buttonStyle="outline">DELETE</PrimaryButton>
            <PrimaryButton>EDIT</PrimaryButton>
          </div>
        </form>
      </div>
    </AccountLayout>
  );
}

export default AccountSummaryPage;
