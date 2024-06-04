import React, { useEffect, useMemo, useState } from "react";
import { Review } from "@libs/domain/model/review";
import { Avatar } from "@mui/material";
import StarsRating from "@libs/presentation/components/elements/StarsRating";
import styles from "./reviews-items.module.scss";
import { map } from "lodash";
import useScrollToBottom from "@core/hooks/useScrollToBottom";
import { Modal } from "@libs/presentation/components/modals/Modal";
import ImageViewer from "../../ImageViewer";

interface Props {
  review: Review;
}

function ReviewsItem({ ...props }: Props) {
  const { review } = props;

  const [imagesModalIsActive, setImagesModalIsActive] = useState(false);

  // Media ---------------------------------------------------------------------------
  const mediaQuery = window.matchMedia("(max-width: 550px)");
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  // ---------------------------------------------------------------------------

  return (
    <div className={styles.reviews_item}>
      <div className={styles.reviews_item__header}>
        <div className={styles.header__account}>
          {/*<Avatar
            alt={`${review?.author?.name} avatar`}
            src={review?.author?.image}
            sx={{ width: 52, height: 52 }}
            className={styles.avatar}
          />*/}
          <div className={styles.default_avatar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <g clipPath="url(#clip0_3005_41690)">
                <rect width="52" height="52" rx="26" fill="#6E00E5" fill-opacity="0.2" />
                <path
                  d="M26 14C21.3073 14 17.5 17.7433 17.5 22.3571C17.5 26.971 21.3073 30.7143 26 30.7143C30.6927 30.7143 34.5 26.971 34.5 22.3571C34.5 17.7433 30.6927 14 26 14ZM21.75 33.5C14.6888 33.5 9 39.0932 9 46.0357V47.4286C9 50.519 11.5234 53 14.6667 53H37.3333C40.4766 53 43 50.519 43 47.4286V46.0357C43 39.0932 37.3112 33.5 30.25 33.5H21.75Z"
                  fill="#6E00E5"
                />
              </g>
              <defs>
                <clipPath id="clip0_3005_41690">
                  <rect width="52" height="52" rx="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.reviews_item__content}>
            <div className={styles.rating_wrapper}>
              <div className={styles.flex}>
                <p className={styles.account__name}>{review?.author?.name}</p>
                <time className={styles.time}>3 days ago</time>
              </div>
              <StarsRating value={review.rating} readOnly color="var(--yellow)" />
            </div>

            {/*<h4 className={styles.content__title}>{review.title}</h4>*/}

            <p className={styles.content__text}>{review.text}</p>

            <div className={styles.content__images}>
              {review?.images.slice(0, match ? 1 : 2).map((el, idx) => (
                <div key={`${el}_${idx}`} className={styles.images__item}>
                  <ImageViewer>
                    <img src={el} />
                  </ImageViewer>
                </div>
              ))}

              {review?.images.length > (match ? 1 : 2) && (
                <div className={styles.images__item}>
                  <img src={review?.images[match ? 1 : 2]} />
                  {review?.images.length > (match ? 2 : 3) && (
                    <div
                      className={styles.img_counter}
                      onClick={(e) => {
                        e.stopPropagation();
                        setImagesModalIsActive(true);
                      }}
                    >
                      +{review?.images.slice(match ? 1 : 2).length}
                    </div>
                  )}
                </div>
              )}

              {review?.images.length > 3 && (
                <Modal
                  isActive={imagesModalIsActive}
                  setIsActive={setImagesModalIsActive}
                  max_width="1000px"
                  className={styles.gallery_modal}
                  closePosition={{ top: "20px", right: "20px" }}
                >
                  <div className={styles.gallery_modal__items}>
                    {review?.images.slice(match ? 1 : 2).map((el, idx) => (
                      <div className={styles.gallery_modal__item} key={idx}>
                        <ImageViewer>
                          <img src={el} />
                        </ImageViewer>
                      </div>
                    ))}
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
        <span className={styles.header__date}>{review.createdAt}</span>
      </div>
    </div>
  );
}

export default ReviewsItem;
