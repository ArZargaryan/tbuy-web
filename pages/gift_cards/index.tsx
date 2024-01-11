import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import GiftCardsPage from "@features/gifts/presentation/pages/GiftCardsPage";

function GiftCards() {
  return (
    <>
      <Head>
        <title>Tbuy | Gift cards</title>
      </Head>
      <GiftCardsPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "catalog/productspage",
        "catalog/servicespage",
        ...globalTranslations
      ]))
      // Will be passed to the page component as props
    }
  };
}

export default GiftCards;
