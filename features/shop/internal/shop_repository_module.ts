import { ShopRepository } from "@features/shop/data/repository/shop_repository";
import { ApiShopModule } from "@features/shop/internal/api_shop_util_module";

export class ShopRepositoryModule {
  private static shopRepositoryVar: ShopRepository | null;

  static shopRepository(): ShopRepository {
    if (!this.shopRepositoryVar) {
      this.shopRepositoryVar = new ShopRepository({ apiUtil: ApiShopModule.apiUtil() });
    }

    return this.shopRepositoryVar;
  }
}
