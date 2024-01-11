import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import CartGiftCardPage from "@features/cart/presentation/pages/CartGiftCardPage";

export default function GiftCard() {
  return (
    <>
      <CartGiftCardPage />
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
