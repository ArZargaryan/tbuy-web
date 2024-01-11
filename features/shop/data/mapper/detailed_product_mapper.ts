import { ApiDetailedProduct } from "@features/shop/data/api/model/api_detailed_product";
import { isArray, map } from "lodash";
import { fixAllImageUrls, getImageUrl } from "@core/helpers/getImageUrl";
import { Product } from "@libs/domain/model/product";

export class DetailedProductMapper {
  static fromApi(homeData: ApiDetailedProduct) {
    return {
      ...homeData,
      product: {
        ...homeData.product,
        images: map(homeData.product.images, (image) => fixAllImageUrls(image)),
        company: {
          ...homeData.product.company,
          images: {
            ...homeData.product.company.images,
            smallLogo: getImageUrl(homeData.product.company.images.smallLogo)
          }
        }
      },
      suggestedProducts: isArray(homeData.suggestedProducts)
        ? map(
            homeData.suggestedProducts,
            (product) =>
              new Product({
                ...product,
                images: map(product.images, (image) => fixAllImageUrls(image)),
                company: fixAllImageUrls(product.company)
              })
          )
        : []
    };
  }
}
