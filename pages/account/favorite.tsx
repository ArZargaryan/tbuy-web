import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import FavoritePage from "@features/account/presentation/pages/FavoritePage";

export default function Favorite() {
  return (
    <>
      <Head>
        <title>Tbuy | Favorites</title>
      </Head>
      <FavoritePage />
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
