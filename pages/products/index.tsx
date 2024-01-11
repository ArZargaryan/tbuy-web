import React from "react";
import ProductsPage from "@features/shop/presentation/pages/ProductsPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";

function Products() {
  return (
    <>
      <Head>
        <title>Tbuy | Products</title>
      </Head>
      <ProductsPage />
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

export default Products;
