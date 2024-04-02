import React from "react";
import Link from "next/link";

import { ImgExporter } from "@core/helpers/ImgExporter";

import styles from "./service-mini-card.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Service } from "@libs/domain/model/service";
import { GiftCard } from "@libs/domain/model/giftCard";

function ServiceMiniCard({ service }: { service: Service | GiftCard }) {
  const { images, title } = service;

  const { Icons } = ImgExporter;

  const url = service instanceof Service ? "/services/123" : "/gift_cards/123";

  return (
    <div className={styles.service_mini_card}>
      {/* IMAGE */}
      <div className={styles.image_container}>
        <Link href={url}>
          <img src={images[0].original} alt={images[0].original} className={styles.image} />
        </Link>
      </div>
      {/* CONTENT */}
      <div className={styles.info_section}>
        <Link href={url}>
          <h3 className={styles.title}>{title}</h3>
        </Link>

        <div className={styles.footer}>
          <div className={styles.company}>
            <Icons.LogoExample />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMiniCard;
