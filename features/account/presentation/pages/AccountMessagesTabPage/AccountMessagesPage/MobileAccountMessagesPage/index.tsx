import React from "react";
import AccountLayout from "@layouts/account-layout";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./mobile-account-messages.module.scss";

const { blob } = ImgExporter;

function MobileAccountMailingPage() {
  return (
    <AccountLayout contentClassName={"account_content"}>
      <article className={styles.mailing}>
        <h1 className={`${styles.mailing__title} title title_account`}>Հաղորդագրություններ</h1>
        <section className={styles["contacts-sidebar"]}>
          <a href="" className={`${styles["contacts-sidebar__contact"]} ${styles.active}`}>
            <div className={styles.contact__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.contact__right}>
              <div className={styles.right__up}>
                <span className={styles.up__username}>@aramayissahakyan</span>
                <span className={`${styles.up__date} ${styles.pxs}`}>17:02</span>
              </div>
              <div className={styles.right__down}>
                <div className={`${styles.down__spoiler} ${styles.pxs}`}>
                  Կան շատ տարբերակներ, սակ...
                </div>
                <span className={`${styles.down__counter} ${styles.pxs}`}>2</span>
              </div>
            </div>
          </a>

          <a href="" className={styles["contacts-sidebar__contact"]}>
            <div className={styles.contact__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.contact__right}>
              <div className={styles.right__up}>
                <span className={styles.up__username}>@aramayissahakyan</span>
                <span className={`${styles.up__date} ${styles.pxs}`}>17:02</span>
              </div>
              <div className={styles.right__down}>
                <span className={`${styles.down__spoiler} ${styles.pxs}`}>
                  Հայտնի է, որ ընթերցողը, կարդալ...
                </span>
              </div>
            </div>
          </a>

          <a href="" className={styles["contacts-sidebar__contact"]}>
            <div className={styles.contact__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.contact__right}>
              <div className={styles.right__up}>
                <span className={styles.up__username}>@aramayissahakyan</span>
                <span className={`${styles.up__date} ${styles.pxs}`}>17:02</span>
              </div>
              <div className={styles.right__down}>
                <span className={`${styles.down__spoiler} ${styles.pxs}`}>
                  Հայտնի է, որ ընթերցողը, կարդալ...
                </span>
                <span className={`${styles.down__counter} ${styles.pxs}`}>3</span>
              </div>
            </div>
          </a>

          <a href="" className={styles["contacts-sidebar__contact"]}>
            <div className={styles.contact__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.contact__right}>
              <div className={styles.right__up}>
                <span className={styles.up__username}>@aramayissahakyan</span>
                <span className={`${styles.up__date} ${styles.pxs}`}>17:02</span>
              </div>
              <div className={styles.right__down}>
                <span className={`${styles.down__spoiler} ${styles.pxs}`}>
                  Հայտնի է, որ ընթերցողը, կարդալ...
                </span>
                <span className={`${styles.down__counter} ${styles.pxs}`}>3</span>
              </div>
            </div>
          </a>

          <a href="" className={styles["contacts-sidebar__contact"]}>
            <div className={styles.contact__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.contact__right}>
              <div className={styles.right__up}>
                <span className={styles.up__username}>@aramayissahakyan</span>
                <span className={`${styles.up__date} ${styles.pxs}`}>17:02</span>
              </div>
              <div className={styles.right__down}>
                <span className={`${styles.down__spoiler} ${styles.pxs}`}>
                  Հայտնի է, որ ընթերցողը, կարդալ...
                </span>
                <span className={`${styles.down__counter} ${styles.pxs}`}>3</span>
              </div>
            </div>
          </a>

          <a href="" className={styles["contacts-sidebar__contact"]}>
            <div className={styles.contact__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.contact__right}>
              <div className={styles.right__up}>
                <span className={styles.up__username}>@aramayissahakyan</span>
                <span className={`${styles.up__date} ${styles.pxs}`}>17:02</span>
              </div>
              <div className={styles.right__down}>
                <span className={`${styles.down__spoiler} ${styles.pxs}`}>
                  Հայտնի է, որ ընթերցողը, կարդալ...
                </span>
                <span className={`${styles.down__counter} ${styles.pxs}`}>3</span>
              </div>
            </div>
          </a>
        </section>
      </article>
    </AccountLayout>
  );
}

export default MobileAccountMailingPage;
