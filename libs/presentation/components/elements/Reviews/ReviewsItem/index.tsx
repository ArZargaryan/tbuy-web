import React from "react";
import { Review } from "@libs/domain/model/review";
import { Avatar } from "@mui/material";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import styles from "./reviews-items.module.scss";
import { map } from "lodash";
interface Props {
  review: Review;
}

function ReviewsItem(props: Props) {
  const { review } = props;
  return (
    <div className={styles.reviews_item}>
      <div className={styles.reviews_item__header}>
        <div className={styles.header__account}>
          <Avatar
            alt={`${review.author.name} avatar`}
            src={review.author.image}
            sx={{ width: 50, height: 50 }}
          />
          <p className={styles.account__name}>{review.author.name}</p>
        </div>
        <span className={styles.header__date}>{review.createdAt}</span>
      </div>
      <StarsRating value={review.rating} readOnly />
      <div className={styles.reviews_item__content}>
        <h4 className={styles.content__title}>{review.title}</h4>

        <p className={styles.content__text}>{review.text}</p>

        <div className={styles.content__images}>
          {map(review?.images, (image, i) => (
            <div key={`${image}_${i}`} className={styles.images__item}>
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsItem;
