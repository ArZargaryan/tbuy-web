import { ApiShopUtil } from "@features/shop/data/api/shop_util";
import { DetailedProduct } from "@features/shop/domain/model/DetailedProduct";
import { getProductProps } from "@features/shop/data/api/request/get_product_body";
import { getProductReviewsProps } from "@features/shop/data/api/request/get_product_reviews_body";

export class ShopRepository {
  apiUtil: ApiShopUtil;
  constructor(props: { apiUtil: ApiShopUtil }) {
    this.apiUtil = props.apiUtil;
  }
  getProductDetails(props: getProductProps): Promise<DetailedProduct> {
    return this.apiUtil.getProductDetails(props);
  }

  getProductReviews(props: getProductReviewsProps) {
    return this.apiUtil.getProductReviews(props);
  }
}
