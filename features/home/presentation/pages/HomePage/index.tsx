import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import DefaultLayout from "@layouts/default";

import TitleWithLink from "@libs/presentation/components/titles/TitleWithLink";
import MainSlider from "@features/home/presentation/components/MainSlider";
import CompaniesSlider from "@features/home/presentation/components/OrganizationsSlider";
import CategoryBar from "@features/home/presentation/components/CategoryBar";
import VacancySlider from "@libs/presentation/components/cards/VacancySlider";

import { useTranslation } from "next-i18next";
import { useAppDispatch, useAppSelector } from "@core/store";

import CardsList from "@libs/presentation/components/cards/CardsList";
import { Lang } from "@core/store/global";
import { getHomeData } from "@features/home/presentation/store/homePageSlice";

import BlurImage from "@libs/presentation/components/elements/BlurImage";
import OGPMeta from "@libs/presentation/components/elements/OGPMeta";

import styles from "./HomePage.module.scss";

function HomePage() {
  const {
    homeData: { companies, products, services, vacancies, banners, slides, categories },
    loading
  } = useAppSelector((state) => state.home);
  const { t } = useTranslation(["catalog/homepage", "catalog/categories", "common"]);

  const { locale } = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHomeData(locale as Lang));
  }, [dispatch, locale]);

  return (
    <>
      <OGPMeta />
      <DefaultLayout>
        <CategoryBar categories={categories} />
        <div className={"container"}>
          <TitleWithLink
            linkPath={"/"}
            linkText={`${t("see_all", { ns: "common" })}`}
            className={styles.title_marg}
          >
            {t("organizations")}
          </TitleWithLink>

          <CompaniesSlider companies={companies} loading={loading} />

          <MainSlider banners={banners} slides={slides} loading={loading} />

          <TitleWithLink
            linkPath={`/services`}
            linkText={`${t("see_all", { ns: "common" })}`}
            className={styles.title_marg}
          >
            {t("services")}
          </TitleWithLink>
          <CardsList className={styles.section_margin} cards={services} loading={loading} />

          <TitleWithLink
            linkPath={`/products`}
            linkText={`${t("see_all", { ns: "common" })}`}
            className={styles.title_marg}
          >
            {!!products?.length && products[0]?.title && products[0]?.title}
          </TitleWithLink>
          <CardsList
            className={styles.section_margin}
            cards={(!!products?.length && products[0].products) || []}
            loading={loading}
          />

          {vacancies?.length && (
            <>
              <TitleWithLink
                linkPath={"/vacancies"}
                linkText={`${t("see_all", { ns: "common" })}`}
                className={styles.title_marg}
              >
                {t("vacancies")}
              </TitleWithLink>

              <VacancySlider vacancies={vacancies} />
            </>
          )}

          {(products || [1, 2, 3]).slice(1).map((productCategory, i) => (
            <Fragment key={`${productCategory.id}_${i}`}>
              <TitleWithLink
                linkPath={"/products"}
                linkText={`${t("see_all", { ns: "common" })}`}
                className={styles.title_marg}
              >
                {productCategory.title}
              </TitleWithLink>
              <CardsList
                className={styles.section_margin}
                cards={productCategory.products}
                loading={loading}
              />
            </Fragment>
          ))}

          <div className={styles.suggestions}>
            {!!banners &&
              banners.slice(2, 4).map((banner, i) => (
                <Link
                  href={banner.url}
                  key={`${banner.url}_${i}`}
                  className={styles.suggestions__picture}
                >
                  <BlurImage
                    src={banner.image.currentImage}
                    alt={banner.image.currentImage}
                    blurHash={banner.image.blurHash}
                    className={styles.suggestions__picture_img}
                    width={754}
                    height={384}
                  />
                </Link>
              ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default HomePage;
