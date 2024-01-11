import { Product } from "@libs/domain/model/product";
import {
  DetailedProductProps,
  IDetailedProduct
} from "@features/shop/domain/model/DetailedProduct";

export class ApiDetailedProduct implements DetailedProductProps {
  product: IDetailedProduct;
  suggestedProducts: Product[];
  constructor(props: DetailedProductProps) {
    this.product = props?.product || {};
    this.suggestedProducts = props?.suggestedProducts || [];
  }
}
