import { HomeDataRepository } from "@features/home/data/repository/home_data_repository";
import { ApiHomeUtil } from "@features/home/data/api/api_util";
import { HomeService } from "@features/home/data/api/service/home_service";
import { CategoryService } from "@libs/data/api/service/category_service";

describe("home - HomeDataRepository testing", () => {
  test("valid props", () => {
    const homeRepository = new HomeDataRepository({
      apiUtil: new ApiHomeUtil({
        homeService: new HomeService(),
        categoryService: new CategoryService()
      })
    });

    expect(homeRepository.getHomeData).toBeTruthy();
    expect(homeRepository.apiUtil.homeService).toBeTruthy();
    expect(homeRepository.apiUtil.categoryService).toBeTruthy();
  });
});
