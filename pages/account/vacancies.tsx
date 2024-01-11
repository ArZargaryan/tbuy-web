import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import AccountVacanciesPage from "@features/account/presentation/pages/AccountVacanciesPage";

export default function Favorite() {
  return (
    <>
      <Head>
        <title>Tbuy | My Vacancies</title>
      </Head>
      <AccountVacanciesPage />
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
