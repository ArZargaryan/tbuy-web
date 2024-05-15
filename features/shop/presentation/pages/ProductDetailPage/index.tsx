import React, { RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";

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
import { useTranslation } from "next-i18next";
import { Image } from "@libs/domain/model/image";
import { ProductDetailButton } from "@libs/presentation/components/product-details/ProductDetailButton";
import ProductDetailColor from "@libs/presentation/components/product-details/ProducDetailColor";
import useScrollToBottom from "@core/hooks/useScrollToBottom";

function ProductDetailPage() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { locale } = router;
  const { id } = router.query;

  //TODO: DELETE
  const legalOrInd = id === "1" ? "individual" : "legal";

  const { Icons, Logos } = ImgExporter;

  const { t } = useTranslation(["common", "catalog/productspage"]);

  // ---------------------------------------------------------------

  const [panelIsVisible, setPanelIsVisible] = useState(false);

  const [reviews, setReviews] = useState({
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
  });

  const [suggestedProducts, setSuggestedProducts] = useState([
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
  ]);

  const [addCartCounter] = useState(30);

  // ---------------------------------------------------------------

  const cardsRef = useRef<null | HTMLDivElement>(null);
  const buyButtonRef = useRef<null | HTMLDivElement>(null);

  // ---------------------------------------------------------------

  const [isEndScroll] = useScrollToBottom(600);

  const cardsEndScroll = useCallback(() => {
    const element = cardsRef.current;

    if (element === null) return false;

    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      const newCards = [...suggestedProducts];

      for (let i = 0; i < addCartCounter; i++) {
        newCards.push({
          id: Date.now(),
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
              background: {
                url: "https://example.com/background-image.jpg",
                alt: "Background Image"
              },
              largeLogo: { url: "https://example.com/large-logo.jpg", alt: "Large Logo" },
              smallLogo: "https://example.com/small-logo.jpg"
            }
          }
        });
      }

      setSuggestedProducts(newCards);
    }
  }, [addCartCounter, suggestedProducts]);

  const trackScrolling = useCallback(() => {
    if (isBottom(buyButtonRef)) {
      setPanelIsVisible(true);
    } else {
      setPanelIsVisible(false);
    }
  }, []);

  // ---------------------------------------------------------------

  useEffect(() => {
    if (id && typeof +id === "number") {
      dispatch(getProductDetails({ id: +id, lang: locale as Lang }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (isEndScroll) {
      const newData = { ...reviews };
      newData.data?.push({
        id: Date.now(),
        author: {
          id: Date.now(),
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
      });
      setReviews(newData);
    }
  }, [isEndScroll, reviews]);

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);

    return function () {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling]);

  const isBottom = (el: RefObject<HTMLElement>) => {
    if (!el.current) return;
    return el.current.getBoundingClientRect().bottom <= 83;
  };

  useEffect(() => {
    cardsRef.current?.addEventListener("scroll", cardsEndScroll);

    return function () {
      cardsRef.current?.removeEventListener("scroll", cardsEndScroll);
    };
  }, [cardsEndScroll]);

  // ---------------------------------------------------------------

  const changeReviewPage = (page: number) => {
    if (id && typeof +id === "number") {
      dispatch(getProductReviews({ id: +id, lang: locale as Lang, offset: (page - 1) * 5 }));
    }
  };

  const { similar_products } = useAppSelector((state) => state.cart_gift_cards);

  const product = {
    title: "Սպորտային ջրակայուն, ամուր կարմիր ռեզիններով պատված բոթաս",
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
      name: "Alpine",
      images: {
        background: new Image({
          original:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }),
        largeLogo: new Image({
          original:
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }),
        smallLogo:
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305"
      },
      type: legalOrInd,
      rating: 4,
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
        id: 3,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 4,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 5,
        label: "Աշխատանքի ժամանակը",
        value: "18 ժամ"
      }
    ]
  };

  const ratingComponent = useMemo(
    () => (
      <div className={styles.product__rating_container}>
        <StarsRating value={product?.rating} readOnly color="var(--yellow)" />
      </div>
    ),
    [product?.rating]
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

      <div className={panelIsVisible ? styles.nav : styles.navHidden}>
        <ProductNav product={product as never} />
      </div>
      <div className={styles.wrapper}>
        <BreadCrumbs
          items={[
            { value: t("labels.home", { ns: "common" }), link: "/products" },
            { value: `${product?.category?.label}`, link: "/products" }
          ]}
        />

        <div className={styles.layout}>
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
                </div>
                {/* RATING */}
                <div className={styles.raiting}>
                  {ratingComponent}
                  <div className={styles.raiting__achievement}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M25.3346 12.0013C25.3346 13.9346 24.7613 15.708 23.7746 17.188C22.3346 19.3213 20.0546 20.828 17.4013 21.2146C16.948 21.2946 16.4813 21.3346 16.0013 21.3346C15.5213 21.3346 15.0546 21.2946 14.6013 21.2146C11.948 20.828 9.66797 19.3213 8.22797 17.188C7.2413 15.708 6.66797 13.9346 6.66797 12.0013C6.66797 6.8413 10.8413 2.66797 16.0013 2.66797C21.1613 2.66797 25.3346 6.8413 25.3346 12.0013Z"
                        stroke="#6B718D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.3347 24.6259L26.1347 25.1459C25.6414 25.2659 25.2547 25.6392 25.1481 26.1326L24.6814 28.0926C24.4281 29.1592 23.0681 29.4792 22.3614 28.6392L16.0014 21.3326L9.64141 28.6525C8.93474 29.4925 7.57474 29.1725 7.32141 28.1059L6.85474 26.1459C6.73474 25.6525 6.34807 25.2659 5.86807 25.1592L3.66807 24.6392C2.65474 24.3992 2.29474 23.1325 3.02807 22.3992L8.22807 17.1992C9.66807 19.3326 11.9481 20.8392 14.6014 21.2259C15.0547 21.3059 15.5214 21.3459 16.0014 21.3459C16.4814 21.3459 16.9481 21.3059 17.4014 21.2259C20.0547 20.8392 22.3347 19.3326 23.7747 17.1992L28.9747 22.3992C29.7081 23.1192 29.3481 24.3859 28.3347 24.6259Z"
                        stroke="#6B718D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.7746 7.97203L17.5613 9.54535C17.6679 9.75869 17.9479 9.97203 18.2013 10.012L19.6279 10.252C20.5346 10.3987 20.7479 11.0654 20.0946 11.7187L18.9879 12.8253C18.8013 13.012 18.6946 13.372 18.7613 13.6387L19.0813 15.012C19.3346 16.092 18.7613 16.5187 17.8013 15.9453L16.4679 15.1587C16.2279 15.012 15.8279 15.012 15.5879 15.1587L14.2546 15.9453C13.2946 16.5053 12.7213 16.092 12.9746 15.012L13.2946 13.6387C13.3479 13.3854 13.2546 13.012 13.0679 12.8253L11.9613 11.7187C11.3079 11.0654 11.5213 10.412 12.4279 10.252L13.8546 10.012C14.0946 9.97203 14.3746 9.75869 14.4813 9.54535L15.2679 7.97203C15.6546 7.1187 16.3479 7.1187 16.7746 7.97203Z"
                        stroke="#6B718D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    4 հավաստագիր
                  </div>
                </div>

                {/* PRICES WITH CURRENCIES POPUP */}
                <div className={styles.product__price_wrapper}>
                  <div className={styles.product__price_row}>
                    <div className={styles.product__price}>
                      <div className={styles.main_prices}>
                        <div className={styles.main_price}>
                          <span className={`${styles.price__text} ${styles.discounted__price}`}>
                            {120.2} {product?.price?.currency}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M10.6654 13.3346L15.9987 18.668L21.332 13.3346"
                              stroke="#1D1D1D"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <div className={styles.prices__popup}>
                            {map(product.exchanges, (exchange, idx) => (
                              <p key={idx}>
                                {(product?.price?.price / exchange.rate).toFixed(2)}{" "}
                                {exchange.currency}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className={styles.main_wholesale}>
                          Մեծածախ գին
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_459_27742)">
                              <path
                                d="M6 7.5L9 10.5L12 7.5"
                                stroke="#1D1D1D"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_459_27742">
                                <rect width="18" height="18" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div className={styles.main_wholesale__popup}>
                            <div className={styles.main_wholesale__bold}>
                              Մեծածախ գին։ <span>90 000 AMD</span>
                            </div>
                            <div className={styles.main_wholesale__bold}>
                              Գործում է սկսած (հատ ապրանք): <span>30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {_.isNumber(1 /* Discount check */) && (
                        <span className={styles.discount_price}>
                          {product?.price?.price} {product?.price?.currency}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.sale_info}>
                  <div>
                    <b>{t("availability", { ns: "catalog/productspage" })}:</b> Ներմուծվում է / 15
                    օր
                  </div>
                  <div>
                    <b>{t("for_sale", { ns: "catalog/productspage" })}:</b> Վանաձոր
                  </div>
                </div>

                {product.company.type === "individual" && (
                  <div className={styles.check_product_availability}>
                    <svg
                      id="Сгруппировать_3583"
                      data-name="Сгруппировать 3583"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      style={{ marginRight: 8 }}
                    >
                      <path
                        id="Контур_4107"
                        data-name="Контур 4107"
                        d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm0,18.688A8.688,8.688,0,1,1,18.688,10,8.7,8.7,0,0,1,10,18.688Z"
                        fill="$grey-2"
                      />
                      <g
                        id="Сгруппировать_10875"
                        data-name="Сгруппировать 10875"
                        transform="translate(0.125 1.407)"
                      >
                        <g
                          id="Сгруппировать_10873"
                          data-name="Сгруппировать 10873"
                          transform="translate(9.125 4.164)"
                        >
                          <g id="Сгруппировать_10869" data-name="Сгруппировать 10869">
                            <path
                              id="Контур_6658"
                              data-name="Контур 6658"
                              d="M235.511,125.018a.722.722,0,0,0-.75.766v5.851a.75.75,0,0,0,1.5,0v-5.851A.722.722,0,0,0,235.511,125.018Z"
                              transform="translate(-234.761 -125.909)"
                              fill="$grey-2"
                            />
                          </g>
                        </g>
                        <g
                          id="Сгруппировать_10874"
                          data-name="Сгруппировать 10874"
                          transform="translate(9.125 12.414)"
                        >
                          <g id="Сгруппировать_10871" data-name="Сгруппировать 10871">
                            <path
                              id="Контур_6659"
                              data-name="Контур 6659"
                              d="M236.2,341.749a.7.7,0,0,0-.158-.247.712.712,0,0,0-.12-.09.812.812,0,0,0-.27-.112.749.749,0,0,0-.674.2.7.7,0,0,0-.157.247.706.706,0,0,0,0,.57.676.676,0,0,0,.4.4.7.7,0,0,0,.569,0,.876.876,0,0,0,.247-.157.866.866,0,0,0,.158-.247.706.706,0,0,0,0-.57Z"
                              transform="translate(-234.762 -341.284)"
                              fill="$grey-2"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>{t("check_product_availability", { ns: "catalog/productspage" })}</span>
                  </div>
                )}

                <div ref={buyButtonRef}>
                  <ProductDetailButton companyType={product?.company?.type} />
                </div>

                {/* WHOLESALES DETAILS */}
                {/* SELLER */}
                <div className={styles.contact_seller_wrapper}>
                  <ContactSeller
                    link="/legal_partner"
                    company={product?.company as any}
                    methods={{ call: !!product?.company?.phones?.length, chat: true }}
                  />
                </div>
                {/* AVAILABILITY */}
                <ProductDetailColor
                  data={product.parameters as any}
                  companyType={product?.company?.type}
                />
                {/* PRODUCT PARAMETERS */}
                <div className={styles.product_parameters_wrapper}>
                  <ProductCharacteristicBlock
                    title={t("main_parameters", { ns: "catalog/productspage" })}
                    characteristics={product.details}
                  />
                </div>
                <ProductDetailForm
                  companyType={product?.company?.type}
                  data={product.parameters as any}
                />
                {/* SHARE ON SOCIAL MEDIAS */}
                <div className={`${styles.share_on_social}`}>
                  <p className={styles.label}>{t("actions.share", { ns: "common" })}</p>

                  <div className={styles.social_medias}>
                    <a href={"/"} className={styles.social_media_item}>
                      <Logos.facebook />
                    </a>
                    <a href={"/"} className={styles.social_media_item}>
                      <Logos.twitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Comments */}
            <div className={styles.content_padding_wrapper}>
              <div className={styles.product__parameters_wrapper}>
                <CardSlider
                  title={t<string>("labels.you_will_also_be_interested", { ns: "common" })}
                  cards={similar_products}
                />
              </div>
              <Reviews id={id as string} reviews={reviews as any} onPageChange={changeReviewPage} />
            </div>
          </div>
          {/* SIMILAR ITEMS SLIDER */}
          <div className={styles.layout__similar} ref={cardsRef}>
            {suggestedProducts.map((product, i) => (
              <ProductCardMini key={`${product.id}_${i}`} product={product as any} />
            ))}
          </div>
        </div>
      </div>
    </ProductDetailLayout>
  );
}

export default ProductDetailPage;
