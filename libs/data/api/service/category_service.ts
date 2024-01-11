import { fetcher, HttpMethods } from "@core/helpers/fetcher";
import { getCategoriesProps, GetCategoriesBody } from "@libs/data/api/request/get_categories_data";
import { ApiCategoryResponse } from "@libs/data/api/model/api_category_response";

export class CategoryService {
  async getCategories(props: getCategoriesProps) {
    try {
      const query = new GetCategoriesBody(props);
      const response = await fetcher(HttpMethods.POST, query);
      return new ApiCategoryResponse(response!.data);
    } catch (e: unknown) {
      throw new Error("Что-то пошло не так");
    }
  }
}
