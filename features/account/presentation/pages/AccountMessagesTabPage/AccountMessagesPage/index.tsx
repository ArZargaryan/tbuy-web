import React from "react";
import AccountLayout from "@layouts/account-layout";
import styles from "./account-messages.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import Link from "next/link";
import { Tabs, Tab } from "@mui/material";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const { blob, Icons, Arrows } = ImgExporter;

interface AccountMessangesProps {
  onTabChange: (newTabNumber: number) => void;
  tabNumber: number;
}

function AccountMessanges({ onTabChange, tabNumber }: AccountMessangesProps) {
  const handleTabChange = (event: React.ChangeEvent<{}>, newTabNumber: number) => {
    onTabChange(newTabNumber);
  };
  return (
    <AccountLayout desktopBack={{ back: false, customLink: "/account/messages" }}>
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
      <article className={styles.messanger}>
        <h1 className={`${styles.messanger__title} title title_account`}>Մեյլինգ</h1>
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
        <section className={styles.messanger__messages}>
          <div className={styles.messages__header}>
            <Link href="/account/messanges/" className={styles["header__back-link"]}>
              <Arrows.ArrowRight />
            </Link>
            <div className={styles.header__avatar}>
              <img src={blob.avatar.src} alt="" />
            </div>
            <div className={styles.header__center}>
              <div className={styles.header__username}>@aramayissahakyan</div>
              <a href="" className={styles.header__link}>
                https://tbuy.am/product/20084/
              </a>
            </div>
            <div className={`${styles.header__more} ${styles["more-1"]}`}>
              <div className={styles.more__point}></div>
            </div>
          </div>
          <div className={`${styles["messages-body"]} ${styles.px}`}>
            <div
              className={`${styles["messages-body__message"]} ${styles["messages-body__message-2"]}`}
            >
              <div className={styles.message__avatar}></div>
              <div className={styles.message__body}>
                <div className={styles.body__text}>
                  Կան շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ, երբեմն նույնիսկ
                  լատիներենից շատ հեռու և անհավանական բառերի և հումորի ավելացման արդյունքում:
                </div>
              </div>
              <div className={styles.message__more}>
                <div className={styles.more__point}></div>
                <ul className={`${styles.more__list} ${styles.pxs}`}>
                  <li className={styles.list__item}>Պատասխանել</li>
                  <li className={styles.list__item}>Վերահասցեավորել հաղորդագրությունը</li>
                  <li className={styles.list__item}>Ջնջել հաղորդագրությունը</li>
                </ul>
              </div>
            </div>

            <div
              className={`${styles["messages-body__message"]} ${styles["messages-body__message-2"]}`}
            >
              <div className={styles.message__avatar}></div>
              <div className={styles.message__body}>
                <div className={styles.body__text}>
                  Կան շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ, երբեմն նույնիսկ
                  լատիներենից շատ հեռու և անհավանական բառերի և հումորի ավելացման արդյունքում:
                </div>
              </div>
              <div className={styles.message__more}>
                <div className={styles.more__point}></div>
                <ul className={`${styles.more__list} ${styles.pxs}`}>
                  <li className={styles.list__item}>Պատասխանել</li>
                  <li className={styles.list__item}>Վերահասցեավորել հաղորդագրությունը</li>
                  <li className={styles.list__item}>Ջնջել հաղորդագրությունը</li>
                </ul>
              </div>
            </div>

            <div
              className={`${styles["messages-body__message"]} ${styles["messages-body__message-1"]}`}
            >
              <div className={styles.message__more}>
                <div className={styles.more__point}></div>
                <ul className={`${styles.more__list} ${styles.pxs}`}>
                  <li className={styles.list__item}>Պատասխանել</li>
                  <li className={styles.list__item}>Վերահասցեավորել հաղորդագրությունը</li>
                  <li className={styles.list__item}>Ջնջել հաղորդագրությունը</li>
                </ul>
              </div>
              <div className={styles.message__body}>
                <div className={styles.body__text}>
                  Ինտերնետում բոլոր Lorem Ipsum արտադրիչները հակված են:
                </div>
                <div className={`${styles.body__date} ${styles.pxs}`}>
                  <span className={styles.date__span}>17:25</span>
                  <div className={styles.date__checker}>
                    <Icons.MessageView />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles["messages-body__message"]} ${styles["messages-body__message-2"]}`}
            >
              <div className={styles.message__avatar}></div>
              <div className={styles.message__body}>
                <div className={styles.body__text}>
                  Կան շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ, երբեմն նույնիսկ
                  լատիներենից շատ հեռու և անհավանական բառերի և հումորի ավելացման արդյունքում:
                </div>
              </div>
              <div className={styles.message__more}>
                <div className={styles.more__point}></div>
                <ul className={`${styles.more__list} ${styles.pxs}`}>
                  <li className={styles.list__item}>Պատասխանել</li>
                  <li className={styles.list__item}>Վերահասցեավորել հաղորդագրությունը</li>
                  <li className={styles.list__item}>Ջնջել հաղորդագրությունը</li>
                </ul>
              </div>
            </div>

            <div className={`${styles["messages-body__date"]} ${styles.pxs}`}>
              <span>02.11.2020</span>
            </div>

            <div
              className={`${styles["messages-body__message"]} ${styles["messages-body__message-1"]}`}
            >
              <div className={styles.message__more}>
                <div className={styles.more__point}></div>
                <ul className={`${styles.more__list} ${styles.pxs}`}>
                  <li className={styles.list__item}>Պատասխանել</li>
                  <li className={styles.list__item}>Վերահասցեավորել հաղորդագրությունը</li>
                  <li className={styles.list__item}>Ջնջել հաղորդագրությունը</li>
                </ul>
              </div>
              <div className={styles.message__body}>
                <div className={styles.body__text}>
                  Ինտերնետում բոլոր Lorem Ipsum արտադրիչները հակված են:
                </div>
                <div className={`${styles.body__date} ${styles.pxs}`}>
                  <span className={styles.date__span}>17:25</span>
                  <div className={styles.date__checker}>
                    <Icons.MessageView />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles["messages-body__message"]} ${styles["messages-body__message-1"]}`}
            >
              <div className={styles.message__more}>
                <div className={styles.more__point}></div>
                <ul className={`${styles.more__list} ${styles.pxs}`}>
                  <li className={styles.list__item}>Պատասխանել</li>
                  <li className={styles.list__item}>Վերահասցեավորել հաղորդագրությունը</li>
                  <li className={styles.list__item}>Ջնջել հաղորդագրությունը</li>
                </ul>
              </div>
              <div className={styles.message__body}>
                <div className={styles.body__text}>
                  Ինտերնետում բոլոր Lorem Ipsum արտադրիչները հակված են:
                </div>
                <div className={`${styles.body__date} ${styles.pxs}`}>
                  <span className={styles.date__span}>17:25</span>
                  <div className={styles.date__checker}>
                    <Icons.MessageView />
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles["messages-body__message"]} ${styles["messages-body__message-1"]}`}
            >
              <div className={styles.message__more}>
                <div className={styles.more__point}></div>
                <ul className={`${styles.more__list} ${styles.pxs}`}>
                  <li className={styles.list__item}>Պատասխանել</li>
                  <li className={styles.list__item}>Վերահասցեավորել հաղորդագրությունը</li>
                  <li className={styles.list__item}>Ջնջել հաղորդագրությունը</li>
                </ul>
              </div>
              <div className={styles.message__body}>
                <div className={styles.body__text}>
                  Ինտերնետում բոլոր Lorem Ipsum արտադրիչները հակված են:
                </div>
                <div className={`${styles.body__date} ${styles.pxs}`}>
                  <span className={styles.date__span}>17:25</span>
                  <div className={styles.date__checker}>
                    <Icons.MessageView />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className={styles["message-form"]}>
            <div className={styles["message-form__container"]}>
              <input
                type="text"
                className={styles["message-form__write"]}
                placeholder="Գրեք Ձեր տեքստն այստեղ..."
              />
              <button className={styles["message-form__send-button"]} type="submit">
                <Icons.Send className={styles["message-form__send-icon"]} />
              </button>
            </div>
          </form>
        </section>
      </article>
    </AccountLayout>
  );
}

export default AccountMessanges;
