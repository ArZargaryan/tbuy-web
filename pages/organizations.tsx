import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import OrganizationsPage from "@features/shop/presentation/pages/OrganizationsPage";

export default function Organizations() {
  return (
    <>
      <Head>
        <title>Tbuy | Organizations</title>
      </Head>
      <OrganizationsPage />
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
