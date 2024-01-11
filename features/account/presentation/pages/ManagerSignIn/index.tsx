import React from "react";

import DefaultLayout from "@layouts/default";

import styles from "./manager-sign-in.module.scss";
import Link from "next/link";

import itemImg1 from "@public/pictures/manager_signin/img1.png";
import itemImg2 from "@public/pictures/manager_signin/img2.png";
import itemImg3 from "@public/pictures/manager_signin/img3.png";
import itemImg4 from "@public/pictures/manager_signin/img4.png";
import itemImg5 from "@public/pictures/manager_signin/img5.png";
import itemImg6 from "@public/pictures/manager_signin/img6.png";
import itemImg7 from "@public/pictures/manager_signin/img7.png";
import PrimaryButton from "@core/button/primary";

function ManagerSignInPage() {
  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <section className={styles.landing}>
            <div className={styles.container}>
              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg1.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h1 className={styles.body__title}>ԴԱՌՆԱԼ ԳՈՐԾԸՆԿԵՐ</h1>
                  <p className={styles.body__text}>
                    ԲԻԶՆԵՍԻ ԱՌԱՋԽԱՂԱՑՄԱՆ ՀԱՄԱՐ ՄԻԱԿ ՕԳՏԱԿԱՐ ՏԻՐՈՒՅԹԸ
                  </p>
                  <h2 className={`${styles.body__subtitle} ${styles.body__subtitle_first}`}>
                    ԲԱՐԻ ԳԱԼՈՒՍՏ ԱՌԱՋԻՆ ԲԻԶՆԵՍ-ՍՈՑԻԱԼԱԿԱՆ ՄԱՐՔԵԹՓԼԵՅՍ
                  </h2>
                  <p className={styles.body__text}>
                    Եթե ցանկանում եք իրապես զարգացնել Ձեր բրենդը օնլայն տիրույթում, առաջխաղացնել այն
                    և ունենալ մեծ հաջողություններ, ապա Դուք անցել եք երբևիցե ամենաճիշտ հղմամբ։ Նախ
                    հակիրճ ծանոթացեք հիմնական առավելություններին, որոնք տրվելու են Ձեզ TBUY
                    մարքեթփլեյսում
                  </p>
                </div>
              </div>

              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg2.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h2 className={styles.body__subtitle}>ՈՒՆԵՑԵՔ ԱՆՎՃԱՐ ԱՆՁՆԱԿԱՆ ԷՋ TBUY-ՈՒՄ</h2>
                  <ul className={styles.body__list}>
                    <p className={styles.list__text}>որտեղ ներկայացվում է Ձեր բրենդի</p>
                    <li className={styles.list__item}>անվանումը</li>
                    <li className={styles.list__item}>լոգոն և ետնանկարը</li>
                    <li className={styles.list__item}>հասցեն՝ գեոլոկացիայով</li>
                    <li className={styles.list__item}>հեռախոսահամարները</li>
                    <li className={styles.list__item}>
                      կապի աալ միջոցներ (էլ. հասցե, Viber, Whats App, Telegram)
                    </li>
                    <li className={styles.list__item}>սոցիալական էջերը</li>
                    <li className={styles.list__item}>աշխատանքային ժամերը</li>
                    <li className={styles.list__item}>ինֆորմացիոն դաշտ</li>
                    <li className={styles.list__item}>ներքին չատ</li>
                    <li className={styles.list__item}>ողջ ներկայացրած տեսականին</li>
                  </ul>
                </div>
              </div>

              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg3.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h2 className={styles.body__subtitle}>ՁԵՐ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐԸ TBUY-ՈՒՄ</h2>
                  <ul className={`${styles.body__list} ${styles.body__list_margin}`}>
                    <li className={styles.list__item}>
                      Ապրանքատեսակների անվճար և ամբողջական ներկայացում Ձեր էջում
                    </li>
                    <li className={styles.list__item}>Մանրածախ և մեծածախ վաճառք</li>
                    <li className={styles.list__item}>Բրենդի ճանաչելիության բարձրացում</li>
                    <li className={styles.list__item}>
                      Մարքեթինգային գործիքների օգտագործում վաճառքների խթանման համար
                    </li>
                    <li className={styles.list__item}>
                      Հատուկ կարգավիճակ հանրահայտ օրիգինալ բրենդի տեսականու ներկայացման համար
                    </li>
                  </ul>
                  <h2 className={styles.body__subtitle}>ՄԵՆՔ ԱՌԱՔՈՒՄ ԵՆՔ ՊԱՏՎԵՐՆԵՐԸ</h2>
                  <ul className={`${styles.body__list} ${styles["body__list_mobile-last"]}`}>
                    <li className={styles.list__item}>Առաքում ամբողջ ՀՀ տարածքով</li>
                    <li className={styles.list__item}>Անվճար առաքում գործընկերոջ համար</li>
                    <li className={styles.list__item}>Հանձման-ընդունման համակարգ</li>
                    <li className={styles.list__item}>Շտապ առաքման հնարավորություն</li>
                    <li className={styles.list__item}>Առաքման առանձին լոգիստիկ համակարգ նին</li>
                  </ul>
                </div>
              </div>

              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg4.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h2 className={styles.body__subtitle}>
                    ՎԱՃԱՌԵՔ ՕՆԼԱՅՆ ԱՊԱՌԻԿ ԵՎ ԱՅԼ ՎՃԱՐՄԱՆ ՀԱՄԱԿԱՐԳԵՐՈՎ
                  </h2>
                  <ul className={`${styles.body__list} ${styles.body__list_margin}`}>
                    <li className={styles.list__item}>
                      Վաճառեք օնլայն ապառիկ ACBA BANK, UNIBANK, INECOBANK + 2 բանկ շուտով
                    </li>
                    <li className={styles.list__item}>
                      Ապառիկ հարցման գործընթաց ընդամենը 10-15 րոպեում
                    </li>
                    <li className={styles.list__item}>Idram վճարման համակարգ</li>
                    <li className={styles.list__item}>Telcell վճարման համակարգ</li>
                    <li className={styles.list__item}>
                      Arca, Visa, Mastercard, American express քարտային փոխանցումներ
                    </li>
                    <li className={styles.list__item}>Փոխանցում կազմակերպությունով</li>
                  </ul>
                  <h2 className={styles.body__subtitle}>
                    ԲՐԵՆԴԻ ՃԱՆԱՉԵԼԻՈՒԹՅԱՆ ԲԱՐՁՐԱՑՈՒՄ ԵՎ ՄԱՐՔԵԹԻՆԳԱՅԻՆ ԳՈՐԾԻՔՆԵՐ
                  </h2>
                  <ul className={styles.body__list}>
                    <li className={styles.list__item}>
                      Կայքում մարքեթինգային գործիքների կիրառում վաճառքների խթանման և բրենդի
                      ճանաչելիության բարձրացման համար
                    </li>
                    <li className={styles.list__item}>Կայքում բաններների և գովազդների տեղադրում</li>
                    <li className={styles.list__item}>
                      Գովազդ ung ցանցերում, Viber-ում, TV-ի և Youtube-յան հաղորդումներում, արտաքին
                      դաշտում
                    </li>
                    <li className={styles.list__item}>
                      Կայքի այցելությունների բարձրացում Ձեր բրենդի ավտոմատ առաջխաղացման համար
                    </li>
                    <li className={styles.list__item}>
                      Թիրախավորված գովազդային հաղորդագրություններ Ձեր էջի այցելուներին, գնորդներին
                      (mail, sms, chat)
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg5.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h2 className={`${styles.body__subtitle} ${styles.body__subtitle_mini}`}>
                    ՍՏԱՑԵՔ ԱՄԲՈՂՋԱԿԱՆ ԱՆԱԼԻՏԻԿԱ ՁԵՐ ՎԱՃԱՌՔՆԵՐԻ ԽԹԱՆՄԱՆ ՀԱՄԱՐ
                  </h2>
                  <ul className={`${styles.body__list} ${styles["body__list_mobile-last"]}`}>
                    <li className={styles.list__item}>
                      Ամբողջական անալիտիկա Ձեր էջի այցելուների վերաբերյալ
                    </li>
                    <li className={styles.list__item}>
                      Ամբողջական անալիտիկա Ձեր գնորդների վերաբերյալ
                    </li>
                    <li className={styles.list__item}>
                      Ամբողջական անալիտիկա Ձեր հետևորդների վերաբերյալ
                    </li>
                    <li className={styles.list__item}>
                      Ամբողջական անալիտիկա Ձեր ապրանքներով հետաքրքրվողների վերաբերյալ
                    </li>
                    <li className={styles.list__item}>
                      Անալիտիկայի օգտագործում TBUY-ում թիրախավորված գովազդների տեղադրման համար
                    </li>
                    <li className={styles.list__item}>
                      Անալիտիկայի օգտագործում թիրախավորված հաղորդագրությունների ուղարկման համար
                    </li>
                    <li className={styles.list__item}>
                      Անալիտիկայի օգտագործում թիրախավորված հաղորդագրությունների ուղարկման համար
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg6.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h2 className={styles.body__subtitle}>TBUY CHAT</h2>
                  <ul className={`${styles.body__list} ${styles.body__list_margin}`}>
                    <li className={styles.list__item}>TBUY CHAT բոլոր հնարավորություններով</li>
                    <li className={styles.list__item}>
                      Ներքին նամակագրության միջոցով մշտական ուղիղ կապ Ձեր հաճախորդների հետ
                    </li>
                    <li className={styles.list__item}>Մշտական կապ TBUY-ի հետ</li>
                    <li className={styles.list__item}>
                      Ներքին նամակագրության միջոցով թիրախավորված գովազդ Ձեր հաճախորդներին և
                      հետևորդներին
                    </li>
                  </ul>
                  <h2 className={`${styles.body__subtitle} ${styles.body__subtitle}`}>
                    ՆԵՐԿԱՅԱՑՐԵՔ ՁԵՐ ՈՂՋ ՏԵՍԱԿԱՆԻՆ ԱՆՎՃԱՐ ԱՄԵՆԱՊԱՐԶ ԵՂԱՆԱԿՈՎ
                  </h2>
                  <ul className={styles.body__list}>
                    <li className={styles.list__item}>Ապրանքների ավելացման պարզ և հեշտ համակարգ</li>
                    <li className={styles.list__item}>
                      Ապրանքների ամբողջական ներկայացման մի շարք հնարավորություներ
                    </li>
                    <li className={styles.list__item}>
                      Ողջ տեսականու ավտոմատ ինտեգրացիա Ձեր TBUY էջ
                    </li>
                    <li className={styles.list__item}>
                      Ապրանքների ավտոմատ սինքրոնացում Ձեր վաճառքի ծրագրից կամ կայքից
                    </li>
                    <li className={styles.list__item}>
                      Ապրանքատեսականու խմբավորում ստույգ բաժիններում հաճախորդների համար մանրամասն
                      ֆիլտրելու հնարավորությամբ
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.landing__item}>
                <div className={styles.item__img}>
                  <img src={itemImg7.src} alt="" />
                </div>
                <div className={styles.item__body}>
                  <h2 className={styles.body__subtitle}>ԽՆԱՅԵՔ ԴԱՌՆԱԼՈՎ TBUY ԳՈՐԾԸՆԿԵՐ</h2>
                  <ul className={`${styles.body__list} ${styles.body__list_margin}`}>
                    <li className={styles.list__item}>Կրճատեք Ձեր ծախսերը</li>
                    <li className={styles.list__item}>
                      Խնայեք գումար, չվատնելով այն առաքումների կազմակերպման համար
                    </li>
                    <li className={styles.list__item}>
                      Խնայեք Ձեր ժամանակը, վստահելով TBUY-ին Ձեր աշխատանքի մեծ մասը
                    </li>
                    <li className={styles.list__item}>
                      Մի ծախսեք ավելորդ միջոցներ գովազդի, Ձեր կայքի, դրա սպասարկման և սոցիալ մեդիայի
                      համար
                    </li>
                  </ul>
                  <h2 className={styles.body__subtitle}>
                    SEO ՕՊՏԻՄԱՑՈՒՄ ԵՎ ՈՐՈՆՈՂԱԿԱՆ ՀԱՄԱԿԱՐԳԻ ԲԱՐԵԼԱՎՈՒՄ
                  </h2>
                  <ul className={`${styles.body__list} ${styles.body__list_margin}`}>
                    <li className={styles.list__item}>Նմանը չունեցող ներդրված SEO համակարգ</li>
                    <li className={styles.list__item}>
                      Մշտապես նորացվող մեխանիզմներ SEO համակարի օպտիմացման համար
                    </li>
                    <li className={styles.list__item}>Կայքի նորացված որոնողական համակարգ</li>
                  </ul>
                  <h2 className={styles.body__subtitle}>ԵՎ ՍԱ ԴԵՌ ԱՄԵՆԸ ՉԷ ...</h2>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.partnership}>
            <div className={styles.container}>
              <div className={styles.partnership__body}>
                <h2 className={styles.body__title}>
                  TBUY-Ը ԿՈՏՐՈՒՄ Է ԲՈԼՈՐ ԿԱՐԾՐԱՏԻՊԵՐԸ ԵՎ TBUY ԳՈՐԾԸՆԿԵՐՆԵՐԻՆ ՆԵՐԿԱՅԱՑՆՈՒՄ Է ՄՇՏԱՊԵՍ
                  ԹԱՐՄԱՑՎՈՂ, ԱՇԽԱՐՀՈՒՄ ՆՄԱՆԸ ՉՈՒՆԵՑՈՂ ԳՈՐԾԻՔԱԿԱԶՄ ԵՎ ՀՆԱՐԱՎՈՐՈՒԹՅՈՒՆՆԵՐ
                </h2>
                <div className={styles.body__text}>ՁԵԶՆԻՑ ԸՆԴԱՄԵՆԸ ՊԱՀԱՆՋՎՈՒՄ Է ՍԵՂՄԵԼ ԱՅՍ</div>
                <Link className={`${styles.body__link}`} href="/become_partner" target={"_blank"}>
                  <PrimaryButton>ԴԱՌՆԱԼ ԳՈՐԾԸՆԿԵՐ</PrimaryButton>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
}

export default ManagerSignInPage;
