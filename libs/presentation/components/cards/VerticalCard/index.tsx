import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";

import { ImgExporter } from "@core/helpers/ImgExporter";

import ProductCard from "@libs/presentation/components/cards/ProductCard";
import { Product } from "@libs/domain/model/product";
import { Service } from "@libs/domain/model/service";
import ServiceCard from "@libs/presentation/components/cards/ServiceCard";

import styles from "./vertical-card.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import { GiftCard } from "@libs/domain/model/giftCard";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  cards: Product[] | Service[] | GiftCard[];
  title?: string;
  isProducts?: boolean;
  titleClassName?: string;
  extraType?: "" | "short" | "short_550";
}

function VerticalCard(props: Props) {
  const { cards, title, isProducts = false, extraType = "" } = props;

  const [prevArrowId, setPrevArrowId] = useState("");
  const [nextArrowId, setNextArrowId] = useState("");

  const cls = classNames(styles.slider_container, props.className, {
    [styles[extraType]]: !!extraType.length
  });

  const titleCls = classNames(styles.slider_title, props?.titleClassName);

  const sliderCls = classNames(styles.slider, {
    [styles.products_slider]: (cards[0] && cards[0] instanceof Product) || isProducts
  });

  const { Arrows } = ImgExporter;

  useEffect(() => {
    setPrevArrowId(uuidv4().replace(/-|[0-9]/g, ""));
    setNextArrowId(uuidv4().replace(/-|[0-9]/g, ""));
  }, []);

  return (
    <div {...props} className={cls}>
      {!!title && <h3 className={titleCls}>{title}</h3>}
      {prevArrowId && nextArrowId && (
        <div style={{overflowY: "auto", height: 854}}>
          {cards?.map((card, i) => {
            return (
              <div key={`${card.id}_${card.title}_${i}`}>
                {card instanceof Service && <ServiceCard service={card} />}
                {card instanceof Product && <ProductCard product={card} />}
                {card instanceof GiftCard && <ServiceCard service={card} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default VerticalCard;
