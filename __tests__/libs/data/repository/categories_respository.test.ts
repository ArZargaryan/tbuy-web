import { CategoriesRepository } from "@libs/data/repository/categories_repository";
import { CategoryService } from "@libs/data/api/service/category_service";
import { ApiCategoriesUtil } from "@libs/data/api/utils/api_categories_util";

describe("libs - CategoriesRepository testing", () => {
  test("valid props", () => {
    const homeRepository = new CategoriesRepository({
      apiUtil: new ApiCategoriesUtil({
        categoryService: new CategoryService()
      })
    });

    expect(homeRepository.apiUtil.categoryService).toBeTruthy();
    expect(homeRepository.apiUtil.getCategories).toBeTruthy();
  });
});
