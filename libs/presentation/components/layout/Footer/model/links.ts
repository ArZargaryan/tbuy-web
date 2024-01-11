import { TFunction } from "i18next";

type Link = {
  route: string;
  text: string;
};

type Links = {
  citeMap: Link[];
  info: Link[];
  terms: Link[];
};

export const getFooterLinks = (t: TFunction<("layout/footer" | "common")[]>): Links => {
  return {
    citeMap: [
      {
        route: "/",
        text: t("citeMap.about_us")
      },
      {
        route: "/",
        text: t("citeMap.sell_on")
      },
      {
        route: "/",
        text: t("citeMap.news")
      },
      {
        route: "/",
        text: t("citeMap.sale")
      },
      {
        route: "/",
        text: t("citeMap.help")
      },
      {
        route: "/",
        text: t("citeMap.support")
      },
      {
        route: "/",
        text: t("citeMap.colleagues")
      }
    ],
    info: [
      {
        route: "/",
        text: t("info.how_buy")
      },
      {
        route: "/",
        text: t("info.public_agreement")
      },
      {
        route: "/",
        text: t("info.website_terms")
      },
      {
        route: "/",
        text: t("info.privacy_policy")
      },
      {
        route: "/",
        text: t("info.payment_method")
      },
      {
        route: "/",
        text: t("info.become_partner")
      },
      {
        route: "/",
        text: t("info.agreement")
      }
    ],
    terms: [
      {
        route: "/",
        text: t("terms.return_policy")
      },
      {
        route: "/",
        text: t("terms.free_shipping")
      },
      {
        route: "/",
        text: t("terms.installment_plan")
      },
      {
        route: "/",
        text: t("terms.warranty_service")
      },
      {
        route: "/",
        text: t("terms.delivery_terms")
      },
      {
        route: "/",
        text: t("terms.return_conditions")
      }
    ]
  };
};
