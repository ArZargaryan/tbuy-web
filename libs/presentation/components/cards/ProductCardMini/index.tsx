import React, { useMemo } from "react";
import { Product } from "@libs/domain/model/product";

import Link from "next/link";
import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./product-card-mini.module.scss";
import { Service } from "@libs/domain/model/service";
import { GiftCard } from "@libs/domain/model/giftCard";

function ProductCardMini({ product }: { product: Product | Service | GiftCard }) {
  const { images, title } = product;

  const { Icons } = ImgExporter;

  const getLink = useMemo(() => {
    if (product instanceof Product) {
      return `/products/${product?.id}`;
    } else if (product instanceof Service) {
      return `/services/${product?.id}`;
    } else {
      return `/gift_cards/${product?.id}`;
    }
  }, []);

  return (
    <div className={styles.product}>
      <div className={styles.product_image}>
        {product instanceof Product && product.discount && (
          <span className={styles.product_image__discount}>10%</span>
        )}
        {/* <img src={images[0]?.original} alt="" /> */}
        <img
          src={
            "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg"
          }
        />
        <div className={styles.product_image__discount}>
          {10}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_2027_15244)">
              <path
                d="M12.6654 3.33203L3.33203 12.6654"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.33464 6.0013C5.25511 6.0013 6.0013 5.25511 6.0013 4.33464C6.0013 3.41416 5.25511 2.66797 4.33464 2.66797C3.41416 2.66797 2.66797 3.41416 2.66797 4.33464C2.66797 5.25511 3.41416 6.0013 4.33464 6.0013Z"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6667 13.3333C12.5871 13.3333 13.3333 12.5871 13.3333 11.6667C13.3333 10.7462 12.5871 10 11.6667 10C10.7462 10 10 10.7462 10 11.6667C10 12.5871 10.7462 13.3333 11.6667 13.3333Z"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2027_15244">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className={styles.product_info}>
        <Link href={getLink} className={styles.info__title}>
          {title}
        </Link>

        <div className={styles.info__price}>
          <div className={styles.purchase__price}>
            {/* {product instanceof Product && !!product.price && (
              <h4 className={`${product.discount ? styles.price__grey : styles.price}`}>
                {product.price} AMD
              </h4>
            )}
            {product instanceof Product && !!product.discount && (
              <span className={styles.price}>{product.discount} AMD</span>
            )} */}
            <span className={styles.price}>{599} ֏</span>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.actions__company}>
            <img
              src="https://sun9-20.userapi.com/impg/gq_3cVkT0SUxByw7JxwULQF6pQbYqMm2i5-K4A/0iFEG-NWKAY.jpg?size=176x128&quality=95&sign=a5aba857bbc393244f4cc357bb1edfb9&type=album"
              alt=""
            />
          </div>
          <button className={styles.actions__button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_2027_2020)">
                <path
                  d="M17.2291 11.5885C17.2297 11.5799 17.2297 11.5713 17.2291 11.5627C17.2298 11.5545 17.2298 11.5462 17.2291 11.5381C17.2291 11.5381 17.2291 11.5307 17.2291 11.527L14.2768 1.80888C14.2768 1.80888 14.2768 1.80888 14.2768 1.80273C14.27 1.78026 14.2596 1.75907 14.246 1.73999V1.73384C14.2334 1.71593 14.218 1.70015 14.2005 1.6871C14.182 1.67396 14.1617 1.6636 14.1402 1.65634C14.1362 1.65511 14.1319 1.65511 14.1279 1.65634C14.0976 1.64167 14.0644 1.6341 14.0307 1.6342C14.0172 1.63298 14.0036 1.63298 13.9901 1.6342L11.2346 2.14471C11.0939 1.68259 10.788 1.28837 10.3754 1.03713C9.96282 0.78589 9.47222 0.695168 8.99705 0.78224C8.52188 0.869312 8.09532 1.1281 7.7986 1.50932C7.50189 1.89054 7.35573 2.36757 7.38797 2.84958L4.63738 3.3564L4.61155 3.36378H4.59924C4.57782 3.37171 4.55755 3.38247 4.53897 3.39576L4.53036 3.40314C4.51274 3.41655 4.49702 3.43227 4.48361 3.44989C4.47092 3.46951 4.4606 3.49057 4.45286 3.51262C4.45286 3.51262 4.45286 3.51262 4.45286 3.52L1.50052 13.2381C1.50052 13.2381 1.50052 13.2455 1.50052 13.2492C1.49983 13.2574 1.49983 13.2656 1.50052 13.2738C1.49991 13.2824 1.49991 13.291 1.50052 13.2996C1.50052 13.2996 1.50052 13.2996 1.50052 13.3095C1.50052 14.1577 1.83749 14.9712 2.4373 15.571C3.03711 16.1709 3.85063 16.5078 4.69888 16.5078C5.54714 16.5078 6.36066 16.1709 6.96047 15.571C7.56028 14.9712 7.89725 14.1577 7.89725 13.3095C7.89725 13.3095 7.89725 13.3021 7.89725 13.2996C7.89786 13.291 7.89786 13.2824 7.89725 13.2738C7.89794 13.2656 7.89794 13.2574 7.89725 13.2492C7.89725 13.2492 7.89725 13.2418 7.89725 13.2381L4.99658 3.79433L7.48146 3.33425C7.6074 3.73287 7.85698 4.08104 8.19405 4.32831C8.53111 4.57558 8.93816 4.70911 9.35619 4.70955C9.47502 4.70978 9.59361 4.69907 9.71047 4.67757C10.1824 4.59195 10.6068 4.33696 10.904 3.96049C11.2012 3.58402 11.3507 3.11199 11.3244 2.63307L13.6826 2.19637L10.8533 11.527C10.8533 11.527 10.8533 11.5344 10.8533 11.5381C10.8526 11.5462 10.8526 11.5545 10.8533 11.5627C10.8527 11.5713 10.8527 11.5799 10.8533 11.5885C10.8533 11.5885 10.8533 11.5885 10.8533 11.5983C10.8533 12.4466 11.1902 13.2601 11.7901 13.8599C12.3899 14.4597 13.2034 14.7967 14.0516 14.7967C14.8999 14.7967 15.7134 14.4597 16.3132 13.8599C16.913 13.2601 17.25 12.4466 17.25 11.5983C17.25 11.5983 17.2291 11.591 17.2291 11.5885ZM16.6509 11.3523H11.4105L14.0307 2.72656L16.6509 11.3523ZM4.68166 4.44876L7.30186 13.0745H2.06147L4.68166 4.44876ZM4.68166 16.0268C4.00647 16.0269 3.35566 15.7745 2.85699 15.3193C2.35831 14.8641 2.04781 14.2389 1.98643 13.5666H7.3769C7.31552 14.2389 7.00501 14.8641 6.50634 15.3193C6.00767 15.7745 5.35685 16.0269 4.68166 16.0268ZM9.62067 4.19412C9.36405 4.24088 9.09962 4.21881 8.8543 4.13015C8.73456 4.08656 8.62088 4.02786 8.51601 3.95547C8.31335 3.81575 8.14886 3.62757 8.03748 3.40806C7.97401 3.28098 7.92886 3.14555 7.9034 3.00581C7.8557 2.74519 7.87951 2.47652 7.97229 2.22836C8.05175 2.01753 8.17792 1.82744 8.34133 1.67233C8.54845 1.47387 8.80944 1.34081 9.09171 1.28976C9.1789 1.27322 9.26746 1.26498 9.35619 1.26516C9.49867 1.26515 9.64039 1.28587 9.7769 1.32666C9.92497 1.37177 10.0652 1.4394 10.1927 1.52718C10.469 1.71756 10.6722 1.9964 10.7688 2.31773C10.8654 2.63906 10.8496 2.98371 10.7241 3.29489C10.6405 3.50006 10.5123 3.68409 10.3489 3.83369C10.1447 4.01959 9.89236 4.14447 9.62067 4.19412ZM14.0307 14.3046C13.3555 14.3047 12.7047 14.0523 12.206 13.5971C11.7074 13.1419 11.3969 12.5168 11.3355 11.8444H16.726C16.6646 12.5168 16.3541 13.1419 15.8554 13.5971C15.3567 14.0523 14.7059 14.3047 14.0307 14.3046Z"
                  fill="black"
                  stroke="white"
                  stroke-width="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_2027_2020">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className={styles.actions__button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_2027_15263)">
                <path
                  d="M6.60563 1.5L3.89062 4.2225"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3906 1.5L14.1056 4.2225"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.5 5.88672C1.5 4.49922 2.2425 4.38672 3.165 4.38672H14.835C15.7575 4.38672 16.5 4.49922 16.5 5.88672C16.5 7.49922 15.7575 7.38672 14.835 7.38672H3.165C2.2425 7.38672 1.5 7.49922 1.5 5.88672Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M7.32031 10.5V13.1625"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10.7695 10.5V13.1625"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M2.625 7.5L3.6825 13.98C3.9225 15.435 4.5 16.5 6.645 16.5H11.1675C13.5 16.5 13.845 15.48 14.115 14.07L15.375 7.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2027_15263">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardMini;
