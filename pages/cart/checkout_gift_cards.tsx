import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import CheckoutGiftCardPage from "@features/cart/presentation/pages/СheckoutGiftCardPage";

export default function Cart() {
  return (
    <>
      <CheckoutGiftCardPage />
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
