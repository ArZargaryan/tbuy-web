import React from "react";
import { useAppSelector } from "@core/store";

import { ImgExporter } from "@core/helpers/ImgExporter";

import ProductDetailLayout from "@layouts/product-detail";
import OGPMeta from "@libs/presentation/components/elements/OGPMeta";
import ProductNav from "@libs/presentation/components/product-details/ProductNav";
import ProductDetailSlider from "@libs/presentation/components/product-details/ProductDetailSlider";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import Link from "next/link";
import { map } from "lodash";
import ContactSeller from "@libs/presentation/components/product-details/ContactSeller";

import styles from "./gift-card-detail.module.scss";
import ProductCardMini from "@libs/presentation/components/cards/ProductCardMini";
import CardsSlider from "@libs/presentation/components/cards/CardsSlider";
import PrimaryButton from "@core/button/primary";

function GiftCardDetailPage() {
  const { Icons, Logos, Arrows } = ImgExporter;

  const {
    pageData: { giftCard, suggestedGiftCards }
  } = useAppSelector((state) => state.gift_cards_detail);

  return (
    <ProductDetailLayout>
      <OGPMeta
        title={giftCard?.title}
        // description={product?.title}
        // image={`${product?.images?.length && product?.images[0]?.original}`} // !временно! (CORS пока блокирует изображение)
        url={giftCard?.linkUrl}
      />

      <ProductNav product={giftCard} />
      <div className={`${styles.wrapper} container`}>
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
                  <ProductDetailSlider images={giftCard?.images} withoutSmall />
                </div>
              </div>

              <div className={styles.product__info}>
                <h2 className={styles.info__title}> {giftCard.title} </h2>
                <div className={styles.info__product_price_container}>
                  <div className={styles.product_price__stars}>
                    <StarsRating value={giftCard?.rating} readOnly />

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
                      {giftCard?.price?.price} {giftCard?.price?.currency}
                    </span>
                    <Arrows.Down />

                    <div className={styles.prices__poppup}>
                      {map(giftCard.exchanges, (exchange) => (
                        <p>
                          {(giftCard?.price?.price / exchange.rate).toFixed(2)} {exchange.currency}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <p className={`${styles.text} ${styles.mobile_none}`}>36 ամիս / 4.647AMD</p>

                <ContactSeller
                  company={giftCard?.company}
                  methods={{ call: !!giftCard?.company?.phones?.length, chat: true }}
                />

                <p className={`${styles.text} ${styles.mobile_none}`}>
                  <strong>Կիսվել</strong>
                  <a href={"/"} className={styles.text__social}>
                    <Logos.facebook />
                  </a>
                </p>

                <div className={styles.gift_card_actions}>
                  <PrimaryButton buttonStyle="outline">ԳՆԵԼ</PrimaryButton>
                  <PrimaryButton>ՆՎԻՐԵԼ</PrimaryButton>
                </div>

                <p className={styles.gift_card_use}>1 անգամյա կիրառման առցանց նվեր քարտ</p>
                <p className={styles.gift_card_details}>{giftCard.details}</p>
                <br />
                <p className={`${styles.text} ${styles.text__social_desktop}`}>
                  <strong>Կիսվել</strong>
                  <a href={"/"} className={styles.text__social}>
                    <Logos.facebook />
                  </a>
                  <a href={"/"} className={styles.text__social}>
                    <Logos.twitter />
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.mobile_similar_cards}>
              <CardsSlider
                title={"ՁԵԶ ԿՀԵՏԱՔՐՔՐԻ ՆԱԵՎ"}
                cards={suggestedGiftCards}
                extra_type="short_550"
              />
            </div>
          </div>
          <div className={styles.layout__similar}>
            {suggestedGiftCards?.map((product, i) => (
              <ProductCardMini key={`${product.id}_${i}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </ProductDetailLayout>
  );
}

export default GiftCardDetailPage;
