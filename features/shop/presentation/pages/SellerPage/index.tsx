import React from "react";
import DefaultLayout from "@layouts/default";
// import { useAppSelector } from "@core/store";
import IndividualSellerPage from "@features/shop/presentation/pages/SellerPage/components/IndividualSellerPage";
import styles from "./about-seller.module.scss";
import LegalSellerPage from "@features/shop/presentation/pages/SellerPage/components/LegalSellerPage";

type Props = {
  sellerType: "individual" | "legal";
};

function AboutSellerPage(props: Props) {
  const { sellerType } = props;
  // const { info } = useAppSelector((state) => state.shop_about_seller);

  return (
    <DefaultLayout>
      <div className={`${styles.about_seller} container`}>
        {sellerType === "individual" ? <IndividualSellerPage /> : <LegalSellerPage />}
      </div>
    </DefaultLayout>
  );
}

export default AboutSellerPage;
