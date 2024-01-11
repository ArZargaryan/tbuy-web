import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import AccountLastViewedPages from "@features/account/presentation/pages/AccountLastViewedPages";

export default function GiftCards() {
  return (
    <>
      <Head>
        <title>Tbuy | Last viewed pages</title>
      </Head>
      <AccountLastViewedPages />
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
