import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import OrdersPage from "@features/account/presentation/pages/AccountOrdersPage";

export default function AccountOrders() {
  return (
    <>
      <Head>
        <title>Tbuy | Orders</title>
      </Head>
      <OrdersPage />
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
