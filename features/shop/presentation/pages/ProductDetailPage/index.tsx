import React, { RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useAppSelector } from "@core/store";
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
import { useRouter } from "next/router";
import { map } from "lodash";
import OGPMeta from "@libs/presentation/components/elements/OGPMeta";
import _ from "lodash";
import CardSlider from "@libs/presentation/components/cards/CardsSlider";
import { useTranslation } from "next-i18next";
import { Image } from "@libs/domain/model/image";
import { ProductDetailButton } from "@libs/presentation/components/product-details/ProductDetailButton";
import ProductDetailColor from "@libs/presentation/components/product-details/ProducDetailColor";
import NewSelect from "@libs/presentation/components/form/selects/NewSelect";
import { Modal } from "@libs/presentation/components/modals/Modal";
import { Button } from "@core/button/default";
import MessageModal from "@libs/presentation/components/modals/MessageModal";
import { useModal } from "@core/hooks/useModal";
import PhoneModal from "@libs/presentation/components/modals/PhoneModal";

function ProductDetailPage() {
  const router = useRouter();

  const { id } = router.query;

  //TODO: DELETE
  const legalOrInd = id === "1" ? "individual" : "legal";

  const { Icons, Logos } = ImgExporter;

  const { t } = useTranslation(["common", "catalog/productspage"]);

  // ---------------------------------------------------------------

  const [panelIsVisible, setPanelIsVisible] = useState(false);

  const [reviews] = useState({
    totalItems: 300,
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
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
        ],
        title: "Amazing product!",
        text: "Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը ",
        rating: 5,
        createdAt: "14.06.2024"
      },
      {
        id: 2,
        author: {
          id: 2,
          name: "John Doe",
          image:
            "https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y"
        },
        images: [
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg",
          "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg"
        ],
        title: "Amazing product!",
        text: "Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա: Lorem Ipsum օգտագործելը ",
        rating: 5,
        createdAt: "1.06.2024"
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

  // ---------------------------------------------------------------

  const cardsRef = useRef<null | HTMLDivElement>(null);
  const buyButtonRef = useRef<null | HTMLDivElement>(null);

  // Buy panel ---------------------------------------------------------------
  const trackScrolling = useCallback(() => {
    if (isBottom(buyButtonRef)) {
      setPanelIsVisible(true);
    } else {
      setPanelIsVisible(false);
    }
  }, []);

  // Reviews endScroll ---------------------------------------------------------------

  //  ---------------------------------------------------------------
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

  // ---------------------------------------------------------------
  const changeReviewPage = () => {
    // TODO IMPLEMENT THIS HANDLER
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
    videos: [
      {
        url: "https://www.youtube.com/watch?v=LXb3EKWsInQ"
      },
      {
        url: "https://www.youtube.com/watch?v=LXb3EKWsInQ"
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
            value: "#BB2D2D",
            label: "Red"
          },
          {
            value: "#4F9C28",
            label: "Green"
          },
          {
            value: "#FF9811",
            label: "Orange"
          }
        ]
      },
      {
        type: "size",
        values: [
          {
            value: "l",
            label: "L",
            numberLabel: "15-17"
          },
          {
            value: "xl",
            label: "XL",
            numberLabel: "15-17"
          },
          {
            value: "xxl",
            label: "XXL",
            numberLabel: "15-17"
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
      },
      {
        id: 6,
        label: "Երաշխիք",
        value: "1 տարի"
      },
      {
        id: 7,
        label: "Տեսակ",
        value: "Անլար ականջակալ"
      },
      {
        id: 8,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 9,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 10,
        label: "Աշխատանքի ժամանակը",
        value: "18 ժամ"
      },
      {
        id: 11,
        label: "Երաշխիք",
        value: "1 տարի"
      },
      {
        id: 12,
        label: "Տեսակ",
        value: "Անլար ականջակալ"
      },
      {
        id: 13,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 14,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 15,
        label: "Աշխատանքի ժամանակը",
        value: "18 ժամ"
      },
      {
        id: 16,
        label: "Երաշխիք",
        value: "1 տարի"
      },
      {
        id: 17,
        label: "Տեսակ",
        value: "Անլար ականջակալ"
      },
      {
        id: 18,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 19,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 20,
        label: "Աշխատանքի ժամանակը",
        value: "18 ժամ"
      },
      {
        id: 21,
        label: "Երաշխիք",
        value: "1 տարի"
      },
      {
        id: 22,
        label: "Տեսակ",
        value: "Անլար ականջակալ"
      },
      {
        id: 23,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 24,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 25,
        label: "Աշխատանքի ժամանակը",
        value: "18 ժամ"
      },
      {
        id: 26,
        label: "Երաշխիք",
        value: "1 տարի"
      },
      {
        id: 27,
        label: "Տեսակ",
        value: "Անլար ականջակալ"
      },
      {
        id: 28,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 29,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 30,
        label: "Աշխատանքի ժամանակը",
        value: "18 ժամ"
      },
      {
        id: 31,
        label: "Երաշխիք",
        value: "1 տարի"
      },
      {
        id: 32,
        label: "Տեսակ",
        value: "Անլար ականջակալ"
      },
      {
        id: 33,
        label: "Bluetooth Version",
        value: "5.0"
      },
      {
        id: 34,
        label: "Առկա է",
        value: "A2DP/AVRCP/Hands free/Headset"
      },
      {
        id: 35,
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

  // CardList ---------------------------------------------------------------
  const [addCartCounter] = useState(30);
  const [cardsScrollIsEnd, setCardsScrollIsEnd] = useState(false);

  const cardsEndScroll = useCallback(() => {
    const element = cardsRef.current;

    if (element === null) return;

    const isEnd = element.scrollHeight - element.scrollTop === element.clientHeight;

    if (isEnd) {
      setCardsScrollIsEnd(true);
    } else {
      setCardsScrollIsEnd(false);
    }

    if (suggestedProducts.length > 100) {
      return;
    }

    if (isEnd) {
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

  useEffect(() => {
    cardsRef.current?.addEventListener("scroll", cardsEndScroll);

    return function () {
      cardsRef.current?.removeEventListener("scroll", cardsEndScroll);
    };
  }, [cardsEndScroll]);

  const getCardListClassName = useMemo(() => {
    if (cardsScrollIsEnd) {
      return styles.similar_container;
    }

    return `${styles.similar_container} ${styles.gradient}`;
  }, [cardsScrollIsEnd]);

  // Select size label ---------------------------------------------------------------
  const [displayLabel, setDisplayLabel] = useState<"numbers" | "letters">("letters");

  // Modals ---------------------------------------------------------------
  const [availabilityModalIsActive, setAvailabilityModalIsActive] = useState(false);
  const [actionsModalIsActive, setActionsModalIsActive] = useState(false);
  const [messageModalOpen, changeMessageModalOpen] = useModal(false);
  const [phoneModalIsActive, setPhoneModalIsActive] = useState(false);

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
                  <ProductDetailSlider
                    images={product?.images as never}
                    videos={product?.videos as never}
                  />
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
                    <CertificateIcon />
                    <CertificateIcon />
                    <CertificateIcon />
                    <CertificateIcon />
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
                                {(product?.price?.price / exchange.rate).toFixed(2)}
                                {exchange.currency}
                              </p>
                            ))}
                          </div>
                        </div>

                        {product?.company?.type === "legal" && (
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
                                {t("wholesale_price", { ns: "catalog/productspage" })}:
                                <span> 90 000 AMD</span>
                              </div>
                              <div className={styles.main_wholesale__bold}>
                                {t("valid_from", { ns: "catalog/productspage" })}: <span>30</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {_.isNumber(1 /* Discount check */) && (
                        <span className={styles.discount_price}>
                          {product?.price?.price} {product?.price?.currency}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div ref={buyButtonRef}>
                  <ProductDetailButton companyType={product?.company?.type} />
                </div>

                {product?.company?.type === "individual" && (
                  <div
                    className={styles.check_product_availability}
                    onClick={() => setAvailabilityModalIsActive(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13 14H11V9H13V14ZM13 18H11V16H13V18ZM1 21H23L12 2L1 21Z"
                        fill="#F7C752"
                      />
                    </svg>
                    <span>
                      {t("check_product_availability_first", { ns: "catalog/productspage" })}{" "}
                      <button className={styles.check_product_availability__button}>
                        {t("check_product_availability_second", { ns: "catalog/productspage" })}
                      </button>
                    </span>
                  </div>
                )}

                <div className={styles.contact_seller_wrapper}>
                  <ContactSeller
                    link="/legal_partner"
                    company={product?.company as never}
                    methods={{ call: !!product?.company?.phones?.length, chat: true }}
                  />
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

                {product?.company?.type === "legal" && (
                  <div className={styles.select_size}>
                    <NewSelect
                      isSearchable={false}
                      defaultValue={{ value: "letters", label: "Միջազգային ստանդարտ" }}
                      options={[
                        { value: "letters", label: "Միջազգային ստանդարտ" }, //letters in value
                        { value: "numbers", label: "Եվրոպական ստանդարտներ" }
                      ]}
                      onChange={(selected: any) => setDisplayLabel(selected.value)}
                    />
                  </div>
                )}

                <ProductDetailForm
                  companyType={product?.company?.type}
                  data={product.parameters as never}
                  displayLabel={displayLabel}
                />

                {/* AVAILABILITY */}
                <ProductDetailColor
                  data={product.parameters as never}
                  companyType={product?.company?.type}
                />
                {/* PRODUCT PARAMETERS */}
                <div className={styles.product_parameters_wrapper}>
                  <ProductCharacteristicBlock
                    title={t("main_parameters", { ns: "catalog/productspage" })}
                    characteristics={product.details}
                  />
                </div>
                {/* SHARE ON SOCIAL MEDIAS */}
                <div className={styles.share_on_social}>
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
              <Reviews
                id={id as string}
                reviews={reviews as never}
                onPageChange={changeReviewPage}
              />
            </div>
          </div>
          {/* SIMILAR ITEMS SLIDER */}
          <div className={getCardListClassName}>
            <div className={styles.layout__similar} ref={cardsRef}>
              {suggestedProducts.map((product, i) => (
                <ProductCardMini key={`${product.id}_${i}`} product={product as never} />
              ))}
            </div>
          </div>
        </div>

        <Modal
          isActive={availabilityModalIsActive}
          setIsActive={setAvailabilityModalIsActive}
          className={styles.availability_modal}
        >
          <div className={styles.availability_modal__title}>Առկայություն</div>
          <div className={styles.availability_modal__text}>
            Եթե ապրանքի առկայությունն արդեն իսկ ճշտված է հաստատեք այն, իսկ եթե ոչ կապ հաստատեք
            վաճառողի հետ և ճշտեք այն
          </div>

          <div className={styles.availability_modal__actions}>
            <Button
              variant="transparent"
              className={styles.availability_modal__accept}
              onClick={() => setAvailabilityModalIsActive(false)}
            >
              ՀԱՍՏԱՏԵԼ
            </Button>

            <Button
              variant="primary"
              className={styles.availability_modal__clarify}
              onClick={() => {
                setAvailabilityModalIsActive(false);
                setActionsModalIsActive(true);
              }}
            >
              ՃՇՏԵԼ
            </Button>
          </div>
        </Modal>

        <Modal
          isActive={actionsModalIsActive}
          setIsActive={setActionsModalIsActive}
          className={styles.actions_modal}
        >
          <div className={styles.actions_modal__actions}>
            <Button
              onClick={() => {
                setActionsModalIsActive(false);
                changeMessageModalOpen();
              }}
              variant="secondary"
              className={styles.actions_modal__button}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                  stroke="#6E00E5"
                  strokeWidth="1.6"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9961 11H16.0051"
                  stroke="#6E00E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9945 11H12.0035"
                  stroke="#6E00E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.99451 11H8.00349"
                  stroke="#6E00E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>ԳՐԵԼ</span>
            </Button>

            <Button
              onClick={() => {
                setActionsModalIsActive(false);
                setPhoneModalIsActive(true);
              }}
              variant="secondary"
              className={styles.actions_modal__button}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                  stroke="#6E00E5"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
              <span>ԶԱՆԳԵԼ</span>
            </Button>
          </div>
        </Modal>

        <MessageModal
          open={messageModalOpen}
          onClose={changeMessageModalOpen}
          recipient={{
            name: product?.company?.name
          }}
          onClick={(e) => e.stopPropagation()}
        />

        <PhoneModal isActive={phoneModalIsActive} setIsActive={setPhoneModalIsActive} />
      </div>
    </ProductDetailLayout>
  );
}

export default ProductDetailPage;

const CertificateIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
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
  );
};
