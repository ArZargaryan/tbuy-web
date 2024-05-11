import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import GalleryPage from "@features/shop/presentation/pages/GalleryPage";

export default function BecomePartner() {
  return (
    <>
      <Head>
        <title>Tbuy | Legal Seller</title>
      </Head>
      <GalleryPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "account/seller",
        "catalog/productspage",
        ...globalTranslations
      ]))
      // Will be passed to the page component as props
    }
  };
}
