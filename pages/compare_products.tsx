import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import CompareProductsPage from "@features/shop/presentation/pages/CompareProductsPage";

export default function CompareProducts() {
  return (
    <>
      <Head>
        <title>Tbuy | Compare</title>
      </Head>
      <CompareProductsPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalTranslations]))
      // Will be passed to the page component as props
    }
  };
}
