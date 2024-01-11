import React from "react";
import { ImgExporter } from "@core/helpers/ImgExporter";
import Head from "next/head";

type Props = {
  title?: string;
  url?: string;
  description?: string;
  image?: string;
};

function OGPMeta(props: Props) {
  const defaultMeta = {
    description:
      "Миллионы товаров по выгодным ценам: электроника, бытовая техника, детские товары, одежда и обувь, всё для дома, спорта, красоты и здоровья, книги, музыка, зоотовары и многое другое. Скидки и акции каждый день. Доставка по всей России.",
    title: "TBUY — интернет-магазин",
    url: "https://tbuy.am/"
  };

  return (
    <Head>
      <meta name="description" content={`${props?.description || defaultMeta.description}`} />

      <meta property="og:url" content={`${props?.url || defaultMeta.url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${props?.title || defaultMeta.title}`} />
      <meta
        property="og:description"
        content={`${props?.description || defaultMeta.description}`}
      />
      <meta property="og:image" content={`${ImgExporter.Logos.tbuyPng.src}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tbuy.am" />
      <meta property="twitter:url" content={`${props?.url || defaultMeta.url}`} />
      <meta name="twitter:title" content={`${props?.title || defaultMeta.title}`} />
      <meta
        name="twitter:description"
        content={`${props?.description || defaultMeta.description}`}
      />
      <meta name="twitter:image" content={`${props?.image || ImgExporter.Logos.tbuyPng.src}`} />
    </Head>
  );
}

export default OGPMeta;
