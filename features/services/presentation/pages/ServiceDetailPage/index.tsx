import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import _, { map } from "lodash";

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
import CardSlider from "@libs/presentation/components/cards/CardsSlider";
import ServiceCard from "@libs/presentation/components/cards/ServiceCard";
import { Service } from "@libs/domain/model/service";
import ServiceMiniCard from "@libs/presentation/components/cards/ServiceMiniCard";

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

  const service = {
    id: "123",
    title: "Sample service",
    category: { label: "Sample Category" },
    linkUrl: "/sample-product",
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
      phones: ["123-456-7890", "987-654-3210"],
      type: "individual"
    }
  };

  const suggestedServices = [
    new Service({
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the",
      images: [
        {
          original:
            "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/09/cleaning-windows.jpeg-e1694410991244.jpg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      addedToFavorite: true,
      addedToCompare: true,
      company: {
        id: 1,
        name: "ABC Company",
        logo: "https://example.com/large-logo.jpg"
      }
    }),
    new Service({
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the",
      images: [
        {
          original:
            "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/09/cleaning-windows.jpeg-e1694410991244.jpg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      addedToFavorite: true,
      addedToCompare: true,
      company: {
        id: 1,
        name: "ABC Company",
        logo: "https://example.com/large-logo.jpg"
      }
    }),
    new Service({
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the",
      images: [
        {
          original:
            "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/09/cleaning-windows.jpeg-e1694410991244.jpg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      addedToFavorite: true,
      addedToCompare: true,
      company: {
        id: 1,
        name: "ABC Company",
        logo: "https://example.com/large-logo.jpg"
      }
    }),
    new Service({
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the",
      images: [
        {
          original:
            "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/09/cleaning-windows.jpeg-e1694410991244.jpg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      addedToFavorite: true,
      addedToCompare: true,
      company: {
        id: 1,
        name: "ABC Company",
        logo: "https://example.com/large-logo.jpg"
      }
    }),
    new Service({
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the",
      images: [
        {
          original:
            "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/09/cleaning-windows.jpeg-e1694410991244.jpg",
          blurHash: "Nr8%YLkDR4j[aej]NSaznzjuk9ayR3jYofayj[f6"
        }
      ],
      addedToFavorite: true,
      addedToCompare: true,
      company: {
        id: 1,
        name: "ABC Company",
        logo: "https://example.com/large-logo.jpg"
      }
    })
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
        <StarsRating value={service?.rating} readOnly />
      </div>
    ),
    []
  );

  return (
    <ProductDetailLayout>
      <OGPMeta
        title={service?.title}
        // description={product?.title}
        // image={`${product?.images?.length && product?.images[0]?.original}`} // !временно! (CORS пока блокирует изображение)
        url={service?.linkUrl}
      />

      <ProductNav product={service as any} />
      <div className={styles.wrapper}>
        <BreadCrumbs
          items={[
            { value: "Գլխավոր ", link: "/products" },
            { value: `${service?.category?.label}`, link: "/products" }
          ]}
        />

        <div className={`${styles.layout}`}>
          <div className={styles.layout__content}>
            <div className={styles.product}>
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
                  <ProductDetailSlider images={service?.images as any} />
                </div>
              </div>

              <div className={styles.product__info}>
                {/* TITLE */}
                <div className={styles.price_section_tablet_wrapper}>
                  <h2 className={styles.product__info_title}>{service.title}</h2>
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
                          {120.2} {service?.price?.currency}
                        </span>
                        <Arrows.Down />
                      </div>
                      {_.isNumber(1 /* Discount check */) && (
                        <span className={styles.discount_price}>
                          {service?.price?.price} {service?.price?.currency}
                        </span>
                      )}

                      <div className={styles.prices__popup}>
                        {map(service.exchanges, (exchange) => (
                          <p>
                            {(service?.price?.price / exchange.rate).toFixed(2)} {exchange.currency}
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
                </div>
                {/* SELLER */}
                <div className={styles.contact_seller_wrapper}>
                  <ContactSeller
                    link="/individual_partner"
                    company={service?.company as any}
                    methods={{ call: !!service?.company?.phones?.length, chat: true }}
                  />
                </div>
                <p className={`${styles.product__info_description}`}>
                  Lorem Ipsum-ը տպագրության և տպագրական արդյունաբերության համար նախատեսված մոդելային
                  տեքստ է: Սկսած 1500-ականներից` Lorem Ipsum-ը հանդիսացել է տպագրական
                  արդյունաբերության ստանդարտ մոդելային տեքստ, ինչը մի անհայտ տպագրիչի կողմից տարբեր
                  տառատեսակների օրինակների գիրք ստեղծելու ջանքերի արդյունք է: Այս տեքստը ոչ միայն
                  կարողացել է գոյատևել հինգ դարաշրջան, այլև ներառվել է էլեկտրոնային տպագրության մեջ`
                  մնալով էապես անփոփոխ:
                </p>
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
              </div>
            </div>

            <div className={styles.content_padding_wrapper}>
              <Reviews id={id as string} reviews={reviews as any} onPageChange={changeReviewPage} />
              <div className={styles.product__parameters_wrapper}>
                <CardSlider title={`ՁԵԶ ԿՀԵՏԱՔՐՔՐԻ ՆԱԵՎ`} cards={suggestedServices as any} />
              </div>
            </div>
          </div>
          {/* SIMILAR ITEMS SLIDER */}
          <div className={styles.layout__similar}>
            {suggestedServices?.map((service, i) => (
              <ServiceMiniCard key={`${service.id}_${i}`} service={service as any} />
            ))}
          </div>
        </div>
      </div>
    </ProductDetailLayout>
  );
}

export default ProductDetailPage;
