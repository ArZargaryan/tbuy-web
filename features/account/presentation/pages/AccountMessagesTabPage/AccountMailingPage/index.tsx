import React from "react";
import AccountLayout from "@layouts/account-layout";

import styles from "./mailing-page.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import Link from "next/link";
import { Tabs, Tab } from "@mui/material";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const { blob, Arrows } = ImgExporter;

interface AccountMessangesProps {
  onTabChange: (newTabNumber: number) => void;
  tabNumber: number;
}

function AccountMailingPage({ onTabChange, tabNumber }: AccountMessangesProps) {
  const handleTabChange = (event: React.ChangeEvent<{}>, newTabNumber: number) => {
    onTabChange(newTabNumber);
  };
  const { Icons } = ImgExporter;

  return (
    <AccountLayout desktopBack={{ back: false, customLink: "/account/mailing" }}>
      <Tabs
        aria-label="basic tabs example"
        onChange={handleTabChange}
        value={tabNumber}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab icon={<TextsmsOutlinedIcon />} iconPosition="start" label="Հաղորդագրություններ" />
        <Tab icon={<EmailOutlinedIcon />} iconPosition="start" label="Պրոմո ակցիա" />
        <Tab icon={<TextsmsOutlinedIcon />} iconPosition="start" label="Կապ Tbuy-ի հետ" />
      </Tabs>
      <article className={styles.mailing}>
        <h1 className={`${styles.mailing__title} title title_account`}>Մեյլինգ</h1>
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
                <span className={`${styles.down__spoiler} ${styles.pxs}`}>
                  Կան շատ տարբերակներ, սակ...
                </span>
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
                  Հայտնի է, որ ընթերցողը...
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
                  Հայտնի է, որ ընթերցողը...
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
                  Հայտնի է, որ ընթերցողը...
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
                  Հայտնի է, որ ընթերցողը...
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
                  Հայտնի է, որ ընթերցողը...
                </span>
                <span className={`${styles.down__counter} ${styles.pxs}`}>3</span>
              </div>
            </div>
          </a>
        </section>
        <section className={styles.mailing__messages}>
          <div className={styles.messages__header}>
            <Link href="/account/mailing/" className={styles["header__back-link"]}>
              <Arrows.ArrowRight />
            </Link>
            <div className={styles.header__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.header__username}>@aramayissahakyan</div>
          </div>
          <div className={styles.messages__body}>
            <div className={styles.body__message}>
              <div className={`${styles.message__text} ${styles.px}`}>
                Կան շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ, երբեմն նույնիսկ
                լատիներենից շատ հեռու և անհավանական բառերի և հումորի ավելացման արդյունքում: Կան շատ
                տարբերակներ, սակայն շատերը աղավաղվել են:
              </div>
              <div className={styles.message__img}>
                <img src={blob.avatar.src} alt="" />
              </div>
              <div className={`${styles.message__data} ${styles.pxs}`}>29.08.2022 | 17:20</div>
            </div>
          </div>
        </section>
      </article>
    </AccountLayout>
  );
}

export default AccountMailingPage;
