import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@core/store";
import { ImgExporter } from "@core/helpers/ImgExporter";

import Reviews from "@libs/presentation/components/elements/Reviews";
import BreadCrumbs from "@libs/presentation/components/elements/BreadCrumbs";
import ProductCardMini from "@libs/presentation/components/cards/ProductCardMini";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import ContactSeller from "@libs/presentation/components/product-details/ContactSeller";
import ProductCharacteristicBlock from "@libs/presentation/components/product-details/ProductCharacteristicBlock";
import ProductDetailSlider from "@libs/presentation/components/product-details/ProductDetailSlider";
import ProductDetailLayout from "@layouts/product-detail";
import ProductNav from "@libs/presentation/components/product-details/ProductNav";

import Link from "next/link";
import ProductDetailForm from "@libs/presentation/components/product-details/ProductDetailForm";

import styles from "./product-detail-page.module.scss";
import {
  getProductDetails,
  getProductReviews
} from "@features/shop/presentation/store/productDetailPageSlice";
import { useRouter } from "next/router";
import { Lang } from "@core/store/global";
import { map } from "lodash";
import CardsSlider from "@libs/presentation/components/cards/CardsSlider";
import OGPMeta from "@libs/presentation/components/elements/OGPMeta";
import VerticalCard from "@libs/presentation/components/cards/VerticalCard";

function ProductDetailPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { locale } = router;
  const { id } = router.query;
  const { Icons, Logos, Arrows } = ImgExporter;

  // const {
  //   pageData: { product, suggestedProducts },
  //   reviews,
  //   loading
  // } = useAppSelector((state) => state.shop_product_detail);

  useEffect(() => {
    if (id && typeof +id === "number") {
      console.log(id);
      dispatch(getProductDetails({ id: +id, lang: locale as Lang }));
    }
  }, [dispatch, id]);

  const changeReviewPage = (page: number) => {
    if (id && typeof +id === "number") {
      dispatch(getProductReviews({ id: +id, lang: locale as Lang, offset: (page - 1) * 5 }));
    }
  };

  const { gifts, similar_products } = useAppSelector((state) => state.cart_gift_cards);

  const product = {
    title: "Dummy Product",
    linkUrl: "https://example.com/product-details",
    category: {
      label: "Electronics"
    },
    images: [{ original: "https://example.com/image.jpg" }],
    rating: 4.2,
    price: {
      price: 150.99,
      currency: "USD"
    },
    exchanges: [
      {
        currency: "USD",
        rate: 1.2
      }
    ],
    wholesales: [
      {
        price: 120,
        fromAmountText: "From 10 units",
        fromAmount: 10
      }
    ],
    availability: [
      {
        availability: "In Stock",
        location: "Warehouse A"
      }
    ],
    company: {
      type: "legal",
      phones: ["123-456-7890"]
    },
    parameters: [
      {
        type: "color",
        values: [{ value: "Red", label: "Color Label" }],
        image: "https://example.com/color-image.jpg"
      }
    ],
    details: [
      {
        id: 1,
        label: "Detail Label",
        value: "Detail Value"
      }
    ]
  };

  const suggestedProducts = [
    {
      id: 1,
      title: "Suggested Product",
      price: {
        price: 120.99,
        currency: "USD"
      },
      images: [{ original: "https://example.com/suggested-image.jpg" }],
      rating: 4.0,
      company: {
        id: 1,
        name: "ABC Company",
        rating: 4.5,
        type: "legal",
        images: {
          background: { url: "https://example.com/background-image.jpg", alt: "Background Image" },
          largeLogo: { url: "https://example.com/large-logo.jpg", alt: "Large Logo" },
          smallLogo: "https://example.com/small-logo.jpg"
        }
      }
    },
    {
      id: 2,
      title: "Suggested Product",
      price: {
        price: 120.99,
        currency: "USD"
      },
      images: [{ original: "https://example.com/suggested-image.jpg" }],
      rating: 4.0,
      company: {
        id: 1,
        name: "ABC Company",
        rating: 4.5,
        type: "legal",
        images: {
          background: { url: "https://example.com/background-image.jpg", alt: "Background Image" },
          largeLogo: { url: "https://example.com/large-logo.jpg", alt: "Large Logo" },
          smallLogo: "https://example.com/small-logo.jpg"
        }
      }
    },
    {
      id: 3,
      title: "Suggested Product",
      price: {
        price: 120.99,
        currency: "USD"
      },
      images: [{ original: "https://example.com/suggested-image.jpg" }],
      rating: 4.0,
      company: {
        id: 1,
        name: "ABC Company",
        rating: 4.5,
        type: "legal",
        images: {
          background: { url: "https://example.com/background-image.jpg", alt: "Background Image" },
          largeLogo: { url: "https://example.com/large-logo.jpg", alt: "Large Logo" },
          smallLogo: "https://example.com/small-logo.jpg"
        }
      }
    }
  ];

  const reviews = {
    totalItems: 20,
    author: [
      {
        id: 1,
        user: "John Doe",
        comment: "This product is amazing!",
        rating: 5,
        date: new Date().toISOString()
      }
    ]
  };

  // if (loading) {
  //   return <div></div>;
  // }

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
                    <button className={styles.btn}>
                      <Icons.Compare />
                    </button>
                  </div>
                  <ProductDetailSlider images={product?.images as any} />
                </div>
              </div>

              <div className={styles.product__info}>
                <h2 className={styles.info__title}> {product.title} </h2>
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

                {map(product.availability, (item) => (
                  <>
                    <p className={styles.text} style={{ marginTop: 30 }}>
                      <strong>Հասանելություն։</strong> {item.availability}
                    </p>
                    <p className={styles.text}>
                      <strong>Վաճառվում է։</strong> {item.location}
                    </p>
                  </>
                ))}

                <ProductDetailForm
                  companyType={product?.company?.type}
                  data={product.parameters as any}
                />

                <p className={`${styles.text} ${styles.mobile_none}`}>
                  <strong>Կիսվել</strong>
                  <a href={"/"} className={styles.text__social}>
                    <Logos.facebook />
                  </a>
                </p>

                <br />

                <ProductCharacteristicBlock
                  title={"Основные параметры"}
                  characteristics={product.details}
                />
              </div>
              <div className={styles.mobile_similar_cards}>
                <VerticalCard
                  title={"ՁԵԶ ԿՀԵՏԱՔՐՔՐԻ ՆԱԵՎ"}
                  cards={similar_products as any}
                  extraType={"short_550"}
                />
              </div>
            </div>
            <Reviews id={id as string} reviews={reviews as any} onPageChange={changeReviewPage} />
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
