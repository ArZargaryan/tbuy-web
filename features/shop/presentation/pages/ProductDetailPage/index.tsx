import React, { useEffect, useMemo } from "react";

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

import ProductDetailForm from "@libs/presentation/components/product-details/ProductDetailForm";

import styles from "./product-detail-page.module.scss";
import {
  getProductDetails,
  getProductReviews
} from "@features/shop/presentation/store/productDetailPageSlice";
import { useRouter } from "next/router";
import { Lang } from "@core/store/global";
import { map } from "lodash";
import OGPMeta from "@libs/presentation/components/elements/OGPMeta";
import _ from "lodash";
import CardSlider from "@libs/presentation/components/cards/CardsSlider";

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
    images: [
      {
        original:
          "http://img.alicdn.com/imgextra/i1/2947592076/TB2Qvtba9JjpuFjy0FdXXXmoFXa_!!2947592076.jpg"
      },
      {
        original:
          "http://img.alicdn.com/imgextra/i1/2947592076/TB2Qvtba9JjpuFjy0FdXXXmoFXa_!!2947592076.jpg"
      },
      {
        original:
          "http://img.alicdn.com/imgextra/i1/2947592076/TB2Qvtba9JjpuFjy0FdXXXmoFXa_!!2947592076.jpg"
      },
      {
        original:
          "http://img.alicdn.com/imgextra/i1/2947592076/TB2Qvtba9JjpuFjy0FdXXXmoFXa_!!2947592076.jpg"
      },
      {
        original:
          "http://img.alicdn.com/imgextra/i1/2947592076/TB2Qvtba9JjpuFjy0FdXXXmoFXa_!!2947592076.jpg"
      },
      {
        original:
          "https://avatars.mds.yandex.net/get-mpic/4080064/img_id1251538379236141613.jpeg/orig"
      },
      {
        original:
          "https://gagaru.club/uploads/posts/2023-02/1676615383_gagaru-club-p-stilnie-letnie-krossovki-muzhskie-instagra-66.png"
      }
    ],
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
        fromAmountText: "հատ ապրանք",
        fromAmount: 10
      }
    ],
    availability: [
      {
        availability: "Ներմուծվում է / 15 օր",
        location: "Վանաձոր"
      }
    ],
    company: {
      name: "Lorem ipsum",
      type: "legal",
      rating: 3,
      phones: ["123-456-7890"]
    },
    parameters: [
      {
        type: "color",
        values: [
          {
            value: "white",
            label: "White"
          },
          {
            value: "blue",
            label: "Blue"
          }
        ]
      },
      {
        type: "size",
        values: [
          {
            value: "l",
            label: "L"
          },
          {
            value: "xl",
            label: "XL"
          },
          {
            value: "xxl",
            label: "XXL"
          }
        ]
      }
    ],
    details: [
      {
        id: 1,
        label: "Երաշխիք",
        value: "1 տարի"
      },
      {
        id: 2,
        label: "Տեսակ",
        value: "Անլար ականջակալ"
      },
      {
        id: 2,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 2,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 2,
        label: "Աշխատանքի ժամանակը",
        value: "18 ժամ"
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
    data: [
      {
        id: 1,
        author: {
          id: 1,
          name: "John Doe",
          image:
            "https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y"
        },
        images: [
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-photomix-company-212372.jpg&fm=jpg"
        ],
        title: "Amazing product!",
        text: "This product is amazing!",
        rating: 5,
        date: new Date().toISOString()
      }
    ]
  };

  const ratingComponent = useMemo(
    () => (
      <div className={styles.product__rating_container}>
        <StarsRating value={product?.rating} readOnly />
      </div>
    ),
    []
  );

  const availabilityComponent = useMemo(
    () => (
      <div className={styles.availability_wrapper}>
        {map(product.availability, (item) => (
          <div className={styles.availability_item}>
            <p className={styles.availability_text}>
              <strong>Հասանելություն։ </strong> {item.availability}
            </p>
            <p className={styles.availability_text}>
              <strong>Վաճառվում է։ </strong> {item.location}
            </p>
          </div>
        ))}
      </div>
    ),
    []
  );

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

      <ProductNav product={product as never} />
      <div className={styles.wrapper}>
        <BreadCrumbs
          items={[
            { value: "Գլխավոր ", link: "/products" },
            { value: `${product?.category?.label}`, link: "/products" }
          ]}
        />

        <div className={`${styles.layout}`}>
          <div className={styles.layout__content}>
            <div className={styles.product}>
              <div className={styles.product__slider}>
                <div className={styles.slider__wrapper}>
                  <div className={styles.slider__actions}>
                    <button className={styles.slider__action_btn}>
                      <Icons.Heart />
                    </button>
                    <button className={styles.slider__action_btn}>
                      <Icons.Compare />
                    </button>
                  </div>
                  <ProductDetailSlider images={product?.images as any} />
                </div>
              </div>

              <div className={styles.product__info}>
                {/* TITLE */}
                <div className={styles.price_section_tablet_wrapper}>
                  <h2 className={styles.product__info_title}>{product.title}</h2>
                  {ratingComponent}
                </div>
                {/* RATING */}
                {ratingComponent}
                {/* PRICES WITH CURRENCIES POPUP */}
                <div className={styles.product__price_wrapper}>
                  <div className={styles.product__price_row}>
                    <div className={styles.product__price}>
                      <div className={styles.main_price}>
                        <span className={`${styles.price__text} ${styles.discounted__price}`}>
                          {120.2} {product?.price?.currency}
                        </span>
                        <Arrows.Down />
                      </div>
                      {_.isNumber(1 /* Discount check */) && (
                        <span className={styles.discount_price}>
                          {product?.price?.price} {product?.price?.currency}
                        </span>
                      )}

                      <div className={styles.prices__popup}>
                        {map(product.exchanges, (exchange) => (
                          <p>
                            {(product?.price?.price / exchange.rate).toFixed(2)} {exchange.currency}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className={styles.product__price_row_social_medias}>
                      <a href={"/"} className={styles.social_media_item}>
                        <Logos.facebook />
                      </a>
                      <a href={"/"} className={styles.social_media_item}>
                        <Logos.twitter />
                      </a>
                    </div>
                  </div>

                  <p className={`${styles.installment_price}`}>36 ամիս / 4.647AMD</p>
                </div>
                {/* WHOLESALES DETAILS */}
                <div className={styles.wholesale_section_tablet_wrapper}>
                  <div className={styles.wholesale_info_wrapper}>
                    {map(product.wholesales, (whosale) => (
                      <div className={styles.wholesale_info}>
                        <p className={styles.wholesale_label}>
                          Գինը ըստ քանակի։ <strong> {whosale.price} AMD</strong>
                        </p>
                        <p className={styles.wholesale_label}>
                          Գործում է սկսած ({whosale.fromAmountText})։
                          <strong> {whosale.fromAmount}</strong>
                        </p>
                      </div>
                    ))}
                  </div>
                  {availabilityComponent}
                </div>
                {/* SELLER */}
                <div className={styles.contact_seller_wrapper}>
                  <ContactSeller
									link="/legal_partner"
                    company={product?.company as any}
                    methods={{ call: !!product?.company?.phones?.length, chat: true }}
                  />
                </div>
                {/* AVAILABILITY */}
                {availabilityComponent}
                {/* PRODUCT DETAIL FORMS */}
                <ProductDetailForm
                  companyType={product?.company?.type}
                  data={product.parameters as any}
                />
                {/* SHARE ON SOCIAL MEDIAS */}
                <div className={`${styles.share_on_social}`}>
                  <p className={styles.label}>Կիսվել</p>

                  <div className={styles.social_medias}>
                    <a href={"/"} className={styles.social_media_item}>
                      <Logos.facebook />
                    </a>
                    <a href={"/"} className={styles.social_media_item}>
                      <Logos.twitter />
                    </a>
                  </div>
                </div>
                {/* PRODUCT PARAMETERS */}
                <div className={styles.product_parameters_wrapper}>
                  <ProductCharacteristicBlock
                    title={"Հիմնական պարամետրերը"}
                    characteristics={product.details}
                  />
                </div>
              </div>
              {/* <div className={styles.mobile_similar_cards}>
                <VerticalCard
                  title={"ՁԵԶ ԿՀԵՏԱՔՐՔՐԻ ՆԱԵՎ"}
                  cards={similar_products as any}
                  extraType={"short_550"}
                />
              </div> */}
            </div>
            <div className={styles.content_padding_wrapper}>
              <Reviews id={id as string} reviews={reviews as any} onPageChange={changeReviewPage} />
              <div className={styles.product__parameters_wrapper}>
                <CardSlider title={`ՁԵԶ ԿՀԵՏԱՔՐՔՐԻ ՆԱԵՎ`} cards={similar_products} />
              </div>
            </div>
          </div>
          {/* SIMILAR ITEMS SLIDER */}
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
