import { DetailedProductService } from "@features/shop/data/api/service/detailed_product_service";
import { getProductProps } from "@features/shop/data/api/request/get_product_body";
import { DetailedProductMapper } from "@features/shop/data/mapper/detailed_product_mapper";
import { getProductReviewsProps } from "@features/shop/data/api/request/get_product_reviews_body";
import { ProductReviewsMapper } from "@features/shop/data/mapper/product_reviews_mapper";

interface utilProps {
  detailedProductService: DetailedProductService;
}

export class ApiShopUtil implements utilProps {
  detailedProductService: DetailedProductService;
  constructor(props: utilProps) {
    this.detailedProductService =
      props.detailedProductService instanceof DetailedProductService
        ? props.detailedProductService
        : new DetailedProductService();
  }

  async getProductDetails(props: getProductProps) {
    const result = await this.detailedProductService.getProductDetails(props);

    return DetailedProductMapper.fromApi(result);
  }

  async getProductReviews(props: getProductReviewsProps) {
    const result = await this.detailedProductService.getProductReviews(props);

    return ProductReviewsMapper.fromApi(result);
  }
}
