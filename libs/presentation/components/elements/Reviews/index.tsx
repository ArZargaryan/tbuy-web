import React, { useEffect, useState } from "react";
import styles from "./reviews.module.scss";
import classNames from "classnames";
import { Review } from "@libs/domain/model/review";
import ReviewsItem from "./ReviewsItem";
import TbuyPagination from "@libs/presentation/components/elements/TbuyPagination";
import { useTranslation } from "next-i18next";
import { useInView } from "react-hook-inview";

interface Props {
  id: string;
  reviews: {
    totalItems: number;
    data: Review[];
  };
  onPageChange: (page: number) => void;
}

function Reviews({ id, reviews, onPageChange }: Props) {
  const [reviewsPage, setReviewsPage] = useState(1);
  const { t } = useTranslation(["catalog/productspage"]);

  const [commentIsShow, setCommentIsShow] = useState(false);

  useEffect(() => {
    if (id) {
      onPageChange(reviewsPage);
    }
  }, [id, reviewsPage]);

  const changePage = (page: number) => {
    setReviewsPage(page);
    onPageChange(page);
  };

  function getClassName() {
    if (commentIsShow) return styles.reviews;
    return `${styles.reviews} ${styles.hidden}`;
  }

  if (!reviews?.data?.length) return <div></div>;

  return (
    <div className={styles.wrapper}>
      <div className={getClassName()}>
        <h3 className={styles.reviews__title} onClick={() => setCommentIsShow((old) => !old)}>
          {t("reviews")} <sup>{reviews.totalItems}</sup>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M10.6654 13.3346L15.9987 18.668L21.332 13.3346"
              stroke="#1D1D1D"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h3>

        {commentIsShow && (
          <div className={styles.reviews__list}>
            {!!reviews.data.length &&
              reviews.data?.map((review, i) => (
                <ReviewsItem key={`${review?.author?.id}_${i}`} review={review} />
              ))}
          </div>
        )}
      </div>

      {reviews.totalItems > 5 && commentIsShow && (
        <TbuyPagination
          className={styles.pagination}
          page={reviewsPage}
          count={Math.round(reviews.totalItems / 5)}
          onChange={(_, value) => changePage(value)}
        />
      )}
    </div>
  );
}

export default Reviews;
