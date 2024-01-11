import React, { HTMLAttributes, useMemo } from "react";
import styles from "./account-sidebar.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { map } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const { Icons } = ImgExporter;

type Props = HTMLAttributes<HTMLDivElement> & {
  extraType?: "mobile_sidebar";
  additionalRoutes?: {
    route: string;
    notifications: number;
    IconComponent: Element;
    text: string;
  }[];
};

function AccountSidebar(props: Props) {
  const { extraType, additionalRoutes = [] } = props;
  const { pathname } = useRouter();
  const routes = useMemo(
    () => [
      {
        route: "/account/orders",
        notifications: 0,
        IconComponent: Icons.Orders,
        text: "Իմ պատվերները"
      },
      {
        route: "/account/user_info",
        notifications: 0,
        IconComponent: Icons.Profile,
        text: "Անձնական տվյալներ"
      },
      {
        route: "/account/messages",
        notifications: 0,
        IconComponent: Icons.Comment,
        text: "Հաղորդագրություններ"
      },
      // {
      //   route: "/account/mailing",
      //   notifications: 52,
      //   IconComponent: Icons.MailOpened,
      //   text: "Պրոմո ակցիա"
      // },
      {
        route: "/account/notifications",
        notifications: 0,
        IconComponent: Icons.Notifications,
        text: "Ծանուցում"
      },
      // {
      //   route: "/account/support",
      //   notifications: 0,
      //   IconComponent: Icons.Support,
      //   text: "Կապ Tbuy-ի հետ"
      // },
      {
        route: "/account/gift_cards",
        notifications: 0,
        IconComponent: Icons.GiftCardOutlined,
        text: "Իմ նվեր քարտերը"
      },
      {
        route: "/account/outgoing_gift_cards",
        notifications: 0,
        IconComponent: Icons.Gift,
        text: "Իմ նվիրած նվեր քարտերը"
      },
      {
        route: "/account/my_summary",
        notifications: 0,
        IconComponent: Icons.Summary,
        text: "Իմ առցանց ռեզյումեն"
      },
      {
        route: "/account/vacancies",
        notifications: 0,
        IconComponent: Icons.BagOutlined, // с другой иконкой не работает TODO: сообщить о иконке
        text: "Իմ աշխատանքի հայտարարությունները"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.eye,
        text: "Վերջին դիտված էջերը"
      },
      ...additionalRoutes
    ],
    []
  );

  const cls = classNames(styles.account_sidebar, props.className, {
    [styles[`variant-${extraType}`]]: extraType
  });

  return (
    <div {...props} className={cls}>
      {map(routes, ({ route, text, IconComponent, notifications }) => {
        const cls = classNames(styles.account_sidebar__item, {
          [styles.account_sidebar__item_active]: pathname.includes(route)
        });

        return (
          <Link href={route} className={cls}>
            <div className={styles.item__text}>
              <div className={styles.text__icon}>
                <IconComponent />
              </div>{" "}
              <span>{text}</span>
            </div>
            {!!notifications && <div className={styles.item__notif}>{notifications}</div>}
          </Link>
        );
      })}
    </div>
  );
}

export default AccountSidebar;
