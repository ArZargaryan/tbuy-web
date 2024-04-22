import React, { useEffect, useState } from "react";
import DefaultLayout from "@layouts/default";

import styles from "./my-language.module.scss";
import Link from "next/link";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Lang } from "@core/store/global";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface LangUI {
  flag: React.FC<Partial<Element>>;
  name: Lang;
  label: string;
}

const { Flags, Arrows, Icons } = ImgExporter;

function MyLanguagePage() {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const [langs] = useState<LangUI[]>([
    { flag: Flags.Eng, name: Lang.EN, label: "English" },
    { flag: Flags.Rus, name: Lang.RU, label: "Русский" },
    { flag: Flags.Arm, name: Lang.AM, label: "Հայերերն" }
  ]);

  const [currLang, setCurrLang] = useState<LangUI>(
    langs.find((item) => item.name === locale) || langs[1]
  );

  const changeLang = (lang: LangUI) => {
    setCurrLang(lang);
  };

  return (
    <DefaultLayout withoutFooter>
      <div className="container">
        <div className={styles.my_lang}>
          <div className={styles.my_lang__header}>
            <Link href={"/my_profile"}>
              <Arrows.ArrowRight />
            </Link>
            <h1 className={"title title_account"}>Language</h1>
          </div>

          <div className={styles.my_lang__list}>
            {langs.map((item, i) => (
              <Link href={router.asPath} locale={item.name} key={`${item.name}_${i}`}>
                <button onClick={() => changeLang(item)} className={styles.list__item}>
                  <item.flag className={styles.item__image} />
                  <span className={styles.item__text}>{item.label}</span>

                  {item.name === locale && <Icons.Success className={styles.item__choosed} />}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MyLanguagePage;
