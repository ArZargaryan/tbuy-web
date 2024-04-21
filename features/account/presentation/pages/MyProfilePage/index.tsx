import React from "react";
import DefaultLayout from "@layouts/default";
import AccountSidebar from "@layouts/account-layout/components/AccountSidebar";
import { ImgExporter } from "@core/helpers/ImgExporter";

const { Icons } = ImgExporter;

function MyProfilePage() {
  const additionalRoutes = [
    {
      route: "/my_profile/language/",
      notifications: 0,
      IconComponent: Icons.Language,
      text: "Լեզու"
    }
  ];

  return (
    <DefaultLayout withoutFooter padding="0">
      <AccountSidebar extraType={"mobile_sidebar"} additionalRoutes={additionalRoutes} />
    </DefaultLayout>
  );
}

export default MyProfilePage;
