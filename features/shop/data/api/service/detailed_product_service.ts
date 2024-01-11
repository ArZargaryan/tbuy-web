import { fetcher, HttpMethods } from "@core/helpers/fetcher";
import { GetProductBody, getProductProps } from "@features/shop/data/api/request/get_product_body";
import { ApiDetailedProduct } from "@features/shop/data/api/model/api_detailed_product";
import {
  GetProductReviewsBody,
  getProductReviewsProps
} from "@features/shop/data/api/request/get_product_reviews_body";
import { ApiProductReviews } from "@features/shop/data/api/model/api_reviews";

export class DetailedProductService {
  async getProductDetails(props: getProductProps) {
    try {
      const query = new GetProductBody(props);

      const response = await fetcher(HttpMethods.POST, query);

      return new ApiDetailedProduct(response!.data);
    } catch (e: unknown) {
      throw new Error("Что-то пошло не так");
    }
  }

  async getProductReviews(props: getProductReviewsProps) {
    try {
      const query = new GetProductReviewsBody(props);

      const response = await fetcher(HttpMethods.POST, query);

      return new ApiProductReviews(response!.data);
    } catch (e: unknown) {
      throw new Error("Что-то пошло не так");
    }
  }
}
