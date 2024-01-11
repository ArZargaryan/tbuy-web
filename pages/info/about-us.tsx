import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import AboutUsPage from "@features/info/presentation/pages/AboutUsPage";

function PageList() {
  return (
    <>
      <Head>
        <title>Tbuy | About Us</title>
      </Head>
      <AboutUsPage />
    </>
  );
}

export default PageList;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalTranslations]))
      // Will be passed to the page component as props
    }
  };
}
