import React from "react";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";

import VacanciesPage from "@features/vacancies/presentation/pages/VacanciesPage";

export default function Vacancies() {
  return (
    <>
      <Head>
        <title>Tbuy | Vacancies</title>
      </Head>
      <VacanciesPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "catalog/productspage",
        "catalog/vacancies-page",
        ...globalTranslations
      ]))
      // Will be passed to the page component as props
    }
  };
}
