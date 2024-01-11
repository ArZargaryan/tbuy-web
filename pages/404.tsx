import React from "react";
import Head from "next/head";
import NotFoundPage from "@features/home/presentation/pages/NotFoundPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Tbuy | Not Found</title>
      </Head>
      <NotFoundPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "catalog/homepage",
        "catalog/categories",
        ...globalTranslations
      ]))
      // Will be passed to the page component as props
    }
  };
}
