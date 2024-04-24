import React, { HTMLAttributes, useMemo } from "react";
import styles from "./menu-sidebar.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { map } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const { Icons } = ImgExporter;

type Props = HTMLAttributes<HTMLDivElement> & {
  extraType?: "mobile_sidebar";
};

function MenuSidebar(props: Props) {
  const { extraType } = props;
  const { pathname } = useRouter();
  const routes = useMemo(
    () => [
      {
        route: "/account/orders",
        notifications: 0,
        IconComponent: Icons.Electronics,
        text: "Էլեկտրոնիկա"
      },
      {
        route: "/account/user_info",
        notifications: 0,
        IconComponent: Icons.WashingMachine,
        text: "Կենցաղային տեխնիկա"
      },
      {
        route: "/account/messages",
        notifications: 0,
        IconComponent: Icons.Constructor,
        text: "Շինարարություն և վերանորոգում"
      },
      {
        route: "/account/gift_cards",
        notifications: 0,
        IconComponent: Icons.House,
        text: "Տուն և ինտերիեր"
      },
      {
        route: "/account/outgoing_gift_cards",
        notifications: 0,
        IconComponent: Icons.Beauty,
        text: "Գեղեցկություն և խնամք"
      },
      {
        route: "/account/my_summary",
        notifications: 0,
        IconComponent: Icons.Duck,
        text: "Մանկական պարագաներ"
      },
      {
        route: "/account/vacancies",
        notifications: 0,
        IconComponent: Icons.Pistols,
        text: "Զենքեր"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.TShirt,
        text: "Հագուստ և աքսեսուարներ"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.Car,
        text: "Տրանսպորտ"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.SecuritySystem,
        text: "Անվտանգության համակարգեր"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.BedsideTable,
        text: "Մասնագիտացված ապրնաքներ"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.Sport,
        text: "Սպորտ և ժամանց"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.Pharmacy,
        text: "Դեղատուն"
      },
      {
        route: "/account/last_viewed_pages",
        notifications: 0,
        IconComponent: Icons.Breakfest,
        text: "Սնունդ"
      }
    ],
    []
  );

  const cls = classNames(styles.account_sidebar, props.className, {
    [styles[`variant-${extraType}`]]: extraType
  });

  return (
    <div {...props} className={cls}>
      {map(routes, ({ route, text, IconComponent, notifications }) => {
        const cls = classNames(styles.menu_sidebar__item, {
          [styles.menu_sidebar__item_active]: pathname.includes(route)
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

export default MenuSidebar;
