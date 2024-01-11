import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import AccountUserInfoPage from "@features/account/presentation/pages/AccountUserInfoPage";

export default function UserInfo() {
  return (
    <>
      <Head>
        <title>Tbuy | User Info</title>
      </Head>
      <AccountUserInfoPage />
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
