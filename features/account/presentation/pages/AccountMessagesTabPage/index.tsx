import React, { useState } from "react";
import AccountMessanges from "./AccountMessagesPage";
import AccountMailingPage from "./AccountMailingPage";
import AccountSupportPage from "./AccountSupportPage";
import styles from "./account-chat.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";

function AccountSupportTabPage() {
  const [tabNumber, setTabNumber] = useState(0);
  const handleTabChange = (newTabNumber: number) => {
    setTabNumber(newTabNumber);
  };
  const [showChat, setShowChat] = useState(false);
  const { blob, Icons, Arrows } = ImgExporter;

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          cursor: "pointer"
        }}
        onClick={() => setShowChat(!showChat)}
      >
        <Icons.TbuyIcon />
      </div>
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: 35,
            right: 100,
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            zIndex: 1000
          }}
        >
          <section className={styles.messanger__messages}>
            <div className={styles.messages__header}>
              <div className={styles.msg}>
                <div className={styles.header__avatar}>
                  <img src={blob?.avatar.src} className={styles.img} alt="" />
                </div>
                <div className={styles.header__center}>
                  <div className={styles.header__username}>@aramayissahakyan</div>
                  <a href="" className={styles.header__link}>
                    online | 12:04
                  </a>
                </div>
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
                    Կան շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ
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
                    Կան շատ տարբերակներ, սակայն շատերը աղավաղվել են տարաբնույթ
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
        </div>
      )}
      {tabNumber === 0 ? (
        <>
          <AccountMessanges tabNumber={tabNumber} onTabChange={handleTabChange} />
        </>
      ) : tabNumber === 1 ? (
        <AccountMailingPage tabNumber={tabNumber} onTabChange={handleTabChange} />
      ) : (
        <AccountSupportPage tabNumber={tabNumber} onTabChange={handleTabChange} />
      )}
    </>
  );
}

export default AccountSupportTabPage;
