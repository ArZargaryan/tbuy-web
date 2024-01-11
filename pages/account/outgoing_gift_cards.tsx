import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import OutgoingGiftCardsPage from "@features/account/presentation/pages/AccountIncomingGiftCardsPage";

export default function OutgoingGiftCards() {
  return (
    <>
      <Head>
        <title>Tbuy | Outgoing Gift Cards</title>
      </Head>
      <OutgoingGiftCardsPage />
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
