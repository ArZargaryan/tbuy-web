import React from "react";
import FeedbackPage from "@features/contact_us/presentation/pages/FeedbackPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";

export default function Feedback() {
  return (
    <>
      <FeedbackPage />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...globalTranslations]))
    }
  };
}
