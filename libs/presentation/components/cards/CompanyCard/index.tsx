import React from "react";
import { CompanyCardInfo } from "@libs/domain/model/company";
import StarsRating from "@libs/presentation/components/elements/StarsRating";

import styles from "./company-card.module.scss";
import Link from "next/link";

type Props = {
  card: CompanyCardInfo;
};

function CompanyCard(props: Props) {
  const { card } = props;
  return (
    <div className={styles.company_card}>
      <Link href={`/companies/${card.id}`}>
        <div className={styles.company_card__img}>
          <img src={card.logo} />
        </div>
      </Link>
      <StarsRating defaultValue={card.rating} readOnly className={styles.company_card__stars} />
    </div>
  );
}

export default CompanyCard;
