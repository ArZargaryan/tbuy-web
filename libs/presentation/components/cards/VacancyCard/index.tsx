import React from "react";
import Link from "next/link";

import classNames from "classnames";

import { ImgExporter } from "@core/helpers/ImgExporter";
import { VacancyShort } from "@libs/domain/model/vacancy";

import styles from "./vacancy-item.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  vacancy: VacancyShort;
  adaptive?: boolean;
}

function VacancyCard(props: Props) {
  const { vacancy, adaptive = false } = props;
  const cls = classNames(styles.vacancyCard, props.className, {
    [styles.vacancyCard_adaptive]: adaptive
  });

  const { Icons } = ImgExporter;

  return (
    <div {...props} className={cls}>
      <div className={styles.vacancyCard__logo}>
        <img src={vacancy.company.logo} />
      </div>
      <div className={styles.vacancyCard__info}>
        <h4 className={styles.vacancyCard__title}>{vacancy.title}</h4>
        <p className={styles.vacancyCard__text}>{vacancy.shortDesc}</p>
        <div className={styles.vacancyCard__desc}>
          <div className={styles.vacancyCard__location}>
            <Icons.Pin className={styles.vacancyCard__location_icon} />
            <span className={styles.vacancyCard__location_text}>{vacancy.location}</span>
          </div>
          <div className={styles.vacancyCard__calendar}>
            <Icons.Calendar className={styles.vacancyCard__calendar_icon} />
            <span className={styles.vacancyCard__calendar_text}>{vacancy.date}</span>
          </div>
        </div>
        <Link href={`/vacancies/${vacancy.company.id}`} className={styles.vacancyCard__link}>
          ՄԱՆՐԱՄԱՍՆ
        </Link>
      </div>
    </div>
  );
}

export default VacancyCard;
