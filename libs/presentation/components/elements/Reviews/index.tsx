import React, { useEffect, useState } from "react";
import styles from "./reviews.module.scss";
import classNames from "classnames";
import { Review } from "@libs/domain/model/review";
import ReviewsItem from "./ReviewsItem";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";

interface Props {
  id: string;
  reviews: {
    totalItems: number;
    data: Review[];
  };
  onPageChange: (page: number) => void;
}

function Reviews({ id, reviews, onPageChange }: Props) {
  const [showingReviews, setShowingReviews] = useState(true);
  const [reviewsPage, setReviewsPage] = useState(1);

  const listCls = classNames(styles.reviews__list, {
    [styles.reviews__list_close]: !showingReviews
  });

  useEffect(() => {
    if (id) {
      onPageChange(reviewsPage);
    }
  }, [id, reviewsPage]);

  const changeShowing = () => {
    setShowingReviews((prev) => !prev);
  };

  const changePage = (page: number) => {
    setReviewsPage(page);
    onPageChange(page);
  };

  if (!reviews?.data?.length) return <div></div>;

  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviews__title}>
        Ակնարկներ <sup>{reviews.totalItems}</sup>
      </h3>
      <p className={styles.reviews__text}>
        Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման
        վրա:
      </p>

      <div className={listCls}>
        {!!reviews.data.length &&
          reviews.data?.map((review, i) => (
            <ReviewsItem key={`${review.author.id}_${i}`} review={review} />
          ))}
        <br />
        {reviews.totalItems > 5 && (
          <TbuyPagination
            page={reviewsPage}
            count={Math.round(reviews.totalItems / 5)}
            onChange={(e, value) => changePage(value)}
          />
        )}
        <br />
      </div>

      <button className={`${styles.reviews__btn} blue_text`} onClick={changeShowing}>
        {showingReviews ? "ՓԱԿԵԼ" : "ՏԵՍՆԵԼ"}
      </button>
    </div>
  );
}

export default Reviews;
