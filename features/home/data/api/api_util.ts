import { Lang } from "@core/store/global";
import { HomeService } from "@features/home/data/api/service/home_service";
import { HomeMapper } from "@features/home/data/mapper/home_mapper";
import { getCategoriesProps } from "@libs/data/api/request/get_categories_data";

import { CategoryService } from "@libs/data/api/service/category_service";
import { CategoryMapper } from "@libs/data/mapper/category_mapper";

interface utilProps {
  homeService: HomeService;
  categoryService: CategoryService;
}

export class ApiHomeUtil {
  homeService: HomeService;
  categoryService: CategoryService;
  constructor(props: utilProps) {
    this.homeService =
      props.homeService instanceof HomeService ? props.homeService : new HomeService();
    this.categoryService =
      props.categoryService instanceof CategoryService
        ? props.categoryService
        : new CategoryService();
  }
  async getHomeData(lang: Lang) {
    const result = await this.homeService.getHomeData(lang);
    return HomeMapper.fromApi(result);
  }
}
