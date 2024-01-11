import React, { FC, PropsWithChildren } from "react";
import Navbar from "@libs/presentation/components/layout/Navbar";
import MobileBottomBar from "@libs/presentation/components/layout/MobileBottomBar";
import Footer from "@libs/presentation/components/layout/Footer";
const ProductDetailLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={"app_content"}>{children}</div>
      <MobileBottomBar />
      <Footer pageWithMobileBar={true} />
    </>
  );
};

export default ProductDetailLayout;
