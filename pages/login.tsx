import React from "react";
import LoginPage from "@features/account/presentation/pages/LoginPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Tbuy | Login</title>
      </Head>
      <LoginPage />
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
