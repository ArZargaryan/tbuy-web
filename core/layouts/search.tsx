import React, { FC, PropsWithChildren } from "react";

import Navbar from "@libs/presentation/components/layout/Navbar";
import Footer from "@libs/presentation/components/layout/Footer";
import MobileBottomBar from "@libs/presentation/components/layout/MobileBottomBar";

type Props = FC<PropsWithChildren & { q: string }>;

const SearchLayout: Props = ({ children, q }) => {
  return (
    <>
      <Navbar mobileMenuProps={{ type: "search", defaultValue: q }} />
      <div className={"app_content"}>{children}</div>
      <MobileBottomBar />
      <Footer pageWithMobileBar={true} />
    </>
  );
};

export default SearchLayout;
