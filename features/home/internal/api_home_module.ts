import { ApiHomeUtil } from "@features/home/data/api/api_util";
import { HomeService } from "@features/home/data/api/service/home_service";
import { CategoryService } from "@libs/data/api/service/category_service";

export class ApiHomeModule {
  private static apiUtilVar: ApiHomeUtil | null;

  static apiUtil(): ApiHomeUtil {
    if (!this.apiUtilVar) {
      this.apiUtilVar = new ApiHomeUtil({
        homeService: new HomeService(),
        categoryService: new CategoryService()
      });
    }
    return this.apiUtilVar;
  }
}
