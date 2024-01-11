import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import GiftCardsPage from "@features/account/presentation/pages/AccountGiftCardsPage";

export default function GiftCards() {
  return (
    <>
      <Head>
        <title>Tbuy | Gift Cards</title>
      </Head>
      <GiftCardsPage />
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
