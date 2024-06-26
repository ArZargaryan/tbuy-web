import React from "react";
import DefaultLayout from "@layouts/default";
import Link from "next/link";

import styles from "./policy.module.scss";

function AgreementPage() {
  return (
    <DefaultLayout>
      <div className={styles.policy}>
        <h1 className={`title page_title ${styles.policy__title}`}>ՀԱՄԱՁԱՅՆԱԳԻՐ</h1>
        <div className={styles.policy__block}>
          <p className={styles.block__text}>
            Ծառայությունների մատուցման վերաբերյալ սույն Պայմանագիրը (այսուհետ՝ Պայմանագիր), որի
            տեքստը մշտապես տեղակայված է համացանցում{" "}
            <Link href={"/agreement"} target={"_blank"}>
              https://www.tbuy.am/agreement
            </Link>{" "}
            պարունակում է Պայմանագրի բոլոր էական պայմանները և հանդիսանում է «ԹԻԲԵՅ» ՍՊ ընկերության
            կողմից առաջարկ յուրաքանչյուր անձի, ով օգտվում է{" "}
            <Link href={"/"} target={"_blank"}>
              https://www.tbuy.am
            </Link>{" "}
            կայքէջից, կնքել Պայմանագիր, սույն Պայմանագրի տեքստում նշված պայմաններով:
          </p>
          <p className={styles.block__text}>
            Այսպիսով, ՀՀ քաղաքացիական օրենսգրքի 453-րդ հոդվածի 2-րդ մասի համաձայն` համացանցն
            օգտագործելու միջոցով ծառայությունների մատուցման սույն Պայմանագրի տեքստը համարվում է
            հրապարակային օֆերտա:
          </p>
          <p className={styles.block__text}>
            ՀՀ քաղաքացիական օրենսգրքի 454-րդ հոդվածի 3-րդ մասի համաձայն՝ սույն օֆերտայի պատշաճ
            ակցեպտ է համարվում անձի կողմից հետևյալ գործողությունների հաջորդաբար իրականացումը.
          </p>
          <p className={styles.block__text}>
            <strong>1.</strong> Սույն Պայմանագրի պայմաններին և բոլոր հավելվածներին ծանոթացումը,
            <br />
            <strong>2.</strong> Ակտուալ ու ճշգրիտ տեղեկությունների, այդ թվում մուտքանվան
            (հեռախոսահամարի), որը ծառայելու է գրանցված անձի մասին տեղեկատվությունը արտացոլելու
            նպատակով, մուտքագրումը գրանցման ձևի (ֆորմայի) մեջ, որը տեղակայված է համացանցում{" "}
            <Link href={"/login"} target={"_blank"}>
              https://www.tbuy.am/login
            </Link>{" "}
            հասցեում,
            <br />
            <strong>3.</strong> Հատուկ նշանի մուտքագրումը համացանցում{" "}
            <Link href={"/login"} target={"_blank"}>
              https://www.tbuy.am/login
            </Link>{" "}
            հասցեում տեղակայված գրանցման ձևի (ֆորմայի) «Համաձայն եմ պայմաններին» վերտառությամբ
            հատուկ դաշտում, «Համաձայն եմ պայմաններին» կոճակի սեղմելու պահից սկսած և վերը թվարկված
            գործողությունների ճշգրիտ հաջորդական իրականացման դեպքում, Պայմանագիրը համարվում է կնքված
            հետևյալ պայմաններով.
            <br />
          </p>
        </div>

        <div className={styles.policy__block}>
          <h3 className={styles.block__title}>Ծառայությունների մատուցման պայմանագիր</h3>
          <p className={styles.block__text}>
            Ֆիզիկական կամ իրավաբանական անձը (այսուհետ` Պատվիրատու), որն ակցեպտավորել է համացանցում
            (ինտերնետում){" "}
            <Link href={"/login"} target={"_blank"}>
              https://www.tbuy.am/login
            </Link>{" "}
            հասցեում տեղադրված օֆերտան մի կողմից և «ԹԻԲԵՅ» ՍՊ ընկերությունը (այսուհետ` Կատարող), ի
            դեմս տնօրեն Հովհաննես Խաչատրյանի, որը գործում է ընկերության կանոնադրության հիման վրա,
            մյուս կողմից, հետագա համատեղ և առանձին հիշատակման դեպքում համապատասխանաբար անվանվելով
            «Կողմեր» կնքեցին սույն Պայմանագիրը հետևյալի մասին.
          </p>
        </div>
        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>1. Տերմիններ և սահմանումներ.</h4>
          <p className={styles.block__text}>
            <strong>1.1</strong> Եթե Պայմանագրի տեքստից ուղիղ կերպով այլ բան չի բխում, ապա սույն
            Պայմանագրում հետևյալ հասկացությունները և սահմանումներն ունեն ստորև նշված նշանակությունը.{" "}
            <br />
            <strong>1.1.1</strong> Պատվիրատու՝ կոնկրետ Օգտագործող (ֆիզիկական կամ իրավաբանական անձ),
            ով Կատարողի հետ կնքել է Պայմանագիր{" "}
            <Link href={"/agreement"} target={"_blank"}>
              https://www.tbuy.am/agreement
            </Link>{" "}
            հասցեում տեղադրված օֆերտան ակցեպտ անելու միջոցով, <br />
            <strong>1.1.2</strong> Կատարող՝ «ԹԻԲԵՅ» ՍՊ Ընկերություն` իրավաբանական անձ, որը ստեղծվել
            է Հայաստանի Հանրապետության օրենդրության համաձայն, ՀՎՀՀ՝ 04233458, հասցեն՝ ՀՀ, ք. Երևան,
            Շիրակի փակուղի 4, <br />
            <strong>1.1.3</strong> Առաքանի կամ ապրանք`{" "}
            <Link href={"/"} target={"_blank"}>
              https://www.tbuy.am
            </Link>{" "}
            կայքից պատվիրված/ գնված ապրանք, <br />
            <strong>1.1.4</strong> Անձնական գրասենյակ՝ Պատվիրատուի գրանցման արդյունքում ստեղծված
            Կայքի պաշտպանված էջերի ամբողջություն, որոնք օգտագործելով, Պատվիրատուն հնարավորություն է
            ստանում մասնավորապես իրականացնել Ապրանքների և/կամ Ծառայությունների պատվեր, փոփոխել
            Պատվիրատուի մասին տվյալները, Ապրանքների և/կամ Ծառայությունների համար վճարել, ինչպես նաև
            կատարել այլ գործողություններ: Անձնական գրասենյակ մուտքն իրականացվում է Գրանցման
            տվյալների մուտքագրման միջոցով:
            <strong>1.1.5</strong> Օգտագործող՝ ցանկացած անձ, ով օգտագործում է Կայքը ցանկացած ձևով՝
            այդ թվում Կայք այցելելու եղանակով: <br />
            <strong>1.1.6</strong> Բանկային հաշիվ՝ Կատարողի գործող բանկային հաշիվը բանկում, որը
            նշված է սույն Պայմանագրի 11 կետում <br />
            <strong>1.1.7</strong> Կայք՝ տեղեկատվության, դիզայնի, գրաֆիկական էլեմենտների,
            պատկերների, ֆոտո և տեսանյութերի և մտավոր գործունեության այլ արդյունքների, ԷՀՄ-ների
            ծրագրերի ամբողջություն, որոնց միջոցով ապահովվում է այդպիսի տեղեկատվության
            հասանելիությունը համացանցում{" "}
            <Link href={"/"} target={"_blank"}>
              https://www.tbuy.am
            </Link>{" "}
            հասցեում: Կայքը հանդիսանում է համացանցային ռեսուրս՝ նախատեսված անձանց և
            կազմակերպությունների համար և տեղեկատվություն է պարունակում{" "}
            <Link href={"/"} target={"_blank"}>
              https://www.tbuy.am
            </Link>{" "}
            կայքում առկա ապրանքների և ծառայությունների վերաբերյալ: <br />
            <strong>1.1.8</strong> Ծառայություններ՝ Կայքի օգտագործմամբ Կատարողի կողմից Պատվիրատուին
            մատուցվող ծառայություններ: <br />
            <strong>1.1.9</strong> Գրանցման տվյալներ՝ Կայքում գրանցման ընթացքում Պատվիրատուի կողմից
            նշված մուտքանունը և գաղտնաբառը: <br />
            <strong>1.1.10</strong> Երրորդ անձինք` «ԹԻԲԵՅ» ՍՊ ընկերության հետ համագործակցող ՀՀ-ում
            գործող բանկեր և այլ կազմակերպություններ: <br />
          </p>
        </div>
        <div className={styles.policy__block}>
          <p className={styles.block__text}>
            <strong>1.2</strong> Մնացած տերմինները և հասկացությունները, որոնք առկա են Պայմանագրում
            մեկնաբանվում են Հայաստանի Հանրապետության օրենսդրության համաձայն: <br />
            <strong>1.3</strong> Գլուխների, բաժինների, հոդվածների անվանումները նախատեսված են
            բացառապես տեքստից օգտվելու հարմարության համար և իրավաբանական նշանակություն չունեն:
          </p>
        </div>
        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>2. Պայմանագրի առարկան.</h4>
          <p className={styles.block__text}>
            <strong>2.1</strong> Կատարողը պարտավորվում է Պատվիրատուի համար սույն Պայմանագրով
            նախատեսված կարգով ու պայմաններով մատուցել Ծառայություններ և/կամ վաճառել ապրանք, իսկ
            Պատվիրատուն պարտավորվում է կատարել Պայմանագրի պայմանները, այդ թվում վճարել հատուցման
            դիմաց իրականացվող Ծառայությունների մատուցման և գնված ապրանքի (ապրանքների) համար:
            <br />
            <strong>2.2</strong> Կատարողը մատուցում է հետևյալ Ծառայությունները.
            <br />. Պատվիրատուի համար ստեղծում է Անձնական գրասենյակ, <br />. Պատվիրատուի համար
            հնարավորություն է ստեղծում Կայքի միջոցով կատարել առցանց (online) գնումներ և/կամ օգտվել
            ծառայություններից, <br />. Ծառայությունների ծավալը և բովանդակությունը որոշվում են
            Կատարողի կողմից սեփական հայեցողությամբ և ցանկացած ժամանակ կարող են նրա կողմից փոփոխվել:
            <br />
            <strong>2.3</strong> Պատվիրատուն սույն Պայմանագրով տալիս է իր համաձայնությունը, որպեսզի
            Կատարողը ցանկացած ժամանակ փոխանցի սույն Պայմանագրով իրեն հայտնի դարձած Ֆիզիկական անձնաց
            անձնագրային տվյալները ՀՀ-ում գործող և «ԹԻԲԵՅ» ՍՊ ընկերության հետ համագործակցող բանկերին
            (երրորդ աձանց)` ապառիկ առցանց (online) ձևակերպելու նպատակով: <br />
            <strong>2.4</strong> Սույն Պայմանագրի գործողության ժամկետի ընթացքում Կողմերից
            յուրաքանչյուրն ինքն է վճարում իր գործունեության արդյունքում ՀՀ օրենսդրությամբ սահմանված
            հարկերը, տուրքերը և այլ պարտադիր վճարումները:
          </p>
        </div>
        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>3. Կողմերի իրավունքները և պարտականությունները.</h4>
          <p className={styles.block__text}>
            <strong>3.1</strong> Պատվիրատուն պարտավոր է. <br />
            <strong>3.1.1</strong> Պատշաճ կատարել սույն Պայմանագրով ստանձնած իր պարտավորությունները
            և Պայմանագրի պայմանները: <br />
            <strong>3.1.2</strong> Ծանոթանալ սույն Պայմանագրի ակտուալ տարբերակի հետ յուրաքանչյուր
            անգամ Կայք հաճախելիս մինչև Ծառայություններից օգտվելու պահը: <br />
            <strong>3.1.3</strong> Կայքում նշել բացառապես հավաստի ու ճիշտ տեղեկատվություն և ոչ մի
            դեպքում Կատարողին և/կամ երրորդ անձանց (Բանկերին) մոլորության մեջ չգցել: <br />
            <strong>3.1.4</strong> Պատվիրատուն իրավունք չունի Կայքում գրանցվել այլ անձի անունից կամ
            ինքն իրեն անվանել կամ ներկայացնել այլ անձի անունով: <br />
            <strong>3.1.5</strong> Պատվիրատուն պարտավորվում է փոխհատուցել Կատարողի կողմից կրած
            անվճար փոխադրման (առաքման) ծախսերը, եթե{" "}
            <Link href={"/"} target={"_blank"}>
              https://www.tbuy.am
            </Link>{" "}
            կայքից պատվիրված/ գնված ապրանքը ետ է վերադարձնում 14 օրվա ընթացքում (ապառիկ գնման
            դեպքում 7 օրվա ընթացքում): <br />
            <strong>3.1.6</strong> Պատվիրատուն պարտավորվում է փոխհատուցել Կատարողի կողմից կրած
            անվճար փոխադրման (առաքման) երկկողմանի ծախսերը՝ «ԹԻԲԵՅ» ՍՊ ընկերության պահեստից մինչև
            Պատվիրատուի նշված հասցե առաքանին հասցնելու և հետադարձ ճանապարհի գումարը, եթե{" "}
            <Link href={"/"} target={"_blank"}>
              https://www.tbuy.am
            </Link>{" "}
            կայքից պատվիրված/ գնված պատշաճ որակի ապրանքը հրաժարվում է ընդունել առաքումից անմիջապես
            հետո: Պատվիրատուի կողմից վերոգրյալ պարբերություններում նշված պարտավորությունների
            չկատարման կամ ոչ պատշաճ կատարման դեպքում Կատարողն իրավունք ունի դատական կարգով ստանալ
            փոխհատուցում: <br />
            <strong>3.1.7</strong> Պատվիրատուն իրավունք չունի միևնույն ժամանակ օգտագործել մի քանի
            ըքաունթ (անձնական էջ): <br />
            <strong>3.1.8</strong> Ապրանքն ապառիկ առցանց գնման պարագայում անձամբ և պատշաճ կատարել իր
            պարտավորությունները երրորդ անձի (բանկի) հանդեպ, ինչպես նաև ինքնուրույն կարգավորել
            (հարթել) այդ պարտավորությունների կատարման հետ կապված ցանկացած խնդիր: <br />
            <strong>3.1.9</strong> Պատվիրատուն պարտավոր է ձեռնարկել բոլոր միջոցները բացառելու ոչ
            արտոնագրված մուտքը դեպի Կայքի իր Անձնական գրասենյակ, այլ անձանց չտրամադրել իր Անձնական
            գրասենյակի մուտքանունը և/կամ գաղտնաբառը: <br />
            <strong>3.1.10</strong> Կատարել Կատարողի օրինական ցուցումները և պահանջները կապված սույն
            Պայմանագրի իրականացման հետ:
          </p>
          <p className={styles.block__text}>
            <strong>3.2</strong> Պատվիրատուն իրավունք ունի.
            <br />
            <strong>3.2.1</strong> Պահանջել Կատարողից պատշաճ կատարել իր կողմից ստանձնած
            պարտավորությունները:
            <br />
            <strong>3.2.2</strong> Օգտվել Ծառայություններից:
            <br />
          </p>
          <p className={styles.block__text}>
            <strong>3.3</strong> Կատարողը պարտավոր է.
            <br />
            <strong>3.3.1</strong> Պատշաճ կատարել սույն Պայմանագրով ստանձնած պարտավորությունները:
            <br />
            <strong>3.3.2</strong> Պատվիրատուին մատուցել Ծառայություններ, այդ թվում սույն Պայմանագրի
            2.2 կետում նախատեսված հնարավորությունները տրամադրելով:
            <br />
          </p>
          <p className={styles.block__text}>
            <strong>3.4</strong> Կատարողն իրավունք ունի.
            <br />
            <strong>3.4.1</strong> Միակողմանի կերպով փոփոխել Կայքի գործունեության տեխնոլոգիաները և
            պայմանները:
            <br />
            <strong>3.4.2</strong> Սեփական հայեցողությամբ և առանց Պատվիրատուի լրացուցիչ
            համաձայնությունը ստանալու փոփոխել և/կամ հեռացնել ցանկացած տեղեկատվություն, որը
            մուտքագրվել կամ տեղադրվել է Կայքում Պատվիրատուի կողմից:
            <br />
            <strong>3.4.3</strong> Դադարեցնել, կասեցնել և/կամ արգելափակել Պատվիրատուի
            հասանելիությունը Կայքին, եթե Կատարողի կարծիքով Պատվիրատուի գործունեությունը սպառնալիք է
            ստեղծում Կայքի և/կամ երրորդ անձանց համար:
            <br />
            <strong>3.4.4</strong> Կայքում, Պատվիրատուի Անձնական գրասենյակում, Պատվիրատուի
            ըքաունթում տեղադրել գովազդային կամ այլ տեղեկատվություն՝ առանց Պատվիրատուի հետ
            համաձայնեցման:
            <br />
            <strong>3.4.5</strong> Պատվիրատուին ուղարկել տեղեկատվական և գովազդային
            հաղորդագրություններ: Սույնով Պատվիրատուն տալիս է իր համաձայնությունը նմանատիպ
            հաղորդագրություններ ստանալու համար:
            <br />
            <strong>3.4.6</strong> Անհրաժեշտության դեպքում գիշերային ժամերին իրականացնել Կայքում
            պրոֆիլակտիկ աշխատանքներ, Կայքի աշխատանքի կարճաժամկետ դադարեցմամբ:
            <br />
          </p>
        </div>
        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>
            4. Ծառայությունների մատուցման և հանձնման-ընդունման կարգը.
          </h4>
          <p className={styles.block__text}>
            <strong>4.1</strong> Առցանց ապրանք գնելու կամ առցանց ապառիկ ձևակերպելու համար
            Պատվիրատուն կամ Պատվիրատուի անունից գործող անձը` իրավաբանական անձի ներկայացուցիչը,
            պարտավոր է մուտքագրել Պատվիրատուի Գրանցման տվյալները{" "}
            <Link href={"/login"} target={"_blank"}>
              https://www.tbuy.am/login
            </Link>{" "}
            հասցեում տեղակայված Կայքի՝ «Մուտք» պատուհանի էջում և ընտրել համապատասխան Ապրանքը:
            Ապրանքի մանրամասն նկարագիրը, դրանց տրամադրման կարգը և երաշխիքային պայմանները տեղակայված
            են համապատասխան Ապրանքի էջում կամ Կայքի այլ հատվածներում:
          </p>
          <p className={styles.block__text}>
            <strong>4.2</strong> Ապրանքը, համարվում է Պատվիրատուի կողմից գնված, երբ վերջինս առցանց
            կամ կայքում գործող այլ վճարման տարբերակներից որևէ մեկով վճարում է Ապրանքի համար, իսկ
            ապառիկը առցանց հաստատված, երբ երրորդ անձը` Բանկը, հաստատում է Պատվիրատուի դիմումը:
          </p>
        </div>

        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>5. Կողմերի պատասխանատվությունը.</h4>
          <p className={styles.block__text}>
            <strong>5.1</strong> Կատարողը պատասխանատվություն է կրում միայն մեղքի առկայության
            պարագայում, եթե Հայաստանի Հանրապետության օրենսդրության իմպերատիվ նորմերով այլ բան չի
            սահմանվում:
          </p>
          <p className={styles.block__text}>
            <strong>5.2</strong> Կատարողը պատասխանատվություն չի կրում Պատվիրատուի կողմից վերջինիս
            անձնական էջը այլ անձանց կողմից օգտագործվելու համար:
          </p>
          <p className={styles.block__text}>
            <strong>5.3</strong> Կատարողը պատասխանատու չէ իրենից անկախ պատճառներով առաջացած Կայքի
            աշխատանքն ապահովող ծրագրային ապահովումների և/կամ ապարատային միջոցների սխալների, ոչ ճիշտ
            աշխատանքի, անսարքությունների, ինչպես նաև դրանց հետևանքով Պատվիրատուի մոտ առաջացած
            վնասների համար:
          </p>
          <p className={styles.block__text}>
            <strong>5.4</strong> Պատվիրատուն ինքն է պատասխանատվություն կրում Կայքում իր տվյալների
            օգտագործմամբ իրականացված բոլոր գործողությունների համար:
          </p>
          <p className={styles.block__text}>
            <strong>5.5</strong> Կատարողը պատասխանատվություն չի կրում Պատվիրատուի կողմից սխալ
            լրացված տվյալների, ՀՀ օրենսդրության խախտման համար:
          </p>
          <p className={styles.block__text}>
            <strong>5.6</strong> Պատվիրատուն համաձայնվում է օգտագործել Կայքն այն տեսքով, ինչ տեսքով,
            որ ներկայացված է:
          </p>
          <p className={styles.block__text}>
            <strong>5.7</strong> Այն դեպքում, երբ Պատվիրատուն չի կատարում սույն Պայմանագրի՝ անձնական
            տվյալներին վերաբերող 6-րդ կետի պայմանները, Պատվիրատուն պարտավորվում է փոխհատուցել
            Կատարողի բոլոր վնասները, որոնք առաջացել են դրանց չկատարման հետևանքով:
          </p>
        </div>

        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>6. Անձնական տվյալներ.</h4>
          <p className={styles.block__text}>
            <strong>6.1</strong> Այն դեպքում, երբ Պատվիրատուն Կայքում մուտքագրում է իր անձնական
            (անձնագրային) տվյալները, Պատվիրատուն դրանք դարձնում է մատչելի միայն Կատարողի և երրորդ
            անձանց` Բանկերի համար:
          </p>
          <p className={styles.block__text}>
            <strong>6.2</strong> Պատվիրատուն տալիս է իր համաձայնությունը, որպեսզի Կատարողը իրեն
            փոխանցված տվյալները հավաքագրի, պահպանի, մշակի և փոխանցի բանկ՝ ապառիկ վարկի հարցման և
            ձևակերպման նպատակով:
          </p>
          <p className={styles.block__text}>
            <strong>6.3</strong> Պատվիրատուի կողմից փոխանցված տվյալների հավաքագրման, պահպանման,
            մշակման արդյունքում պատճառված վնասի պատասխանատվությունն ամբողջությամբ կրում է
            Պատվիրատուն:
          </p>
          <p className={styles.block__text}>
            <strong>6.4</strong> Անձնական տվյալների մասով Ընկերության քաղաքականությունը
            համապատասխանում է ՀՀ օրենսդրությամբ նախատեսված պահանջներին:
          </p>
        </div>

        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>7. Մտավոր սեփականություն.</h4>
          <p className={styles.block__text}>
            <strong>7.1</strong> Կայքի նկատմամբ բոլոր տեսակի բացառիկ և անձնական ոչ գույքային
            իրավունքները պատկանում են Կատարողին կամ Կատարողի հետ պայմանագիր կնքած անձանց, ովքեր
            իրավունք են ստացել մտավոր գործունեության արդյունքներ տեղադրել Կայքում:
          </p>
        </div>

        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>8. Վեճերի լուծում.</h4>
          <p className={styles.block__text}>
            <strong>8.1</strong> Պայմանագիրը և դրանից ծագող բոլոր հարաբերությունները կարգավորվում են
            Հայաստանի Հանրապետության օրենսդրությամբ սահմանված կարգով: Կողմերի միջև ծագած վեճերը
            ենթակա են լուծման Հայաստանի Հանրապետության օրենսդրության համաձայն:
          </p>
          <p className={styles.block__text}>
            <strong>8.2</strong> Պայմանագրի կատարման, գործողության դադարեցման կամ Պայմանագիրը
            անվավեր ճանաչելու հետ կապված բոլոր վեճերը, տարաձայնությունները կամ պահանջները, Կողմերը
            կձգտեն լուծել բանակցությունների միջոցով: Կողմը, որի մոտ առաջացել են տարաձայնությունները
            և/կամ և/կամ պահանջները պետք է մյուս Կողմին հաղորդագրություն ուղարկի սույն Պայմանագրի
            9.7-րդ սահմանված կարգով՝ նշելով առաջացած պահանջները և/կամ տարաձայնությունները:
          </p>
          <p className={styles.block__text}>
            <strong>8.3</strong> Սույն Պայմանագրի 8.2-րդ կետում նշված հաղորդագրությունը ստանալուց
            հետո 15 (տասնհինգ) օրվա ընթացքում ստացող Կողմն ուղարկում է հաղորդագրության պատասխան:
          </p>
          <p className={styles.block__text}>
            <strong>8.4</strong> Այն դեպքում, եթե հաղորդագրությունն ուղարկող Կողմը 15 (տասնհինգ)
            օրվա ընթացքում չստանա մյուս Կողմի պատասխանը կամ առաջացած վեճը չլուծվի, այն ենթակա է
            լուծման ՀՀ օրենսդրությամբ սահմանված դատական կարգով:
          </p>
        </div>

        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>
            9. Պայմանագիրն ուժի մեջ մտնելը, պայմանների փոփոխումը.
          </h4>
          <p className={styles.block__text}>
            <strong>9.1</strong> Կողմերը սույն Պայմանագրով համաձայնվում են, որ Կատարողը կարող է
            միակողմանի փոփոխություններ կատարել Պայմանագրում՝ փոփոխված Պայմանագրի տեքստը համացանցի{" "}
            <Link href={"/agreement"} target={"_blank"}>
              https://www.tbuy.am/agreement
            </Link>{" "}
            հասցեում տեղադրելու միջոցով:
          </p>
          <p className={styles.block__text}>
            <strong>9.2</strong> Սույն Պայմանագրով Պատվիրատուն համաձայնվում է, որ Պայմանագրից ծագած
            պարտավորությունների իրականացման շրջանակներում Պայմանագրի կնքման, փոփոխման, լրացման,
            դադարեցման, ինչպես նաև այդ հարցերով գրագրության կատարման համար Պատվիրատուն օգտագործում է
            ոչ թե ձեռքով արված ստորագրությունը, այլ էլեկտրոնային հետևյալ ✔ նշումը («Համաձայն եմ
            պայմաններին»):
          </p>
          <p className={styles.block__text}>
            <strong>9.3</strong> Կատարողը հաստատում է, որ իր կողմից իր ստորագրության անալոգ է
            համարվում Կատարողի իրավասու գործադիր մարմնի ստորագրության ֆակսիմիլային
            վերարտադրությունը:
          </p>
          <p className={styles.block__text}>
            <strong>9.4</strong> Պատվիրատուն հաստատում է, որ իր կողմից իր ստորագրության անալոգ են
            համարվում.
            <br />
            <strong>9.4.1</strong> Գրանցման տվյալները: Այսպիսով` բոլոր գործողությունները, որոնք
            իրականացվում են գրանցման տվյալների օգտագործմամբ, ճանաչվում են որպես կատարված Պատվիրատուի
            կողմից, իսկ բոլոր փաստաթղթերը, որոնք ուղարկվում են գրանցման տվյալների օգտագործմամբ,
            համարվում են ստորագրված Պատվիրատուի կողմից: <br />
            <strong>9.4.2</strong> Այն մուտքանունը (հեռախոսահամարը) և գաղտնաբառը, որը նշվել է
            Պատվիրատուի կողմից Կայքում գրանցման ժամանակ: Այսպիսով` նշված հեռախոսահամարից Կատարողին
            ուղարկված բոլոր նամակները համարվում են ուղարկված և ստորագրված Պատվիրատուի կողմից:
            <br />
            <strong>9.4.3</strong> Կողմերը պայմանավորվում են Պայմանագրով անհրաժեշտ փաստաթղթերի և
            պահանջների կազմման ժամանակ օգտագործել ստորագրությունների ֆաքսիմիլային
            վերարտադրությունները: Սույնով Կողմերը հաստատում են, որ իրենց կողմից ստորագրության
            ֆաքսիմիլային վերարտադրության միջոցով ստորագրված փաստաթղթերը և պահանջները, ունեն
            իրավաբանական ուժ և պարտադիր են Կողմերի համար:
          </p>
          <p className={styles.block__text}>
            <strong>9.5</strong> Պատվիրատուի հաստատված հեռախոսահամար է համարվում Պատվիրատուի կողմից
            Կայքում գրանցվելու ժամանակ նշված հեռախոսահամարը:
          </p>
          <p className={styles.block__text}>
            <strong>9.6</strong> Կատարողի հաստատված հեռախոսահամար է համարվում` +374 077 065 065,
          </p>
          <p className={styles.block__text}>
            <strong>9.7</strong> Բացի սույն Պայմանագրով և ՀՀ գործող օրենսդրությամբ ուղղակի
            նախատեսված դեպքերի, Պայմանագրից ծագած պարտավորությունների իրականացման շրջանակներում
            Կողմերի բոլոր ծանուցումները պետք է ուղարկվեն և համարվում են փոխադարձ ստացված Կողմերի
            հաստատված հեռախոսահամարներից ուղարկված լինելու դեպքում:
          </p>
        </div>

        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>10. Ֆորս-մաժոր.</h4>
          <p className={styles.block__text}>
            <strong>10.1</strong> Կողմերն ազատվում են իրենց պարտավորությունները մասամբ կամ
            ամբողջությամբ չկատարելու պատասխանատվությունից, եթե դա եղել է անհաղթահարելի ուժի
            ազդեցության հետևանքով, որը ծագել է սույն Պայմանագիրը կնքելուց հետո, և որը Կողմերը չէին
            կարող կանխատեսել կամ կանխարգելել: Այդպիսիք են համարվում՝ տարերային աղետների,
            արդյունաբերական և այլ վթարների, զանգվածային հասարակական անկարգությունների, պատերազմի կամ
            այլ նման պարագաների հետևանքներն ու դրանց վերացնելու դեպքերը, կամ ՀՀ պետական կառավարման
            մարմինների կողմից ընդունված և ուժի մեջ մտած ակտերը, եթե դրանք անմիջական կապված են սույն
            Պայմանագրով նախատեսված Կողմերի պարտավորությունների կատարման պատշաճության, ժամկետների կամ
            ծավալների հետ:
          </p>
          <p className={styles.block__text}>
            <strong>10.2</strong> Եթե անհաղթահարելի ուժի ազդեցությունը շարունակվում է 3 ամսից ավելի,
            ապա Կողմերից յուրաքանչյուրն իրավունք ունի սույն Պայմանագրով սահմանված կարգով լուծել
            սույն Պայմանագիրը այդ մասին գրավոր տեղյակ պահելով մյուս Կողմին՝ այդ հիմքով որևէ տույժ,
            տուգանք, կամ հատուցում չհաշվարկելով ու դրանց վճարման պահանջ չներկայացնելով:
          </p>
        </div>

        <div className={styles.policy__block}>
          <h4 className={styles.block__suptitle}>11. Կատարողի հասցեն և այլ վավերապայմանները.</h4>
          <div className={styles.block__flex}>
            <p className={styles.flex__col}>Անվանում</p>
            <p className={styles.flex__col}>«ԹԻԲԵՅ» ՍՊԸ</p>
          </div>
          <div className={styles.block__flex}>
            <p className={styles.flex__col}>Հասցե</p>
            <p className={styles.flex__col}>ՀՀ, ք. Երևան, Շիրակի փակուղի 4</p>
          </div>
          <div className={styles.block__flex}>
            <p className={styles.flex__col}>Հեռ. համար</p>
            <p className={styles.flex__col}>+374 77 065 065</p>
          </div>
          <div className={styles.block__flex}>
            <p className={styles.flex__col}>ՀՎՀՀ</p>
            <p className={styles.flex__col}>04233458</p>
          </div>
          <div className={styles.block__flex}>
            <p className={styles.flex__col}>Բանկ</p>
            <p className={styles.flex__col}>«ԱՄԵՐԻԱԲԱՆԿ» ՓԲԸ</p>
          </div>
          <div className={styles.block__flex}>
            <p className={styles.flex__col}>Հ/Հ</p>
            <p className={styles.flex__col}>1570053737490100</p>
          </div>
          <div className={styles.block__flex}>
            <p className={styles.flex__col}>Տնօրեն</p>
            <p className={styles.flex__col}>Հ. Խաչատրյան </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default AgreementPage;
