import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import Head from "next/head";
import BecomePartnerPage from "@features/contact_us/presentation/pages/BecomePartnerPage";

export default function BecomePartner() {
  return (
    <>
      <Head>
        <title>Tbuy | Become a partner</title>
      </Head>
      <BecomePartnerPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalTranslations]))
      // Will be passed to the page component as props
    }
  };
}
