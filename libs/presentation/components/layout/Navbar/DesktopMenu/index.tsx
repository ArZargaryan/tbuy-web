import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "../navbar.module.scss";
import { TextInput } from "@libs/presentation/components/form/inputs/TextInput";
import { useForm } from "react-hook-form";
import Tooltip from "@libs/presentation/components/elements/Tooltip";
import { MenuImgExporter } from "@libs/presentation/components/layout/Navbar/DesktopMenu/helpers/MenuImgExporter";
import { useModal } from "@core/hooks/useModal";
import NotificationModal from "@libs/presentation/components/layout/Navbar/DesktopMenu/components/NotificationModal";
import PrimaryButton from "@core/button/primary";

type Props = {
  toggleActive: () => void;
};
const { Icons, blob } = ImgExporter;
const { ProfileIcons } = MenuImgExporter;

function DesktopMenu({ toggleActive }: Props) {
  const { t } = useTranslation(["layout/navbar", "common"]);

  const { register, handleSubmit, control } = useForm();

  const submitHandler = () => {
    console.log("");
  };

  const [notificationModalOpen, changeNotificationModalOpen] = useModal(false);

  return (
    <div className={styles.desktop_navbar}>
      <button
        type="button"
        className={styles.navbar__assortment_btn}
        data-content="assortment"
        onClick={toggleActive}
      >
        <MenuIcon className={styles.navbar__assortment_btn_icon} />
        <span className={styles.navbar__assortment_btn_txt}>{t("assortment")}</span>
      </button>

      <form onSubmit={handleSubmit(submitHandler)} className={styles.navbar__search}>
        <label htmlFor="" className={styles.navbar__search_area}>
          <TextInput
            control={control}
            {...register("search")}
            inputProps={{
              placeholder: `${t("search", { ns: "common" })}`
            }}
            className={styles.navbar__search_area_inp}
            icon={<Icons.Search />}
          />
        </label>
        {/* <div className={styles.navbar__search_result}></div> */}
      </form>

      <div className={styles.navbar__sets}>
        <div className={styles.navbar__sets_user}>
          <div className={styles.user}>
            <Link href={"/login"} className={`${styles.navbar__sets_user_btn} ${styles.prompt}`}>
              <Icons.Profile className={styles.navbar__sets_compare_icon} />
            </Link>
            <div className={styles.user__hidden}>
              <div className={styles.hidden__body}>
                <div className={styles.body__userinfo}>
                  <div className={styles.userinfo__icon}>
                    <img src={blob.avatar.src} alt="" />
                  </div>
                  <div className={styles.userinfo__box}>
                    <div className={styles.box__name}>
                      <div className={styles.name__text}>Arman Sahakyan</div>
                      <a href="" className={styles.name__edit}>
                        <ProfileIcons.Edit />
                      </a>
                    </div>
                    <div className={styles.box__email}>alpineshop@gmail.com</div>
                  </div>
                </div>
                <ul className={styles.body__list}>
                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Profile />
                      </div>
                      <div className={styles.link__text}>
                        Անձնական տվյալներ
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Orders />
                      </div>
                      <div className={styles.link__text}>
                        Իմ պատվերները
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Mail />
                      </div>
                      <div className={styles.link__text}>
                        Հաղորդագրություններ
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={`${styles.list__item} ${styles.list__mailing}`}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.OpenedMail />
                      </div>
                      <div className={styles.link__text}>
                        Պրոմո ակցիա
                        <div className={styles.link__alert}></div>
                      </div>
                      <button className={styles.mailing__button}>
                        {/*<img src="img/other/gigachad.jpg" alt="}>*/}
                      </button>
                      <div className={styles.mailing__counter}>52</div>
                    </a>
                  </li>

                  <li className={`${styles.list__item} ${styles.alert}`}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Notifications />
                      </div>
                      <div className={styles.link__text}>
                        Ծանուցում
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Shop />
                      </div>
                      <div className={styles.link__text}>
                        Վաճառել Tbuy-ում
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Support />
                      </div>
                      <div className={styles.link__text}>
                        Կապ Tbuy-ի հետ
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.GiftCard />
                      </div>
                      <div className={styles.link__text}>
                        Իմ նվեր քարտերը
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Gift />
                      </div>
                      <div className={styles.link__text}>
                        Իմ նվիրած նվեր քարտերը
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Summary />
                      </div>
                      <div className={styles.link__text}>
                        Իմ առցանց ռեզյումեն
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Job />
                      </div>
                      <div className={styles.link__text}>
                        Իմ աշխատանքի հայտարարությունները
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Blocks />
                      </div>
                      <div className={styles.link__text}>
                        Վահանակ
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>

                  <li className={styles.list__item}>
                    <a href="" className={styles.item__link}>
                      <div className={styles.link__icon}>
                        <ProfileIcons.Quit />
                      </div>
                      <div className={styles.link__text}>
                        Ելք
                        <div className={styles.link__alert}></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.user__alert}></div>
          </div>
        </div>
        {/* <Link href="/compare_products" className={styles.navbar__sets_compare}>
          <Badge badgeContent={1} color="primary">
            <Icons.Compare className={styles.navbar__sets_compare_icon} />
          </Badge>
        </Link>
        <Link href="/account/favorite" className={styles.navbar__sets_favorites}>
          <Badge badgeContent={1} color="primary">
            <Icons.Heart className={styles.navbar__sets_favorites_icon} />
          </Badge>
        </Link> */}
        <div className={styles.navbar__sets_basket}>
          <div className={styles.navbar__sets_basket_btn}>
            <Tooltip
              placement={"bottom-end"}
              label={
                <Badge badgeContent={2} color="primary">
                  <Icons.Cart className={styles.navbar__sets_basket_btn_icon} />
                </Badge>
              }
            >
              <div className={styles.basket}>
                <div className={styles.basket__header}>
                  <b>Զամբյուղ</b>
                  <button className={styles.header__delete}>Ջնջել բոլորը</button>
                </div>

                <div className={styles.basket__items}>
                  <div className={styles.items__item}>
                    <div className={styles.item__img}>
                      <img src={blob.productBigImage.src} />
                    </div>
                    <div className={styles.item__info}>
                      <div className={styles.info__name}>Keter Florida</div>
                      <div className={styles.info__price}>
                        <b>88.000 AMD</b> | 1 հատ
                      </div>
                    </div>
                    <button className={styles.item__cancel}>
                      <Icons.Close />
                    </button>
                    <div className={styles.item__installation}>
                      <span className={styles.installation__text}>
                        Տեղադրում{" "}
                        <button>
                          <Icons.CancleCircle width={"24px"} />
                        </button>
                      </span>
                      <b className={styles.installation__price}>3 000 AMD</b>
                    </div>
                  </div>

                  <div className={styles.items__item}>
                    <div className={styles.item__img}>
                      <img src={blob.productBigImage.src} />
                    </div>
                    <div className={styles.item__info}>
                      <div className={styles.info__name}>Keter Florida</div>
                      <div className={styles.info__price}>
                        <b>88.000 AMD</b> | 1 հատ
                      </div>
                    </div>
                    <button className={styles.item__cancel}>
                      <Icons.Close />
                    </button>
                  </div>
                </div>

                <div className={styles.basket__total}>
                  <b>Ընդհանուր</b>
                  <b className={styles.total__price}>88.000 AMD</b>
                </div>

                <Link href={"/cart"}>
                  <PrimaryButton className={`${styles.basket__button}`}>ՀԱՍՏԱՏԵԼ ՊԱՏՎԵՐԸ</PrimaryButton>
                </Link>
              </div>
            </Tooltip>
          </div>
          {/* <div className={styles.navbar__sets_basket_content}></div> */}
        </div>
        <div className={styles.navbar__sets_notifications}>
          <div className={styles.navbar__sets_notifications_btn}>
            <Tooltip
              placement={"bottom"}
              label={
                <Badge badgeContent={2} color="primary">
                  <Icons.Notifications className={styles.navbar__sets_notifications_btn_icon} />
                </Badge>
              }
            >
              <div className={styles.notification}>
                <div className={styles.notification__hidden}>
                  <div className={styles.hidden__body}>
                    <div className={styles.body__message}>
                      <div className={styles.message__title}>Պատվերի հաստատում</div>
                      <div className={styles.message__text}>
                        Խնդրում ենք հաստատել #25987 պատվելի իրագործումը
                      </div>
                      <div className={styles.message__data}>2 րոպե առաջ</div>
                    </div>

                    <div className={styles.body__message} onClick={changeNotificationModalOpen}>
                      <div className={styles.message__title}>Դուք ունեք նվեր քարտ</div>
                      <div className={styles.message__text}>Խնդրում ենք հաստատման համար...</div>
                      <div className={styles.message__data}>17.12.2020</div>
                    </div>

                    <div className={styles.body__message}>
                      <div className={styles.message__title}>Lorm ipsum</div>
                      <div className={styles.message__text}>
                        Խնդրում ենք հաստատել #25987 պատվելի իրագործումը
                      </div>
                      <div className={styles.message__data}>17.12.2020</div>
                    </div>

                    <div className={styles.body__message}>
                      <div className={styles.message__title}>Դուք ստացել եք #25987 ապրանքը</div>
                      <div className={styles.message__text}>Կարող եք թողնել կարծիք</div>
                      <div className={styles.message__data}>17.12.2020</div>
                    </div>

                    <Link href="/account/notifications" className={styles.body__link}>
                      ՏԵՍՆԵԼ ԲՈԼՈՐԸ
                    </Link>
                  </div>
                </div>
              </div>
            </Tooltip>
          </div>
          {/* <div className={styles.navbar__sets_notifications_content}></div> */}
        </div>
      </div>

      <NotificationModal open={notificationModalOpen} onClose={changeNotificationModalOpen} />
    </div>
  );
}

export default DesktopMenu;
