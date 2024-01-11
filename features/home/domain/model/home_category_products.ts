import { Product } from "@libs/domain/model/product";

type HomeCategoryProductsType = {
  id: number;
  title: string; // Category title
  products: Product[];
};

export class HomeCategoryProducts implements HomeCategoryProductsType {
  id: number;
  title: string; // Category title
  products: Product[];

  constructor({ id, title, products }: HomeCategoryProductsType) {
    this.id = id;
    this.title = title;
    this.products = products;
  }
}
