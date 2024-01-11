import { Category } from "@libs/domain/model/category";
import { getCategoriesProps } from "@libs/data/api/request/get_categories_data";
import { ApiCategoriesUtil } from "@libs/data/api/utils/api_categories_util";

export class CategoriesRepository {
  apiUtil: ApiCategoriesUtil;
  constructor(props: { apiUtil: ApiCategoriesUtil }) {
    this.apiUtil = props.apiUtil;
  }
  getCategories(props: getCategoriesProps): Promise<Category[]> {
    return this.apiUtil.getCategories(props);
  }
}
