import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import ProductDetailPage from "@features/shop/presentation/pages/ProductDetailPage";
import { GetStaticPaths } from "next";
import Head from "next/head";

export default function Product() {
  return (
    <>
      <Head>
        <title>Tbuy | Product</title>
      </Head>
      <ProductDetailPage />
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
    paths: [], // indicates that no page needs be created at build time
    fallback: "blocking" // indicates the type of fallback
  };
};
