import React, { PropsWithChildren } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

import Navbar from "@libs/presentation/components/layout/Navbar";
import Footer from "@libs/presentation/components/layout/Footer";
import MobileBottomBar from "@libs/presentation/components/layout/MobileBottomBar";

import { ImgExporter } from "@core/helpers/ImgExporter";
import styles from "./menu-layout.module.scss";
import Header from "@libs/presentation/components/layout/Header";
import MenuSidebar from "./components/MenuSidebar";
import MenuContent from "./components/MenuContent";

interface Props extends PropsWithChildren {
  contentClassName?: string;
  desktopBack?: {
    back?: boolean;
    customLink?: string;
  };
}

const { Arrows } = ImgExporter;

const MenuLayout = ({ children, contentClassName, desktopBack }: Props) => {
  const contentCls = classNames(contentClassName, {
    [styles.with_back_arrow]: desktopBack
  });
  const sidebarCls = classNames({
    [styles.with_back_arrow_sidebar]: desktopBack
  });
  const router = useRouter();

  return (
    <>
      <Header />
      <Navbar />
      <div className={"app_content container"}>
        <div className={styles.back_to_menu}>
          <Link href={desktopBack?.customLink || "/my_profile"}>
            <Arrows.ArrowRight />
            <span>Վերադառնալ</span>
          </Link>
        </div>
        <div className={styles.menu_layout}>
          <MenuSidebar className={sidebarCls} />
          <MenuContent className={contentCls}> {children} </MenuContent>
        </div>
      </div>
      <MobileBottomBar />
      <Footer pageWithMobileBar={true} />
    </>
  );
};

export default MenuLayout;
