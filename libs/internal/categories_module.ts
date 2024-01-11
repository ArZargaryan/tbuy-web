import { CategoriesRepository } from "@libs/data/repository/categories_repository";
import { ApiCategoriesUtil } from "@libs/data/api/utils/api_categories_util";
import { CategoryService } from "@libs/data/api/service/category_service";

export class CategoriesRepositoryModule {
  private static categoriesRepositoryVar: CategoriesRepository | null;

  static categoriesRepository(): CategoriesRepository {
    if (!this.categoriesRepositoryVar) {
      this.categoriesRepositoryVar = new CategoriesRepository({
        apiUtil: new ApiCategoriesUtil({ categoryService: new CategoryService() })
      });
    }

    return this.categoriesRepositoryVar;
  }
}
