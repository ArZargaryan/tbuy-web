import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import MobileAccountMessagesPage from "@features/account/presentation/pages/AccountMessagesTabPage/AccountMessagesPage/MobileAccountMessagesPage";
import AccountSupportTabPage from "@features/account/presentation/pages/AccountMessagesTabPage";

export default function Messages() {
  return (
    <>
      <Head>
        <title>Tbuy | Messages</title>
      </Head>
      <div className={"desktop_block"}>
        <AccountSupportTabPage />
      </div>
      <div className={"mobile_block"}>
        <MobileAccountMessagesPage />
      </div>
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
