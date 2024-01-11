import React from "react";
import AccountLayout from "@layouts/account-layout";
import styles from "./account-support.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Tabs, Tab } from "@mui/material";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// {/*<a href="" className={`${styles["back-link"]} ${styles.pxs}`}>*/}
// {/*  Վերադառնալ*/}
// {/*</a>*/}

// TODO: разбить на компоненты

const { Icons, Logos } = ImgExporter;

interface AccountMessangesProps {
  onTabChange: (newTabNumber: number) => void;
  tabNumber: number;
}

function AccountSupportPage({ onTabChange, tabNumber }: AccountMessangesProps) {
  const handleTabChange = (event: React.ChangeEvent<{}>, newTabNumber: number) => {
    onTabChange(newTabNumber);
  };
  return (
    <AccountLayout contentClassName={styles.messanger_content}>
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
      <section className={styles["tbuy-contact"]}>
        <div className={styles["tbuy-contact__header"]}>
          <div className={styles.header__avatar}>
            <Logos.TbuyCircle />
          </div>
          <div className={styles.header__name}>Կապ Tbuy-ի հետ</div>
          <div className={`${styles.header__more} ${styles["more-1"]}`}>
            <div className={styles.more__point}></div>
          </div>
        </div>
        <div className={`${styles[`messages-body`]} ${styles.px}`}>
          <div
            className={`${styles["messages-body__message"]} ${styles["messages-body__message-2"]}`}
          >
            <div className={styles.message__avatar}>
              <Logos.TbuyCircle />
            </div>
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
                Ինտերնետում բոլոր Lorem Ipsum արտադրիչները հակված են:
              </div>
              <div className={`${styles.body__date} ${styles.pxs}`}>
                <span className={styles.date__span}>17:20</span>
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
            <div className={styles.message__avatar}>
              <Logos.TbuyCircle />
            </div>
            <div className={styles.message__body}>
              <div className={styles.body__text}>Շատ համակարգչային տպագրական ծրագրեր:</div>
              <div className={`${styles.body__date} ${styles.pxs}`}>
                <span className={styles.date__span}>18:20</span>
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
              <div className={styles.body__text}>Շնորհակալություն!</div>
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
              <div className={styles.body__text}>Շնորհակալություն!</div>
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
              <div className={styles.body__text}>Շնորհակալություն!</div>
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
    </AccountLayout>
  );
}

export default AccountSupportPage;
