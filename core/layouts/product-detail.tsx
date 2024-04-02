import React, { FC, PropsWithChildren } from "react";
import Navbar from "@libs/presentation/components/layout/Navbar";
import MobileBottomBar from "@libs/presentation/components/layout/MobileBottomBar";
import Footer from "@libs/presentation/components/layout/Footer";
import Header from "@libs/presentation/components/layout/Header";
const ProductDetailLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={"app_content"}>{children}</div>
      <MobileBottomBar />
      <div style={{ marginBottom: "70px" /* The height of the footer */ }} />
      <Footer pageWithMobileBar={true} />
    </>
  );
};

export default ProductDetailLayout;
