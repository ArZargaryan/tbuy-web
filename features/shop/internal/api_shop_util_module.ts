import { ApiShopUtil } from "@features/shop/data/api/shop_util";
import { DetailedProductService } from "@features/shop/data/api/service/detailed_product_service";

export class ApiShopModule {
  private static apiUtilVar: ApiShopUtil | null;

  static apiUtil(): ApiShopUtil {
    if (!this.apiUtilVar) {
      this.apiUtilVar = new ApiShopUtil({
        detailedProductService: new DetailedProductService()
      });
    }
    return this.apiUtilVar;
  }
}
