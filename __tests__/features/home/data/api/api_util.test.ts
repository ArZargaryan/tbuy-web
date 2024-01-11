import { ApiHomeUtil } from "@features/home/data/api/api_util";
import { HomeService } from "@features/home/data/api/service/home_service";
import { CategoryService } from "@libs/data/api/service/category_service";

describe("home - ApiHomeUtil testing", () => {
  test("props valid", () => {
    const apiUtil = new ApiHomeUtil({
      homeService: new HomeService(),
      categoryService: new CategoryService()
    });

    expect(apiUtil).toHaveProperty("getHomeData");
  });

  test("props is {}", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const apiUtil = new ApiHomeUtil({});

    expect(apiUtil.homeService).toBeInstanceOf(HomeService);
    expect(apiUtil.categoryService).toBeInstanceOf(CategoryService);
  });

  test("props is invalid", () => {
    const apiUtil = new ApiHomeUtil({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      homeService: 123,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      categoryService: 456
    });

    expect(apiUtil.homeService).toBeInstanceOf(HomeService);
    expect(apiUtil.categoryService).toBeInstanceOf(CategoryService);
  });
});
