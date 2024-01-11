import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import AccountSummaryPage from "@features/account/presentation/pages/AccountSummaryPage";

export default function AccountMySummary() {
  return (
    <>
      <Head>
        <title>Tbuy | My Summary</title>
      </Head>
      <AccountSummaryPage />
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
