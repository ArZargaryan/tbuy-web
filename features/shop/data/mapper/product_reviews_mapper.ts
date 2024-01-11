import { ApiProductReviews } from "@features/shop/data/api/model/api_reviews";
import { isArray, map } from "lodash";
import { fixAllImageUrls, getImageUrl } from "@core/helpers/getImageUrl";
import dayjs from "dayjs";

export class ProductReviewsMapper {
  static fromApi(reviews: ApiProductReviews) {
    return {
      ...reviews,
      data: isArray(reviews.data)
        ? map(reviews.data, (review) => ({
            ...review,
            author: {
              ...review.author,
              image: getImageUrl(review.author.image)
            },
            images: map(review.images, (item) => getImageUrl(item)),
            createdAt: dayjs(review.createdAt).format("DD.MM.YYYY")
          }))
        : []
    };
  }
}
