import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import LoginSecondStep from "@features/account/presentation/pages/SellerPage/LoginSecondStep";

export default function Login() {
  return (
    <>
      <Head>
        <title>Tbuy | Seller</title>
      </Head>
      <LoginSecondStep />
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
