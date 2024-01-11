import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { globalTranslations } from "@core/helpers/translations";
import MyProfilePage from "@features/account/presentation/pages/MyProfilePage";

export default function MyProfile() {
  return (
    <>
      <MyProfilePage />
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
