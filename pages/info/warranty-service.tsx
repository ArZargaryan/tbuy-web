import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import WarrantyServicePage from "@features/info/presentation/pages/WarrantyServicePage";

function PageList() {
  return (
    <>
      <Head>
        <title>Tbuy | Warranty service</title>
      </Head>
      <WarrantyServicePage />
    </>
  );
}

export default PageList;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalTranslations]))
      // Will be passed to the page component as props
    }
  };
}
