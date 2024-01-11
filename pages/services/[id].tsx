import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import { GetStaticPaths } from "next";
import Head from "next/head";
import ServiceDetailPage from "@features/services/presentation/pages/ServiceDetailPage";

export default function Product() {
  return (
    <>
      <Head>
        <title>Tbuy | Product</title>
      </Head>
      <ServiceDetailPage />
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
