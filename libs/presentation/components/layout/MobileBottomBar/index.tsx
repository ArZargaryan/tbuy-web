import React from "react";
import { map } from "lodash";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { Badge, BottomNavigation, BottomNavigationAction } from "@mui/material";

import { navigation_items } from "@libs/presentation/components/layout/MobileBottomBar/model/navigation_items";
import styles from "./mobile-bottom-bar.module.scss";

function MobileBottomBar() {
  const router = useRouter();

  return (
    <div className={styles.bottom_bar}>
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
      >
        {map(navigation_items, (navItem, idx) => {
          const cls = classNames(styles.bottom_bar__item, {
            [styles.bottom_bar__item_active]: router.pathname.includes(navItem.route || "404route")
          });

          return (
            <BottomNavigationAction
              key={idx}
              icon={
                <Link href={navItem.route || "#"} className={cls}>
                  {navItem.badgeContent && (
                    <Badge badgeContent={navItem.badgeContent} color="primary">
                      <navItem.icon />
                    </Badge>
                  )}
                  {!navItem.badgeContent && <navItem.icon />}
                </Link>
              }
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
}

export default MobileBottomBar;
