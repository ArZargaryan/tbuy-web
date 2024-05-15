import React, { HTMLAttributes, useMemo } from "react";
import styles from "./menu-sidebar.module.scss";
import { ImgExporter } from "@core/helpers/ImgExporter";
import { map } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const { Icons } = ImgExporter;

type Props = HTMLAttributes<HTMLDivElement> & {
  extra_type?: "mobile_sidebar";
};

function MenuSidebar(props: Props) {
  const { extra_type } = props;
  const { pathname } = useRouter();
  const routes = useMemo(
    () => [
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Electronics,
        text: "Էլեկտրոնիկա"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.WashingMachine,
        text: "Կենցաղային տեխնիկա"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Constructor,
        text: "Շինարարություն և վերանորոգում"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.House,
        text: "Տուն և ինտերիեր"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Beauty,
        text: "Գեղեցկություն և խնամք"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Duck,
        text: "Մանկական պարագաներ"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Pistols,
        text: "Զենքեր"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.TShirt,
        text: "Հագուստ և աքսեսուարներ"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Car,
        text: "Տրանսպորտ"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.SecuritySystem,
        text: "Անվտանգության համակարգեր"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.BedsideTable,
        text: "Մասնագիտացված ապրնաքներ"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Sport,
        text: "Սպորտ և ժամանց"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Pharmacy,
        text: "Դեղատուն"
      },
      {
        route: "/search/1",
        notifications: 0,
        IconComponent: Icons.Breakfest,
        text: "Սնունդ"
      }
    ],
    []
  );

  const cls = classNames(styles.account_sidebar, props.className, {
    [styles[`variant-${extra_type}`]]: extra_type
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
