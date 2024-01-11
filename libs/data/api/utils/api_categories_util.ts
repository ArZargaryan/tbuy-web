import { getCategoriesProps } from "@libs/data/api/request/get_categories_data";
import { CategoryService } from "@libs/data/api/service/category_service";
import { CategoryMapper } from "@libs/data/mapper/category_mapper";

interface utilProps {
  categoryService: CategoryService;
}

export class ApiCategoriesUtil {
  categoryService: CategoryService;
  constructor(props: utilProps) {
    this.categoryService =
      props.categoryService instanceof CategoryService
        ? props.categoryService
        : new CategoryService();
  }

  async getCategories(props: getCategoriesProps) {
    const result = await this.categoryService.getCategories({
      lang: props.lang,
      id: props.id
    });

    return CategoryMapper.fromApi(result);
  }
}
