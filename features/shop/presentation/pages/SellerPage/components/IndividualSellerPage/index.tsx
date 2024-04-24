import React, { useEffect, useState } from "react";
import TitleWithSort from "@libs/presentation/components/titles/TitleWithSort";
import AboutSellerCategoriesSlider from "@features/shop/presentation/pages/SellerPage/components/ProductCategoriesSlider";
import FiltersList from "@features/shop/presentation/components/Filters/FiltersList";
import CardsList from "@libs/presentation/components/cards/CardsList";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import { useAppSelector } from "@core/store";
import IndividualSellerInfo from "@features/shop/presentation/pages/SellerPage/components/IndividualSellerPage/IndividualSellerInfo";
import MobileFilter from "@core/mobileFilter/mobileFilter";
import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";

function IndividualSellerPage() {
  const { info, products } = useAppSelector((state) => state.shop_about_seller);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <>
      <IndividualSellerInfo info={info} />
      <div>
        <TitleWithSort
          sortItems={[
            { id: 0, value: "Գինը ըստ նվազման" },
            { id: 1, value: "Գինը ըստ նվազման" }
          ]}
          selectLabel={"Գինը ըստ նվազման"}
        >
          Տեսականի
        </TitleWithSort>
        {screenWidth && screenWidth > 500 ? <AboutSellerCategoriesSlider /> : <MobileFilter />}
        <FiltersList
          filters={[{ value: "Ականջակալներ" }, { value: "1000 - 5000 AMD" }, { value: "ZIGZAG" }]}
        />
        {/*mock loading*/}
        <CardsList cards={products} loading={false} />
        <TbuyPagination count={5} />
      </div>
    </>
  );
}

export default IndividualSellerPage;
