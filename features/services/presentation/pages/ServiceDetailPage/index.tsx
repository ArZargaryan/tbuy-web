import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { map } from "lodash";

import { useAppDispatch, useAppSelector } from "@core/store";
import { Lang } from "@core/store/global";
import { ImgExporter } from "@core/helpers/ImgExporter";

import ProductDetailLayout from "@layouts/product-detail";

import OGPMeta from "@libs/presentation/components/elements/OGPMeta";
import Reviews from "@libs/presentation/components/elements/Reviews";
import BreadCrumbs from "@libs/presentation/components/elements/BreadCrumbs";
import ProductCardMini from "@libs/presentation/components/cards/ProductCardMini";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import ContactSeller from "@libs/presentation/components/product-details/ContactSeller";
import ProductDetailSlider from "@libs/presentation/components/product-details/ProductDetailSlider";
import ProductNav from "@libs/presentation/components/product-details/ProductNav";
import CardsSlider from "@libs/presentation/components/cards/CardsSlider";

import {
  getProductDetails,
  getProductReviews
} from "@features/services/presentation/store/serviceDetailPageSlice";
import styles from "./service-detail-page.module.scss";
import VerticalCard from "@libs/presentation/components/cards/VerticalCard";

function ProductDetailPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { locale } = router;
  const { id } = router.query;
  const { Icons, Logos, Arrows } = ImgExporter;

  // const {
  //   pageData: { product, suggestedProducts, serviceInfo },
  //   reviews,
  //   loading
  // } = useAppSelector((state) => state.services_detail);

  useEffect(() => {
    if (id && typeof +id === "number") {
      console.log(id);
      dispatch(getProductDetails({ id: +"42527", lang: locale as Lang }));
    }
  }, [dispatch, id]);

  const changeReviewPage = (page: number) => {
    if (id && typeof +id === "number") {
      dispatch(getProductReviews({ id: +"42527", lang: locale as Lang, offset: (page - 1) * 5 }));
    }
  };

  // if (loading) {
  //   return <div></div>;
  // }

  const product = {
    id: "123",
    title: "Sample Product",
    category: { label: "Sample Category" },
    linkUrl: "/sample-product",
    images: [
      {
        original:
          "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      { original: "image_url_2.jpg" }
    ],
    rating: 4.5,
    price: { price: 5000, currency: "AMD" },
    exchanges: [
      { rate: 1.2, currency: "USD" },
      { rate: 0.8, currency: "EUR" }
    ],
    wholesales: [
      { price: 4500, fromAmount: 10, fromAmountText: "10 units" },
      { price: 4000, fromAmount: 20, fromAmountText: "20 units" }
    ],
    company: {
      name: "Sample Company",
      phones: ["123-456-7890", "987-654-3210"]
    }
  };

  const suggestedProducts = [
    {
      id: "1",
      title: "Suggested Product 1"
    },
    {
      id: "2",
      title: "Suggested Product 2"
    }
  ];

  const reviews = [
    {
      id: "1",
      user: "John Doe",
      rating: 4,
      comment: "Great product!"
    },
    {
      id: "2",
      user: "Jane Smith",
      rating: 5,
      comment: "Excellent service!"
    }
  ];

  return (
    <ProductDetailLayout>
      <OGPMeta
        title={product?.title}
        // description={product?.title}
        // image={`${product?.images?.length && product?.images[0]?.original}`} // !временно! (CORS пока блокирует изображение)
        url={product?.linkUrl}
      />

      <ProductNav product={product as any} />
      <div className={`${styles.wrapper} container`}>
        <BreadCrumbs
          items={[
            { value: "Գլխավոր ", link: "/products" },
            { value: `${product?.category?.label}`, link: "/products" }
          ]}
        />

        <div className={`${styles.layout}`}>
          <div className={styles.layout__content}>
            <div className={styles.content__product}>
              <div className={styles.product__slider}>
                <div className={styles.slider__wrapper}>
                  <div className={styles.slider__actions}>
                    <button className={styles.btn}>
                      <Icons.Heart />
                    </button>
                    <button className={styles.btn1}>
                      <Icons.Compare />
                    </button>
                  </div>
                  <ProductDetailSlider images={product?.images as any} />
                </div>
              </div>

              <div className={styles.product__info}>
                <h2 className={styles.info__title}> {product.title}</h2>

                <div className={styles.info__product_price_container}>
                  <div className={styles.product_price__stars}>
                    <StarsRating value={product?.rating} readOnly />

                    <div className={styles.socials}>
                      <Link href={"/"}>
                        <Logos.linked_in />
                      </Link>

                      <Link href={"/"}>
                        <Logos.facebook />
                      </Link>

                      <Link href={"/"}>
                        <Logos.twitter />
                      </Link>
                    </div>
                  </div>

                  <div className={styles.info__price}>
                    <span className={styles.price__amd}>
                      {product?.price?.price} {product?.price?.currency}
                    </span>
                    <Arrows.Down />

                    <div className={styles.prices__poppup}>
                      {map(product.exchanges, (exchange) => (
                        <p>
                          {(product?.price?.price / exchange.rate).toFixed(2)} {exchange.currency}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <p className={`${styles.text} ${styles.mobile_none}`}>36 ամիս / 4.647AMD</p>

                {map(product.wholesales, (whosale) => (
                  <div className={styles.info__wholesale}>
                    <p className={styles.text}>
                      Գինը ըստ քանակի։
                      <strong className={styles.text_bold_info}>{whosale.price} AMD</strong>
                    </p>
                    <p className={styles.text}>
                      Գործում է սկսած ({whosale.fromAmountText})։
                      <strong className={styles.text_bold_info}>{whosale.fromAmount}</strong>
                    </p>
                  </div>
                ))}

                <ContactSeller
                  company={product?.company as any}
                  methods={{ call: !!product?.company?.phones?.length, chat: true }}
                />

                <br />

                <p className={`${styles.text}`}>{"serviceInfo"}</p>
                <p className={`${styles.text}`}>
                  Այս տեքստը ոչ միայն կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է
                  էլեկտրոնային տպագրության մեջ` մնալով էապես անփոփոխ:
                </p>

                <p className={`${styles.text} ${styles.text__social_desktop}`}>
                  <strong>Կիսվել</strong>
                  <a href={"/"} className={styles.text__social}>
                    <Logos.facebook />
                  </a>
                  <a href={"/"} className={styles.text__social}>
                    <Logos.twitter />
                  </a>
                </p>

                <p className={`${styles.text} ${styles.mobile_none}`}>
                  <strong>Կիսվել</strong>
                  <a href={"/"} className={styles.text__social}>
                    <Logos.facebook />
                  </a>
                </p>
              </div>
            </div>

            <Reviews id={id as string} reviews={reviews as any} onPageChange={changeReviewPage} />

            <div className={styles.mobile_similar_cards}>
              <VerticalCard
                title={"ՁԵԶ ԿՀԵՏԱՔՐՔՐԻ ՆԱԵՎ"}
                cards={suggestedProducts as any}
                extraType={"short_550"}
              />
            </div>
          </div>

          <div className={styles.layout__similar}>
            {suggestedProducts?.map((product, i) => (
              <ProductCardMini key={`${product.id}_${i}`} product={product as any} />
            ))}
          </div>
        </div>
      </div>
    </ProductDetailLayout>
  );
}

export default ProductDetailPage;
