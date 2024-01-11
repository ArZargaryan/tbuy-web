import React, { PropsWithChildren } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

import Navbar from "@libs/presentation/components/layout/Navbar";
import Footer from "@libs/presentation/components/layout/Footer";
import MobileBottomBar from "@libs/presentation/components/layout/MobileBottomBar";
import AccountSidebar from "@layouts/account-layout/components/AccountSidebar";
import AccountContent from "@layouts/account-layout/components/AccountContent";

import { ImgExporter } from "@core/helpers/ImgExporter";
import styles from "./account-layout.module.scss";

interface Props extends PropsWithChildren {
  contentClassName?: string;
  desktopBack?: {
    back?: boolean;
    customLink?: string;
  };
}

const { Arrows } = ImgExporter;

const AccountLayout = ({ children, contentClassName, desktopBack }: Props) => {
  const contentCls = classNames(contentClassName, {
    [styles.with_back_arrow]: desktopBack
  });
  const sidebarCls = classNames({
    [styles.with_back_arrow_sidebar]: desktopBack
  });
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className={"app_content container"}>
        {/* {desktopBack && (
          <div className={styles.desktop_go_back}>
            <button
              onClick={() => {
                if (desktopBack?.back) router.back();
                if (desktopBack?.customLink) router.push(desktopBack.customLink);
              }}
            >
              &larr;
              <span>Վերադառնալ</span>
            </button>
          </div>
        )} */}

        <div className={styles.back_to_menu}>
          <Link href={desktopBack?.customLink || "/my_profile"}>
            <Arrows.ArrowRight />
            <span>Վերադառնալ</span>
          </Link>
        </div>
        <div className={styles.account_layout}>
          <AccountSidebar className={sidebarCls} />
          <AccountContent className={contentCls}> {children} </AccountContent>
        </div>
      </div>
      <MobileBottomBar />
      <Footer pageWithMobileBar={true} />
    </>
  );
};

export default AccountLayout;
