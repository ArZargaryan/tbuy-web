import React from "react";
import RegisterPage from "@features/account/presentation/pages/RegisterPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Tbuy | Registration</title>
      </Head>
      <RegisterPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "account/auth",
        "shop/categories",
        ...globalTranslations
      ]))
      // Will be passed to the page component as props
    }
  };
}
