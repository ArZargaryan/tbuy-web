import React, { useState } from "react";
import styles from "./product-card-list.module.scss";
import ProductCard from "@libs/presentation/components/cards/ProductCard";
import { Service } from "@libs/domain/model/service";
import { Product } from "@libs/domain/model/product";
import ServiceCard from "@libs/presentation/components/cards/ServiceCard";
import { Shimmer } from "react-shimmer";
import classNames from "classnames";
import { VacancyShort } from "@libs/domain/model/vacancy";
import VacancyCard from "@libs/presentation/components/cards/VacancyCard";
import { CompanyCardInfo } from "@libs/domain/model/company";
import CompanyCard from "@libs/presentation/components/cards/CompanyCard";
import { GiftCard } from "@libs/domain/model/giftCard";

type Card = Product | Service | VacancyShort | CompanyCardInfo | GiftCard;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  cards: Card[];
  loading: boolean;
  extraType?: "account_columns_4";
}

function CardList(props: Props) {
  const { cards, loading, extraType } = props;

  const [shimmers] = useState([1, 2, 3, 4, 5]);

  const cls = classNames(styles.product_card_list, props.className);

  const cardClassName = (card: Card) =>
    classNames(styles.product_card_list__item, {
      [styles.product_card_list__item_vacancy]: card instanceof VacancyShort,
      [styles.product_card_list__item_company]: card instanceof CompanyCardInfo,
      [styles[`product_card_list__item_${extraType}`]]: extraType
    });

  return (
    <div className={cls}>
      {!loading &&
        cards?.map((card, i) => (
          <div key={`${card.id}_${i}`} className={cardClassName(card)}>
            {(card instanceof Service || card instanceof GiftCard) && (
              <ServiceCard service={card} />
            )}
            {card instanceof Product && <ProductCard product={card} />}
            {card instanceof VacancyShort && <VacancyCard vacancy={card} adaptive />}
            {card instanceof CompanyCardInfo && <CompanyCard card={card} />}
          </div>
        ))}

      {loading &&
        shimmers.map((shimmer) => (
          <div key={shimmer} className={styles.product_card_list__item}>
            <Shimmer height={400} width={300} />
          </div>
        ))}
    </div>
  );
}

export default CardList;
