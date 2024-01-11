import { CategoryMapper } from "@libs/data/mapper/category_mapper";
import CategoriesMock from "@mocks/categories";
import { ApiCategoryResponse } from "@libs/data/api/model/api_category_response";

describe("libs - CategoryMapper testing", () => {
  test("valid props", () => {
    const mapped = CategoryMapper.fromApi(
      new ApiCategoryResponse({ categories: [...CategoriesMock.validCategories] })
    );

    expect(mapped.length).toBeTruthy();
    expect(mapped[0].icon.slice(0, 17)).toBe("https://tbuy.run/");
  });

  test("props is boolean", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mapped = CategoryMapper.fromApi(new ApiCategoryResponse(false));
    expect(mapped.length).toBe(0);
  });

  test("props is object without categories prop", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mapped = CategoryMapper.fromApi(new ApiCategoryResponse({}));
    expect(mapped.length).toBe(0);
  });

  test("props is object but categories prop is not array", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mapped = CategoryMapper.fromApi(new ApiCategoryResponse({ categories: 123 }));
    expect(mapped.length).toBe(0);
  });
});
