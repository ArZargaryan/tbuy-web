import React, { useEffect, useState } from "react";
import styles from "./language-select.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { Lang } from "@core/store/global";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface LangUI {
  flag: React.FC<any>;
  name: Lang;
}
function LanguageSelect() {
  // const dispatch = useAppDispatch();
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  const { Flags, Arrows } = ImgExporter;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const [show, setShow] = useState(false);
  const [langs] = useState<LangUI[]>([
    { flag: Flags.Arm, name: Lang.AM },
    { flag: Flags.Eng, name: Lang.EN },
    { flag: Flags.Rus, name: Lang.RU }
  ]);

  const [currLang, setCurrLang] = useState<LangUI>(
    langs.find((item) => item.name === locale) || langs[1]
  );

  const changeShow = () => setShow((prev) => !prev);

  const changeLang = (lang: LangUI) => {
    setCurrLang(lang);
    changeShow();
  };

  return (
    <div className={styles.navbar__menu_sets_lang}>
      <button type="button" className={styles.navbar__menu_sets_lang_btn} onClick={changeShow}>
        <currLang.flag className={styles.navbar__menu_sets_lang_btn_flag} />
        <span className={styles.navbar__menu_sets_lang_btn_checkLang}>{currLang.name}</span>
        <Arrows.Down
          className={`${styles.navbar__menu_sets_lang_arrow}${
            show ? " " + styles.navbar__menu_sets_lang_arrow_active : ""
          }`}
        />
      </button>
      <div className={`${styles.navbar__menu_sets_lang_dropdown}${show ? "" : " " + styles.dn}`}>
        {langs
          .filter((el) => el.name !== currLang.name)
          .map((item, i) => (
            <Link href={router.asPath} locale={item.name} key={`${item.name}_${i}`}>
              <button
                className={styles.navbar__menu_sets_lang_dropdown_btn}
                onClick={() => changeLang(item)}
              >
                <item.flag className={styles.navbar__menu_sets_lang_dropdown_btn_flag} />
                <span className={styles.navbar__menu_sets_lang_dropdown_btn_checkLang}>
                  {item.name}
                </span>
              </button>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default LanguageSelect;
