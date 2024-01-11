import React from "react";
import Index from "./components/MobileFooter";
import DesktopFooter from "./components/DesktopFooter";

type Props = {
  pageWithMobileBar?: boolean;
};

function Footer(props: Props) {
  const { pageWithMobileBar = false } = props;
  return (
    <>
      <DesktopFooter />
      <Index pageWithMobileBar={pageWithMobileBar} />
    </>
  );
}

export default Footer;
