import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import SellerPage from "@features/shop/presentation/pages/SellerPage";

export default function BecomePartner() {
  return (
    <>
      <Head>
        <title>Tbuy | Individual Seller</title>
      </Head>
      <SellerPage sellerType={"individual"} />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["catalog/productspage", ...globalTranslations]))
      // Will be passed to the page component as props
    }
  };
}
