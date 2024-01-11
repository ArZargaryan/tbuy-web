import { fixAllImageUrls } from "@core/helpers/getImageUrl";
import { Category } from "@libs/domain/model/category";
import { ApiCategoryResponse } from "@libs/data/api/model/api_category_response";
import { isArray, map } from "lodash";

export class CategoryMapper {
  static fromApi(subCategories: ApiCategoryResponse) {
    return isArray(subCategories?.categories)
      ? map(
          subCategories.categories,
          (category) =>
            new Category({
              ...fixAllImageUrls(category),
              subcategories: []
            })
        )
      : [];
  }
}
