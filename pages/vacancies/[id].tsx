import React from "react";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";

import VacancyDetailPage from "@features/vacancies/presentation/pages/VacancyDetailPage";
import { GetStaticPaths } from "next";

export default function VacancyDetail() {
  return (
    <>
      <Head>
        <title>Tbuy | Vacancy Detail</title>
      </Head>
      <VacancyDetailPage />
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking" //indicates the type of fallback
  };
};
