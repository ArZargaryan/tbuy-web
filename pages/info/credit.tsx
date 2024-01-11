import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import CreditPage from "@features/info/presentation/pages/CreditPage";

function PageList() {
  return (
    <>
      <Head>
        <title>Tbuy | Credit network</title>
      </Head>
      <CreditPage />
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
