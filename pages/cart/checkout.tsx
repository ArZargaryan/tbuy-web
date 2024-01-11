import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import CheckoutPage from "@features/cart/presentation/pages/CheckoutPage";

export default function Cart() {
  return (
    <>
      <CheckoutPage />
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
