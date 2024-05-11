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
  const [showingReviews, setShowingReviews] = useState(true);
  const [reviewsPage, setReviewsPage] = useState(1);
  const { t } = useTranslation(["catalog/productspage"]);

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
        {t("reviews")} <sup>{reviews.totalItems}</sup>
      </h3>

      <div className={listCls}>
        {!!reviews.data.length &&
          reviews.data?.map((review, i) => (
            <ReviewsItem key={`${review?.author?.id}_${i}`} review={review} />
          ))}
        <br />
      </div>

      <button className={`${styles.reviews__btn} blue_text`} onClick={changeShowing}>
        {showingReviews
          ? t("actions.close", { ns: "common" })
          : t("actions.see_all", { ns: "common" })}
      </button>
    </div>
  );
}

export default Reviews;
