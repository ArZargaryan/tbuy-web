import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import NotificationsPage from "@features/account/presentation/pages/AccountNotificationsPage";

export default function Favorite() {
  return (
    <>
      <Head>
        <title>Tbuy | Notifications</title>
      </Head>
      <NotificationsPage />
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
