import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import ForgotPasswordPage from "@features/account/presentation/pages/ForgotPasswordPage";
import Head from "next/head";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Tbuy | Forgot password</title>
      </Head>
      <ForgotPasswordPage />
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
