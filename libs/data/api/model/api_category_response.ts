import { Category } from "@libs/domain/model/category";

interface CategoryResponse {
  categories: Category[];
}

export class ApiCategoryResponse implements CategoryResponse {
  categories: Category[];

  constructor({ categories }: CategoryResponse) {
    this.categories = categories;
  }
}
