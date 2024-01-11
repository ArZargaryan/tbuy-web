import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";
import Head from "next/head";
import { globalTranslations } from "@core/helpers/translations";

import SearchResultPage from "@features/search/presentation/pages/SearchResultPage";

export default function SearchResult() {
  return (
    <>
      <Head>
        <title>Tbuy | Search Results</title>
      </Head>
      <SearchResultPage />
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
