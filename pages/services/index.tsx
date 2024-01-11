import Head from "next/head";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { globalTranslations } from "@core/helpers/translations";
import ServicesPage from "@features/services/presentation/pages/ServicesPage";

export default function Services() {
  return (
    <>
      <Head>
        <title>Tbuy | Services</title>
      </Head>
      <ServicesPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["catalog/servicespage", ...globalTranslations]))
      // Will be passed to the page component as props
    }
  };
}
