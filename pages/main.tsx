import HomePage from "@features/home/presentation/pages/HomePage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tbuy</title>
      </Head>
      <HomePage />
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
