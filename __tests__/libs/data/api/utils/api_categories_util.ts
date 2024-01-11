import { ApiCategoriesUtil } from "@libs/data/api/utils/api_categories_util";
import { CategoryService } from "@libs/data/api/service/category_service";

describe("libs - ApiCategoriesUtil testing", () => {
  it("props valid", () => {
    const apiUtil = new ApiCategoriesUtil({
      categoryService: new CategoryService()
    });

    expect(apiUtil).toHaveProperty("getCategories");
  });

  it("invalid props", () => {
    const apiUtil = new ApiCategoriesUtil({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      categoryService: 123
    });

    expect(apiUtil).toHaveProperty("getCategories");
  });

  it("props not contain categoryService property", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const apiUtil = new ApiCategoriesUtil({});

    expect(apiUtil).toHaveProperty("getCategories");
  });
});
