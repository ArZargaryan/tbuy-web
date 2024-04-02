import React, { FC, PropsWithChildren } from "react";

import Navbar from "@libs/presentation/components/layout/Navbar";
import Footer from "@libs/presentation/components/layout/Footer";
import MobileBottomBar from "@libs/presentation/components/layout/MobileBottomBar";
import Header from "@libs/presentation/components/layout/Header";

interface Props extends PropsWithChildren {
  withoutFooter?: boolean;
}

const DefaultLayout: FC<Props> = ({ children, withoutFooter }) => {
  return (
    <>
      <div style={{ position: "sticky", top: 0, zIndex: 2000 }}>
        <Header />
        <Navbar />
      </div>

      <div className={"app_content"}>{children}</div>
      <MobileBottomBar />
      {!withoutFooter && <Footer pageWithMobileBar={true} />}
    </>
  );
};

export default DefaultLayout;
